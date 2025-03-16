let startX, startY; // Başlangıç noktası
let endX, endY; // Bitiş noktası
let isDrawing = false; // Vektör çizim durumu
let vectors = []; // Çizilen vektörleri ve okları saklamak için bir dizi
let animationProgress = 0; // Animasyon ilerlemesi
let animationInProgress = false; // Animasyon durumu
let canClick = true;
let redLine = null; // Kırmızı çizgi (ilk vektör ile son vektör arasında)

new p5((p) => {
    p.setup = function () {
        let canvas = p.createCanvas(1000, 600);
        canvas.parent("vectorSumAni");
        p.background(255, 246, 204);

        canvas.elt.oncontextmenu = function (e) {
            e.preventDefault(); // Sağ tıklama menüsünü engeller
        };
    };

    p.draw = function () {
        p.background(255, 246, 204);

        // Tüm vektörleri çiz
        p.stroke(0);
        p.strokeWeight(3);
        for (let i = 0; i < vectors.length; i++) {
            let v = vectors[i];
            // Renk kontrolü yapalım, kırmızı çizgiler kırmızı olacak
            if (v.color === 'red') {
                p.stroke(255, 0, 0); // Kırmızı çizgi
                p.strokeWeight(5);
                p.fill(255,0,0);
            } else {
                p.stroke(0); // Siyah çizgi
                p.strokeWeight(3);
                p.fill(0);
            }
            p.line(v.startX, v.startY, v.endX, v.endY);

            // Ok (üçgen) çizecek
            let angle = p.atan2(v.endY - v.startY, v.endX - v.startX);
            p.strokeWeight(3);
            p.push();
            p.translate(v.endX, v.endY);
            p.rotate(angle);
            p.triangle(-10, -5, 0, 0, -10, 5); // Üçgenin boyutlarını ayarlayabilirsiniz
            p.pop();
        }

        // Kırmızı çizgi animasyonu
        if (animationInProgress && redLine !== null) {
            let startAnimX = redLine.startX;
            let startAnimY = redLine.startY;
            let endAnimX = redLine.endX;
            let endAnimY = redLine.endY;

            let currentX = p.lerp(startAnimX, endAnimX, animationProgress);
            let currentY = p.lerp(startAnimY, endAnimY, animationProgress);

            p.stroke(255, 0, 0); // Kırmızı çizgi
            p.strokeWeight(5);
            p.line(startAnimX, startAnimY, currentX, currentY);

            animationProgress += 0.014; // Animasyon ilerleme hızını ayarla
            if (animationProgress >= 1) {
                animationProgress = 0; // Animasyon tamamlandığında sıfırla
                animationInProgress = false; // Animasyonu durdur
                canClick = false;

                // Kırmızı çizgiyi kaydet ve renk bilgisini 'red' olarak ekle
                redLine.color = 'red'; // Kırmızı renk ekleyin
                vectors.push(redLine); // Kırmızı çizgiyi kaydet
                redLine = null; // Kırmızı çizgiyi sıfırla
            }
        }

        // Şu anda çizilen vektör var mı?
        if (isDrawing) {
            p.line(startX, startY, p.mouseX, p.mouseY);
        }
    };

    p.mousePressed = function () {

        if(!canClick){
            return false;
        }

        if (p.mouseButton === p.RIGHT) {
            // Sağ tıklama, animasyon başlatma
            if (vectors.length > 0) {
                animationInProgress = true;
                animationProgress = 0; // Animasyonu sıfırla
                // Kırmızı çizgi koordinatlarını al
                let startAnimX = vectors[0].startX;
                let startAnimY = vectors[0].startY;
                let endAnimX = vectors[vectors.length - 1].endX;
                let endAnimY = vectors[vectors.length - 1].endY;
                // Kırmızı çizgiyi saklamak için
                redLine = {
                    startX: startAnimX,
                    startY: startAnimY,
                    endX: endAnimX,
                    endY: endAnimY,
                };
            }
            isDrawing = false; // Yeni vektör çizmeyi durdur
            // setTimeout(() => {
            //     vectors = []; // 15 saniye sonra sıfırla 
            // }, 15000);
        } else {
            // Vektör çizme işlemi
            if (!isDrawing) {
                // Yeni vektör başlangıcı
                startX = p.mouseX;
                startY = p.mouseY;
                isDrawing = true;
            } else {
                // Yeni vektör bitişi
                endX = p.mouseX;
                endY = p.mouseY;

                // Çizilen vektörü kaydet
                vectors.push({
                    startX: startX,
                    startY: startY,
                    endX: endX,
                    endY: endY,
                    color: 'black', // Siyah renk ekleyelim
                });

                // Yeni vektör başlangıcı olarak bitiş noktasını belirle
                startX = endX;
                startY = endY;
            }
        }
    };


    p.keyPressed = function () {
        if (p.key === "r" || p.key === "R") {
            vectors = []; // Vektörleri temizle
            p.background(255, 246, 204); // Ekranı temizle
            isDrawing = false;
            animationInProgress = false; // Animasyonu durdur
            canClick = true;
        }
    };
});
