new p5((p) => {
    let path = []; // çizgi koordinat
    let img;
    let bg;
    let prog = 0;
    let penX;
    let penY;
    let pen;
    let magnetX;
    let allow = true;
    let adım;
    let flagLocAni = false;
    let flagPng;
    let flagProg = 0;
    let locPng;
    let magnetY;
    let magnetAni = false;
    let easedProg = 0;
    let progHip = 0;
    let magnetProg = 0;
    let alwaysDisplayPen = false;
    let alwaysDisplayLocFlag = false;
    let animating = false;
    let rotatePen = 0;
    let startHipAni = false;
    let angleVec = 0;
    let imgTablet;
    let imgTablet_png;
    let canvas;
    let text = "Alınan Yol: 0 metre";
    let yerDegistirmeText = "Yer Değiştirme: 0 metre 0 derece";
    p.preload = function () {
        img = p.loadImage("../../../images/davul.svg");
        bg = p.loadImage("../../../images/tablet.svg");
        pen = p.loadImage("../../../images/pen.png");
        imgTablet = p.loadImage("../../../images/tablet.svg");
        imgTablet_png = p.loadImage("../../../images/tablet.svg");
        flagPng = p.loadImage("../../../images/bayrak.png");
        locPng = p.loadImage("../../../images/lokasyon.png");
        adım = p.loadImage("../../../images/adım.png");
    };

    p.setup = function () {
        canvas = p.createCanvas(1300, 720);
        // 756.7, 453.9
        canvas.parent("drawPathAni");
        p.noCursor();
        pen.resize(140, 235.4);
        imgTablet.resize(800, 496.8);
        imgTablet_png.resize(800, 496.8);
    };

    p.draw = function () {
        p.background(255, 246, 204);
        // p.background(255, 255, 255);

        p.translate(0, 225);

        p.image(imgTablet_png, 0, 0);
        p.push();
        p.noStroke(); // Kenarlık olmasın
        p.fill(255); // Beyaz dolgu rengi
        // p.rect((800 - 756.7) / 2, (496.8 - 453.9) / 2, 756.7, 453.9); // Ortaya hizala
        p.pop();

        if (
            p.mouseIsPressed &&
            p.mouseX >= 20 &&
            p.mouseX <= 773 && // 20 to 773 x
            p.mouseY >= 22 && // 22 to 475
            p.mouseY <= 475
        ) {
            // canvas sınırları içeisinde olması lazım
            let point = { x: p.mouseX, y: p.mouseY };
            path.push(point); // Koordinatları kaydet
        }

        // Çizgiyi çiz
        p.stroke(0);
        p.strokeWeight(7);
        for (let i = 1; i < path.length; i++) {
            p.line(path[i - 1].x, path[i - 1].y, path[i].x, path[i].y);
        }

        if (animating && path.length > 1) {
            prog = p.constrain(prog + 0.005 * (p.deltaTime / 16), 0, 1);
            let index = p.floor(prog * (path.length - 1)); // Prog = 0,1; kaç tane nokta varsa onunla çarpıp o kadar yapıyoruz
            let nextIndex = p.min(index + 1, path.length - 1); // Eğer dizisınırları içerisindeyse index+1'i al değilse path.length - 1'e eşitliyoruz
            let t = (prog * (path.length - 1)) % 1; // (4.05) % 1 = 0.05 4 ve 5 arasındaki ilerlemeyei hesaplayabilmek için %1
            let angleProg = p.lerp(0, 2 * Math.PI, prog);
            let currentX = p.lerp(path[index].x, path[nextIndex].x, t);
            let currentY = p.lerp(path[index].y, path[nextIndex].y, t);

            if (img) {
                p.image(img, currentX - 10, currentY - 10, 20, 20);
                p.push();
                let tintValue = p.abs(p.sin(prog * Math.PI * 8)) * 255;
                p.tint(255, tintValue);
                p.translate(canvas.width - canvas.width / 4 - 40, canvas.height - canvas.height / 1.4);
                p.rotate(-angleProg);
                p.image(adım, 0, 0);
                p.pop();
            }

            if (prog >= 1) {
                animating = false; // Animasyon tamamlandı
            }
            let totalDistance = p.calculateTotalDistance(path);
            let alinanYol = (totalDistance * prog).toFixed(0);
            text = `Alınan Yol: ${alinanYol} metre`;
        }

        if (path.length > 0) {
            if (startHipAni) {
                progHip = p.constrain(progHip + 0.01, 0, 1);
                // console.log(progHip);
                let currentX = p.lerp(
                    path[0].x,
                    path[path.length - 1].x,
                    progHip
                );
                let currentY = p.lerp(
                    path[0].y,
                    path[path.length - 1].y,
                    progHip
                );
                let angleVec = p.calculateAngle(path);
                let yerDegistirme = (
                    p.calculateLinearDistance(path) * progHip
                ).toFixed(0);
                yerDegistirmeText = `Yer Değiştirme: ${yerDegistirme} metre ${angleVec.toFixed(0)} derece`;
                p.createVectorSketch(
                    path[0].x,
                    path[0].y,
                    currentX,
                    currentY,
                    4,
                    false,
                    "red" 
                );
                let smallX = p.lerp(0, 20, progHip);
                p.push();
                p.translate(canvas.width - canvas.width / 4 - 98, canvas.height - canvas.height / 1.6 - 4);
                p.rotate(-angleVec * Math.PI / 180);
                p.createVectorSketch(0, 0, smallX, 0, 3, true, "red");
                p.pop();
            }
        }

        penX = p.constrain(p.mouseX, 20, 770);
        penY = p.constrain(p.mouseY, 22, 475);

        if (
            (p.mouseX >= p.width && allow) ||
            (p.mouseY < 0 && allow) ||
            (p.mouseY > p.height && allow)
        ) {
            magnetAni = true;
        } else if (p.mouseX < p.width && p.mouseY < 720 && p.mouseY > 0) {
            p.image(pen, penX, penY - 235);
            magnetAni = false;
            allow = true;
            magnetProg = 0;
            alwaysDisplayPen = false;
        }

        if (magnetAni) {
            magnetProg = p.constrain(magnetProg + 0.03, 0, 1);
            magnetX = p.lerp(700, 350, magnetProg);
            magnetY = p.lerp(penY - 235, -5, magnetProg);
            rotatePen = p.lerp(0, 1.05, magnetProg);

            p.push();
            p.translate(magnetX, magnetY);
            p.rotate(rotatePen);
            p.image(pen, -pen.width / 2, -pen.height / 2);
            p.pop();

            // p.image(pen, magnetX, magnetY);
            if (magnetProg === 1) {
                allow = false;
                magnetAni = false;
                alwaysDisplayPen = true;
                magnetProg = 0;
            }
        }

        if (alwaysDisplayPen) {
            p.push();
            p.translate(magnetX, magnetY);
            p.rotate(1.05);
            p.image(pen, -pen.width / 2, -pen.height / 2);
            p.pop();
        }

        if (alwaysDisplayLocFlag) {
            if (path.length > 1) {
                p.push();
                p.tint(255, 255);
                p.image(
                    flagPng,
                    path[path.length - 1].x,
                    path[path.length - 1].y - flagPng.height
                );
                p.image(locPng, path[0].x - 10, path[0].y - locPng.height);
                p.pop();
            }
        }
        console.log(alwaysDisplayLocFlag);
        if (flagLocAni) {
            let flagStartY = path[path.length - 1].y;
            flagProg = p.constrain(flagProg + 0.02, 0, 1);
            let easedProg = p.easeInOutCubic(flagProg);
            let currentY_flag = p.lerp(
                flagStartY,
                flagStartY - flagPng.height,
                easedProg
            );
            let currentY_loc = p.lerp(
                path[0].y,
                path[0].y - locPng.height,
                easedProg
            );
            let currentOpp = p.lerp(0, 255, easedProg);
            p.push();
            p.tint(255, currentOpp);
            p.image(flagPng, path[path.length - 1].x, currentY_flag);
            p.image(locPng, path[0].x - 10, currentY_loc);
            p.pop();

            if (flagProg === 1) {
                flagLocAni = false;
                flagProg = 0;
                animating = true;
                alwaysDisplayLocFlag = true;
            }
        }

        // TEXT DÜZENLE
        p.push();
        p.textSize(18);
        p.stroke("none");
        p.strokeWeight(0);
        p.textFont("Poppins");
        p.fill(0);
        p.text(text, canvas.width - canvas.width / 4, canvas.height - canvas.height / 1.4);
        p.text(yerDegistirmeText, canvas.width - canvas.width / 4 - 65, canvas.height - canvas.height / 1.6);
        p.pop();
    };

    p.calculateTotalDistance = function (path) {
        // toplam yolu hesaplamak için  sqrt{(x2 - x1)^2 + (y2 - y1)^2} pikselleri metreye çevirmenin yolunu bul
        let totalDistance = 0;

        for (let i = 1; i < path.length; i++) {
            let dx = path[i].x - path[i - 1].x;
            let dy = path[i].y - path[i - 1].y;
            totalDistance += Math.sqrt(dx * dx + dy * dy);
        }

        return totalDistance;
    };

    p.calculateLinearDistance = function (path) {
        if (path.length < 2) return 0;

        let x1 = path[0].x;
        let y1 = path[0].y;
        let x2 = path[path.length - 1].x;
        let y2 = path[path.length - 1].y;

        let linearDistance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return linearDistance;
    };

    p.calculateAngle = function (path) {
        if (path.length < 3) return 0; // En az 3 nokta olmalı

        let x1 = path[0].x,
            y1 = path[0].y;

        let xN = path[path.length - 1].x,
            yN = path[path.length - 1].y;

        let vecAng = p.atan2(yN - y1, xN - x1);

        let degVecAng = 180 * (vecAng / p.PI);

        degVecAng *= -1;

        // BUNA GEREK VAR MI SOR

        // if (degVecAng > 0) {
        //     degVecAng = 360 - degVecAng; // atan -180 +180 aralık verdiği için 360 ekle
        // }
        // if(degVecAng < 0){
        //     degVecAng *= -1; // bu hiç efficent degil ama şu anlık böyle yaptım
        // }

        return degVecAng;
    };

    p.keyPressed = function () {
        if (p.key === "s" && path.length > 1 && !animating) {
            prog = 0; // Baştan başla
            if (!alwaysDisplayLocFlag) {
                // eğer bayrak varsa bir daha bayrak animasyonunu başlatma direkt yol almayı başlat
                flagLocAni = true;
            } else {
                animating = true;
            }
        }

        if (p.key === "y" && path.length > 1) {
            // yer  değiştirme
            startHipAni = true;
        }

        if (p.key === "c") {
            path = []; // Tüm noktaları sil
            p.background(255); // Canvas'ı temizle
            console.log("Ekran temizlendi!");
            animating = false;
            startHipAni = false;
            alwaysDisplayLocFlag = false;
            prog = 0;
            progHip = 0;
            text = "Alınan Yol: 0 metre";
            yerDegistirmeText = "Yer Değiştirme: 0 metre 0 derece";
        }
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

    p.easeInOutCubic = function (t) {
        return t < 0.5 ? 4 * t * t * t : 1 - p.pow(-2 * t + 2, 3) / 2;
    };
});
