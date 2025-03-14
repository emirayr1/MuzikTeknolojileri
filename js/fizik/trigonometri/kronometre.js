(function () {
    let svg2 = d3
        .select("#kronometre")
        .append("svg")
        .attr("width", 400)
        // .style("background-color", "white")
        .attr("height", 500);

    // Çemberin merkezi ve yarıçapı
    const centerX = 200;
    const centerY = 280;
    const radius = 180;
    const leftGroup = svg2.append("g");
    const rightGroup = svg2.append("g");

    
    const outCircle = svg2
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "#808080")
        .attr("stroke", "black")
        .attr("stroke-width", "2");

    const inCircle = svg2
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", 150)
        .attr("fill", "#F8EFCA")
        .attr("stroke", "#5a5a5a")
        .attr("stroke-width", "8");

    const middleRect = svg2
        .append("rect")
        .attr("x", centerX - 30)
        .attr("y", centerY - radius - 30)
        .attr("width", 60)
        .attr("height", 100)
        .attr("fill", "#9a9a9a")
        .lower();

    const middleRectTop = svg2
        .append("rect")
        .attr("x", centerX - 50)
        .attr("y", centerY - radius - 78)
        .attr("width", 100)
        .attr("height", 50)
        .attr("fill", "#88858e")
        .lower();


    const leftRect = leftGroup
        .append("rect")
        .attr("x", centerX - 120)
        .attr("y", centerY - radius - 30)
        .attr("width", 30)
        .attr("height", 40)
        .attr("fill", "#9a9a9a")
        .lower();

    const leftRectTop = leftGroup
        .append("rect")
        .attr("x", centerX - 130)
        .attr("y", centerY - radius - 49)
        .attr("width", 50)
        .attr("height", 20)
        .attr("fill", "#88858e")
        .lower();

    const rightRect = rightGroup
        .append("rect")
        .attr("x", centerX + 90)
        .attr("y", centerY - radius - 30)
        .attr("width", 30)
        .attr("height", 40)
        .attr("fill", "#9a9a9a")
        .lower();

    const rightRectTop = rightGroup
        .append("rect")
        .attr("x", centerX + 80)
        .attr("y", centerY - radius - 49)
        .attr("width", 50)
        .attr("height", 20)
        .attr("fill", "#88858e")
        .lower();

    function lineDrawer(x, y, width, height, num) {
        for (let i = 0; i < num; ++i) {
            svg2.append("line")
                .attr("x1", x - (width / 2 - 10) + 20 * i)
                .attr("y1", y - 1)
                .attr("x2", x - (width / 2 - 10) + 20 * i)
                .attr("y2", y - height)
                .attr("stroke", "black")
                .attr("stroke-width", "4");
        }
    }
    lineDrawer(centerX, centerY - radius - 28, 100, 50, 5);

    for (let i = 0; i < 5; ++i) {
        rightGroup
            .append("line")
            .attr("x1", centerX + 87 + 9 * i)
            .attr("y1", centerY - radius - 48)
            .attr("x2", centerX + 87 + 9 * i)
            .attr("y2", centerY - radius - 30)
            .attr("stroke", "black")
            .attr("stroke-width", 2);

        leftGroup
            .append("line")
            .attr("x1", centerX - 123 + 9 * i)
            .attr("y1", centerY - radius - 48)
            .attr("x2", centerX - 123 + 9 * i)
            .attr("y2", centerY - radius - 30)
            .attr("stroke", "black")
            .attr("stroke-width", 2);
    }

    leftGroup.attr("transform", `translate(${centerX - 240}, ${centerY - 165}) rotate(325)`);
    rightGroup.attr("transform", `translate(${centerX - 105}, ${centerY - 370}) rotate(30)`);
})();
