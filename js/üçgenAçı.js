(function () {
    let mySketch = function (p) {
        p.setup = function () {
            p.createCanvas(400, 400, p.WEBGL).parent('ücgenAci'); // Canvas'ı 'üçgenAci' div'ine bağla
            p.describe('A white triangle spins around on a gray canvas.');
        };

        p.draw = function () {
            p.background(200);

            // Rotate around the y-axis
            p.rotateY(p.frameCount * 0.01);

            // Draw the triangle
            p.fill(255);
            p.noStroke();
            p.beginShape();
            p.vertex(-50, 50);
            p.vertex(50, 50);
            p.vertex(0, -50);
            p.endShape(p.CLOSE);
        };
    };

    new p5(mySketch);
})();