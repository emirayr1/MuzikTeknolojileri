(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#birimçemberSin2")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 700);

    // Çemberin merkezi ve yarıçapı
    const centerX = 300;
    const centerY = 300;
    const radius = 200;
    const smallCircleRadius = 20;
    const angle = (45 * Math.PI) / 180;

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
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY - radius * Math.sin(angle))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const lineDash = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY - radius * Math.sin(angle))
        .attr("stroke", "blue")
        .attr("stroke-width", 4);

    const ortogonalRect = svg2
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle) - 20)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const ortRectPoint = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle) - 10)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc = svg2
        .append("path")
        .attr("transform", `translate(${centerX}, ${centerY}) rotate(90, 0, 0)`)
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 4,
            })
        );

    const degreeArcText = svg2
        .append("text")
        .attr("x",centerX + 30)
        .attr("y",centerY - 8)
        .attr("font-size", "24px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("α");

    const koordinatText = svg2
        .append("text")
        .attr("x",centerX + radius * Math.cos(angle) + 8)
        .attr("y",centerY - radius * Math.sin(angle) - 5)
        .attr("font-size", "20px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(x, sinα)");

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle))
        .attr("cy", centerY - radius * Math.sin(angle))
        .attr("r", 5)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();

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
})();
