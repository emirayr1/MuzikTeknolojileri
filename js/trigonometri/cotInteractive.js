(function () {
    // Global değişkenler ve fonksiyonlar

    function cot(x){
        return 1 / Math.tan(x);
    }

    let svg2 = d3
        .select("#cotInteractive")
        .append("svg")
        .attr("width", 1500)
        .attr("height", 700);

    // Çemberin merkezi ve yarıçapı
    const centerX = 750;
    const centerY = 300;
    const radius = 150;
    const smallCircleRadius = 20;

    // Birim çemberi çiziyoruz
    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    // Başlangıçta çizilecek çap çizgisi

    const line = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y2", centerY - radius * Math.sin(Math.PI / 4))
        .attr("stroke", "red")
        .attr("stroke-width", 3);

    const tanLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * cot(Math.PI / 4))
        .attr("stroke", "blue")
        .attr("stroke-width", 3);

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(Math.PI / 4))
        .attr("cy", centerY - radius * Math.sin(Math.PI / 4))
        .attr("r", 6)
        .attr("fill", "red")
        .raise();

    const cotAxis = svg2
        .append("line")
        .attr("x1", 20)
        .attr("y1", centerY - radius)
        .attr("x2",  1480)
        .attr("y2", centerY - radius)
        .lower()
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const arcPath = svg2
        .append("path")
        .attr("fill", "grey")
        .attr("oppacity", 0.001);

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", 10)
        .attr("x2", centerX)
        .attr("y2", 590)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - 290)
        .attr("y1", centerY)
        .attr("x2", centerX + 290)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${0} ${centerX - 10},${10} ${centerX + 10},${10}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + 300},${centerY} ${/* 700 - 10 */ centerX + 290},${centerY - 10} ${centerX + 290},${
                centerY + 10
            }`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${centerX - 290},${centerY} ${centerX - 280},${centerY - 10} ${centerX - 280},${centerY + 10}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // alt
        .attr(
            "points",
            `${centerX},${600} ${centerX - 10},${590} ${centerX + 10},${590}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", centerX + 290)
        .attr("y", centerY + 40)
        .attr("font-size", "24px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 20)
        .attr("y", 15)
        .attr("font-size", "22px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    let isDragging = false;

    // Fare basıldığında (mousedown) drag işlemini başlat
    svg2.on("mousedown", (event) => {
        isDragging = true;
        updateLine(event);
    });

    // Fare hareket ettiğinde (mousemove) çizgiyi güncelle
    svg2.on("mousemove", (event) => {
        if (isDragging) {
            updateLine(event);
        }
    });

    // Fare bırakıldığında (mouseup) drag işlemini durdur
    svg2.on("mouseup", () => {
        isDragging = false;
    });

    // Çizgiyi güncelleyen fonksiyon
    function updateLine(event) {
        const [mouseX, mouseY] = d3.pointer(event);

        // Merkezden fareye olan açıyı hesapla
        const angleCircle = Math.atan2(mouseY - centerY, mouseX - centerX);

        let angleDegrees = -1 * angleCircle * (180 / Math.PI);
        if (angleDegrees < 0) {
            angleDegrees += 360;
        }

        let angleCircleTransform = -1 * angleDegrees * (Math.PI / 180);

        const arcGenerator = d3
            .arc()
            .innerRadius(0) // İç yarıçap
            .outerRadius(smallCircleRadius) // Dış yarıçap (küçük çemberin yarıçapı)
            .startAngle(0) // Başlangıç açısı
            .endAngle(angleCircleTransform); // Son açı (yavaşça büyüyen dilim)

        // Küçük çemberin diliminin yolunu çiz
        arcPath
            .attr("d", arcGenerator)
            .attr("opacity", 0.4)
            .attr("transform", `translate(${centerX}, ${centerY}) rotate(90)`); // Çevreyi merkeze taşır

        distanceCos = Math.cos(angleCircle);
        distanceSin = -1 * Math.sin(angleCircle);

        const newX2 = centerX + radius * Math.cos(angleCircle);
        const newY2 = centerY + radius * Math.sin(angleCircle);

        //console.log(Math.sin(-angleCircle))

        line.attr("x2", newX2).attr("y2", newY2);

        console.log("angleCircle",angleCircleTransform)
        point.attr("cx", newX2).attr("cy", newY2);

        tanLine
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", centerX + radius * cot(-angleCircleTransform))
            .attr("y2", centerY - radius);

        // 300den küçük olursa solda demek 550 max sağ 50 max sol NEWX2
    }
})();
