(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#cos45tri")
        .append("svg")
        .attr("width", 280)
        .attr("height", 250);

    // Çemberin merkezi ve yarıçapı
    const centerX = 125;
    const centerY = 125;

    const blueLine = svg2
        .append("line")
        .attr("x1", centerX + 60)
        .attr("y1", centerY + 1)
        .attr("x2", centerX + 60)
        .attr("y2", centerY - 121)
        .attr("stroke", "red")
        .raise()
        .attr("stroke-width", 4);

    const blueLine2 = svg2
        .append("line")
        .attr("x1", centerX - 60)
        .attr("y1", centerY + 1)
        .attr("x2", centerX + 60)
        .attr("y2", centerY + 1)
        .attr("stroke", "red")
        .raise()
        .attr("stroke-width", 4);

    svg2.append("polygon")
        .attr(
            "points",
            `${centerX - 60},${centerY} ${centerX + 60},${centerY} ${
                centerX + 60
            },${centerY - 120}`
        )
        .attr("fill", "none")
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    svg2.append("rect")
        .attr("x", centerX + 40)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower()
        .attr("fill", "none");

    svg2.append("circle")
        .attr("cx", centerX + 50)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const arcPath45 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX - 60}, ${centerY}) rotate(90, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 4,
            })
        );

    const arcPath60 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX + 62}, ${centerY - 120}) rotate(230, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 4,
            })
        );

    const degreeArcText45 = svg2
        .append("text")
        .attr("x", centerX - 30)
        .attr("y", centerY - 6)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("45°");

    const degreeArcText45_2 = svg2
        .append("text")
        .attr("x", centerX + 30)
        .attr("y", centerY - 70)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("45°");

    const oppText = svg2
        .append("text")
        .attr("x", centerX + 75)
        .attr("y", centerY - 50)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none");

    const adjacentText = svg2
        .append("text")
        .attr("x", centerX)
        .attr("y", centerY + 20)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none");

    adjacentText
        .append("tspan")
        .attr("x", centerX - 6)
        .attr("dy", "5") // Üst kısmı yukarı al
        .text("√2");

    adjacentText
        .append("tspan")
        .attr("x", centerX - 4)
        .attr("dy", "10") // Alt kısmı aşağı al
        .text("—"); // Kesir çizgisi

    adjacentText.append("tspan").attr("x", centerX).attr("dy", "10").text("2");

    oppText
        .append("tspan")
        .attr("dy", "5") // Üst kısmı yukarı al
        .text("√2");

    oppText
        .append("tspan")
        .attr("dx", "-12")
        .attr("dy", "10") // Alt kısmı aşağı al
        .text("—"); // Kesir çizgisi

    oppText.append("tspan").attr("dy", "10").attr("dx", "-12").text("2");

    const hipText = svg2
        .append("text")
        .attr("x", centerX - 35)
        .attr("y", centerY - 65)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("1");
})();
