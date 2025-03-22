new p5((p) => {
    let path = []; // çizgi koordinat
    let img;
    let prog = 0;
    let progHip = 0;
    let animating = false;
    let startHipAni = false;
    let angleVec = 0;

    p.preload = function () {
        img = p.loadImage("../../../images/davul.svg");
    };

    p.setup = function () {
        let canvas = p.createCanvas(800, 400);
        canvas.parent("drawPathAni");
        bgColorPicker = document.getElementById("bgColorPicker");
        drawColorPicker = document.getElementById("drawColorPicker");
    };

    p.draw = function () {
        p.background(bgColorPicker.value);

        if (
            p.mouseIsPressed &&
            p.mouseX >= 0 &&
            p.mouseX <= p.width &&
            p.mouseY >= 0 &&
            p.mouseY <= p.height
        ) {
            // canvas sınırları içeisinde olması lazım
            let point = { x: p.mouseX, y: p.mouseY };
            path.push(point); // Koordinatları kaydet
        }

        // Çizgiyi çiz
        p.stroke(drawColorPicker.value);
        p.strokeWeight(5);
        for (let i = 1; i < path.length; i++) {
            p.line(path[i - 1].x, path[i - 1].y, path[i].x, path[i].y);
        }

        if (animating && path.length > 1) {
            prog = p.constrain(prog + 0.005 * (p.deltaTime / 16), 0, 1);
            let index = p.floor(prog * (path.length - 1)); // Prog = 0,1; kaç tane nokta varsa onunla çarpıp o kadar yapıyoruz
            let nextIndex = p.min(index + 1, path.length - 1); // Eğer dizisınırları içerisindeyse index+1'i al değilse path.length - 1'e eşitliyoruz
            let t = (prog * (path.length - 1)) % 1; // (4.05) % 1 = 0.05 4 ve 5 arasındaki ilerlemeyei hesaplayabilmek için %1

            let currentX = p.lerp(path[index].x, path[nextIndex].x, t);
            let currentY = p.lerp(path[index].y, path[nextIndex].y, t);

            if (img) {
                p.image(img, currentX - 10, currentY - 10, 20, 20);
            }

            if (prog >= 1) {
                animating = false; // Animasyon tamamlandı
            }
            let totalDistance = p.calculateTotalDistance(path);

            let alinanYol = (totalDistance * prog).toFixed(0);
            document.getElementById(
                "alinanYol-txt"
            ).textContent = `Alınan Yol: ${alinanYol} metre`;
            console.log(
                "Toplam Yol: " + (totalDistance * prog).toFixed(0) + " metre"
            );
        }

        if (path.length > 0) {
            if (startHipAni) {
                progHip = p.constrain(progHip + 0.01, 0, 1);
                console.log(progHip);
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
                document.getElementById(
                    "yerDegistirme-txt"
                ).textContent = `Yer Değiştirme: ${yerDegistirme} metre ${angleVec.toFixed(0)} derece`;
                p.createVectorSketch(
                    path[0].x,
                    path[0].y,
                    currentX,
                    currentY,
                    4,
                    false,
                    "red"
                );
            }
        }
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

        let vecAng = p.atan2((yN - y1), (xN - x1))

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
        if (p.key === "s" && path.length > 1) {
            prog = 0; // Baştan başla
            animating = true;
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
            prog = 0;
            progHip = 0;
            document.getElementById(
                "yerDegistirme-txt"
            ).textContent = `Yer Değiştirme: 0 metre`;
            document.getElementById(
                "alinanYol-txt"
            ).textContent = `Alınan Yol: 0 metre`;
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
});
