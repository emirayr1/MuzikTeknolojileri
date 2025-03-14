
(function () {
    let svg = d3.select('#ücgenAci')
        .append('svg')
        .attr('width', 600)
        .attr('height', 600);

    const centerX = 300;
    const centerY = 300;


    svg.append("polygon")
        .attr("points", `${centerX},${centerY - 150} ${centerX + 150},${centerY + 150} ${centerX - 150},${centerY + 150}`)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5);

    // clipPath Tanımlama
    const clipPath = svg.append("defs")
        .append("clipPath")   // belirli bir alan hariç her yeri görünmez yapıyor bu
        .attr("id", "triangle-clip");


    clipPath.append("polygon")
        .attr("points", `${centerX},${centerY - 150} ${centerX + 150},${centerY + 150} ${centerX - 150},${centerY + 150}`);


    svg.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY - 135) // 15 fark koyduk açıya 
        .attr("r", 20)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5)
        .attr("clip-path", "url(#triangle-clip)");

    svg.append("circle")
        .attr("cx", centerX - 140)
        .attr("cy", centerY + 145) // 15 fark koyduk açıya 
        .attr("r", 20)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5)
        .attr("clip-path", "url(#triangle-clip)");

    svg.append("circle")
        .attr("cx", centerX + 140)
        .attr("cy", centerY + 145) // 15 fark koyduk açıya 
        .attr("r", 20)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5)
        .attr("clip-path", "url(#triangle-clip)");

})();