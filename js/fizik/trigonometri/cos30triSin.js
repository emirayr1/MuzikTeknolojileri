(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#cos30triSin")
        .append("svg")
        .attr("width", 280)
        .attr("height", 250);

    // Çemberin merkezi ve yarıçapı
    const centerX = 125;
    const centerY = 125;

    const blueLine = svg2
        .append("line")
        .attr("x1", centerX - 100)
        .attr("y1", centerY + 1)
        .attr("x2", centerX + 100)
        .attr("y2", centerY + 1)
        .attr("stroke", "red")
        .raise()
        .attr("stroke-width", 4);

    svg2.append("polygon")
        .attr(
            "points",
            `${centerX - 100},${centerY} ${centerX + 100},${centerY} ${
                centerX + 100
            },${centerY - 100}`
        )
        .attr("fill", "none")
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    svg2.append("rect")
        .attr("x", centerX + 100 - 20)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower()
        .attr("fill", "none");

    svg2.append("circle")
        .attr("cx", centerX + 100 - 10)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const arcPath30 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX - 95}, ${centerY}) rotate(90, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 6,
            })
        );

    const arcPath60 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX + 106}, ${centerY - 98}) rotate(260, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 3,
            })
        );

    const degreeArcText30 = svg2
        .append("text")
        .attr("x", centerX - 60)
        .attr("y", centerY - 4)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("30°");

    const degreeArcText60 = svg2
        .append("text")
        .attr("x", centerX + 68)
        .attr("y", centerY - 62)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("60°");

    const oppText = svg2
        .append("text")
        .attr("x", centerX + 100 + 15)
        .attr("y", centerY - 50)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("0.5");

    const adjacentText = svg2
        .append("text")
        .attr("x", centerX)
        .attr("y", centerY + 20)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("0.5√3");

    const hipText = svg2
        .append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - 65)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("1");

    const arrowAngle30 = svg2
        .append("line")
        .attr("x1", centerX + 70)
        .attr("y1", centerY - 55)
        .attr("x2", centerX + 40)
        .attr("y2", centerY - 20)
        .attr("stroke", "blue")
        .attr("stroke-width", 3);

    const arrowTriangle30 = svg2
        .append("polygon") // üst
        .attr(
            "points",
            `${centerX + 35},${centerY - 25} ${
                centerX + 45
            },${centerY - 15} ${centerX + 32},${centerY - 10}`
        )
        .attr("fill", "blue")
        .attr("stroke", "none")
        .attr("stroke-width", 3);
})();
