(function () {
    let svg2 = d3
        .select("#derece_cember")
        .append("svg")
        .attr("width", 950)
        .attr("height", 400);

    // Çemberin merkezi ve yarıçapı
    const arrowGroup = svg2.append("g");
    const zoomGroup = svg2.append("g");

    const centerX = 200;
    const centerY = 200;
    const radius = 150;
    const zoomRadius = 1.7 * radius;
    const gap = 100;
    const arrowLenght = 100;
    const triLenght = 10;
    const arrowEndPos = centerX + radius + gap + arrowLenght + triLenght;

    // **Birim çemberi çiziyoruz**
    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5);

    // **Başlangıçta çizilecek yarıçap çizgisi**

    for (let i = 0; i < 72; ++i) {
        svg2.append("line")
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", centerX + radius * Math.cos(5 * i * (Math.PI / 180)))
            .attr("y2", centerY - radius * Math.sin(5 * i * (Math.PI / 180)))
            .attr("stroke", "black")
            .attr("stroke-width", 0.2);
    }

    arrowGroup
        .append("line")
        .attr("x1", centerX + radius + gap)
        .attr("y1", centerY)
        .attr("x2", centerX + radius + gap + arrowLenght)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "black");

    arrowGroup
        .append("polygon")
        .attr(
            "points",
            `${centerX + radius + gap + arrowLenght},${centerY - triLenght} ${
                centerX + radius + gap + arrowLenght
            },${centerY + triLenght} ${
                centerX + radius + gap + arrowLenght + triLenght
            },${centerY}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    zoomGroup
        .append("line")
        .attr("x1", arrowEndPos + gap)
        .attr("y1", centerY)
        .attr("x2", arrowEndPos + gap + zoomRadius)
        .attr("y2", centerY + zoomRadius * Math.sin(Math.PI / 30))
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    zoomGroup
        .append("line")
        .attr("x1", arrowEndPos + gap)
        .attr("y1", centerY)
        .attr("x2", arrowEndPos + gap + zoomRadius)
        .attr("y2", centerY - zoomRadius * Math.sin(Math.PI / 30))
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    zoomGroup
        .append("path")
        .attr(
            "transform",
            `translate(${arrowEndPos + gap}, ${centerY - 10}) rotate(90, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 100,
                outerRadius: 102,
                startAngle: 0,
                endAngle: Math.PI / 15,
            })
        )
        .attr("fill", "black")
        .attr("stroke", "black")
        .attr("stroke-width", 1);

    zoomGroup.append("text")
        .attr("x", arrowEndPos + gap + 130)
        .attr("y", centerY + 6)
        .attr("font-size", "17px")
        .attr("font-weight", "500")
        .text("1°")
})();
