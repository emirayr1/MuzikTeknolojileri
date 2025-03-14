(function () {
    let svg2 = d3
        .select("#arctanUcgen")
        .append("svg")
        .attr("width", 300)
        // .style("background-color", "white")
        .attr("height", 300);

    const margin = 40;
    centerX = 150;
    centerY = 150;

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${margin},${300 - margin} ${margin},${margin} ${300 - margin},${
                300 - margin
            }`
        )
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    svg2.append("rect")
        .attr("x", margin)
        .attr("y", 300 - margin - 15)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    svg2.append("circle")
        .attr("cx", margin + 8)
        .attr("cy", 300 - margin - 8)
        .attr("r", 2)
        .attr("stroke", "none")
        .attr("fill", "black");

    svg2.append("path")
        .attr("transform", "translate(40,40) rotate(180, 0, 0)")
        .attr(
            "d",
            d3.arc()({
                innerRadius: 30,
                outerRadius: 28,
                endAngle: -Math.PI / 4, 
                startAngle: 0,
            })
        )
        .attr("fill", "red");

    svg2.append("text")
        .attr("x", margin + 10)
        .attr("y", margin + 45)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .text("θ")

    svg2.append("text")
        .attr("x", centerX - margin / 2)
        .attr("y", 300 - 15)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .text("√3")

    svg2.append("text")
        .attr("x", margin - 20)
        .attr("y", centerY)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .text("1")

    svg2.append("text")
        .attr("x", centerX + 20)
        .attr("y", centerY)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .text("2")
})();
