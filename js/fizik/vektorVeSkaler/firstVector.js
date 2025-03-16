new p5(function (p) {
    p.setup = function () {
        let canvas = p.createCanvas(250, 250);
        canvas.parent("secondVector");
    };

    p.draw = function () {
        p.background(255, 246, 204);
        p.createVectorSketch(10, 230, 150, 10, 5, 'red');
        p.createVectorSketch(10, 230, 150, 230, 2, 'black');
        p.strokeWeight(2);
        p.line(150, 230, 150, 10);

        // texts
        p.textSize(15);
        p.stroke(0);
        p.strokeWeight(0.5);
        p.textFont("Georgia");
        p.fill(0);

        p.text("3", 80, 245);
        p.text("4", 165, 130);

        // p.createVectorSketch(150, 200, 150, 10, 2);
    };

    p.createVectorSketch = function (startX, startY, endX, endY, strokeWeight, color) {
        p.stroke(color);
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
        p.triangle(-10, -5, 0, 0, -10, 5);
        p.pop();
    };
});

// İlk vektörü oluştur
// createVectorSketch("firstVector", 200, 200, 350, 130);
// createVectorSketch("secondVector", 100, 150, 300, 150);
