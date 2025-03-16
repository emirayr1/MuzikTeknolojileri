(function () {
    // Global değişkenler ve fonksiyonlar
    const width = 500;
    const height = 500;

    let svg2 = d3
        .select("#firstVector")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const centerX = width / 2;
    const centerY = height / 2;
    const margin = 100;
    const xLine = width - 2 * margin;
    const yLine = height - 2 * margin;
    const length = xLine / 3; // Doğrunun uzunluğu sabit kalmalı
    const dogruX2 = centerX + length * Math.cos(Math.PI / 4);
    const dogruY2 = centerY - length * Math.sin(Math.PI / 4);
    const initialAngleDeg = 75; // 45 derece

    // y line
    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + height / 2 - margin)
        .attr("x2", centerX)
        .attr("y2", centerY - height / 2 + margin)
        .attr("stroke", "black")
        .attr("stroke-width", 1);

    // x line
    svg2.append("line")
        .attr("x1", centerX - width / 2 + margin)
        .attr("y1", centerY)
        .attr("x2", centerX + width / 2 - margin)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 1);

    // doğru
    const dogru = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", dogruX2)
        .attr("y2", dogruY2)
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const xİzDüs = svg2
        .append("line")
        .attr("x1", dogruX2)
        .attr("y1", dogruY2)
        .attr("x2", dogruX2)
        .attr("y2", centerY)
        .attr("stroke", "red")
        .attr("opacity", 0.3)
        .attr("stroke-width", 3);

    const yİzDüs = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", dogruX2)
        .attr("y2", centerY)
        .attr("opacity", 0.3)
        .attr("stroke", "blue")
        .raise()
        .attr("stroke-width", 3);

    const kuzey = svg2
        .append("text")
        .attr("x", centerX - 24)
        .attr("y", centerY - yLine / 2 - 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("Kuzey");
    const güney = svg2
        .append("text")
        .attr("x", centerX - 28)
        .attr("y", centerY + yLine / 2 + 25)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("Güney");
    const batı = svg2
        .append("text")
        .attr("x", centerX - xLine / 2 - 70)
        .attr("y", centerY + 5)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("Batı");
    const doğu = svg2
        .append("text")
        .attr("x", centerX + xLine / 2 + 28)
        .attr("y", centerY + 5)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("Doğu");

    const texts = svg2.append("g");

    const angleArc = texts
        .append("path")
        .attr("transform", `translate(${centerX}, ${centerY}) rotate(90, 0, 0)`)
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 4,
            })
        );

    const thetaText = texts
        .append("text")
        .attr("x", centerX + 30)
        .attr("y", centerY - 10)
        .attr("font-size", "16px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("θ");


    axisTriL = svg2
        .append("polygon")
        .attr(
            "points",
            `${centerX - xLine / 2},${centerY - 5} ${
                centerX - xLine / 2 - 5
            },${centerY} ${centerX - xLine / 2},${centerY + 5}`
        )
        .attr("stroke", "black")
        .attr("stroke-width", 2);
    axisTriR = svg2
        .append("polygon")
        .attr(
            "points",
            `${centerX + xLine / 2},${centerY + 5} ${
                centerX + xLine / 2 + 5
            },${centerY} ${centerX + xLine / 2},${centerY - 5}`
        )
        .attr("stroke", "black")
        .attr("stroke-width", 2);
    axisTriU = svg2
        .append("polygon")
        .attr(
            "points",
            `${centerX},${centerY - yLine / 2 - 5} ${centerX - 5},${
                centerY - yLine / 2
            } ${centerX + 5},${centerY - yLine / 2}`
        )
        .attr("stroke", "black")
        .attr("stroke-width", 2);
    axisTriD = svg2
        .append("polygon")
        .attr(
            "points",
            `${centerX},${centerY + yLine / 2 + 5} ${centerX - 5},${
                centerY + yLine / 2
            } ${centerX + 5},${centerY + yLine / 2}`
        )
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const triangleGroup = svg2.append("g");

    const triangle = triangleGroup
        .append("polygon") 
        .attr("points", "0,0 -16,8 -14,-8")
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3)
        .attr("transform", "translate(10, 0)");

    triangleGroup.attr(
        "transform",
        `translate(${dogruX2}, ${dogruY2}) rotate(${70})`
    );
})();
