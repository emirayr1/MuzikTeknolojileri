(function () {
    const width = 300;
    const height = 300;

    let svg2 = d3
        .select("#tan30")
        .append("svg")
        .attr("width", 400)
        // .style("background-color", "white")
        .attr("height", 460);

    // Çemberin merkezi ve yarıçapı
    const centerX = 170;
    const centerY = 270;
    const radius = 120;

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + 40)
        .attr("x2", centerX)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - 60)
        .attr("y1", centerY)
        .attr("x2", centerX + 160)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${0} ${centerX - 7},${7} ${centerX + 7},${7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + 160 + 7},${centerY} ${centerX + 160},${centerY - 7} ${
                centerX + 160
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${centerX - 60},${centerY} ${centerX - 60 + 7},${centerY - 7} ${
                centerX - 60 + 7
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 18)
        .attr("y", centerY + 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 15)
        .attr("y", 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - radius)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX + 28)
        .attr("y", centerY - 4)
        .attr("font-size", "12px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("30°");

    svg2.append("text")
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr(
            "transform",
            `translate(${centerX + radius / 1.3}, ${
                centerY - 46
            }) rotate(90, 0, 0)`
        )
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("sin30°");

    svg2.append("text")
        .attr("x", centerX + radius / 2 - 18)
        .attr("y", centerY + 13)
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr("fill", "blue")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("cos30°");

    svg2.append("text")
        .attr("x", centerX + radius + 30)
        .attr("y", centerY - 30)
        .attr("font-size", "14px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("tan30°");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY + 40)
        .attr("x2", centerX + radius)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const bracket = svg2
        .append("image")
        .attr("href", "../../images/bracket.svg")
        .attr("width", 80)
        .raise()
        .attr("height", 80)
        .attr(
            "transform",
            `translate(${centerX + radius - 28}, ${
                centerY - 76
            }) rotate(0, 0, 0)`
        );

    const hipo = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 6))
        .attr("y2", centerY - radius * Math.sin(Math.PI / 6))
        .attr("stroke", "black")
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
                endAngle: -Math.PI / 6,
            })
        );

    const sinLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(Math.PI / 6))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 6))
        .attr("y2", centerY - radius * Math.sin(Math.PI / 6))
        .attr("stroke", "red")
        .attr("stroke-width", 2);

    const cosLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 6))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 2);

    const tanLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(Math.PI / 6))
        .attr("y1", centerY - radius * Math.sin(Math.PI / 6))
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * Math.tan(Math.PI / 6))
        .attr("stroke", "black")
        .attr("stroke-width", 4);

    const dashLine = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY - radius * Math.tan(Math.PI / 6))
        .attr("x2", centerX)
        .attr("y2", centerY - radius * Math.tan(Math.PI / 6))
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5.5")
        .attr("stroke-width", 2);

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(Math.PI / 6))
        .attr("cy", centerY - radius * Math.sin(Math.PI / 6))
        .attr("r", 3)
        .attr("fill", "red");

    const dividerLine = svg2
        .append("line")
        .attr("x1", centerX - 15)
        .attr("y1", centerY - radius * Math.tan(Math.PI / 6) - 1)
        .attr("x2", centerX - 30)
        .attr("y2", centerY - radius * Math.tan(Math.PI / 6) - 1)
        .attr("stroke", "black")
        .attr("stroke-width", 2);
})();

(function () {
    const width = 300;
    const height = 300;

    let svg2 = d3
        .select("#tan45")
        .append("svg")
        .attr("width", 400)
        // .style("background-color", "white")
        .attr("height", 460);

    // Çemberin merkezi ve yarıçapı
    const centerX = 170;
    const centerY = 270;
    const radius = 120;

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + 40)
        .attr("x2", centerX)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - 60)
        .attr("y1", centerY)
        .attr("x2", centerX + 160)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${0} ${centerX - 7},${7} ${centerX + 7},${7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + 160 + 7},${centerY} ${centerX + 160},${centerY - 7} ${
                centerX + 160
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${centerX - 60},${centerY} ${centerX - 60 + 7},${centerY - 7} ${
                centerX - 60 + 7
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 18)
        .attr("y", centerY + 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 15)
        .attr("y", 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - radius)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX + 25)
        .attr("y", centerY - 7)
        .attr("font-size", "12px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("45°");

    svg2.append("text")
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr(
            "transform",
            `translate(${centerX + radius / 1.3}, ${
                centerY - 60
            }) rotate(90, 0, 0)`
        )
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("sin45°");

    svg2.append("text")
        .attr("x", centerX + radius / 2 - 30)
        .attr("y", centerY + 16)
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr("fill", "blue")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("cos45°");

    svg2.append("text")
        .attr("x", centerX + radius + 40)
        .attr("y", centerY - 55)
        .attr("font-size", "14px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("tan45°");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY + 40)
        .attr("x2", centerX + radius)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const bracket = svg2
        .append("image")
        .attr("href", "../../images/bracket.svg")
        .attr("width", 145)
        .raise()
        .attr("height", 145)
        .attr(
            "transform",
            `translate(${centerX + radius - 55}, ${
                centerY - 133
            }) rotate(0, 0, 0)`
        );

    const hipo = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y2", centerY - radius * Math.sin(Math.PI / 4))
        .attr("stroke", "black")
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
        .attr("stroke", "red")
        .attr("stroke-width", 2);

    const cosLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 2);

    const tanLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y1", centerY - radius * Math.sin(Math.PI / 4))
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * Math.tan(Math.PI / 4))
        .attr("stroke", "black")
        .attr("stroke-width", 4);

    const dashLine = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY - radius * Math.tan(Math.PI / 4))
        .attr("x2", centerX)
        .attr("y2", centerY - radius * Math.tan(Math.PI / 4))
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5.5")
        .attr("stroke-width", 2);

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(Math.PI / 4))
        .attr("cy", centerY - radius * Math.sin(Math.PI / 4))
        .attr("r", 3)
        .attr("fill", "red");
})();

(function () {
    const width = 300;
    const height = 300;

    let svg2 = d3
        .select("#tan60")
        .append("svg")
        .attr("width", 400)
        // .style("background-color", "white")
        .attr("height", 460);

    // Çemberin merkezi ve yarıçapı
    const centerX = 170;
    const centerY = 270;
    const radius = 120;

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + 40)
        .attr("x2", centerX)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - 60)
        .attr("y1", centerY)
        .attr("x2", centerX + 160)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${0} ${centerX - 7},${7} ${centerX + 7},${7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + 160 + 7},${centerY} ${centerX + 160},${centerY - 7} ${
                centerX + 160
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${centerX - 60},${centerY} ${centerX - 60 + 7},${centerY - 7} ${
                centerX - 60 + 7
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 18)
        .attr("y", centerY + 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 15)
        .attr("y", 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - radius)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX + 25)
        .attr("y", centerY - 7)
        .attr("font-size", "12px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("60°");

    svg2.append("text")
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr(
            "transform",
            `translate(${centerX + radius / 1.3 - 25}, ${
                centerY - 60
            }) rotate(90, 0, 0)`
        )
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("sin60°");

    svg2.append("text")
        .attr("x", centerX + radius / 2 - 45)
        .attr("y", centerY + 16)
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr("fill", "blue")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("cos60°");

    svg2.append("text")
        .attr("x", centerX + radius + 62)
        .attr("y", centerY - 100)
        .attr("font-size", "14px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("tan60°");

    svg2.append("text")
        .attr("x", centerX - 24)
        .attr("y", centerY - radius * Math.tan(Math.PI / 3) + 5)
        .attr("font-size", "14px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("√3");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY + 40)
        .attr("x2", centerX + radius)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const bracket = svg2
        .append("image")
        .attr("href", "../../images/bracket.svg")
        .attr("width", 250)
        .raise()
        .attr("height", 250)
        .attr(
            "transform",
            `translate(${centerX + radius - 98}, ${
                centerY - 230
            }) rotate(0, 0, 0)`
        );

    const hipo = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 3))
        .attr("y2", centerY - radius * Math.sin(Math.PI / 3))
        .attr("stroke", "black")
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
                endAngle: -Math.PI / 3,
            })
        );

    const sinLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(Math.PI / 3))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 3))
        .attr("y2", centerY - radius * Math.sin(Math.PI / 3))
        .attr("stroke", "red")
        .attr("stroke-width", 2);

    const cosLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 3))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 2);

    const tanLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(Math.PI / 3))
        .attr("y1", centerY - radius * Math.sin(Math.PI / 3))
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * Math.tan(Math.PI / 3))
        .attr("stroke", "black")
        .attr("stroke-width", 4);

    const dashLine = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY - radius * Math.tan(Math.PI / 3))
        .attr("x2", centerX)
        .attr("y2", centerY - radius * Math.tan(Math.PI / 3))
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5.5")
        .attr("stroke-width", 2);

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(Math.PI / 3))
        .attr("cy", centerY - radius * Math.sin(Math.PI / 3))
        .attr("r", 3)
        .attr("fill", "red");
})();

(function () {
    const width = 300;
    const height = 300;

    let svg2 = d3
        .select("#tan90")
        .append("svg")
        .attr("width", 400)
        // .style("background-color", "white")
        .attr("height", 460);

    // Çemberin merkezi ve yarıçapı
    const centerX = 170;
    const centerY = 270;
    const radius = 120;

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + 40)
        .attr("x2", centerX)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - 60)
        .attr("y1", centerY)
        .attr("x2", centerX + 160)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${0} ${centerX - 7},${7} ${centerX + 7},${7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + 160 + 7},${centerY} ${centerX + 160},${centerY - 7} ${
                centerX + 160
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${centerX - 60},${centerY} ${centerX - 60 + 7},${centerY - 7} ${
                centerX - 60 + 7
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 18)
        .attr("y", centerY + 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 15)
        .attr("y", 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX - 22)
        .attr("y", centerY - radius + 4)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX + 22)
        .attr("y", centerY - 7)
        .attr("font-size", "12px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("90°");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY + 40)
        .attr("x2", centerX + radius)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const angleRect = svg2
        .append("rect")
        .attr("x", centerX + 2)
        .attr("y", centerY - 15)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const angleRectPoint = svg2
        .append("circle")
        .attr("cx", centerX + 9)
        .attr("cy", centerY - 7.5)
        .attr("r", 2)
        .attr("fill", "black");

    const sinLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX)
        .attr("y2", centerY - radius * Math.sin(Math.PI / 2))
        .attr("stroke", "red")
        .attr("stroke-width", 2);

    const cosCircle = svg2
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", 3)
        .attr("stroke", "blue")
        .attr("stroke-width", 2);

    const tanLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX)
        .attr("y2", 0)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    const point = svg2
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY - radius * Math.sin(Math.PI / 2))
        .attr("r", 4)
        .attr("fill", "red");

    svg2.append("text")
        .attr("x", centerX - 26)
        .attr("y", 20)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+∞");
})();

(function () {
    const width = 300;
    const height = 300;

    let svg2 = d3
        .select("#tan150")
        .append("svg")
        .attr("width", 400)
        // .style("background-color", "white")
        .attr("height", 460);

    // Çemberin merkezi ve yarıçapı
    const centerX = 170;
    const centerY = 270;
    const radius = 120;

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + 460)
        .attr("x2", centerX)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - 160)
        .attr("y1", centerY)
        .attr("x2", centerX + 160)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${0} ${centerX - 7},${7} ${centerX + 7},${7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + 160 + 7},${centerY} ${centerX + 160},${centerY - 7} ${
                centerX + 160
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${centerX - 160},${centerY} ${centerX - 160 + 7},${centerY - 7} ${
                centerX - 160 + 7
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 18)
        .attr("y", centerY - 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 15)
        .attr("y", 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - radius)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX + 25)
        .attr("y", centerY - 7)
        .attr("font-size", "12px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("150°");

    svg2.append("text")
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr(
            "transform",
            `translate(${centerX - radius + 10}, ${
                centerY - 15
            }) rotate(270, 0, 0)`
        )
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("sin150°");

    svg2.append("text")
        .attr("x", centerX - radius / 2 - 15)
        .attr("y", centerY + 16)
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr("fill", "blue")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("cos150°");

    svg2.append("text")
        .attr("x", centerX + radius + 30)
        .attr("y", centerY + 40)
        .attr("font-size", "14px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("tan150°");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", 460)
        .attr("x2", centerX + radius)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const bracket = svg2
        .append("image")
        .attr("href", "../../images/bracket.svg")
        .attr("width", 80)
        .raise()
        .attr("height", 80)
        .attr(
            "transform",
            `translate(${centerX + radius - 25}, ${
                centerY - 5
            }) rotate(0, 0, 0)`
        );

    const hipo = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(150 * (Math.PI / 180)))
        .attr("y2", centerY - radius * Math.sin(150 * (Math.PI / 180)))
        .attr("stroke", "black")
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
                endAngle: -150 * (Math.PI / 180),
            })
        );

    const sinLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(150 * (Math.PI / 180)))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(150 * (Math.PI / 180)))
        .attr("y2", centerY - radius * Math.sin(150 * (Math.PI / 180)))
        .attr("stroke", "red")
        .attr("stroke-width", 2);

    const cosLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(150 * (Math.PI / 180)))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 2);

    const tanLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * Math.tan(150 * (Math.PI / 180)))
        .attr("stroke", "black")
        .attr("stroke-width", 4);

    const dashLine = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY - radius * Math.tan(150 * (Math.PI / 180)))
        .attr("x2", centerX)
        .attr("y2", centerY - radius * Math.tan(150 * (Math.PI / 180)))
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5.5")
        .attr("stroke-width", 2);

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(150 * (Math.PI / 180)))
        .attr("cy", centerY - radius * Math.sin(150 * (Math.PI / 180)))
        .attr("r", 3)
        .attr("fill", "red");

    const dividerLine = svg2
        .append("line")
        .attr("x1", centerX - 15)
        .attr("y1", centerY - radius * Math.tan(150 * (Math.PI / 180)) - 1)
        .attr("x2", centerX - 30)
        .attr("y2", centerY - radius * Math.tan(150 * (Math.PI / 180)) - 1)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const minusLine = svg2
        .append("line")
        .attr("x1", centerX - 42)
        .attr("y1", centerY - radius * Math.tan(150 * (Math.PI / 180)) - 1)
        .attr("x2", centerX - 35)
        .attr("y2", centerY - radius * Math.tan(150 * (Math.PI / 180)) - 1)
        .attr("stroke", "red")
        .attr("stroke-width", 2);
})();

(function () {
    const width = 300;
    const height = 300;
    const angle240 = 240 * (Math.PI / 180);

    let svg2 = d3
        .select("#tan240")
        .append("svg")
        .attr("width", 400)
        // .style("background-color", "white")
        .attr("height", 460);

    // Çemberin merkezi ve yarıçapı
    const centerX = 170;
    const centerY = 270;
    const radius = 120;

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + 460)
        .attr("x2", centerX)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - 160)
        .attr("y1", centerY)
        .attr("x2", centerX + 160)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${0} ${centerX - 7},${7} ${centerX + 7},${7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + 160 + 7},${centerY} ${centerX + 160},${centerY - 7} ${
                centerX + 160
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${centerX - 160},${centerY} ${centerX - 160 + 7},${centerY - 7} ${
                centerX - 160 + 7
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 18)
        .attr("y", centerY + 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 15)
        .attr("y", 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - radius)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX + 25)
        .attr("y", centerY - 7)
        .attr("font-size", "12px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("240°");

    svg2.append("text")
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr(
            "transform",
            `translate(${centerX - radius + 50}, ${
                centerY + 70
            }) rotate(270, 0, 0)`
        )
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("sin240°");

    svg2.append("text")
        .attr("x", centerX - radius / 2 - 5)
        .attr("y", centerY - 7)
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr("fill", "blue")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("cos240°");

    svg2.append("text")
        .attr("x", centerX + radius + 53)
        .attr("y", centerY - 100)
        .attr("font-size", "14px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("tan240°");

    svg2.append("text")
        .attr("x", centerX - 24)
        .attr("y", centerY - radius * Math.tan(angle240) + 5)
        .attr("font-size", "14px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("√3");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", 460)
        .attr("x2", centerX + radius)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const bracket = svg2
        .append("image")
        .attr("href", "../../images/bracket.svg")
        .attr("width", 250)
        .raise()
        .attr("height", 250)
        .attr(
            "transform",
            `translate(${centerX + radius - 98}, ${
                centerY - 230
            }) rotate(0, 0, 0)`
        );

    const hipo = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle240))
        .attr("y2", centerY - radius * Math.sin(angle240))
        .attr("stroke", "black")
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
                endAngle: -angle240,
            })
        );

    const sinLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle240))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle240))
        .attr("y2", centerY - radius * Math.sin(angle240))
        .attr("stroke", "red")
        .attr("stroke-width", 2);

    const cosLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle240))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 2);

    const tanLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * Math.tan(angle240))
        .attr("stroke", "black")
        .attr("stroke-width", 4);

    const dashLine = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY - radius * Math.tan(angle240))
        .attr("x2", centerX)
        .attr("y2", centerY - radius * Math.tan(angle240))
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5.5")
        .attr("stroke-width", 2);

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle240))
        .attr("cy", centerY - radius * Math.sin(angle240))
        .attr("r", 3)
        .attr("fill", "red");
})();

(function () {
    const width = 300;
    const height = 300;
    const angle270 = 270 * (Math.PI / 180);
    let svg2 = d3
        .select("#tan270")
        .append("svg")
        .attr("width", 400)
        // .style("background-color", "white")
        .attr("height", 460);

    // Çemberin merkezi ve yarıçapı
    const centerX = 170;
    const centerY = 270;
    const radius = 120;

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + 40)
        .attr("x2", centerX)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - 160)
        .attr("y1", centerY)
        .attr("x2", centerX + 160)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${0} ${centerX - 7},${7} ${centerX + 7},${7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + 160 + 7},${centerY} ${centerX + 160},${centerY - 7} ${
                centerX + 160
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${centerX - 160},${centerY} ${centerX - 160 + 7},${centerY - 7} ${
                centerX - 160 + 7
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 18)
        .attr("y", centerY + 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 15)
        .attr("y", 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX - 22)
        .attr("y", centerY - radius + 4)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX - 26)
        .attr("y", 20)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+∞");

    svg2.append("text")
        .attr("x", centerX + 22)
        .attr("y", centerY - 7)
        .attr("font-size", "12px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("270°");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", 460)
        .attr("x2", centerX + radius)
        .attr("y2", 0)
        .attr("stroke", "black")
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
                endAngle: -angle270,
            })
        );

    const sinLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX)
        .attr("y2", centerY - radius * Math.sin(angle270))
        .attr("stroke", "red")
        .attr("stroke-width", 2);

    const cosCircle = svg2
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", 3)
        .attr("stroke", "blue")
        .attr("stroke-width", 2);

    const tanLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX)
        .attr("y2", 0)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    const point = svg2
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY - radius * Math.sin(angle270))
        .attr("r", 4)
        .attr("fill", "red");
})();

(function () {
    const width = 300;
    const height = 300;

    let svg2 = d3
        .select("#tan330")
        .append("svg")
        .attr("width", 400)
        // .style("background-color", "white")
        .attr("height", 460);

    // Çemberin merkezi ve yarıçapı
    const centerX = 170;
    const centerY = 270;
    const radius = 120;
    const angle330 = 330 * (Math.PI / 180);

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + 460)
        .attr("x2", centerX)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - 160)
        .attr("y1", centerY)
        .attr("x2", centerX + 160)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${0} ${centerX - 7},${7} ${centerX + 7},${7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + 160 + 7},${centerY} ${centerX + 160},${centerY - 7} ${
                centerX + 160
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${centerX - 160},${centerY} ${centerX - 160 + 7},${centerY - 7} ${
                centerX - 160 + 7
            },${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 18)
        .attr("y", centerY - 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 15)
        .attr("y", 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - radius)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX + 8)
        .attr("y", centerY - 24)
        .attr("font-size", "12px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("330°");

    svg2.append("text")
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr(
            "transform",
            `translate(${centerX + radius / 1.3 + 8}, ${
                centerY + 45
            }) rotate(270, 0, 0)`
        )
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("sin330°");

    svg2.append("text")
        .attr("x", centerX + radius / 2 - 18)
        .attr("y", centerY - 6)
        .attr("font-size", "11px")
        .attr("font-weight", 400)
        .attr("fill", "blue")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("cos330°");

    svg2.append("text")
        .attr("x", centerX + radius + 30)
        .attr("y", centerY + 40)
        .attr("font-size", "14px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("tan330°");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", 460)
        .attr("x2", centerX + radius)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const bracket = svg2
        .append("image")
        .attr("href", "../../images/bracket.svg")
        .attr("width", 80)
        .raise()
        .attr("height", 80)
        .attr(
            "transform",
            `translate(${centerX + radius - 28}, ${
                centerY - 5
            }) rotate(0, 0, 0)`
        );

    const hipo = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle330))
        .attr("y2", centerY - radius * Math.sin(angle330))
        .attr("stroke", "black")
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
                endAngle: -angle330,
            })
        );

    const sinLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle330))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle330))
        .attr("y2", centerY - radius * Math.sin(angle330))
        .attr("stroke", "red")
        .attr("stroke-width", 2);

    const cosLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle330))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 2);

    const tanLine = svg2
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle330))
        .attr("y1", centerY - radius * Math.sin(angle330))
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * Math.tan(angle330))
        .attr("stroke", "black")
        .attr("stroke-width", 4);

    const dashLine = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY - radius * Math.tan(angle330))
        .attr("x2", centerX)
        .attr("y2", centerY - radius * Math.tan(angle330))
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5.5")
        .attr("stroke-width", 2);

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle330))
        .attr("cy", centerY - radius * Math.sin(angle330))
        .attr("r", 3)
        .attr("fill", "red");

    const dividerLine = svg2
        .append("line")
        .attr("x1", centerX - 15)
        .attr("y1", centerY - radius * Math.tan(angle330) - 1)
        .attr("x2", centerX - 30)
        .attr("y2", centerY - radius * Math.tan(angle330) - 1)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const minusLine = svg2
        .append("line")
        .attr("x1", centerX - 42)
        .attr("y1", centerY - radius * Math.tan(150 * (Math.PI / 180)) - 1)
        .attr("x2", centerX - 35)
        .attr("y2", centerY - radius * Math.tan(150 * (Math.PI / 180)) - 1)
        .attr("stroke", "red")
        .attr("stroke-width", 2);
})();
