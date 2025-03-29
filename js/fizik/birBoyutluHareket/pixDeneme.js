new p5((p) => {
    let carSönA;

    p.preload = function () {
        carSönA = p.loadImage("../../../images/png-govde.png");
    };

    p.setup = function () {
        let canvasA = p.createCanvas(700, 700);
        canvasA.parent = ("pixDenemeA");
    };

    p.draw = function () {
        for (let i = 0; i < 800; i++) {
            let x = p.random(p.width);
            let y = p.random(p.height);
            let c = carSönA.get(p.int(x), p.int(y));
            p.fill(c, 25);
            p.noStroke();
            p.fill(c);
            p.ellipse(x, y, 2, 2);
        }
    };
});
