new p5((p) => {
    let carSön;
    let carPar;
    let tekerlekSağ;
    let tekerlekSol;
    let duman1;
    let duman2;
    let duman3;
    let ibre;
    let kadran;
    let maxVelocity = 35;
    let progDum = 0;
    let op;
    let nossProg = 0;
    let clampedVelocity = 0;
    let mapVelocity = 0;
    let road;
    let noss = 0.3;
    let newNoss = 0;
    let carX = 100;
    let velocity = 0;
    let wheelRotate = 0;
    let acceleration = 0;
    let accelSlider;
    let damping = 0.1;
    let allowNoss = false;
    let moving = false;
    let brakeForce = 0.93;
    let friction = 0.99;
    let bgSpeed = 0;
    let left = false;
    let kmVelocity;
    let buttonX, buttonY, buttonW, buttonH;
    let startGame = false;

    p.preload = function () {
        carSön = p.loadImage("../../../images/png-govde.png");
        carPar = p.loadImage("../../../images/png-govde-fren.png");
        tekerlekSol = p.loadImage("../../../images/png-teker.png");
        tekerlekSağ = p.loadImage("../../../images/png-teker.png");
        duman1 = p.loadImage("../../../images/Duman1.png");
        duman2 = p.loadImage("../../../images/Duman2.png");
        duman3 = p.loadImage("../../../images/Duman3.png");
        kadran = p.loadImage("../../../images/kadran.png");
        ibre = p.loadImage("../../../images/ibre.png");
        bg = p.loadImage("../../../images/bgYol.png");
    };

    p.setup = function () {
        let canvas = p.createCanvas(1500, 700);
        canvas.parent("carGame");
        carSön.resize(332.9, 95.4);
        carPar.resize(332.9, 95.4);
        tekerlekSol.resize(51.1, 51.6);
        tekerlekSağ.resize(51.1, 51.6);
        duman1.resize(73, 30.3);
        duman2.resize(95.2, 39.8);
        duman3.resize(116, 52.7);
        // acceleration =  0 to 0.2, 0.01 step, now 0.01

        // Start Button
        buttonW = 150;
        buttonH = 50;
        buttonX = (p.width - buttonW) / 2;
        buttonY = (p.height - buttonH) / 2;
    };

    p.draw = function () {
        p.background(255, 255, 255);

        if(startGame){
            p.carScene();
        }else{
            p.startScene();
        }

        // console.log(noss)
    };

    p.carScene = function () {
        p.image(bg, 0, 0);
        acceleration = 0.03; // ivme değeri

        // D //
        if (p.keyIsDown(68)) {
            // "D" tuşu
            velocity += acceleration;
            left = false;
            moving = true;
            wheelRotate += 0.1;
        }

        // A //
        if (p.keyIsDown(65)) {
            // "A" tuşu
            velocity -= acceleration;
            moving = true;
            left = true;
            wheelRotate -= 0.1;
        }

        // S //
        if (p.keyIsDown(83)) {
            // "S" tuşu (Fren)
            velocity *= brakeForce; // Hız hızlı azalır
            left = true;
            progDum = p.constrain(progDum + 0.01, 0, 1);
        } else if (!moving) {
            // Normal sürtünme etkisi (tuş bırakıldığında)
            velocity *= friction;
            wheelRotate += velocity / 50;
            progDum = p.lerp(progDum, 0, 0.05);
        }
        if (velocity === 0) {
            progDum = Math.max(progDum - 0.05, 0);
        }

        op = p.lerp(0, 250, progDum);
        // DUMAN ANIMATION
        p.push();
        p.tint(255, op);
        p.image(duman1, carX + 10, 560);
        p.image(duman2, carX - 30, 550);
        p.image(duman3, carX - 50, 545);
        p.pop();

        // console.log(progDum)
        if (p.keyIsDown(p.SHIFT) && moving) {
            // noss = p.constrain(noss - 0.01, 0, 1); // Nos azalsın
            noss = p.max(noss - 0.005, 0); // 0'ın altına düşmesin
            allowNoss = false; // NOS dolmayı durdur
            velocity += noss;
            // console.log(noss)
            p.push();
            p.stroke(255, 0, 0);
            p.strokeWeight(3);
            p.fill(255, 0, 0);
            p.line(carX, 560, carX - noss * 100, 560);
            p.pop();
        } else if (allowNoss) {
            noss = p.min(noss + 0.005, 0.3); // 3'ü geçmesin
        }

        // Çok küçük hızları sıfırla (gereksiz kaymayı önlemek için)
        if (p.abs(velocity) < 0.01) velocity = 0;

        // console.log((velocity * 2).toFixed(1) + "km/h");
        // console.log(op);
        velocity >= maxVelocity ? (velocity = maxVelocity) : velocity;
        carX += velocity;
        left === false
            ? p.image(carSön, carX, 500)
            : p.image(carPar, carX, 500);
        // p.image(carSön, carX, 10);

        p.push();
        p.translate(carX, p.height / 2 + 200);

        p.push();
        p.translate(53, 0);
        p.translate(25, 25);
        p.rotate(wheelRotate);
        p.image(tekerlekSol, -25, -25);
        p.pop();

        p.push();
        p.translate(237, 0);
        p.translate(25, 25);
        p.rotate(wheelRotate);
        p.image(tekerlekSağ, -25, -25);
        p.pop();

        p.pop();

        // p.push();
        // p.fill(255,0,0);
        // p.stroke(0);
        // p.strokeWeight(3);
        // p.rect(100, 350 - (noss * 500), 40, noss * 500);
        // p.pop();

        carX > 1500 ? (carX = -330) : carX;
        wheelRotate === 200 ? (wheelRotate = 0) : wheelRotate;

        let mapVelocity = p.map(velocity, 0, 30, -3.1, 0.8);
        let clampedVelocity = p.constrain(mapVelocity, -3.1, 0.8);
        if (clampedVelocity === 0.8) {
            clampedVelocity += p.frameCount % 10 === 0 ? 0.06 : -0.06;
        }

        p.push();
        p.translate(100, 200);
        p.image(kadran, 0, 0);
        p.translate(76, 80);
        p.rotate(clampedVelocity);
        p.image(ibre, -ibre.width / 2, -ibre.height);
        p.pop();

        kmVelocity = (velocity * 2).toFixed(1);

        p.push();
        p.fill(255, 255, 255);
        p.textSize(17);
        p.text(kmVelocity + "km/h", 220, 310);
        p.pop();

        // console.log((velocity * 2).toFixed(1) + "km/h");
    };

    p.startScene = function () {
        p.image(bg, 0, 0);
        p.filter(p.BLUR, 4);

        p.fill(0, 200, 0);
        p.rect(buttonX, buttonY, buttonW, buttonH, 10); // Köşeleri yuvarlatılmış dikdörtgen

        // Butonun içine yazıyı ekle
        p.fill(255);
        p.textSize(20);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("BAŞLAT", buttonX + buttonW / 2, buttonY + buttonH / 2);
    };
    p.keyReleased = function () {
        moving = false; // Tuş bırakıldığında hareketi durdur
        left = false;
        // progDum = 0;
        if (p.keyCode === p.SHIFT) {
            allowNoss = true;
        }
    };

    p.mousePressed = function(){
        if (
            p.mouseX > buttonX && p.mouseX < buttonX + buttonW &&
            p.mouseY > buttonY && p.mouseY < buttonY + buttonH
          ) {
            startGame = true;
          }
    }
});
