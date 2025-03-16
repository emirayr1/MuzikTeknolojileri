new p5(function (p) {
    p.setup = function () {
        let canvas = p.createCanvas(400, 400);
        canvas.parent("vectorSum1");
    };

    p.draw = function () {
        p.background(255, 246, 204);
        p.createVectorSketch(10, 200, 225, 200, 5, false, 'black');
        p.createVectorSketch(230, 200, 380, 130, 5, false, 'black');
        p.createVectorSketch(10, 200, 370, 130, 5, false, 'red');

        p.textSize(15);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Georgia");
        p.fill(0);

        p.push();
        p.translate(110, 230); // Konumlandırma
        p.text("A", 0, 0);
        p.createVectorSketch(0, -13, 15, -13, 1, true, 'black');
        p.pop();

        p.push();
        p.stroke(0);
        p.translate(320, 195); // Konumlandırma
        p.rotate(-0.4); // -45 derece döndürme (sola yatık)
        p.text("B", 0, 0); // Başlangıç noktasında yazdırma
        p.createVectorSketch(0, -13, 15, -13, 1, true, 'black');
        p.pop();

        

        p.textSize(11);
        p.text("Başlangıç", 0, 180);
        p.text("Bitiş", 360, 110);


        p.push();
        p.fill(255,0,0);
        p.textSize(15)
        p.translate(200, 150); // Konumlandırma
        p.rotate(-0.2); // -45 derece döndürme (sola yatık)
        p.text("C", 0, 0); // Başlangıç noktasında yazdırma
        p.createVectorSketch(0, -13, 15, -13, 1, true, 'red');
        p.pop();

    };

    p.createVectorSketch = function (startX, startY, endX, endY, strokeWeight, isTiny, colors) {
        p.stroke(colors);
        p.strokeWeight(strokeWeight);
        p.line(startX, startY, endX, endY);

        let angle = p.atan2(endY - startY, endX - startX);
        p.strokeWeight(strokeWeight);
        p.push();
        p.translate(endX, endY);
        p.rotate(angle);
        p.fill(colors);
        isTiny ? p.triangle(-5, -2.5, 0, 0, -5, 2.5) : p.triangle(-10, -5, 0, 0, -10, 5);
        p.pop();
    };
});
