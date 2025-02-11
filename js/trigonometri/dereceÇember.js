(function () {
    let svg2 = d3
        .select("#derece_cember")
        .append("svg")
        .attr("width", 600)
        .attr("height", 600);

    // Çemberin merkezi ve yarıçapı
    const centerX = 300;
    const centerY = 300;
    const radius = 200;
    const smallCircleRadius = 20; // Küçük çemberin yarıçapı

    // **Birim çemberi çiziyoruz**
    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5);

    // **Başlangıçta çizilecek yarıçap çizgisi**
    const line = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY)
        .attr("stroke", "red")
        .attr("stroke-width", 3)
        .raise();

    // **ClipPath (Kırpma Alanı) için Grup**
    const clipPath = svg2.append("clipPath").attr("id", "angleClip");

    const clipArc = clipPath.append("path");

    // **Küçük Gri Çember (Sadece Açının Görünmesini Sağlayacak)**
    const smallCircle = svg2
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", smallCircleRadius)
        .attr("fill", "lightgray")
        .attr("clip-path", "url(#angleClip)") // ClipPath'i uygula
        .lower();
    // **Açıyı göstermek için HTML içindeki label**
    const degreeLabel = document.getElementById("dereceLabel");

    let isDragging = false;

    // **Fare basıldığında (mousedown) hareket başlasın**
    svg2.on("mousedown", (event) => {
        isDragging = true;
        updateLine(event);
    });

    // **Fare hareket ettiğinde (mousemove) çizgiyi güncelle**
    svg2.on("mousemove", (event) => {
        if (isDragging) {
            updateLine(event);
        }
    });

    // **Fare bırakıldığında (mouseup) hareket dursun**
    svg2.on("mouseup", () => {
        isDragging = false;
    });

    // **Çizgiyi ve ClipPath'i güncelleyen fonksiyon**
    function updateLine(event) {
        const [mouseX, mouseY] = d3.pointer(event);

        // **Merkezden fareye olan açıyı hesapla**
        let angleCircle = Math.atan2(mouseY - centerY, mouseX - centerX);
        let angleDegrees = -1 * angleCircle * (180 / Math.PI);
        if (angleDegrees < 0) {
            angleDegrees += 360;
        }

        // **Yeni uç noktaları hesapla**
        const newX2 = centerX + radius * Math.cos(angleCircle);
        const newY2 = centerY + radius * Math.sin(angleCircle);

        // **Yarıçap çizgisini güncelle**
        line.attr("x2", newX2).attr("y2", newY2);

        // **ClipPath için yay oluştur (sadece ilgili açıyı gösterecek)**
        if (angleDegrees <= 180) {
            // **0° ile 180° arasında normal clipPath uygula**
            var arcGenerator = d3
                .arc()
                .innerRadius(0)
                .outerRadius(smallCircleRadius) // Küçük çemberin yarıçapı
                .startAngle(0)
                .endAngle(angleCircle); // Açının genişliği kadar görünür yap
        } else {
            // **180° ile 360° arasında ters clipPath oluştur**
            var arcGenerator = d3
                .arc()
                .innerRadius(0)
                .outerRadius(smallCircleRadius) // Küçük çemberin yarıçapı
                .startAngle(angleCircle) // Açıyı kapatacak şekilde ters hesapla
                .endAngle(Math.PI * 2); // 360°'yi tamamla
        }

        clipArc
            .attr("d", arcGenerator)
            .attr("transform", `translate(${centerX}, ${centerY}) rotate(90)`);

        // **Dereceyi HTML içindeki label'a yaz**
        degreeLabel.innerText = `Açı: ${angleDegrees.toFixed(1)}°`;
    }
})();
