(function () {
    const width = 710;
    const height = 710;
    const trackWidth = 30; // Her şerit genişliği
    const lanes = 6; // Şerit sayısı
    const innerRadius = 70; // İç çember yarıçapı
    let posneg = true;
    outerRadius = 270;
    tribuneRadius = 270;
    var elementDegreeCounter = document.getElementById("degreeCounter");
    var elementEsasCounter = document.getElementById("esasCounter");

    const svg = d3
        .select("#parkur")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const centerX = width / 2;
    const centerY = height / 2;

    // damalı bitiş çizgisi
    const defs = svg.append("defs");

    const pattern = defs
        .append("pattern")
        .attr("id", "checkeredPattern")
        .attr("width", 10) // Her kare boyutu
        .attr("height", 10)
        .attr("patternUnits", "userSpaceOnUse");

    // Siyah kare
    pattern
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 5)
        .attr("height", 5)
        .attr("fill", "black");

    // Beyaz kare
    pattern
        .append("rect")
        .attr("x", 5)
        .attr("y", 0)
        .attr("width", 5)
        .attr("height", 5)
        .attr("fill", "white");

    // 2. Satırdaki Siyah kare
    pattern
        .append("rect")
        .attr("x", 0)
        .attr("y", 5)
        .attr("width", 5)
        .attr("height", 5)
        .attr("fill", "white");

    // 2. Satırdaki Beyaz kare
    pattern
        .append("rect")
        .attr("x", 5)
        .attr("y", 5)
        .attr("width", 5)
        .attr("height", 5)
        .attr("fill", "black");

    svg.append("line")
        .attr("x1", centerX + innerRadius)
        .attr("y1", centerY)
        .attr("x2", centerX + innerRadius + 180)
        .attr("y2", centerY)
        .attr("stroke", "url(#checkeredPattern)")
        .attr("opacity", "0.8")
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
            .attr("fill", "white")
            .attr("stroke", "#ff5733") // Şerit rengi
            .attr("stroke-width", trackWidth - 2) // Şerit genişliği
            .lower();
    }
    // 1) Glow (ışık parlaması) filtresi tanımlayalım.
    //    stdDeviation değerini küçük tutarak "birazcık" parlama elde ediyoruz.
    const glowFilter = defs.append("filter").attr("id", "lightGlow");

    glowFilter
        .append("feGaussianBlur")
        .attr("in", "SourceGraphic")
        .attr("stdDeviation", "2") // Glow miktarı (düşük değer => hafif glow)
        .attr("result", "blur");

    const feMerge = glowFilter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "blur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // 2) Sadece yukarıdaki (sol üst, sağ üst) 2 ışık paneli konumu:
    const lightPositions = [
        { x: centerX - 300, y: centerY - 300 }, // Sol Üst
        { x: centerX + 300, y: centerY - 300 }, // Sağ Üst
    ];

    // 3) Panelin kaç satır ve sütun ampulden oluşacağını,
    //    ampuller arası boşluğu ve ampul boyutunu belirleyelim.
    const rows = 3;
    const cols = 5;
    const spacing = 18;
    const bulbRadius = 6;

    // Panelin arka dikdörtgenini çizerken, ampullerin kapladığı alandan biraz daha büyük tutuyoruz.
    const panelWidth = (cols - 1) * spacing + bulbRadius * 4;
    const panelHeight = (rows - 1) * spacing + bulbRadius * 4;

    // 4) Her bir ışık panelini oluşturup stadyuma doğru baktırıyoruz
    lightPositions.forEach((pos) => {
        // Stadyum merkezine doğru açı
        let angleRad = Math.atan2(centerY - pos.y, centerX - pos.x);
        let angleDeg = (angleRad * 180) / Math.PI;

        // Panel grubunu oluştur
        let lightGroup = svg
            .append("g")
            .attr("class", "stadium-light")
            .attr(
                "transform",
                `translate(${pos.x}, ${pos.y}) rotate(${angleDeg})`
            );

        // Panelin arka dikdörtgeni (metal kasa gibi)
        lightGroup
            .append("rect")
            .attr("x", -panelWidth / 2)
            .attr("y", -panelHeight / 2)
            .attr("width", panelWidth)
            .attr("height", panelHeight)
            .attr("fill", "#333")
            .attr("rx", 8) // Kenarları hafif yuvarlatma
            .attr("ry", 8)
            .attr("stroke", "#555")
            .attr("stroke-width", 2)
            .attr("opacity", 0.8);

        // 5) Panel üzerindeki ampulleri (dairesel) çizelim
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let cx = -panelWidth / 2 + bulbRadius * 2 + c * spacing;
                let cy = -panelHeight / 2 + bulbRadius * 2 + r * spacing;

                // Ampul: beyaz daire, hafif glow filtresi
                lightGroup
                    .append("circle")
                    .attr("cx", cx)
                    .attr("cy", cy)
                    .attr("r", bulbRadius)
                    .attr("fill", "white")
                    .attr("filter", "url(#lightGlow)")
                    .attr("opacity", 0.95);
            }
        }
    });
    // İç alan (yeşil çim)
    svg.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", innerRadius)
        .attr("fill", "#41980a");

    // Koşan adam (GIF)
    const runner = svg
        .append("image")
        .attr("xlink:href", "/images/runner_still.png") // GIF dosyasının yolu
        .attr("width", 60)
        .raise()
        .attr("height", 60)
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
            .innerRadius(30)
            .outerRadius(25)
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
                        .innerRadius(30)
                        .outerRadius(25)
                        .startAngle(0)
                        .endAngle(interpolate(t))(); // Açıyı kademeli artır
                };
            });

        if (posneg === false) {
            const negAngleRad =
                (Math.ceil(360 - (angle * 180) / Math.PI) * Math.PI) / 180;
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
                            .innerRadius(30)
                            .outerRadius(25)
                            .startAngle(0)
                            .endAngle(interpolate(t))(); // Açıyı kademeli artır
                    };
                });
        }
    }

    const tribuneInnerRadius = outerRadius + 20; // Tribünün iç yarıçapı
    const tribuneOuterRadius = tribuneRadius; // Tribünün dış yarıçapı

    // **Tribün Şeritleri**
    const tribuneLayers = 4; // Kaç sıra oturma alanı olacak
    const seatColors = ["#555", "#666", "#777", "#888"]; // Farklı sıralar için renkler

    for (let i = 0; i < tribuneLayers; i++) {
        let seatArc = d3
            .arc()
            .innerRadius(tribuneInnerRadius + i * 15)
            .outerRadius(tribuneInnerRadius + (i + 1) * 15)
            .startAngle(0)
            .endAngle(2 * Math.PI);

        svg.append("path")
            .attr("d", seatArc)
            .attr("fill", seatColors[i])
            .attr("transform", `translate(${centerX},${centerY})`);
    }

    const headColors = ["#FFD19C", "#F1C27D", "#E0AC69", "#FFDBAC"]; // Farklı ten renkleri
    const bodyColors = ["#69b3a2", "#4CAF50", "#FF9800", "#2196F3", "#9C27B0"]; // Farklı giysi renkleri

    for (let i = 0; i < tribuneLayers; i++) {
        // Satırın orta yarıçapını hesapla
        let rowRadius = tribuneInnerRadius + i * 15 + 7.5;
        // Satırın çevresini hesapla
        let circumference = 2 * Math.PI * rowRadius;
        // Her insan için yaklaşık genişlik (piksel cinsinden)
        let personWidth = 20;
        // O satıra sığabilecek insan sayısını hesapla
        let numPeople = Math.floor(circumference / personWidth);

        for (let j = 0; j < numPeople; j++) {
            let angle = j * ((2 * Math.PI) / numPeople);
            let x = centerX + rowRadius * Math.cos(angle);
            let y = centerY + rowRadius * Math.sin(angle);
            // Başlangıç konumunu saklamak için transform değerini oluşturuyoruz
            let initTransform = `translate(${x}, ${y}) rotate(${
                (angle * 180) / Math.PI + 90
            })`;

            // Grup oluşturup, veri olarak başlangıç transform'unu ekliyoruz
            let person = svg
                .append("g")
                .attr("class", "tribune-person")
                .attr("data-init", initTransform)
                .attr("transform", initTransform);

            // Rastgele renk seçimi
            let headColor =
                headColors[Math.floor(Math.random() * headColors.length)];
            let bodyColor =
                bodyColors[Math.floor(Math.random() * bodyColors.length)];

            // Baş: Daha küçük boyutta (r=3)
            person
                .append("circle")
                .attr("cx", 0)
                .attr("cy", -8)
                .attr("r", 3)
                .attr("fill", headColor);

            // Gövde: Küçültülmüş boyutlarda (width=4, height=7)
            person
                .append("rect")
                .attr("x", -2)
                .attr("y", -6)
                .attr("width", 4)
                .attr("height", 7)
                .attr("fill", bodyColor);
        }
    }

    let jumpingEnabled = false;

    // Her bir insan ikonunun zıplama döngüsü
    function jump(element) {
        let initTransform = d3.select(element).attr("data-init");
        d3.select(element)
            .transition()
            .duration(300)
            // Yukarı doğru hafif bir ofset ekliyoruz (örneğin -5px)
            .attr("transform", initTransform + " translate(0, -3)")
            .transition()
            .duration(300)
            .attr("transform", initTransform)
            .on("end", function () {
                if (jumpingEnabled) {
                    jump(element); // Döngüyü tekrarla
                }
            });
    }

    function startJumping() {
        jumpingEnabled = true;
        d3.selectAll(".tribune-person").each(function () {
            jump(this);
        });
    }

    function stopJumping() {
        jumpingEnabled = false;
        // Tüm geçerli geçişleri iptal et ve ikonları başlangıç konumuna geri döndür
        d3.selectAll(".tribune-person")
            .interrupt()
            .attr("transform", function () {
                return d3.select(this).attr("data-init");
            });
    }
    const greenSpace = svg
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", 300)
        .lower()
        .attr("fill", "#136d15");

    const mask = svg.append("mask").attr("id", "circleMask").lower();

    // **Dış Daire (Tam Çember)**
    mask.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", 270)
        .attr("fill", "white");

    // **İç Kısmı Kes (Boş Bırak)**
    mask.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", 250)
        .attr("fill", "black");

    svg.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", 280)
        .attr("fill", "#138510") // Renk değiştir
        .attr("mask", "url(#circleMask)"); // Maskeyi uygula

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
            document
                .getElementById("parkurPlay-btn")
                .classList.remove("disabled");
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

            if (posneg === true) {
                elementEsasCounter.style.color = "red";
                elementEsasCounter.style.transition = "transform 1s, color 1s"; // Geçiş süresi
                elementEsasCounter.style.transform = "scale(1.2)"; // 1.5 kat büyüt

                // 1 saniye sonra eski haline getir
                setTimeout(() => {
                    elementEsasCounter.style.transform = "scale(1)"; // Eski boyuta dön
                    elementEsasCounter.style.color = "black";
                }, 3000);
            } else if (posneg === false) {
                elementDegreeCounter.style.color = "blue";
                elementDegreeCounter.style.transition =
                    "transform 1s, color 1s"; // Geçiş süresi
                elementDegreeCounter.style.transform = "scale(1.2)"; // 1.5 kat büyüt

                setTimeout(() => {
                    elementDegreeCounter.style.color = "black";
                    elementDegreeCounter.style.transform = "scale(1)";
                }, 1000);


                setTimeout(() => {
                    elementEsasCounter.style.color = "red";
                    elementEsasCounter.style.transition =
                        "transform 1s, color 1s";
                    elementEsasCounter.style.transform = "scale(1.2)";
                }, 1000);

                setTimeout(() => {
                    elementEsasCounter.style.transform = "scale(1)"; // Eski boyuta dön
                    elementEsasCounter.style.color = "black";
                }, 4000);
            }

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

        const displayValueEsPo = isDegree
            ? `${esasDegreePos}°`
            : `${((esasDegreePos * Math.PI) / 180).toFixed(2)} rad`;

        const displayValueReNeg = isDegree
            ? `${allDegreeNeg.toFixed(0)}°`
            : `${((allDegreeNeg.toFixed(0) * Math.PI) / 180).toFixed(2)} rad`;

        const displayValueEsNeg = isDegree
            ? `${esasDegreeNeg}°`
            : `${((esasDegreeNeg * Math.PI) / 180).toFixed(2)} rad`;

        console.log("displayValueREPO", posneg);

        document.getElementById("degreeCounter").textContent = `Açı: ${
            posneg ? displayValueRePo : displayValueReNeg
        }`;
        document.getElementById("esasCounter").textContent = `Esas ölçü: ${
            posneg ? displayValueEsPo : displayValueEsNeg
        }`;

        isDegree
            ? (elementDegreeCounter.style.marginLeft = "150px")
            : (elementDegreeCounter.style.marginLeft = "115px");
        isDegree
            ? (elementEsasCounter.style.marginLeft = "115px")
            : (elementEsasCounter.style.marginLeft = "80px");
    }

    // Başlat ve Durdur butonları
    document.getElementById("parkurPlay-btn").addEventListener("click", () => {
        startAnimation(posneg);
        startJumping();
    });
    document.getElementById("parkurStop-btn").addEventListener("click", () => {
        stopAnimation(posneg);
        stopJumping();
    });
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

    document
        .getElementById("pozitifCB")
        .addEventListener("change", function () {
            if (this.checked) {
                posneg = true;
                document.getElementById("negatifCB").checked = false;
            }
        });

    document
        .getElementById("negatifCB")
        .addEventListener("change", function () {
            if (this.checked) {
                posneg = false;
                document.getElementById("pozitifCB").checked = false;
            }
        });
})();
