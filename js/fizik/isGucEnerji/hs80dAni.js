
new p5((p) => {
    let hs80;
    p.preload = function () {
        hs80 = p.loadImage("../../../images/havana80.png");
    };

    p.setup = function () {
        let canvas = p.createCanvas(600, 600);
        canvas.parent("hs80");
        hs80.resize(130, 179.1);
    };

    p.draw = function () {
        p.clear();
        p.image(hs80, 100, 100);
    };
});
