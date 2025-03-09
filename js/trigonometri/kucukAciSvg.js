(function () {
    let svg2 = d3
        .select("#pozitifAciKucuk")
        .append("svg")
        .attr("width", 50)
        // .style("background-color", "white")
        .attr("height", 30);

    const arc = svg2
        .append("path")
        .attr(
            "d",
            d3
                .arc()
                .innerRadius(18)
                .outerRadius(20)
                .startAngle(0)
                .endAngle(-Math.PI / 1.5)
        )
        .attr("transform", `translate(${25}, ${25}) rotate(90)`)
        .attr("fill", "none") // İçini boş bırak
        .attr("stroke", "red") // Kırmızı renk yap (Test için)
        .attr("stroke-width", 2);

    const tri = svg2
        .append("polygon") // üst
        .attr(
            "points",
            `${17},${12} ${12},${7} ${
                12
            },${12}`
        )
        .attr("fill", "black")
        .attr("stroke", "black")
        .attr("stroke-width", 3);
})();

(function () {
    let svg2 = d3
        .select("#negatifAciKucuk")
        .append("svg")
        .attr("width", 50)
        // .style("background-color", "white")
        .attr("height", 30);

    const arc = svg2
        .append("path")
        .attr(
            "d",
            d3
                .arc()
                .innerRadius(18)
                .outerRadius(20)
                .startAngle(0)
                .endAngle(Math.PI / 1.5)
        )
        .attr("transform", `translate(${25}, ${2}) rotate(90)`)
        .attr("fill", "none") // İçini boş bırak
        .attr("stroke", "red") // Kırmızı renk yap (Test için)
        .attr("stroke-width", 2);

    const tri = svg2
        .append("polygon") // üst
        .attr(
            "points",
            `${17},${15} ${12},${20} ${
                12
            },${15}`
        )
        .attr("fill", "black")
        .attr("stroke", "black")
        .attr("stroke-width", 3);
})();
