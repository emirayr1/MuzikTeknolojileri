(function () {
    let steamInterval;
    let lines = []; // Çizgileri saklamak için dizi
    let animationFrames = []; // Animasyonları saklamak için
    let isRunning = false; // Animasyon durumu
    // **Motor SVG'yi yükle**
    d3.xml("../../../images/motor.svg").then(function (xml) {
        document.getElementById("motorSvg").appendChild(xml.documentElement);

        let motor = d3
            .select("#motorSvg")
            .select("svg")
            .attr("width", "150")
            .attr("height", "170")
            .attr("x", "250") // Ortaya al
            .attr("y", "0");

        // **Buhar çıkışı efekti**
        function createSteam() {
            let steam = motor
                .append("circle")
                .attr("cx", 220) // Buharın çıkacağı nokta (motorun üstü)
                .attr("cy", 60)
                .attr("r", 5)
                .attr("class", "steam");

            steam
                .transition()
                .duration(2000)
                .attr("cy", 5)
                .attr("r", 14)
                .style("opacity", 1)
                .remove();
        }
        setInterval(createSteam, 700);
    });

    // **Bantı ayrı SVG içinde çiz**
    let beltSvg = d3.select("#beltSvg");

    let beltGroup = beltSvg.append("g").attr("transform", "translate(60, 50)"); // Bütün grubu aşağı kaydır

    // **Gri Metal Bant**
    beltGroup
        .append("rect")
        .attr("width", 880)
        .attr("height", 10)
        .attr("rx", 25)
        .attr("ry", 25)
        .attr("fill", "#B0B0B0");

    // **Dönen Siyah Bant**
    let blackBelt = beltGroup
        .append("rect")
        .attr("x", -55)
        .attr("y", -25)
        .attr("width", 1000)
        .attr("height", 60)
        .attr("rx", 30)
        .attr("ry", 30)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 10);

    function startAnimation() {
        if (isRunning) return; // Zaten çalışıyorsa tekrar başlatma
        isRunning = true;

        // 10 tane çizgi oluştur
        for (let i = 0; i < 26; i++) {
            let movingLine = beltGroup
                .append("line")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", 0)
                .attr("y2", -25)
                .attr("stroke", "black")
                .attr("stroke-width", 4);

            lines.push(movingLine); // Çizgiyi diziye ekle

            // Her bir çizginin animasyonu 40ms gecikmeli başlasın
            animationFrames.push(
                setTimeout(() => updateLine(movingLine), i * 300)
            );
        }
    }

    function stopAnimation() {
        isRunning = false;

        lines.forEach((line) => line.remove()); // Tüm çizgileri temizle
        lines = []; // Listeyi temizle
        animationFrames.forEach((frame) => clearTimeout(frame)); // Zamanlayıcıları iptal et
        animationFrames = []; // Listeyi temizle
    }

    function updateLine(movingLine) {
        if (!isRunning) return;

        let startTime = Date.now();

        // **Adım 1: x1 ve x2'yi değiştirme**
        function step1() {
            if (!isRunning) return;
            let duration = 3500; // 1 saniye
            let elapsedTime = Date.now() - startTime;
            let progress = Math.min(elapsedTime / duration, 1);

            let newX = 0 + (880 - 0) * progress;
            movingLine.attr("x1", newX).attr("x2", newX);

            if (progress < 1) {
                requestAnimationFrame(step1);
            } else {
                startTime = Date.now(); // Yeni başlangıç zamanı
                step2(); // **Bir sonraki adıma geç**
            }
        }

        // **Adım 2: y2'yi değiştirme**
        function step2() {
            if (!isRunning) return;
            let duration = 350; // 1 saniye
            let elapsedTime = Date.now() - startTime;
            let progress = Math.min(elapsedTime / duration, 1);
            let newX2 = 880 + 75 * progress;
            let newY2 = -25 + 55 * progress;
            let newY1 = 5 * progress;
            movingLine.attr("x2", newX2).attr("y1", newY1).attr("y2", newY2);

            if (progress < 1) {
                requestAnimationFrame(step2);
            } else {
                startTime = Date.now(); // Yeni başlangıç zamanı
                step3(); // **Son adıma geç**
            }
        }

        // **Adım 3: y1'i değiştirme**
        function step3() {
            if (!isRunning) return;
            let duration = 3500; // 2 saniye
            let elapsedTime = Date.now() - startTime;
            let progress = Math.min(elapsedTime / duration, 1);
            console.log(progress);
            let newX3 = 880 - progress * 880;
            movingLine
                .attr("y1", 5)
                .attr("y2", 30)
                .attr("x1", newX3)
                .attr("x2", newX3);

            if (progress < 1) {
                requestAnimationFrame(step3);
            } else {
                startTime = Date.now(); // Yeni başlangıç zamanı
                step4(); // **Son adıma geç**
            }
        }

        function step4() {
            if (!isRunning) return;
            let duration = 350; // 1 saniye
            let elapsedTime = Date.now() - startTime;
            let progress = Math.min(elapsedTime / duration, 1);
            let newX2 = -50 - -50 * progress;
            let newY2 = 30 - 55 * progress;
            let newY1 = 5 - 5 * progress;
            movingLine.attr("x2", newX2).attr("y1", newY1).attr("y2", newY2);

            if (progress < 1) {
                requestAnimationFrame(step4);
            } else {
                startTime = Date.now(); // Yeni başlangıç zamanı
                step1(); // **Son adıma geç**
            }
        }

        // **Animasyonu başlat**
        step1();
    }
    document
        .getElementById("startBtn")
        .addEventListener("click", startAnimation);
    document.getElementById("stopBtn").addEventListener("click", stopAnimation);
})();
