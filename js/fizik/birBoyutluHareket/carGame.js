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
    let carX = 0;
    let velocity = 0;
    let wheelRotate = 0;
    let acceleration = 0;
    let allowNoss = false;
    let moving = false;
    let brakeForce = 0.93;
    let friction = 0.99;
    let yolSpeed = 0;
    let bulutSpeed = 0;
    let citySpeed = 0;
    let left = false;
    let kmVelocity;
    let buttonX, buttonY, buttonW, buttonH;
    let startGame = false;
    let yValue = 0;
    let xValue = 0;
    let graphValues = [];
    let isStopGraph = false;
    let graphCanvasX = 1020;
    let graphCanvasY = 0;
    let graphCanvasWidth = 480;
    let graphCanvasHeight = 320;
    const hızButon = document.getElementById("hız-btn");
    const ivmeButon = document.getElementById("ivme-btn");
    const dondurButon = document.getElementById("dondur-btn");
    let isVelocityGraph = true;
    let isAccelerationGraph = false;

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
        yolPng = p.loadImage("../../../images/yol.png")
        cityPng = p.loadImage("../../../images/city.png")
        bariyerPng = p.loadImage("../../../images/bariyer.png")
        bulutPng = p.loadImage("../../../images/bulut.png")
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

        // if(startGame){
        //     p.carScene();
        //     p.graphScene();
        // }else{
        //     p.startScene();
        // }

        p.carScene();
        p.graphScene();
        

        // Maintain DISPLAY GRAPH
        for(let i = 1; i < graphValues.length; i++){
            p.push();
            p.stroke(0);
            // p.fill(0);
            p.strokeWeight(4);
            // p.circle(1020 + (i * 4), 320 - graphValues[i], 5);
            p.line(1020 + 50 + ((i - 1)), 160 - (graphValues[i - 1] / 2), 1020 + 50 + (i), 160 - (graphValues[i] / 2));
            p.pop();
        }
    };

    p.carScene = function () {
        yolSpeed = carX * 0.5;
        bulutSpeed = carX * 0.05;
        citySpeed = carX * 0.1;

        // Yol
        p.image(yolPng, -yolSpeed + p.width * (Math.floor(yolSpeed / 1500) - 1) + 5,0);
        p.image(yolPng, -yolSpeed + p.width * Math.floor(yolSpeed / 1500), 0);
        p.image(yolPng,-yolSpeed + p.width * (Math.floor(yolSpeed / 1500) + 1) - 5, 0);


        // Bulut
        p.image(bulutPng, -bulutSpeed + p.width * (Math.floor(bulutSpeed / 1500) - 1) + 5,0);
        p.image(bulutPng, -bulutSpeed + p.width * Math.floor(bulutSpeed / 1500), 0);
        p.image(bulutPng,-bulutSpeed + p.width * (Math.floor(bulutSpeed / 1500) + 1) - 5, 0);

        // Şehir
        p.image(cityPng, -citySpeed + p.width * (Math.floor(citySpeed / 1500) - 1) + 5,121);
        p.image(cityPng, -citySpeed + p.width * Math.floor(citySpeed / 1500), 121);
        p.image(cityPng,-citySpeed + p.width * (Math.floor(citySpeed / 1500) + 1) - 5, 121);

        // Bariyer
        p.image(bariyerPng, -yolSpeed + p.width * (Math.floor(yolSpeed / 1500) - 1) + 5,450);
        p.image(bariyerPng, -yolSpeed + p.width * Math.floor(yolSpeed / 1500), 450);
        p.image(bariyerPng,-yolSpeed + p.width * (Math.floor(yolSpeed / 1500) + 1) - 5, 450);

        // carX = carX > 1500 ? carX - 1500 : carX;

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
        if (p.keyIsDown(p.SHIFT) && moving && velocity < maxVelocity) {
            noss = p.max(noss - 0.005, 0); // 0'ın altına düşmesin
            allowNoss = false; // NOS dolmayı durdur
            velocity += noss;
            p.push();
            p.stroke(255, 0, 0);
            p.strokeWeight(3);
            p.fill(255, 0, 0);
            p.line(500, 560, 500 - noss * 100, 560);
            p.pop();
        } else if (allowNoss) {
            noss = p.min(noss + 0.005, 0.3); // 3'ü geçmesin
        }

        // Çok küçük hızları sıfırla (gereksiz kaymayı önlemek için)
        if (p.abs(velocity) < 0.01) velocity = 0;

        if (velocity > 0){
            velocity = velocity >= maxVelocity ? maxVelocity : velocity;
        }else if (velocity < 0){
            velocity = velocity <= -maxVelocity ? -maxVelocity : velocity;
        }
        carX += velocity;
        left === false ? p.image(carSön, 500, 500) : p.image(carPar, 500, 500);


        // TEKERLEKLERİN DÖNMESİNİ DÜZELT !!!
        p.push();
        p.translate(500, p.height / 2 + 200);

        p.push();
        p.translate(53, 2);
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

        wheelRotate === 200 ? (wheelRotate = 0) : wheelRotate;

        let mapVelocity = p.map(velocity, 0, 30, -3.1, 0.8);
        let clampedVelocity = p.constrain(mapVelocity, -3.1, 0.8);
        if (clampedVelocity === 0.8) {
            clampedVelocity += p.frameCount % 10 === 0 ? 0.06 : -0.06;
        }

        p.push();
        p.translate(60, 500);
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
    };

    p.graphScene = function (){
        p.push();
        p.noStroke();
        p.fill(255, 255, 255);
        p.rect(graphCanvasX, graphCanvasY, graphCanvasWidth, graphCanvasHeight);
        p.pop();

        // y axis
        p.createVectorSketch(graphCanvasX + 50, graphCanvasHeight / 2, graphCanvasX + 50, 30, 3, "black");
        p.createVectorSketch(graphCanvasX + 50, graphCanvasHeight / 2, graphCanvasX + 50, graphCanvasHeight - 30, 3, "black");

        // x axis
        p.createVectorSketch(graphCanvasX + 50, graphCanvasHeight / 2, graphCanvasX + graphCanvasWidth - 40, graphCanvasHeight / 2, 3, "black");

        // GRAFİK
        if (isVelocityGraph){
            yValue = (velocity / 35) * 210;
            p.push();
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);
            p.text("HIZ-ZAMAN", graphCanvasX + graphCanvasWidth / 2 - 40, 20); 
            p.pop();
        }else if(isAccelerationGraph){
            p.push();
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);
            p.text("İVME-ZAMAN", graphCanvasX + graphCanvasWidth / 2 - 50, 20); 
            p.pop();

            if(velocity > 0){
                yValue = 210
            }
            else if(velocity < 0){
                yValue = -210
            }else{
                yValue = 0;
            }
        }

        if (p.frameCount % 1 === 0 && !isStopGraph) {
            if (xValue > 339){
                graphValues.shift();
                graphValues.push(yValue);
                // console.log("girdi")
            }else{
                xValue += 1;
                graphValues.push(yValue);
            }
        }


        // STOP GRAPH LOGIC
        if (velocity === 0){
            isStopGraph = true;
        }else{
            isStopGraph = false;
        }

    }

    

    hızButon.addEventListener("click", function(){
        isAccelerationGraph = false;
        isVelocityGraph = true;
        graphValues = [];
        xValue = 0;
    });
    ivmeButon.addEventListener("click", function(){
        isVelocityGraph = false;
        isAccelerationGraph = true;
        graphValues = [];
        xValue = 0;
    });
    dondurButon.addEventListener("click", function(){
        isStopGraph = !isStopGraph;
    });

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

    p.mousePressed = function () {
        if (
            p.mouseX > buttonX &&
            p.mouseX < buttonX + buttonW &&
            p.mouseY > buttonY &&
            p.mouseY < buttonY + buttonH
        ) {
            startGame = true;
        }
    };



    p.createVectorSketch = function (
        startX,
        startY,
        endX,
        endY,
        strokeWeight,
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
        p.triangle(-10, -5, 0, 0, -10, 5);
        p.pop();
    };
});
