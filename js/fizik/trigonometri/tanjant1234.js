// #region TAN1

(function () {
    // Global değişkenler ve fonksiyonlar

    const width = 400;
    const height = 400;

    let svg2 = d3
        .select("#tanjant1")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Çemberin merkezi ve yarıçapı
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 3;

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY + radius + 60)
        .attr("x2", centerX)
        .attr("y2", centerY - radius - 60)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - radius - 60)
        .attr("y1", centerY)
        .attr("x2", centerX + radius + 60)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

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
            `${centerX + radius + 60 + 7},${centerY} ${centerX + radius + 60},${
                centerY - 7
            } ${centerX + radius + 60},${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${0},${centerY} ${7},${centerY - 7} ${7},${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // alt
        .attr(
            "points",
            `${centerX},${centerY + radius + 60 + 7} ${centerX - 7},${
                centerY + radius + 60
            } ${centerX + 7},${centerY + radius + 60}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 70)
        .attr("y", centerY + 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 20)
        .attr("y", 10)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX + radius - 12)
        .attr("y", centerY - radius - 55)
        .attr("font-size", "15px")
        .attr("font-weight", 400)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+∞");

    svg2.append("text")
        .attr("x", centerX + radius - 12)
        .attr("y", centerY + radius + 65)
        .attr("font-size", "15px")
        .attr("font-weight", 400)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("-∞");
    svg2.append("text")
        .attr("x", centerX + radius + 5)
        .attr("y", centerY + 14)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY + radius + 50)
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius - 50)
        .attr("stroke", "black")
        .attr("stroke-width", 2);
})();

// #endregion

// #region TAN2

(function () {
    const width = 400;
    const height = 400;

    let svg2 = d3
        .select("#tanjant2")
        .append("svg")
        .attr("width", 400)
        .attr("height", 400);

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
        .attr("y1", centerY + radius + 60)
        .attr("x2", centerX)
        .attr("y2", centerY - radius - 60)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - radius - 60)
        .attr("y1", centerY)
        .attr("x2", centerX + radius + 60)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

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
            `${centerX + radius + 60 + 7},${centerY} ${centerX + radius + 60},${
                centerY - 7
            } ${centerX + radius + 60},${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${0},${centerY} ${7},${centerY - 7} ${7},${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // alt
        .attr(
            "points",
            `${centerX},${centerY + radius + 60 + 7} ${centerX - 7},${
                centerY + radius + 60
            } ${centerX + 7},${centerY + radius + 60}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 70)
        .attr("y", centerY + 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 20)
        .attr("y", 10)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX - 20)
        .attr("y", 60)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY + radius + 20)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("-1");
    svg2.append("text")
        .attr("x", centerX - radius - 25)
        .attr("y", centerY - 8)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("-1");

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
            `translate(${centerX + radius / 1.3}, ${
                centerY - 50
            }) rotate(90, 0, 0)`
        )
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("sinθ");

    svg2.append("text")
        .attr("x", centerX + 35)
        .attr("y", centerY + 20)
        .attr("font-size", "14px")
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
        .attr("stroke-width", 2);

    // const bracket = svg2
    //     .append("image")
    //     .attr("href", "../../images/bracket.svg")
    //     .attr("width", 165)
    //     .raise()
    //     .attr("height", 165)
    //     .attr(
    //         "transform",
    //         `translate(${centerX + radius + 15}, ${
    //             centerY - 50
    //         }) rotate(90, 0, 0)`
    //     );

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

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(Math.PI / 4))
        .attr("cy", centerY - radius * Math.sin(Math.PI / 4))
        .attr("r", 4)
        .attr("fill", "red");
})();

// #endregion

// #region TAN3

(function () {
    const width = 400;
    const height = 400;

    let svg2 = d3
        .select("#tanjant3")
        .append("svg")
        .attr("width", 400)
        .attr("height", 400);

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
        .attr("y1", centerY + radius + 60)
        .attr("x2", centerX)
        .attr("y2", centerY - radius - 60)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - radius - 60)
        .attr("y1", centerY)
        .attr("x2", centerX + radius + 60)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

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
            `${centerX + radius + 60 + 7},${centerY} ${centerX + radius + 60},${
                centerY - 7
            } ${centerX + radius + 60},${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${0},${centerY} ${7},${centerY - 7} ${7},${centerY + 7}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // alt
        .attr(
            "points",
            `${centerX},${centerY + radius + 60 + 7} ${centerX - 7},${
                centerY + radius + 60
            } ${centerX + 7},${centerY + radius + 60}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 2);

    svg2.append("text") // x text
        .attr("x", centerX + radius + 70)
        .attr("y", centerY + 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 20)
        .attr("y", 10)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    svg2.append("text")
        .attr("x", centerX - 20)
        .attr("y", 60)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY + radius + 20)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("-1");
    svg2.append("text")
        .attr("x", centerX - radius - 25)
        .attr("y", centerY - 8)
        .attr("font-size", "14px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("-1");

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
            `translate(${centerX + radius / 1.3}, ${
                centerY - 50
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
        .attr("x", centerX + 35)
        .attr("y", centerY + 20)
        .attr("font-size", "14px")
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
        .attr("stroke-width", 2);

    const bracket = svg2
        .append("image")
        .attr("href", "../../images/bracket.svg")
        .attr("width", 165)
        .raise()
        .attr("height", 165)
        .attr(
            "transform",
            `translate(${centerX + 70}, ${
                centerY - radius - 15
            }) rotate(0, 0, 0)`
        );

    const hipo = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * Math.sin(Math.PI / 2))
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const tanDüşümü = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY - radius)
        .attr("x2", centerX)
        .attr("y2", centerY - radius)
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5")
        .attr("stroke-width", 3);

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

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(Math.PI / 4))
        .attr("cy", centerY - radius * Math.sin(Math.PI / 4))
        .attr("r", 4)
        .attr("fill", "red");
})();

// #endregion
