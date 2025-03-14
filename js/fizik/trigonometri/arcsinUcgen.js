(function () {
    let svg2 = d3
        .select("#arcsinUcgen")
        .append("svg")
        .attr("width", 200)
        // .style("background-color", "white")
        .attr("height", 190);

    const margin = 40;
    centerX = 100;
    centerY = 100;

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${margin},${200 - margin} ${margin},${margin} ${200 - margin},${
                200 - margin
            }`
        )
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    svg2.append("rect")
        .attr("x", margin)
        .attr("y", 200 - margin - 15)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    svg2.append("circle")
        .attr("cx", margin + 8)
        .attr("cy", 200 - margin - 8)
        .attr("r", 2)
        .attr("stroke", "none")
        .attr("fill", "black");

    svg2.append("path")
        .attr("transform", "translate(40,40) rotate(180, 0, 0)")
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 18,
                endAngle: -Math.PI / 4, 
                startAngle: 0,
            })
        )
        .attr("fill", "red");

    svg2.append("text")
        .attr("x", margin + 5)
        .attr("y", margin + 35)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .text("θ")

    svg2.append("text")
        .attr("x", centerX - margin / 2)
        .attr("y", 200 - 15)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .text("√3")

    svg2.append("text")
        .attr("x", margin - 20)
        .attr("y", 200 - 90)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .text("1")

    svg2.append("text")
        .attr("x", 200 - margin * 2 + 5)
        .attr("y", 2 * margin + 30)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .text("2")
})();
