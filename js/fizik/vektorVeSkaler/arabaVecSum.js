let progSum = 0;

new p5((p) => {
    p.setup = function () {
        let canvas = p.createCanvas(400, 200);
        canvas.parent("arabaVecSum");
    };

    p.draw = function () {
        p.clear();
        p.createVectorSketch(100, 60, 300, 60, 3, false, "black");
        p.createVectorSketch(300, 80, 170, 80, 3, false, "black");
        p.createVectorSketch(100 + 75, 160, 170 + 75, 160, 3, false, "red");

        // LEFT VEKTOR TEXT
        p.push();
        p.textSize(15);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Georgia");
        p.fill(0);
        p.translate(235, 105); // Konumlandırma
        p.text("B", 0, 0); // Başlangıç noktasında yazdırma
        p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
        p.pop();

        p.push();
        p.stroke(0);
        p.circle(100, 60, 5);
        p.circle(165, 80, 5);
        p.pop();

        p.push();
        p.textSize(13);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Poppins");
        p.fill(0);
        p.translate(170, 185); // Konumlandırma
        p.text("5 m/s Doğu", 0, 0);
        p.pop();

        // RIGHT VEKTOR TEXT
        p.push();
        p.textSize(15);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Georgia");
        p.fill(0);
        p.translate(200, 50); // Konumlandırma
        p.text("A", 0, 0); // Başlangıç noktasında yazdırma
        p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
        p.pop();

        // SUM ANIMATION
        progSum = p.constrain(progSum + 0.01, 0, 1);
        let current = p.lerp(100, 170, progSum);

        p.createVectorSketch(100, 60, current, 60, 3, false, "red");
        if (progSum === 1) {
            setTimeout(() => {
                progSum = 0;
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
