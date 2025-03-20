let imgArabaLeft;
let imgArabaRight;
let newHeight;
let newWidth;

new p5((p) => {
    p.preload = function () {
        imgArabaLeft = p.loadImage("../../../images/arabaLeft.svg"); // Resmi yükle
        imgArabaRight = p.loadImage("../../../images/arabaRight.svg");
    };

    p.setup = function () {
        let canvas = p.createCanvas(850, 200);
        canvas.parent("cars");
    };

    p.draw = function () {
        p.clear();
        p.image(imgArabaLeft, 0, 100);
        p.image(imgArabaRight, 550, 100);
        p.createVectorSketch(230, 60, 120, 60, 3, false, "black");
        p.createVectorSketch(600, 60, 750, 60, 3, false, "black");

        // LEFT VEKTOR TEXT
        p.push();
        p.textSize(15);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Georgia");
        p.fill(0);
        p.translate(175, 45); // Konumlandırma
        p.text("B", 0, 0); // Başlangıç noktasında yazdırma
        p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
        p.pop();

        p.push();
        p.textSize(13);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Poppins");
        p.fill(0);
        p.translate(160, 78); // Konumlandırma
        p.text("15 m/s", 0, 0);
        p.pop();

        // RIGHT VEKTOR TEXT
        p.push();
        p.textSize(15);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Georgia");
        p.fill(0);
        p.translate(675, 45); // Konumlandırma
        p.text("A", 0, 0); // Başlangıç noktasında yazdırma
        p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
        p.pop();

        p.push();
        p.textSize(13);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Poppins");
        p.fill(0);
        p.translate(660, 78); // Konumlandırma
        p.text("20 m/s", 0, 0);
        p.pop();
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

// p.push();
//             p.textSize(15);
//             p.stroke("none");
//             p.strokeWeight(0);
//             p.textFont("Georgia");
//             p.fill(0);
//             p.translate(320, 195); // Konumlandırma
//             p.rotate(-0.4); // -45 derece döndürme (sola yatık)
//             p.text("B", 0, 0); // Başlangıç noktasında yazdırma
//             p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
//             p.pop();
