new p5((p) => {
    let hs80;
    let elapsedTime;
    let angleValue;
    let animating = false;
    let speed = 1;
    let speed_slider;
    p.preload = function () {
        hs80 = p.loadImage("../../../images/energy/havana80.png");
        room = p.loadImage("../../../images/energy/room.png");
    };

    p.setup = function () {
        let canvas = p.createCanvas(1200, 600);
        canvas.parent("hs80");
        hs80.resize(130, 179.1);
        room.resize(1200, 600);
        let dist_y = 0;
        let dist_x = 0;
        speed_slider = p.createSlider(0.1, 2, 1, 0.1);
        speed_slider.position(
            canvas.position().x + 1000,
            canvas.position().y + 450
        );
        speed_slider.style("width", "200px");
    };

    p.draw = function () {
        p.clear();
        p.image(room, 0, 0);
        if (animating) {
            speed = speed_slider.value();
            elapsedTime += p.deltaTime / 1000;
            let y = 155.1;
            let x = 22;
            let progress_y = p.constrain(elapsedTime * speed * 1.6, 0, 1);
            let progress_ang = p.constrain(elapsedTime * (speed * 2), 0, 1);
            angleValue = p.map(progress_ang, 0, 1, 0, p.HALF_PI);
            dist_y = progress_y * 220;
            dist_x = progress_ang * -40;
            console.log(dist_y);
            p.push();
            p.translate(390 + x + dist_x, 170 + y + dist_y);
            p.rotate(-angleValue);
            p.image(hs80, -x, -y);
            p.pop();

            if (progress_y >= 1) {
                animating = false;
            }
        } else {
            p.image(hs80, 390, 170.1);
            console.log("burda");
        }
    };

    p.mousePressed = () => {
        animating = true;
        elapsedTime = 0;
        angleValue = 0;
    };
});
