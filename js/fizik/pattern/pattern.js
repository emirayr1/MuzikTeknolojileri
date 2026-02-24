new p5((p) => {
    let t = 0; // zaman değişkeni
    let speed = 1.5; // hız
    let number = 0;

    p.preload = function () {
        last = p.loadImage("../../../images/pattern/firs-render.png");
        font = p.loadFont("../../../assets/fonts/calc/digital-7.ttf");
    };

    p.setup = function () {
        let canvas = p.createCanvas(1200, 600);
        canvas.parent("pattern");
        last.resize(1200, 600);
        p.textFont(font);
        p.textSize(45);
        p.textAlign(p.CENTER, p.CENTER);

        sliders = {
            m: p.select("#mSlider"),
            n: p.select("#nSlider"),
            a: p.select("#aSlider"),
            b: p.select("#bSlider"),
            v: p.select("#vSlider"),
            num: p.select("#numSlider"),
        };

        setupParticles();
    };

    p.draw = function () {
        p.clear();
        p.image(last, 0, 0);
        p.noStroke();
        p.fill(194, 178, 128);

        p.fill(140, 0, 0);

        p.text(number.toString(), 160, 275);

        t += speed;

        updateParams();
        moveParticles();
    };

    let particles = [];
    let sliders = {};
    let m, n, a, b, v, N;
    const minWalk = 0.002;
    const settings = {
        nParticles: 20000,
        canvasSize: [300, 300],
    };
    const pi = Math.PI;
    // plate freq resp
    const freqResp = Array.from(
        { length: 200 },
        (_, i) => Math.random() * 0.3 + 0.7 * Math.sin(i * 0.1) * 0.5 + 0.5
    );

    const chladni = (x, y, a, b, m, n) =>
        freqResp[m] * p.sin(pi * m /*n*/ * x) * p.sin(pi * m * y) + // n'ler m ler ile degismis hali
        b * p.sin(pi * m * x) * p.sin(pi * m /*n*/ * y);

    class Particle {
        constructor() {
            // x ve y’yi 0–1 normalize yerine direk canvas koordinatına göre başlatıyoruz
            this.xOff = p.random(420, 785); // x sınırları
            this.yOff = p.random(120, 485); // y sınırları
            this.stochasticAmplitude = 0;

            // normalize değerleri oluştur (zaten move()’da kullanacağız)
            this.x = (this.xOff - 420) / (785 - 420); // 0–1 arası normalize
            this.y = (this.yOff - 120) / (485 - 120);
            this.updateOffsets();
        }
        move() {
            let eq = chladni(this.x, this.y, a, b, m, n);
            this.stochasticAmplitude = v * Math.abs(eq);
            if (this.stochasticAmplitude <= minWalk)
                this.stochasticAmplitude = minWalk;
            this.x += p.random(
                -this.stochasticAmplitude,
                this.stochasticAmplitude
            );
            this.y += p.random(
                -this.stochasticAmplitude,
                this.stochasticAmplitude
            );
            this.updateOffsets();
        }
        updateOffsets() {
            this.x = p.constrain(this.x, 0, 1);
            this.y = p.constrain(this.y, 0, 1);

            // normalize → gerçek canvas koordinatına çevir
            this.xOff = p.map(this.x, 0, 1, 420, 785); // x aralığı
            this.yOff = p.map(this.y, 0, 1, 120, 485); // y aralığı
        }
        show() {
            p.stroke(194, 178, 128);
            p.strokeWeight(2);
            p.point(this.xOff, this.yOff);
        }
    }

    const setupParticles = () => {
        particles = [];
        for (let i = 0; i < settings.nParticles; i++) {
            particles[i] = new Particle();
        }
    };

    const updateParams = () => {
        m = parseFloat(sliders.m.value());
        n = parseFloat(sliders.n.value());
        a = parseFloat(sliders.a.value());
        b = parseFloat(sliders.b.value());
        v = parseFloat(sliders.v.value());
        N = parseInt(sliders.num.value());
    };

    const moveParticles = () => {
        let movingParticles = particles.slice(0, N);
        for (let part of movingParticles) {
            part.move();
            part.show();
        }
    };
});
