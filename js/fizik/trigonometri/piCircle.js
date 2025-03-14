(function () {
    let svg2 = d3
        .select("#piCircle")
        .append("svg")
        .attr("width", 220)
        .attr("height", 220);

    // Çemberin merkezi ve yarıçapı
    const centerX = 110;
    const centerY = 110;
    const radius = 100;

    const circle = svg2
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", "2");

    const line = svg2
        .append("line")
        .attr("x1", centerX - radius)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY)
        .attr("stroke", "red")
        .attr("stroke-width", 2);
})();
