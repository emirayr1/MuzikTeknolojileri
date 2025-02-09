(function () {
    const width = 1000;
    const height = 1000;
    const trackWidth = 30; // Her şerit genişliği
    const lanes = 6; // Şerit sayısı
    const innerRadius = 180; // İç çember yarıçapı

    const svg = d3
        .select("#parkur")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const centerX = width / 2;
    const centerY = height / 2;

    svg.append("line")
        .attr("x1", centerX + innerRadius)
        .attr("y1", centerY)
        .attr("x2", centerX + innerRadius + 180)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", "20")
        .lower();

    // Koşu parkurunun çemberlerini çizme
    for (let i = 0; i < lanes; i++) {
        const radius = innerRadius + i * trackWidth;

        // Beyaz kenarlı çember
        svg.append("circle")
            .attr("cx", centerX)
            .attr("cy", centerY)
            .attr("r", radius + trackWidth / 2)
            .attr("fill", "none") // İçi boş
            .attr("stroke", "white") // Kenar rengi beyaz
            .attr("stroke-width", 2) // Kenar kalınlığı
            .lower();

        // Ana çember (şerit rengi)
        svg.append("circle")
            .attr("cx", centerX)
            .attr("cy", centerY)
            .attr("r", radius + trackWidth / 2)
            .attr("fill", "none")
            .attr("stroke", "#ff5733") // Şerit rengi
            .attr("stroke-width", trackWidth - 2) // Şerit genişliği
            .lower();
    }

    // İç alan (yeşil çim)
    svg.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", innerRadius)
        .attr("fill", "#7bc043");

    // Koşan adam (GIF)
    const runner = svg
        .append("image")
        .attr("xlink:href", "/images/runner_still.png") // GIF dosyasının yolu
        .attr("width", 70)
        .raise()
        .attr("height", 70)
        .attr(
            "transform",
            `translate(${centerX + innerRadius + 115}, ${
                centerY - 35
            }) scale(-1, 1)`
        );

    // Çember üzerinde hareket
    const circleRadius = innerRadius + 2 * trackWidth + trackWidth / 2;
    const speed = 0.001; // Hareket hızı
    let laps = 0; // Tur sayısını tutacak değişken
    let animation; // Animasyon zamanlayıcısını saklayacak değişken
    let previousAngle = 0; // Önceki açıyı takip et
    let stopLines = []; // Çizgileri saklamak için dizi

    function drawStopLines(runnerX, runnerY, angle) {
        // Orijine çizgiler ekle
        const line1 = svg
            .append("line")
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", centerX)
            .attr("y2", centerY)
            .attr("stroke", "blue")
            .attr("stroke-width", 5);

        const line2 = svg
            .append("line")
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", centerX)
            .attr("y2", centerY)
            .attr("stroke", "red")
            .attr("stroke-width", 5);

        // Animasyonla çizgileri büyüt
        line1
            .transition()
            .duration(1000)
            .attr("x2", runnerX)
            .attr("y2", runnerY);

        line2
            .transition()
            .duration(1000)
            .attr("x2", centerX + circleRadius)
            .attr("y2", centerY)
            .on("end", () => {
                let arcGenerator = d3
                    .arc()
                    .innerRadius(50)
                    .outerRadius(45)
                    .startAngle(0) // Başlangıç açısı 0
                    .endAngle(0); // Animasyon başlarken 0 derece olacak

                let arcPath = svg
                    .append("path")
                    .attr("class", "stop-arc")
                    .attr(
                        "transform",
                        `translate(${centerX}, ${centerY}) rotate(90, 0, 0)`
                    )
                    .attr("fill", "red")
                    .attr("d", arcGenerator()); // İlk olarak boş bir yay çiz

                // **Animasyonu başlat**
                arcPath
                    .transition()
                    .duration(1000) // 1 saniyede tamamlansın
                    .attrTween("d", function () {
                        let interpolate = d3.interpolate(0, -angle); // Açıyı sıfırdan angle'a getir
                        return function (t) {
                            return d3
                                .arc()
                                .innerRadius(50)
                                .outerRadius(45)
                                .startAngle(0)
                                .endAngle(interpolate(t))(); // Açıyı kademeli artır
                        };
                    });
            });
        // Çizgileri saklamak için diziye ekle
        stopLines.push(line1, line2);
    }

    function startAnimation() {
        if (!animation) {
            // Çizgileri temizle

            svg.selectAll(".stop-arc").remove(); // Önceki arc'ı sil

            stopLines.forEach((line) => line.remove());
            stopLines = [];

            runner.attr("xlink:href", "/images/runner.gif");
            animation = d3.timer((elapsed) => {
                const angle = -(elapsed * speed) % (2 * Math.PI); // Açıyı hesapla
                const x = centerX + circleRadius * Math.cos(angle); // X koordinatı
                const y = centerY + circleRadius * Math.sin(angle); // Y koordinatı

                // Yönü kontrol et
                const scaleX = y < centerY ? -1 : 1;

                runner
                    .attr("x", x - 35) // Koşan adamın X pozisyonu
                    .attr("y", y - 35) // Koşan adamın Y pozisyonu
                    .attr(
                        "transform",
                        `translate(${x}, ${y}) scale(${scaleX}, 1) translate(${-x}, ${-y})`
                    );

                // Başlangıç çizgisinden geçişi kontrol et
                if (previousAngle < -Math.PI && angle >= -Math.PI) {
                    laps += 1;
                    document.getElementById(
                        "lapCounter"
                    ).textContent = `Turlar: ${laps}`;
                }
                // Açıyı güncelle
                previousAngle = angle;

                const newDegree = (-previousAngle * 180) / Math.PI + laps * 360;
                document.getElementById(
                    "degreeCounter"
                ).textContent = `Derece: ${newDegree.toFixed(0)}`;
            });
        }
    }

    function stopAnimation() {
        if (animation) {
            animation.stop(); // Animasyonu durdur
            animation = null;

            // Çizgileri animasyonla ekle
            const runnerX = +runner.attr("x") + 35;
            const runnerY = +runner.attr("y") + 35;
            let angle = Math.atan2(runnerY - centerY, runnerX - centerX);

            // Açıyı dereceye çevir
            let angleDeg = (angle * 180) / Math.PI;

            // Eğer açı negatifse, 360 ekleyerek pozitif yap
            if (angleDeg < 0) {
                angleDeg += 360;
            }
            console.log("angle", 360 - angleDeg);
            angleRadSon = (angleDeg * Math.PI) / 180;
            drawStopLines(runnerX, runnerY, 2 * Math.PI - angleRadSon);

            laps = 0; // Turu sıfırla
            document.getElementById(
                "lapCounter"
            ).textContent = `Turlar: ${laps}`;
            runner.attr("xlink:href", "/images/runner_still.png");
        }
    }

    // Başlat ve Durdur butonları
    document
        .getElementById("parkurPlay-btn")
        .addEventListener("click", startAnimation);
    document
        .getElementById("parkurStop-btn")
        .addEventListener("click", stopAnimation);
})();
