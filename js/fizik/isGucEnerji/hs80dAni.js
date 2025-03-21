let hs80;

new p5((p) => {
    p.preload = function () {
        hs80 = p.loadImage("../../../images/havana80.svg");
    };

    p.setup = function () {
        let canvas = p.createCanvas(400, 400);
        canvas.parent("hs80");
    };

    p.draw = function () {
        p.clear();
        p.image(hs80, 100, 100);
    };
});
