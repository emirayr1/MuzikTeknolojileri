(function () {
    let svg2 = d3
        .select("#tableCot")
        .append("svg")
        .attr("width", 450)
        // .style("background-color", "white")
        .attr("height", 500);

    // Çemberin merkezi ve yarıçapı
    const centerX = 225;
    const centerY = 250;

    const inRect = svg2
        .append("rect")
        .attr("x", 20)
        .attr("y", 40)
        .attr("width", 410)
        .attr("height", 410)
        .attr("rx", 20)
        .attr("ry", 20)
        .attr("fill", "#f8ed9e");

    const outRect = svg2
        .append("rect")
        .attr("x", 15)
        .attr("y", 50)
        .attr("width", 420)
        .attr("height", 420)
        .attr("rx", 20)
        .attr("ry", 20)
        .lower()
        .attr("fill", "#67c5de");

    for(let i = 0; i < 11; ++i){
        svg2.append("line")
            .attr("x1", 20)
            .attr("y1", 100 + i * 31)
            .attr("x2", 430)
            .attr("y2", 100 + i * 31)
            .attr("opacity",0.2)
            .attr("stroke", "grey")
            .attr("stroke-width", 2);
    }

    const rectGroup = svg2.append("g").raise();

    for (let i = 0; i < 8; ++i){
        rectGroup.append("rect")
            .attr("x", 70 + i * 40)
            .attr("y", 50)
            .attr("width", 20)
            .attr("height", 20)
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("fill","#fafbf9");

        rectGroup.append("rect")
            .attr("x", 70 + i * 40)
            .attr("y", 55)
            .attr("width", 20)
            .attr("height", 20)
            .attr("rx", 5)
            .attr("ry", 5)
            .lower()
            .attr("fill","#604c29");

        rectGroup.append("line")
            .attr("x1", 76 + i * 40)
            .attr("y1", 32)
            .attr("x2", 76 + i * 40)
            .attr("y2", 65)
            .attr("stroke", "black")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 5)

        rectGroup.append("line")
            .attr("x1", 83 + i * 40)
            .attr("y1", 32)
            .attr("x2", 83 + i * 40)
            .attr("y2", 65)
            .attr("stroke", "black")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 5)
    }
})();
