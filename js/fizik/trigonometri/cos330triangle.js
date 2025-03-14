(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#cos330tri")
        .append("svg")
        .attr("width", 280)
        .attr("height", 250);

    // Çemberin merkezi ve yarıçapı
    const centerX = 125;
    const centerY = 125;

    const redLine = svg2
        .append("line")
        .attr("x1", centerX - 100)
        .attr("y1", centerY + 1)
        .attr("x2", centerX + 100)
        .attr("y2", centerY + 1)
        .attr("stroke", "blue")
        .raise()
        .attr("stroke-width", 6);

    svg2.append("polygon")
        .attr(
            "points",
            `${centerX - 100},${centerY} ${centerX + 100},${centerY} ${
                centerX - 100
            },${centerY - 100}`
        )
        .attr("fill", "none")
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    svg2.append("rect")
        .attr("x", centerX - 100)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower()
        .attr("fill", "none");

    svg2.append("circle")
        .attr("cx", centerX - 90)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const arcPath30 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX + 90}, ${centerY}) rotate(305, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 6,
            })
        )
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 0);

    const arcPath60 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX - 100}, ${centerY - 100}) rotate(180, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 3,
            })
        )
        .attr("fill", "black")
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 0);

    const degreeArcText60 = svg2
        .append("text")
        .attr("x", centerX - 90)
        .attr("y", centerY - 60)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("60°");

    const degreeArcText30 = svg2
        .append("text")
        .attr("x", centerX + 35)
        .attr("y", centerY - 5)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("30°");

    const oppText = svg2
        .append("text")
        .attr("x", centerX - 126)
        .attr("y", centerY - 50)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("0.5");

    const adjacentText = svg2
        .append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY + 25)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("0.5√3");

    const hipText = svg2
        .append("text")
        .attr("x", centerX)
        .attr("y", centerY - 65)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("1");
})();
