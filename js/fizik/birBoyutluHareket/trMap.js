
new p5((p) => {
    let map;

    p.preload = function () {
        map = p.loadImage("../../../images/turkiye.svg");
    };

    p.setup = function () {
        let canvas = p.createCanvas(400, 400);
        canvas.parent("trMap");
    };

    p.draw = function () {
        p.clear();
        p.image(map, 100, 100);
    };
});
