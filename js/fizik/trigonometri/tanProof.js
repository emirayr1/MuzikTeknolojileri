(function () {
    const width = 300;
    const height = 300;

    let svg2 = d3
        .select("#kucukUcgen")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

    // Çemberin merkezi ve yarıçapı
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 3;

    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + radius + 40)
        .attr("x2", centerX)
        .attr("y2", centerY - radius - 40)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - radius - 40)
        .attr("y1", centerY)
        .attr("x2", centerX + radius + 40)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${3} ${centerX - 7},${10} ${centerX + 7},${10}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + radius + 40 + 7},${centerY} ${centerX + radius + 40},${
                centerY - 7
            } ${centerX + radius + 40},${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${3},${centerY} ${10},${centerY - 7} ${10},${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // alt
        .attr(
            "points",
            `${centerX},${centerY + radius + 40 + 7} ${centerX - 7},${
                centerY + radius + 40
            } ${centerX + 7},${centerY + radius + 40}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // kücük Ücgen
        .attr(
            "points",
            `${centerX},${centerY} ${
                centerX + radius * Math.cos(Math.PI / 4)
            },${centerY} ${centerX + radius * Math.cos(Math.PI / 4)},${
                centerY - radius * Math.sin(Math.PI / 4)
            }`
        )
        .attr("fill", "red")
        .attr("opacity", 0.4)
        .attr("stroke", "red")
        .raise()
        .attr("stroke-width", 2);

    svg2.append("text") // x text
        .attr("x", centerX - radius - 40)
        .attr("y", centerY + 20)
        .attr("font-size", "12px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 20)
        .attr("y", 10)
        .attr("font-size", "12px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX + 25)
        .attr("y", centerY - 5)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("θ");

    svg2.append("text")
        .attr("font-size", "12px")
        .attr("font-weight", 400)
        .attr(
            "transform",
            `translate(${centerX + radius / 1.3}, ${
                centerY - 43
            }) rotate(90, 0, 0)`
        )
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("sinθ");

    svg2.append("text")
        .attr("font-size", "20px")
        .attr("font-weight", 600)
        .attr(
            "transform",
            `translate(${centerX + radius + 50}, ${
                centerY - 85
            }) rotate(90, 0, 0)`
        )
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("tanθ");

    svg2.append("text")
        .attr("x", centerX + 25)
        .attr("y", centerY + 20)
        .attr("font-size", "12px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("cosθ");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY + radius + 50)
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius - 50)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const hipo = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * Math.sin(Math.PI / 2))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const arc = svg2
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

    const sinLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y2", centerY - radius * Math.sin(Math.PI / 4))
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const cosLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(Math.PI / 4))
        .attr("cy", centerY - radius * Math.sin(Math.PI / 4))
        .attr("r", 4)
        .attr("fill", "red");
})();

(function () {
    const width = 300;
    const height = 300;

    let svg2 = d3
        .select("#buyukUcgen")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

    // Çemberin merkezi ve yarıçapı
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 3;

    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + radius + 40)
        .attr("x2", centerX)
        .attr("y2", centerY - radius - 40)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - radius - 40)
        .attr("y1", centerY)
        .attr("x2", centerX + radius + 40)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${3} ${centerX - 7},${10} ${centerX + 7},${10}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + radius + 40 + 7},${centerY} ${centerX + radius + 40},${
                centerY - 7
            } ${centerX + radius + 40},${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${3},${centerY} ${10},${centerY - 7} ${10},${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // alt
        .attr(
            "points",
            `${centerX},${centerY + radius + 40 + 7} ${centerX - 7},${
                centerY + radius + 40
            } ${centerX + 7},${centerY + radius + 40}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // büyük Ücgen
        .attr(
            "points",
            `${centerX},${centerY} ${centerX + radius},${centerY} ${
                centerX + radius
            },${centerY - radius * Math.sin(Math.PI / 2)}`
        )
        .attr("fill", "red")
        .attr("opacity", 0.4)
        .attr("stroke", "red")
        .raise()
        .attr("stroke-width", 2);

    svg2.append("text") // x text
        .attr("x", centerX - radius - 40)
        .attr("y", centerY + 20)
        .attr("font-size", "12px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 20)
        .attr("y", 10)
        .attr("font-size", "12px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX + 25)
        .attr("y", centerY - 5)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("θ");

        svg2.append("text")
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr(
            "transform",
            `translate(${centerX + radius + 35}, ${
                centerY - 65
            }) rotate(90, 0, 0)`
        )
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("tanθ");

    svg2.append("text")
        .attr("x", centerX + 30)
        .attr("y", centerY + 40)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("1 Birim");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY + radius + 50)
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius - 50)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const hipo = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * Math.sin(Math.PI / 2))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const arc = svg2
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

    const sinLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y2", centerY - radius * Math.sin(Math.PI / 4))
        .attr("stroke", "black")
        .attr("opacity", 0.3)
        .attr("stroke-width", 2);

    const cosLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const bracketTan = svg2
        .append("image")
        .attr("href", "../../images/bracket.svg")
        .attr("width", 110)
        .raise()
        .attr("height", 110)
        .attr(
            "transform",
            `translate(${centerX + 60}, ${
                centerY - radius - 5
            }) rotate(0, 0, 0)`
        );

    const bracketR = svg2
        .append("image")
        .attr("href", "../../images/bracket.svg")
        .attr("width", 110)
        .raise()
        .attr("height", 110)
        .attr(
            "transform",
            `translate(${centerX + 105}, ${centerY - 40}) rotate(90, 0, 0)`
        );
})();
