new p5((p) => {
    const velocitySlider = document.getElementById("velocitySlider");

    // Physical Constants
    let v = 340; // Speed of sound in m/s
    // Removed f_s from here, as it will change over time!

    // Simulation Positions
    let obsX = 400;
    let obsY = 300;
    let ambX = 0;
    let ambY = 150;

    let osc;
    let audioPlaying = false;

    p.setup = function () {
        let canvas = p.createCanvas(800, 400);
        canvas.parent("dopplerCanvas");
        p.textSize(16);

        osc = new p5.Oscillator("sawtooth");

        // Create a button to start/stop the audio
        let audioBtn = p.createButton("Start Sound");
        audioBtn.position(20, 110);
        audioBtn.mousePressed(() => {
            if (!audioPlaying) {
                p.userStartAudio();
                osc.start();
                osc.amp(0.2, 0.1);
                audioBtn.html("Stop Sound");
                audioPlaying = true;
            } else {
                osc.stop();
                audioBtn.html("Start Sound");
                audioPlaying = false;
            }
        });
    };

    p.draw = function () {
        p.background(255, 246, 204);

        // --- 1. SIREN FREQUENCY TOGGLE (700 <-> 600) ---
        let f_s;
        // p.millis() % 1000 creates a repeating 1000ms (1 second) loop.
        if (p.millis() % 1000 < 500) {
            f_s = 700; // First half of the second
        } else {
            f_s = 600; // Second half of the second
        }

        // 2. Read slider velocity
        let v_s = parseFloat(velocitySlider.value);

        // 3. Move the ambulance
        ambX += v_s / 10;

        if (ambX > p.width + 50) {
            ambX = -50;
        }

        // 4. Calculate distances and radial velocity
        let dx = obsX - ambX;
        let dy = obsY - ambY;
        let distance = p.sqrt(dx * dx + dy * dy);

        let v_radial = v_s * (dx / distance);

        // 5. Calculate Doppler Frequency using our shifting f_s
        let outputFreq = f_s * (v / (v - v_radial));
        let panValue = p.map(ambX, 0, p.width, -1.0, 1.0, true);
        let ambAmpValue = p.abs(v_radial) * -1.0
        let ampValue = p.map(ambAmpValue, -v_s, 0, -1.0, 0.0, true)
        
        if (audioPlaying) {
            // Using a very fast ramp (0.05) so the high-low jump is snappy!
            osc.freq(outputFreq, 0.05);
            osc.pan(panValue, 0.01);
            osc.amp(1 + ampValue)
        }

        // --- DRAWING THE SCENE ---
        p.stroke(150);
        p.line(0, ambY, p.width, ambY);

        p.stroke(0, 100, 255, 100);
        p.strokeWeight(2);
        p.line(ambX, ambY, obsX, obsY);

        p.noStroke();
        p.fill(200, 0, 0);
        p.rectMode(p.CENTER);
        p.rect(ambX, ambY, 40, 20);
        p.fill(255);
        p.text("🚑", ambX - 10, ambY + 5);

        p.fill(0, 150, 0);
        p.circle(obsX, obsY, 20);
        p.fill(0);
        p.text("🧍", obsX - 8, obsY + 5);

        // --- DRAWING THE DATA ---
        p.fill(0);
        p.textAlign(p.LEFT);
        p.text(`Ambulance Speed (v_s): ${v_s} m/s`, 20, 30);
        p.text(
            `Radial Velocity (v_radial): ${v_radial.toFixed(2)} m/s`,
            20,
            50,
        );

        p.textSize(20);
        p.fill(200, 0, 0);
        // Show both the current source frequency and the final observed frequency
        p.text(`Source Frequency (f_s): ${f_s} Hz`, 20, 90);
        p.text(`Observed Frequency: ${outputFreq.toFixed(2)} Hz`, 20, 120);
        p.textSize(16);
    };
});
