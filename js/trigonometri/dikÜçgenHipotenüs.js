(function () {

    let svg = d3.select('#dikUcgenHipotenus')
        .append('svg')
        .attr('width', 600)
        .attr('height', 600);

    const centerX = 100;
    const centerY = 300;

    svg.append("polygon")
        .attr("points", `${centerX},${centerY + 200} ${centerX},${centerY - 200} ${centerX + 200},${centerY + 200}`)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5);

    const clipPath = svg.append("defs")
        .append("clipPath")
        .attr("id", "dikClip");

    clipPath.append("polygon")
        .attr("points", `${centerX},${centerY + 200} ${centerX},${centerY - 200} ${centerX + 200},${centerY + 200}`)


    svg.append("rect")
        .attr("x", centerX)
        .attr("y", centerY + 172)  //21
        .attr("width", 28)
        .attr("height", 28)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5);


    svg.append("circle")
        .attr("cx", centerX + 6)  // + 6
        .attr("cy", centerY - 167)  // -30
        .attr("r", 20)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5)
        .attr("clip-path", "url(#dikClip)");

    svg.append("circle")
        .attr("cx", centerX + 190) // + 140
        .attr("cy", centerY + 195) // + 145
        .attr("r", 20)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5)
        .attr("clip-path", "url(#dikClip)");

    svg.append("circle")
        .attr("cx", centerX + 14) // + 140
        .attr("cy", centerY + + 186) // + 145
        .attr("r", 1)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5)
        .attr("clip-path", "url(#dikClip)");

    svg.append("text")
        .attr("x", centerX + 8) // Alfanın konumu (X ekseni)
        .attr("y", centerY - 115) // Alfanın konumu (Y ekseni)
        .attr("font-size", "28px")
        .attr("font-weight", 700)
        .attr("fill", "red")
        .text("α");

    // Beta açısını ekle
    svg.append("text")
        .attr("x", centerX + 150) // Betanın konumu (X ekseni)
        .attr("y", centerY + 180) // Betanın konumu (Y ekseni)
        .attr("font-size", "28px")
        .attr("font-weight", 700)
        .attr("fill", "red")
        .text("β");



    // Üçgenin kenarlarına harf ekle
    svg.append("text")
        .attr("x", centerX + 90) // A'nın konumu (X ekseni)
        .attr("y", centerY + 240) // A'nın konumu (Y ekseni)
        .attr("font-size", "28px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .text("A");

    svg.append("text")
        .attr("x", centerX - 50) // B'nin konumu (X ekseni)
        .attr("y", centerY + 25) // B'nin konumu (Y ekseni)
        .attr("font-size", "28px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .text("B");

    svg.append("text")
        .attr("x", centerX + 140) // C'nin konumu (X ekseni)
        .attr("y", centerY + 25) // C'nin konumu (Y ekseni)
        .attr("font-size", "28px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .text("C");


})();