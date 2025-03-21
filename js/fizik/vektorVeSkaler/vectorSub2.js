let duration2 = 3000; // 3 saniye (ms)
let startTime;
let isTani = false;
let isNegAni = false;
let duranPozAni = false;
let duranNegAni = false;
let prog = 0;
let progRot = 0;
let angleRotate = 0;
let duranRotAni = false;
let rotateAniNeg = false;
let rotateAniPoz = false;
let duranA = false;
let duranB = false;

const minusPlus = document.querySelector("#minusPlus");
let isPlus = false;

new p5(function (p) {
    p.setup = function () {
        let canvas = p.createCanvas(400, 400);
        canvas.parent("vectorSub2");
        startTime = p.millis();
    };

    p.draw = function () {
        p.background(255, 246, 204);

        if (isTani) {
            prog = p.constrain(prog + 0.01, 0, 1);
            let currentX = p.lerp(10, 380, prog);
            let currentY = p.lerp(200, 130, prog);

            p.strokeWeight(4);
            p.createVectorSketch(10, 200, currentX, currentY, 3, false, "red");

            if (prog === 1) {
                duranPozAni = true;
                isTani = false;
                prog = 0;
            } else {
                prog;
                duranPozAni = false;
            }
        }

        if (duranPozAni) {
            p.createVectorSketch(10, 200, 380, 130, 3, false, "red");
            // C için
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);

            p.push();
            p.fill(255, 0, 0);
            p.textSize(15);
            p.translate(200, 150); // Konumlandırma
            p.rotate(-0.2); // -45 derece döndürme (sola yatık)
            p.text("C", 0, 0); // Başlangıç noktasında yazdırma
            p.createVectorSketch(0, -15, 15, -15, 1, true, "red");
            p.pop();
        }

        if (duranNegAni) {
            p.createVectorSketch(10, 200, 80, 270, 3, false, "red");

            // C için
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);

            p.push();
            p.fill(255, 0, 0);
            p.textSize(15);
            p.translate(15, 250); // Konumlandırma
            p.text("C", 0, 0); // Başlangıç noktasında yazdırma
            p.createVectorSketch(0, -15, 15, -15, 1, true, "red");
            p.pop();
        }

        if (isNegAni) {
            prog = p.constrain(prog + 0.01, 0, 1);
            let currentX = p.lerp(10, 80, prog);
            let currentY = p.lerp(200, 270, prog);

            p.createVectorSketch(10, 200, currentX, currentY, 3, false, "red");

            if (prog === 1) {
                duranNegAni = true;
                isNegAni = false;
                prog = 0;
            } else {
                prog;
                duranNegAni = false;
            }
        }

        if (rotateAniNeg) {
            progRot = p.constrain(progRot + 0.02, 0, 1);
            angleRotate = p.lerp(0, Math.PI, progRot);

            letterBx = p.lerp(320, 160, progRot);
            letterBy = p.lerp(195, 260, progRot);

            letterAy = p.lerp(230, 190, progRot);

            // A HARFİ
            p.push();
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);
            p.translate(110, letterAy); // Konumlandırma
            p.text("A", 0, 0);
            p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
            p.pop();

            // B HARFİ
            p.push();
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);
            p.translate(letterBx, letterBy); // Konumlandırma
            p.rotate(-0.4); // -45 derece döndürme (sola yatık)
            p.text("B", 0, 0); // Başlangıç noktasında yazdırma
            p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
            p.pop();

            p.push();
            p.translate(230, 200);
            p.rotate(angleRotate); // Use the interpolated angle
            p.createVectorSketch(0, 0, 150, -70, 5, false, "black"); // Assuming this is a custom function
            p.pop();

            if (progRot === 1) {
                progRot = 0;
                rotateAniNeg = false;
                duranRotAni = true;
                duranA = true;
                duranB = true;
            }
        }

        if (rotateAniPoz) {
            progRot = p.constrain(progRot + 0.02, 0, 1);
            angleRotate = p.lerp(0, Math.PI, progRot);

            letterBx = p.lerp(200, 320, progRot);
            letterBy = p.lerp(240, 195, progRot);

            letterAy = p.lerp(190, 230, progRot);

            // A HARFİ
            p.push();
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);
            p.translate(110, letterAy); // Konumlandırma
            p.text("A", 0, 0);
            p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
            p.pop();

            // B HARFİ
            p.push();
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);
            p.translate(letterBx, letterBy); // Konumlandırma
            p.rotate(-0.4); // -45 derece döndürme (sola yatık)
            p.text("B", 0, 0); // Başlangıç noktasında yazdırma
            p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
            p.pop();

            p.push();
            p.translate(230, 200);
            p.rotate(-angleRotate); // Use the interpolated angle
            p.createVectorSketch(0, 0, -150, 70, 5, false, "black"); // Assuming this is a custom function
            p.pop();

            if (progRot === 1) {
                progRot = 0;
                rotateAniPoz = false;
                duranRotAni = false;

                duranA = false;
                duranB = false;
            }
        }

        if (duranRotAni === true) {
            p.createVectorSketch(230, 200, 80, 270, 5, false, "black");
        } else if (duranRotAni === false) {
            p.createVectorSketch(230, 200, 380, 130, 5, false, "black");
        } else {
        }

        if (duranA === true) {
            p.push();
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);
            p.translate(110, 190); // Konumlandırma
            p.text("A", 0, 0);
            p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
            p.pop();

            // C İÇİN
        } else if (duranA === false) {
            p.push();
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);
            p.translate(110, 230); // Konumlandırma
            p.text("A", 0, 0);
            p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
            p.pop();
        } else {
        }

        if (duranB === true) {
            p.push();
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);
            p.translate(160, 260); // Konumlandırma
            p.rotate(-0.4); // -45 derece döndürme (sola yatık)
            p.text("-B", 0, 0); // Başlangıç noktasında yazdırma
            p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
            p.pop();
        } else if (duranB === false) {
            p.push();
            p.textSize(15);
            p.stroke("none");
            p.strokeWeight(0);
            p.textFont("Georgia");
            p.fill(0);
            p.translate(320, 195); // Konumlandırma
            p.rotate(-0.4); // -45 derece döndürme (sola yatık)
            p.text("B", 0, 0); // Başlangıç noktasında yazdırma
            p.createVectorSketch(0, -15, 15, -15, 1, true, "black");
            p.pop();
        } else {
        }

        p.createVectorSketch(10, 200, 225, 200, 5, false, "black");
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

    document.querySelector("#toplaCB").addEventListener("change", function () {
        document.querySelector("#cikarCB").checked = false;
        duranNegAni = false;
        isNegAni = false;

        if(isPlus){
            minusPlus.classList.remove("plus");
            minusPlus.style.opacity = 0;
            setTimeout(() => {
                document.querySelector("#minusPlus").textContent = "+"
                minusPlus.style.opacity = 1;
            }, 200);


            isPlus = false;
        }

        if (duranRotAni === true) {
            rotateAniPoz = true;
            duranRotAni = null;
            duranA = null;
            duranB = null;
        }

        setTimeout(() => {
            isTani = true;
        }, 1000);
    });

    document.querySelector("#cikarCB").addEventListener("change", function () {
        document.querySelector("#toplaCB").checked = false;
        duranPozAni = false;
        isTani = false;

        if(!isPlus){
            minusPlus.classList.add("plus");

            setTimeout(() => {
                document.querySelector("#minusPlus").textContent = "-"
                minusPlus.style.opacity = 1;
            }, 200);

            isPlus = true;
        }

        // zaten aşağı yöndeyse bir daha hareket ettirme diye
        if (duranRotAni === false) {
            rotateAniNeg = true;
            duranRotAni = null;
            duranA = null;
            duranB = null;
        }
        setTimeout(() => {
            isNegAni = true;
        }, 1000);
    });
});
