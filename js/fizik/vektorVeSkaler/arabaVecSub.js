new p5((p) => {
    let progSub = 0;

    p.setup = function () {
        let canvas = p.createCanvas(400, 200);
        canvas.parent("arabaVecSub");
    };

    p.draw = function () {
        p.clear();
        p.createVectorSketch(100 - 80, 60, 300 - 80, 60, 3, false, "black");
        p.createVectorSketch(300 - 80, 60, 430 - 80, 60, 3, false, "black");
        p.createVectorSketch(20, 160, 350, 160, 3, false, "red");

        // LEFT VEKTOR TEXT
        p.push();
        p.textSize(15);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Georgia");
        p.fill(0);
        p.translate(270, 45); // Konumlandırma
        p.text("-B", 0, 0); // Başlangıç noktasında yazdırma
        p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
        p.pop();

        p.push();
        p.textSize(13);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Poppins");
        p.fill(0);
        p.translate(253, 80); // Konumlandırma
        p.text("-15 m/s", 0, 0);
        p.pop();

        // RIGHT VEKTOR TEXT
        p.push();
        p.textSize(15);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Georgia");
        p.fill(0);
        p.translate(116, 45); // Konumlandırma
        p.text("A", 0, 0); // Başlangıç noktasında yazdırma
        p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
        p.pop();

        p.push();
        p.textSize(13);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Poppins");
        p.fill(0);
        p.translate(96, 80); // Konumlandırma
        p.text("20 m/s", 0, 0);
        p.pop();

        p.push();
        p.stroke(0);
        p.circle(20, 60, 5);
        p.circle(355, 60, 5);
        p.pop();

        p.push();
        p.textSize(13);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Poppins");
        p.fill(0);
        p.translate(150, 185); // Konumlandırma
        p.text("35 m/s Doğu", 0, 0);
        p.pop();

        progSub = p.constrain(progSub + 0.01, 0, 1);
        let current = p.lerp(20, 350, progSub);

        p.createVectorSketch(20, 60, current, 60, 3, false, "red");
        if (progSub === 1) {
            setTimeout(() => {
                progSub = 0;
            }, 1000);
        }
    };

    p.createVectorSketch = function (
        startX,
        startY,
        endX,
        endY,
        strokeWeight,
        isTiny,
        colors
    ) {
        p.stroke(colors);
        p.strokeWeight(strokeWeight);
        p.line(startX, startY, endX, endY);

        let angle = p.atan2(endY - startY, endX - startX);
        p.strokeWeight(strokeWeight);
        p.push();
        p.translate(endX, endY);
        p.rotate(angle);
        p.fill(colors);
        isTiny
            ? p.triangle(-5, -2.5, 0, 0, -5, 2.5)
            : p.triangle(-10, -5, 0, 0, -10, 5);
        p.pop();
    };
});
