(function () {
    const width = 1000;
    const height = 1000;
    const trackWidth = 30; // Her şerit genişliği
    const lanes = 6; // Şerit sayısı
    const innerRadius = 180; // İç çember yarıçapı
    let posneg = true;

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
    let speed = parseFloat(document.getElementById("speedSlider").value); // Hareket hızı
    let laps = 0; // Tur sayısını tutacak değişken
    let animation; // Animasyon zamanlayıcısını saklayacak değişken
    let previousAngle = 0; // Önceki açıyı takip et
    let stopLines = []; // Çizgileri saklamak için dizi

    function drawStopLines(runnerX, runnerY, angle, posneg) {
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
            .on("end", () => drawStopArc(angle, posneg));
        // Çizgileri saklamak için diziye ekle
        stopLines.push(line1, line2);
    }

    function drawStopArc(angle, posneg) {
        let arcGenerator = d3
            .arc()
            .innerRadius(50)
            .outerRadius(45)
            .startAngle(0)
            .endAngle(0); // Başlangıç açısı 0

        let arcPathEsas = svg
            .append("path")
            .attr("class", "stop-arc")
            .attr(
                "transform",
                `translate(${centerX}, ${centerY}) rotate(90, 0, 0)`
            )
            .attr("fill", "red")
            .attr("d", arcGenerator()); // İlk olarak boş bir yay çiz

        // **Animasyonu başlat**
        arcPathEsas
            .transition()
            .duration(2000) // 1 saniyede tamamlansın
            .attrTween("d", function () {
                let interpolate = d3.interpolate(0, -angle); // Açıyı pozitif veya negatif yönde artır
                return function (t) {
                    return d3
                        .arc()
                        .innerRadius(50)
                        .outerRadius(45)
                        .startAngle(0)
                        .endAngle(interpolate(t))(); // Açıyı kademeli artır
                };
            });

        if (posneg === false) {
            const negAngleRad = (Math.ceil(360 - (angle * 180) / Math.PI) * Math.PI) / 180;
            let arcPathGercek = svg
                .append("path")
                .attr("class", "stop-arc")
                .attr(
                    "transform",
                    `translate(${centerX}, ${centerY}) rotate(90, 0, 0)`
                )
                .attr("fill", "blue")
                .attr("d", arcGenerator()); // İlk olarak boş bir yay çiz

            // **Animasyonu başlat**
            arcPathGercek
                .transition()
                .duration(300) // 1 saniyede tamamlansın
                .attrTween("d", function () {
                    let interpolate = d3.interpolate(0, negAngleRad); // Açıyı pozitif veya negatif yönde artır
                    return function (t) {
                        return d3
                            .arc()
                            .innerRadius(50)
                            .outerRadius(45)
                            .startAngle(0)
                            .endAngle(interpolate(t))(); // Açıyı kademeli artır
                    };
                });
        }
    }

    function startAnimation(posneg) {
        if (!animation) {
            laps = 0;
            document.getElementById(
                "lapCounter"
            ).textContent = `Turlar: ${laps}`;
            // BUTON SLIDER DISABLED
            document.getElementById("parkurPlay-btn").classList.add("disabled");
            document.getElementById("speedSlider").classList.add("disabled");
            document.getElementById("posnegCB").classList.add("disabled");
            


            svg.selectAll(".stop-arc").remove(); // Önceki arc'ı sil

            stopLines.forEach((line) => line.remove());
            stopLines = [];

            runner.attr("xlink:href", "/images/runner.gif");
            animation = d3.timer((elapsed) => {
                const angle = -(elapsed * speed) % (2 * Math.PI); // Açıyı hesapla
                const x =
                    centerX + circleRadius * Math.cos(posneg ? angle : -angle); // X koordinatı
                const y =
                    centerY + circleRadius * Math.sin(posneg ? angle : -angle); // Y koordinatı

                // Yönü kontrol et
                const scaleX = y < centerY ? -1 : 1;
                const yön = posneg ? scaleX : -scaleX;
                runner
                    .attr("x", x - 35) // Koşan adamın X pozisyonu
                    .attr("y", y - 35) // Koşan adamın Y pozisyonu
                    .attr(
                        "transform",
                        `translate(${x}, ${y}) scale(${yön}, 1) translate(${-x}, ${-y})`
                    );

                const degAngle = (-angle * 180) / Math.PI;

                if (degAngle >= 355 && degAngle <= 360 && !lapsIncremented) {
                    laps += 1;
                    document.getElementById(
                        "lapCounter"
                    ).textContent = `Turlar: ${laps}`;
                    lapsIncremented = true; // Lap artırıldığı için işaretle
                }
                if (degAngle < 355) {
                    lapsIncremented = false;
                }
                // Açıyı güncelle
                previousAngle = angle;
                updateAngleDisplay(posneg);
            });
        }
    }

    function stopAnimation(posneg) {
        if (animation) {
            animation.stop(); // Animasyonu durdur
            animation = null;

            // BUTON SLIDER DISABLED
            document.getElementById("parkurPlay-btn").classList.remove("disabled");
            document.getElementById("speedSlider").classList.remove("disabled");
            document.getElementById("posnegCB").classList.remove("disabled");

            // Çizgileri animasyonla ekle
            const runnerX = +runner.attr("x") + 35;
            const runnerY = +runner.attr("y") + 35;
            let angle = Math.atan2(runnerY - centerY, runnerX - centerX);

            let angleDeg = (angle * 180) / Math.PI;

            // Eğer açı negatifse, 360 ekleyerek pozitif yap
            if (angleDeg < 0) {
                angleDeg += 360;
            }

            angleRadSon = (angleDeg * Math.PI) / 180;
            drawStopLines(runnerX, runnerY, 2 * Math.PI - angleRadSon, posneg);

            runner.attr("xlink:href", "/images/runner_still.png");
        }
    }
    

    function updateAngleDisplay(posneg) {
        const isDegree = document.getElementById("dereceCB").checked;
        
        // **Açı hesapla**
        const allDegreePos = (-previousAngle * 180) / Math.PI + laps * 360;
        const esasDegreePos = allDegreePos.toFixed(0) % 360;
        const allDegreeNeg = (previousAngle * 180) / Math.PI - laps * 360;
        const esasDegreeNeg = (allDegreeNeg.toFixed(0) % 360) + 360;
        
        // **Derece veya Radyanı Göster**
        const displayValueRePo = isDegree
        ? `${allDegreePos.toFixed(0)}°`
        : `${(-previousAngle + laps * 2 * Math.PI).toFixed(2)} rad`;
        
        const displayValueEsPo = isDegree ? `${esasDegreePos}°` : `${(esasDegreePos * Math.PI / 180).toFixed(2)} rad`
        
        const displayValueReNeg = isDegree
        ? `${allDegreeNeg.toFixed(0)}°`
        : `${(allDegreeNeg.toFixed(0) * Math.PI / 180).toFixed(2)} rad`;
        
        const displayValueEsNeg = isDegree ? `${esasDegreeNeg}°` : `${(esasDegreeNeg * Math.PI / 180).toFixed(2)} rad`
        
        console.log("displayValueREPO",posneg)
        
        document.getElementById("degreeCounter").textContent = `Açı: ${posneg ? displayValueRePo : displayValueReNeg}`;
        document.getElementById("esasCounter").textContent = `Esas ölçü: ${posneg ? displayValueEsPo : displayValueEsNeg}`;
    }

    // Başlat ve Durdur butonları
    document
        .getElementById("parkurPlay-btn")
        .addEventListener("click", () => startAnimation(posneg));
    document
        .getElementById("parkurStop-btn")
        .addEventListener("click", () => stopAnimation(posneg));
    document
        .getElementById("speedSlider")
        .addEventListener("input", function () {
            speed = parseFloat(this.value); // Yeni hız değerini al
        });

    document.getElementById("dereceCB").addEventListener("change", function () {
        if (this.checked) {
            document.getElementById("radyanCB").checked = false;
        } 
        updateAngleDisplay(posneg);
    });
        
    document.getElementById("radyanCB").addEventListener("change", function () {
        if (this.checked) {
            document.getElementById("dereceCB").checked = false;
        }
        updateAngleDisplay(posneg);
    });

    document.getElementById("pozitifCB").addEventListener("change", function () {
        if (this.checked) {
            posneg = true;
            document.getElementById("negatifCB").checked = false;
        }
    });
        
    document.getElementById("negatifCB").addEventListener("change", function () {
        if (this.checked) {
            posneg = false;
            document.getElementById("pozitifCB").checked = false;
        }
    });
})();
