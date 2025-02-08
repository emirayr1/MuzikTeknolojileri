(function () {
    const width = 1000;
    const height = 600;
    const trackWidth = 30; // Her şerit genişliği
    const lanes = 6; // Şerit sayısı
    const innerRadius = 200; // İç çember yarıçapı

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

    // Koşu parkurunun şeritlerini çizme
    for (let i = 0; i < lanes; i++) {
        const radius = innerRadius + i * trackWidth;

        // Beyaz kenarlı elips
        svg.append("ellipse")
            .attr("cx", centerX)
            .attr("cy", centerY)
            .attr("rx", radius + trackWidth / 2)
            .attr("ry", (radius + trackWidth / 2) * 0.6) // Elips yapısı
            .attr("fill", "none") // İçi boş
            .attr("stroke", "white") // Kenar rengi beyaz
            .attr("stroke-width", 2) // Kenar kalınlığı
            .lower();

        // Ana elips (şerit rengi)
        svg.append("ellipse")
            .attr("cx", centerX)
            .attr("cy", centerY)
            .attr("rx", radius + trackWidth / 2)
            .attr("ry", (radius + trackWidth / 2) * 0.6) // Elips yapısı
            .attr("fill", "none")
            .attr("stroke", "#ff5733") // Şerit rengi
            .attr("stroke-width", trackWidth - 2) // Şerit genişliği
            .lower();
    }

    // İç alan (yeşil çim)
    svg.append("ellipse")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("rx", innerRadius)
        .attr("ry", innerRadius * 0.6)
        .attr("fill", "#7bc043");

    // Koşan adam (GIF)
    const runner = svg
        .append("image")
        .attr("xlink:href", "/images/runner.gif") // GIF dosyasının yolu
        .attr("width", 70)
        .raise()
        .attr("height", 70);

    // Elips üzerinde hareket

    const ellipseRx = innerRadius + 2 * trackWidth + trackWidth / 2;
    const ellipseRy = ellipseRx * 0.6;
    const speed = 0.001; // Hareket hızı

    d3.timer((elapsed) => {
        const angle = -(elapsed * speed) % (2 * Math.PI); // Açıyı hesapla
        const x = centerX + ellipseRx * Math.cos(angle); // X koordinatı
        const y = centerY + ellipseRy * Math.sin(angle); // Y koordinatı

        // Yönü kontrol et
        const scaleX = y < centerY ? -1 : 1; // Y pozitifse sola bak (-1), negatifse sağa bak (1)

        runner
            .attr("x", x - 20) // Koşan adamın X pozisyonu
            .attr("y", y - 20) // Koşan adamın Y pozisyonu
            .attr(
                "transform",
                `translate(${x}, ${y}) scale(${scaleX}, 1) translate(${-x}, ${-y})`
            );
    });
})();
