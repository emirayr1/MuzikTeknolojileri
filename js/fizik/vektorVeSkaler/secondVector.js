new p5(function (p) {
    p.setup = function () {
        let canvas = p.createCanvas(400, 400);
        canvas.parent("thirdVector");
    };

    p.draw = function () {
        p.background(255, 246, 204);
        p.createVectorSketch(10, 200, 160, 130, 5, false);
        p.createVectorSketch(230, 200, 380, 130, 5, false);
        p.stroke(0);
        p.strokeWeight(3);
        p.line(6, 202, 400, 202);
        p.line(6, 60, 6, 340);

        p.textSize(15);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Georgia");
        p.fill(0);

        p.push();
        p.translate(75, 150); // Konumlandırma
        p.rotate(-0.45); // -45 derece döndürme (sola yatık)
        p.text("A", 0, 0);
        p.createVectorSketch(0, -13, 15, -13, 1, true);
        p.pop();

        p.push();
        p.translate(290, 155); // Konumlandırma
        p.rotate(-0.4); // -45 derece döndürme (sola yatık)
        p.text("B", 0, 0); // Başlangıç noktasında yazdırma
        p.createVectorSketch(0, -13, 15, -13, 1, true);
        p.pop();
    };

    p.createVectorSketch = function (startX, startY, endX, endY, strokeWeight, isTiny) {
        p.stroke(0);
        p.strokeWeight(strokeWeight);
        p.line(startX, startY, endX, endY);

        // x ekseni
        // p.stroke(0);
        // p.strokeWeight(3);
        // p.line(0, 200, 400, 200)
        // y ekseni
        // p.line(200, 0, 200, 400)
        // Ok başı

        let angle = p.atan2(endY - startY, endX - startX);
        p.strokeWeight(strokeWeight);
        p.push();
        p.translate(endX, endY);
        p.rotate(angle);
        p.fill(0);
        isTiny ? p.triangle(-5, -2.5, 0, 0, -5, 2.5) : p.triangle(-10, -5, 0, 0, -10, 5);
        p.pop();

        // texts
        // p.textSize(15);
        // p.stroke('none');
        // p.strokeWeight(0);
        // p.textFont('Georgia');
        // p.fill(0);

        // p.text('Merhaba', 50, 100);
    };
});
