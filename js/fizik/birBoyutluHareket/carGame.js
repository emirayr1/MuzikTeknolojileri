new p5((p) => {
    let car;
    let road;
    let carX = 100;
    let velocity = 0;
    let acceleration = 0;
    let accelSlider;
    let damping = 0.1;
    let moving = false;
    let brakeForce = 0.93;
    let friction = 0.99;
    let bgSpeed = 0;

    p.preload = function () {
        car = p.loadImage("../../../images/arabaRight.svg");
        bg = p.loadImage("../../../images/gameRoad.jpg");
    };

    p.setup = function () {
        let canvas = p.createCanvas(800, 400);
        canvas.parent("carGame");
        // acceleration =  0 to 0.2, 0.01 step, now 0.01
        
    };

    p.draw = function () {
        p.background(220);
        p.image(bg, 100, 0);

        acceleration = 0.1;

        // Tuş kontrolü: "D" sağa, "A" sola hareket ettirir
        if (p.keyIsDown(68)) {
            // "D" tuşu
            velocity += acceleration;
            moving = true;
        }
        if (p.keyIsDown(65)) {
            // "A" tuşu
            velocity -= acceleration;
            moving = true;
        }

        if (p.keyIsDown(83)) {
            // "S" tuşu (Fren)
            velocity *= brakeForce; // Hız hızlı azalır
        } else if (!moving) {
            // Normal sürtünme etkisi (tuş bırakıldığında)
            velocity *= friction;
        }

        // Çok küçük hızları sıfırla (gereksiz kaymayı önlemek için)
        if (p.abs(velocity) < 0.01) velocity = 0;

        carX += velocity;
        p.image(car, carX, p.height / 2);
        
    };

    p.keyReleased = function () {
        moving = false; // Tuş bırakıldığında hareketi durdur
    };

    console.log(velocity);
});
