(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#birimçemberCos")
        .append("svg")
        .attr("width", 2000)
        // .style("background-color","white")
        .attr("height", 700);

    // Çemberin merkezi ve yarıçapı
    const centerX = 300;
    const centerY = 300;
    const radius = 250;
    const smallCircleRadius = 20;
    const tapeWidth = 20;
    const gripHeight = 10;

    // Birim çemberi çiziyoruz
    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5);

    // Başlangıçta çizilecek çap çizgisi
    const line = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY)
        .attr("stroke", "red")
        .lower()
        .attr("stroke-width", 2);

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius)
        .attr("cy", centerY)
        .attr("r", 8)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 4)
        .raise();

    dashLinesC = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-dasharray", "10,5")
        .attr("stroke-width", 2);

    const sinLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY)
        .lower()
        .attr("stroke", "blue")
        .attr("stroke-width", 10);

    const sinLine2 = svg2
        .append("line")
        .attr("x1", centerX + 750 + radius)
        .attr("y1", centerY - 20)
        .attr("x2", centerX + radius + 750 + radius)
        .attr("y2", centerY - 20)
        .attr("stroke", "blue")
        .attr("stroke-width", 10);

    const smallCircle = svg2
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", smallCircleRadius) // Küçük çemberin yarıçapı
        .attr("fill", "none")
        .attr("stroke", "none")
        .attr("stroke-width", 5)
        .attr("oppacity", 0);

    const smallCircleY = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + smallCircleRadius)
        .attr("y2", centerY)
        .attr("fill", "none")
        .attr("stroke", "none")
        .attr("oppacity", 0);

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
        .attr("x1", 10)
        .attr("y1", centerY)
        .attr("x2", 590)
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
            `${600},${centerY} ${/* 700 - 10 */ 590},${centerY - 10} ${590},${
                centerY + 10
            }`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${0},${centerY} ${10},${centerY - 10} ${10},${centerY + 10}`
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
        .attr("x", 600)
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

    // cetvel

    const tapeContainer = svg2
        .append("g")
        .attr("id", "tapeContainer")
        .attr(
            "transform",
            `translate(${centerX + radius + 700}, ${centerY + 100})`
        );

    const body = tapeContainer
        .append("rect")
        .attr("x", -250)
        .attr("y", -50)
        .attr("width", 600)
        .attr("height", 50)
        .attr("rx", 20)
        .attr("ry", 20)
        .attr("fill", "#c9c5c5")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const leftGroup = tapeContainer
        .append("g")
        .attr("class", "leftGroup")
        .attr("transform", "translate(0, 0)");

    const leftStick = leftGroup
        .append("rect")
        .attr("x", 0)
        .attr("y", -50)
        .attr("width", 50)
        .attr("height", 150)
        .attr("rx", 20)
        .attr("ry", 20)
        .attr("fill", "#808080");

    const leftTriangle = leftGroup
        .append("polygon")
        .attr("points", "0,-37 50,-100 50,0") // Örneğin, dikdörtgenin üst kısmına oturan bir üçgen
        .attr("fill", "#808080");

    const rightGroup = tapeContainer
        .append("g")
        .attr("class", "rightGroup")
        .attr("transform", "translate(2, 0)");

    const rightStick = rightGroup
        .append("rect")
        .attr("x", 300)
        .attr("y", -50)
        .attr("width", 50)
        .attr("height", 150)
        .attr("rx", 20)
        .attr("ry", 20)
        .attr("fill", "#808080");

    const rightTriangle = rightGroup
        .append("polygon")
        .attr("points", "350,-37 300,-100 300,0")
        .attr("fill", "#808080");

    // ölçüm grup
    const rectGroup = tapeContainer.append("g").attr("class", "rectGroup");

    // Yeni grup içine dikdörtgen ekleyelim:
    rectGroup
        .append("rect")
        .attr("x", 275)
        .attr("y", 30)
        .attr("width", 100)
        .attr("height", 50)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "#1c1f1d");

    rectGroup
        .append("rect")
        .attr("x", 290)
        .attr("y", 35)
        .attr("width", 70)
        .attr("height", 40)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "#8f9491");

    rectGroup
        .append("rect")
        .attr("x", 297)
        .attr("y", 0)
        .attr("width", 60)
        .attr("height", 30)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .attr("fill", "#1c1f1d");

    altText = rectGroup
        .append("text")
        .attr("x", 315)
        .attr("y", 60)
        .attr("font-size", "18px")
        .attr("font-weight", "700")
        .text("1.0");

    üstText = rectGroup
        .append("text")
        .attr("x", 320)
        .attr("y", 20)
        .attr("font-size", "15px")
        .attr("font-weight", "700")
        .attr("fill", "white")
        .text("0°");

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

        const sNewX2 = centerX + smallCircleRadius * Math.cos(angleCircle);
        const sNewY2 = centerY + smallCircleRadius * Math.sin(angleCircle);

        //console.log(Math.sin(-angleCircle))

        line.attr("x2", newX2).attr("y2", newY2);

        point.attr("cx", newX2).attr("cy", newY2);

        sinLine
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", newX2)
            .attr("y2", centerY);

        sinLine2
            .attr("x1", centerX + 750 + radius)
            .attr("y1", centerY - 20)
            .attr("x2", newX2 + 750 + radius)
            .attr("y2", centerY - 20);

        // 300den küçük olursa solda demek 550 max sağ 50 max sol NEWX2

        rightGroup.attr(
            "transform",
            newX2 - 550 > -250
                ? "translate(" + (newX2 - 548) + " , 0)"
                : "translate(-250, 0)"
        );

        leftGroup.attr(
            "transform",
            newX2 - 550 < -250
                ? "translate(" + (newX2 - 302) + " , 0)"
                : "translate(0, 0)"
        );

        let rectRx = newX2 - 550;
        let rectLx = newX2 - 550 - 50;

        rectGroup.attr(
            "transform",
            newX2 > 300
                ? "translate(" + rectRx + ", 0)"
                : "translate(" + rectLx + ", 0)"
        );

        // rectGroup.attr("transform", "translate(0, 0)");

        console.log("bakalım", newX2 > 300 ? 35 : -10);

        altText
            .attr("x", newX2 < 300 ? 300 : 308)
            .text(Math.cos(angleCircle).toFixed(2))

        üstText
            .attr("x", function () {
                let length = angleDegrees.toFixed(0).length;
                return length === 1 ? 320 : length === 2 ? 316 : 311;
            })
            .text(angleDegrees.toFixed(0) + "°");

        dashLinesC
            .attr("x1", newX2)
            .attr("y1", newY2)
            .attr("x2", newX2)
            .lower()
            .attr("y2", centerY);

        smallCircleY.attr("x2", sNewX2).attr("y2", sNewY2);
    }
})();
