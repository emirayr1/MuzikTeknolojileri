let angle = 0;
let startAngle = 0;
let targetAngle = 0;
let startAngleX = 200;
let startAngleY = 200;
let lineLength = 100;
let lastToggleTime = 0;
let duration = 1000; // 1 saniye dönüş süresi
let cycleTime = 5000; // 3 saniyede bir dönüş başlıyor
let rotating = false;
let isMinus = false;

let minusSign = document.getElementById("minusSign");
let vecSign = document.getElementById("vecSign");
new p5(function (p) {
    p.setup = function () {
        let canvas = p.createCanvas(400, 400);
        canvas.parent("vectorSub1");
    };

    p.draw = function () {
        p.background(255, 246, 204);

        let elapsedTime = p.millis() - lastToggleTime;

        if (elapsedTime > cycleTime) {
            rotating = true;
            startAngle = angle;
            targetAngle = angle === 0 ? Math.PI : 0; // 180 derece dön, sonra geri dön
            lastToggleTime = p.millis(); // Zamanı sıfırla
        }

        if (rotating) {
            let progress = (p.millis() - lastToggleTime) / duration;
            if (progress >= 1) {
                progress = 1;
                rotating = false; // Dönme tamamlandı
                isMinus = !isMinus;
                // minusSign.style.transition = "margin-left 1s ease-out";
                vecSign.style.transition = "margin-left 1s ease-in-out";
                minusSign.style.transition = 
                isMinus 
                ? 
                "opacity 2s ease-in-out"
                :
                "opacity 0.35s ease-in-out";
                vecSign.style.marginLeft = isMinus ? "20px" : "0px";
                minusSign.style.opacity = isMinus ? "1" : "0";
                
                
                
            }
            angle = p.lerp(startAngle, targetAngle, progress);
        }

        p.drawLine();
    };

    p.drawLine = function () {
        p.push();
        p.translate(startAngleX, startAngleY);
        p.rotate(angle);
        p.strokeWeight(4);
        p.line(0, 0, 100, -100);
        p.translate(68, -95)
        p.rotate(0.25)
        p.fill(0);
        p.triangle(20 * p.cos(-Math.PI / 5), 20 * p.sin(-Math.PI / 6), 40 * p.cos(Math.PI / 6), p.sin(Math.PI / 6), 40 * p.cos(-Math.PI / 6), 40 * p.sin(-Math.PI / 6)); // Üçgenin ucu çizgi ucunda sabit
        p.pop();
    };

});
