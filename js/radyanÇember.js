(function () {
    let svg2 = d3
        .select("#radyan_cember")
        .append("svg")
        .attr("width", 600)
        .attr("height", 600);

    // Çemberin merkezi ve yarıçapı
    const centerX = 300;
    const centerY = 300;
    const radius = 200;
    const smallCircleRadius = 30; // Küçük çemberin yarıçapı
    const angleRad = (57 * Math.PI) / 180; // 57 dereceyi radyana çeviriyoruz

    // **Birim çemberi çiziyoruz**
    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5);

    // **Sabit kırmızı yarıçap çizgisi (0°'de)**
    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY)
        .attr("stroke", "red")
        .attr("stroke-width", 3)
        .raise();

    // **57°'de ikinci yarıçap çizgisi**
    const angleX = centerX + radius * Math.cos(angleRad);
    const angleY = centerY - radius * Math.sin(angleRad); // Y ekseni ters olduğu için eksi aldık

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", angleX)
        .attr("y2", angleY)
        .attr("stroke", "red")
        .attr("stroke-width", 3)
        .raise();

    // **57°’lik kırmızı yay**
    const arcGenerator = d3
        .arc()
        .innerRadius(radius - 3) // İç yarıçap (biraz küçülttüm kırmızı yay belirgin olsun)
        .outerRadius(radius + 3) // Dış yarıçap
        .startAngle(0)
        .endAngle(1); // 57 dereceye kadar yay

    svg2.append("path")
        .attr("d", arcGenerator)
        .attr("fill", "red")
        .attr("transform", `translate(${centerX}, ${centerY}) rotate(33)`);
    // **ClipPath (Küçük çemberin sadece 57°'yi göstermesini sağlayacak)**

    svg2.append("path")
        .attr(
            "d",
            d3
                .arc()
                .innerRadius(0)
                .outerRadius(smallCircleRadius)
                .startAngle(0)
                .endAngle(angleRad)
        )
        .attr("transform", `translate(${centerX}, ${centerY}) rotate(33)`)
        .attr("fill", "none") // İçini boş bırak
        .attr("stroke", "red") // Kırmızı renk yap (Test için)
        .attr("stroke-width", 2);

    svg2.append("text")
        .attr("x", centerX + radius / 2)
        .attr("y", centerY - 10)
        .attr("font-size", "25px")
        .attr("fill", "black")
        .attr("font-weight", 600)
        .attr("text-anchor", "middle")
        .text("r");

    svg2.append("text")
        .attr("x", (centerX + angleX) / 2)
        .attr("y", (centerY + angleY) / 2 - 10)
        .attr("font-size", "25px")
        .attr("fill", "black")
        .attr("font-weight", 600)
        .attr("text-anchor", "middle")
        .text("r");

    svg2.append("text")
        .attr("x", centerX + 46)
        .attr("y", centerY - 15)
        .attr("font-size", "25px")
        .attr("fill", "black")
        .attr("font-weight", 500)
        .attr("text-anchor", "middle")
        .text("θ");

    svg2.append("text")
        .attr("x", centerX + radius)
        .attr("y", centerY - 100)
        .attr("font-size", "25px")
        .attr("fill", "black")
        .attr("font-weight", 600)
        .attr("text-anchor", "middle")
        .text("r");
})();
