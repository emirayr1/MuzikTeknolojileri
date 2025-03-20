//// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //TARGET INDEX NEDEN FEEDBACK OLUYOR BUNU ÇÖZ (ÇÖZDÜM)



let startX, startY; // Başlangıç noktası
let endX, endY; // Bitiş noktası
let isDrawing = false; // Vektör çizim durumu
let vectors = []; // Çizilen vektörleri ve okları saklamak için bir dizi
let animationProgress = 0; // Animasyon ilerlemesi
let animationInProgress = false; // Animasyon durumu
let canClick = true;
let redLine = null; // Kırmızı çizgi (ilk vektör ile son vektör arasında)
let imgTebesir;
let silgiPosX;
let silgiPosY;
let targetIndex = 0;
let eraseSpeed = 20;
let distArr = [];
let clearScreen = false;
let whiteChalk = [];
let white;
let red;
let alphaValue = 255; // Başlangıçta opak
let startTimeTr = 0;  // Geçişin başladığı zaman
let isTransitioning = false; // Geçişin başlayıp başlamadığını kontrol etmek için
let eraseStart = false;


new p5((p) => {
    p.preload = function () {
        imgTebesir = p.loadImage("../../../images/tebesir.svg"); // Resmi yükle
        imgSilgi = p.loadImage("../../../images/silgi.svg");
    };

    p.setup = function () {
        let canvas = p.createCanvas(715, 420);
        canvas.parent("vectorSumAni");
        p.noCursor();
        imgTebesir.resize(70, 53);
        imgSilgi.resize(70,70);
        silgiPosX = 665;
        silgiPosY = 100;
        canvas.elt.oncontextmenu = function (e) {
            e.preventDefault(); // Sağ tıklama menüsünü engelleme
        };
        white = p.color(255, 255, 255);
        red = p.color(255, 0, 0);
    };

    p.draw = function () {
        p.clear();
        p.image(imgTebesir, p.mouseX, p.mouseY - 50);

        p.image(imgSilgi, silgiPosX - 50, silgiPosY - 50);

        // Tüm vektörleri çiz
        p.stroke(255, 255, 255);
        p.strokeWeight(3);
        if (clearScreen && !isTransitioning) {
            startTimeTr = p.millis(); 
            isTransitioning = true;
        }
        if (isTransitioning) {
            let elapsedTime = p.millis() - startTimeTr;
            alphaValue = p.map(elapsedTime, 0, 3000, 255, 0); // 3 saniye
    
            // alphaValue'yi 0 ile 255 arasında tut
            alphaValue = p.constrain(alphaValue, 0, 255);
    
            
            if (elapsedTime > 3000) {
                isTransitioning = false; 
                clearScreen = false;
            }
        }
        
        
        if(eraseStart){
            whiteChalk.push({ x: silgiPosX, y: silgiPosY }); // yalnızca vektörlerin üzerindeyken pushLa 
        }
        
        if(vectors.length >= 2){
            if(targetIndex > vectors.length - 1){
                // white.setAlpha(alphaValue);
                // red.setAlpha(alphaValue);
            }
            else{
            //    white.setAlpha(255);
            //    red.setAlpha(255);
           }
        }
        for (let i = 0; i < whiteChalk.length; i++) {
            p.push();
            
            p.stroke(white);
            p.fill(white);
            p.circle(whiteChalk[i].x, whiteChalk[i].y, 40);
            p.pop();
        }
        if (clearScreen) {
            if(vectors.length > 0){
                if(vectors[0].startX + 15 > silgiPosX){
                    eraseStart = true;
                }
            }
            if (vectors.length >= 2 && targetIndex === 0) {
                let firstVector = vectors[0];
                let d = p.dist(
                    silgiPosX,
                    silgiPosY,
                    firstVector.startX,
                    firstVector.startY
                );

                if (d > eraseSpeed) {
                    let angle = p.atan2(
                        firstVector.startY - silgiPosY,
                        firstVector.startX - silgiPosX
                    );
                    silgiPosX += p.cos(angle) * eraseSpeed;
                    silgiPosY += p.sin(angle) * eraseSpeed;
                } else {
                    // Silgi başlangıç noktasına ulaştığında, targetIndex'i 1 yap
                    targetIndex = 1;
                    reachedStart = false; // targetIndex 1 olunca, hedefin start noktasına gitmek için bayrağı sıfırla
                }
            }
            // Eğer targetIndex 1 ise, hedefin start noktasına ve sonra end noktasına git
            if (vectors.length >= 2 && targetIndex > 0) {
                let target = vectors[targetIndex];
                if (!reachedStart) {
                    let dToStart = p.dist(
                        silgiPosX,
                        silgiPosY,
                        target.startX, // target.startX
                        target.startY   // target.startY
                    );

                    // Hedefin start noktasına ulaşmadıysak, ona doğru hareket et
                    if (dToStart > eraseSpeed) {
                        let angleToStart = p.atan2(
                            target.startY - silgiPosY,
                            target.startX - silgiPosX
                        );
                        silgiPosX += p.cos(angleToStart) * eraseSpeed;
                        silgiPosY += p.sin(angleToStart) * eraseSpeed;
                    } else {
                        // Start noktasına ulaştığında, hedefin end noktasına gitmeye başla
                        reachedStart = true;
                    }
                }

                // Start noktasına ulaştıysa, end noktasına gitmeye devam et
                if (reachedStart) {
                    let dToEnd = p.dist(
                        silgiPosX,
                        silgiPosY,
                        target.endX,
                        target.endY
                    );
                    // Hedefin end noktasına yaklaşıyorsa
                    if (dToEnd > eraseSpeed) {
                        let angle = p.atan2(
                            target.endY - silgiPosY,
                            target.endX - silgiPosX
                        );
                        silgiPosX += p.cos(angle) * eraseSpeed;
                        silgiPosY += p.sin(angle) * eraseSpeed;
                        
                    } else {
                        // Hedefin end noktasına çok yaklaştıysa, bir sonraki hedefe geç
                        // targetIndex > vectors.length  ? targetIndex : targetIndex++;
                        targetIndex++;  //TARGET INDEX NEDEN OVERLOAD OLUYOR BUNU ÇÖZ
                        reachedStart = false; 
                        // Eğer tüm hedefler bitti, başa dön
                        if (targetIndex >= vectors.length) {
                            eraseStart = false;
                            setTimeout(() => {
                                vectors = [];
                                whiteChalk = [];
                            }, 2000);
                            let lastVector = vectors[vectors.length - 1]; // Son vektörü al

                            vectors.push({
                                startX: lastVector.endX, // Son vektörün başlangıç noktası
                                startY: lastVector.endY,
                                endX: 665, 
                                endY: 100,
                                color: "black", 
                            });

                            if (silgiPosX > 610 && silgiPosY < 70) {
                                clearScreen = false;
                            }
                            setTimeout(() => {
                                targetIndex = 0; // HARDCODE TARGETINDEXI 0LIYORUM diğer rye bastıgımda tekrar 0dan baslasın diye baska bir yolunu bul
                            }, 3000);
                        }
                    }
                }
            }
        }

        // if(silgiPosX === 900){
        //     setTimeout(() => {
        //         white.setAlpha(255);
        //         red.setAlpha(255);
        //     }, 2000);
        // }
        for (let i = 0; i < vectors.length; i++) {
            let v = vectors[i];

            // Renk kontrolü yapalım, kırmızı çizgiler kırmızı olacak
            if (v.color === "red") {
                p.stroke(red);
                p.strokeWeight(5);
                p.fill(red);
            } else if (v.color === "black") {
                p.noFill();
                p.noStroke();
            } else {
                p.stroke(white);
                p.strokeWeight(3);
                p.stroke(white);
                p.fill(white);
            }
            p.line(v.startX, v.startY, v.endX, v.endY);

            p.push();
            if (v.color === "black") {
                // BLACK OLMASI SON VEKTÖR OLMASI ANLAMINA GELİYOR ASLINDA ÇİZİLİYOR PUSHLUYORUM AMA GÖRÜNMEZ 950, 100 E GERİ DÖNEBİLMESİ İÇİN
                p.noFill();
                p.noStroke();
            } else {
                p.stroke(white);
                p.fill(white);
            }
            p.circle(v.startX, v.startY, 5);
            p.pop();

            // Ok (üçgen) çizecek
            let angle = p.atan2(v.endY - v.startY, v.endX - v.startX);
            p.strokeWeight(3);
            p.push();
            // p.stroke(0)
            p.translate(v.endX, v.endY);
            p.rotate(angle);
            p.triangle(-12.5, -7.5, 0, 0, -12.5, 7.5); // Üçgenin boyutlarını ayarlayabilirsiniz
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
                redLine.color = "red"; // Kırmızı renk ekleyin
                vectors.push(redLine); // Kırmızı çizgiyi kaydet
                redLine = null; // Kırmızı çizgiyi sıfırla
            }
        }

        // Şu anda çizilen vektör var mı?
        if (isDrawing) {
            // BUNLAR KALICI DEĞİL YALNIZCA MOUSE HAREKETİNDE GÖRÜNEN ŞEYLERİ ÇİZMEK İÇİN
            // KALICI OLANLAR BUNLARIN AYNISINI DRAW FONKSİYONUNDA VECTOR BİLGİSİNDEN ALARAK YAPIYORUM

            p.line(startX, startY, p.mouseX, p.mouseY);

            let angle = p.atan2(p.mouseY - startY, p.mouseX - startX);
            p.strokeWeight(3);
            p.push();
            p.translate(p.mouseX, p.mouseY);
            p.rotate(angle);
            p.triangle(-12.5, -7.5, 0, 0, -12.5, 7.5); // Üçgenin boyutlarını ayarlayabilirsiniz
            p.pop();

            p.push();
            p.stroke(255, 255, 255);
            p.fill(255, 255, 255);
            p.circle(startX, startY, 5);
            p.pop();
        }
    };

    p.mousePressed = function () {
        if (!canClick) {
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
                    color: "white",
                });
                // Yeni vektör başlangıcı olarak bitiş noktasını belirle
                startX = endX;
                startY = endY;
            }
        }
    };

    p.keyPressed = function () {
        if (p.key === "r" || p.key === "R") {
            
            // p.background(255, 246, 204); // Ekranı temizle
            isDrawing = false;
            animationInProgress = false; // Animasyonu durdur
            canClick = true;
            clearScreen = true;
        }
    };
});
