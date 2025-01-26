(function () {

    const canvas = document.getElementById("nokta-ucgen-canvas");
    const ctx = canvas.getContext("2d");

        // Canvas boyutlarını ayarla
        canvas.width = 700;
        canvas.height = 700;

        const width = canvas.width;
        const height = canvas.height;

        // Nokta konumları
        const points = [
            { x: width / 2, y: height / 4, label: "A" }, // A noktası
            { x: width / 4, y: height * 3 / 4, label: "B" }, // B noktası
            { x: width * 3 / 4, y: height * 3 / 4, label: "C" }, // C noktası
        ];

        let currentStep = 0; // Animasyon adımını takip eder
        let progress = 0; // Çizim ilerleme durumu (0-1 arasında)
        const duration = 1000; // Her çizginin çizim süresi (ms)
        const holdTime = 3000; // Üçgenin gösterilme süresi (ms)
        let holdTimer = 0; // Üçgenin gösterim süresi

        function drawPoint(x, y, label) {
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fillStyle = "#FF5722";
            ctx.fill();

            // Noktanın üstüne harf yaz
            ctx.font = "18px Arial";
            ctx.fillStyle = "#000";
            ctx.textAlign = "center";
            ctx.fillText(label, x, y - 15); // Noktanın üzerine yaz
        }

        function drawPartialLine(x1, y1, x2, y2, progress) {
            const currentX = x1 + (x2 - x1) * progress;
            const currentY = y1 + (y2 - y1) * progress;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(currentX, currentY);
            ctx.strokeStyle = "#2196F3";
            ctx.lineWidth = 5;
            ctx.stroke();
        }

        function drawEquation() {
            const equation = "[AB] ∪ [BC] ∪ [CA]";
            ctx.font = "24px Arial";
            ctx.fillStyle = "#000";
            ctx.textAlign = "left";
            ctx.fillText(equation, width - 250, height / 4);
        }

        function animate(timestamp) {
            ctx.clearRect(0, 0, width, height); // Canvas'ı temizle

            // Noktaları ve harflerini çiz
            points.forEach(point => drawPoint(point.x, point.y, point.label));

            drawEquation(); // Denklemi göster
            if (currentStep >= 3) {
                // Üçgeni göster ve bekle
                for (let i = 0; i < 3; i++) {
                    const nextPoint = points[(i + 1) % 3];
                    drawPartialLine(points[i].x, points[i].y, nextPoint.x, nextPoint.y, 1);
                }


                holdTimer += 16;
                if (holdTimer > holdTime) {
                    currentStep = 0;
                    progress = 0;
                    holdTimer = 0;
                }
            } else {
                // Çizgiyi yavaşça çiz
                const startPoint = points[currentStep];
                const endPoint = points[(currentStep + 1) % 3];
                drawPartialLine(startPoint.x, startPoint.y, endPoint.x, endPoint.y, progress);

                progress += 16 / duration; // İlerlemeyi artır (~60 FPS)
                if (progress >= 1) {
                    progress = 0; // İlerlemeyi sıfırla
                    currentStep++; // Bir sonraki adıma geç
                }
            }

            requestAnimationFrame(animate); // Sonsuz döngü
        }

        animate();
})();