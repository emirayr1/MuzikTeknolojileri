(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#birimçemberSin2")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 700);

    const labelsHome = svg2.append("g").attr("id", "svgHome");
    const labels30 = svg2.append("g").attr("id", "svg30");
    const labels45 = svg2.append("g").attr("id", "svg45");
    const labels60 = svg2.append("g").attr("id", "svg60");
    const labels150 = svg2.append("g").attr("id", "sv150");
    const labels240 = svg2.append("g").attr("id", "sv240");
    const labels330 = svg2.append("g").attr("id", "sv330");

    // Çemberin merkezi ve yarıçapı
    const centerX = 300;
    const centerY = 300;
    const radius = 200;
    const smallCircleRadius = 20;
    const angle = (45 * Math.PI) / 180;
    const angle30 = (30 * Math.PI) / 180;
    const angle45 = (45 * Math.PI) / 180;
    const angle60 = (60 * Math.PI) / 180;
    const angle150 = (150 * Math.PI) / 180;
    const angle240 = (240 * Math.PI) / 180;
    const angle330 = (330 * Math.PI) / 180;

    // #region labelsHOME
    // Başlangıçta çizilecek çap çizgisi
    const lineHome = labelsHome
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY - radius * Math.sin(angle))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const lineDashHome = labelsHome
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY - radius * Math.sin(angle))
        .attr("stroke", "blue")
        .attr("stroke-width", 4);

    const ortogonalRectHome = labelsHome
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle) - 20)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const ortRectPointHome = labelsHome
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle) - 10)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArcHome = labelsHome
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

    const degreeArcTextHome = labelsHome
        .append("text")
        .attr("x", centerX + 30)
        .attr("y", centerY - 8)
        .attr("font-size", "24px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("α");

    const koordinatTextHome = labelsHome
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle) + 8)
        .attr("y", centerY - radius * Math.sin(angle) - 5)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(x, sinα)");

    const pointHome = labelsHome
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle))
        .attr("cy", centerY - radius * Math.sin(angle))
        .attr("r", 5)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();

    // #endregion
    // #region labels30
    const line30 = labels30
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle30))
        .attr("y2", centerY - radius * Math.sin(angle30))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const lineDash30 = labels30
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle30))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle30))
        .attr("y2", centerY - radius * Math.sin(angle30))
        .attr("stroke", "blue")
        .attr("stroke-width", 4);

    const ortogonalRect30 = labels30
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle30) - 16)
        .attr("y", centerY - 16)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const ortRectPoint30 = labels30
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle30) - 8)
        .attr("cy", centerY - 8)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc30 = labels30
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

    const degreeArcText30 = labels30
        .append("text")
        .attr("x", centerX + 30)
        .attr("y", centerY - 4)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("30°");

    const koordinatText30 = labels30
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle30) + 8)
        .attr("y", centerY - radius * Math.sin(angle30) - 5)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(x, sin30°)");

    const point30 = labels30
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle30))
        .attr("cy", centerY - radius * Math.sin(angle30))
        .attr("r", 4)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();

    const arrowAngle30 = labels30
        .append("line")
        .attr("x1", centerX + radius / 2 - 20)
        .attr("y1", centerY - 18)
        .attr("x2", centerX + radius / 2 + 32)
        .attr("y2", centerY - 35)
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const arrowTriangle30 = labels30
        .append("polygon") // üst
        .attr(
            "points",
            `${centerX + radius / 2 + 30},${centerY - 40} ${
                centerX + radius / 2 + 32
            },${centerY - 30} ${centerX + radius / 2 + 40},${centerY - 40}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);
    // #endregion
    // #region lables45
    const line45 = labels45
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY - radius * Math.sin(angle))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const lineDash45 = labels45
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY - radius * Math.sin(angle))
        .attr("stroke", "blue")
        .attr("stroke-width", 4);

    const ortogonalRect45 = labels45
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle) - 20)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const ortRectPoint45 = labels45
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle) - 10)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc45 = labels45
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

    const degreeArcText45 = labels45
        .append("text")
        .attr("x", centerX + 30)
        .attr("y", centerY - 8)
        .attr("font-size", "18px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("45°");

    const koordinatText45 = labels45
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle) + 8)
        .attr("y", centerY - radius * Math.sin(angle) - 5)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(x, sin45°)");

    const point45 = labels45
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle))
        .attr("cy", centerY - radius * Math.sin(angle))
        .attr("r", 5)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();
    // #endregion
    // #region lables60
    const line60 = labels60
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle60))
        .attr("y2", centerY - radius * Math.sin(angle60))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const lineDash60 = labels60
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle60))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle60))
        .attr("y2", centerY - radius * Math.sin(angle60))
        .attr("stroke", "blue")
        .attr("stroke-width", 4);

    const ortogonalRect60 = labels60
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle60) - 20)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const ortRectPoint60 = labels60
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle60) - 10)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc60 = labels60
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

    const degreeArcText60 = labels60
        .append("text")
        .attr("x", centerX + 26)
        .attr("y", centerY - 8)
        .attr("font-size", "18px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("60°");

    const koordinatText60 = labels60
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle60) + 8)
        .attr("y", centerY - radius * Math.sin(angle60) - 5)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(x, sin60°)");

    const point60 = labels60
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle60))
        .attr("cy", centerY - radius * Math.sin(angle60))
        .attr("r", 5)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();
    // #endregion
    // #region labels150
    const line150 = labels150
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle150))
        .attr("y2", centerY - radius * Math.sin(angle150))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const lineDash150 = labels150
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle150))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle150))
        .attr("y2", centerY - radius * Math.sin(angle150))
        .attr("stroke", "blue")
        .attr("stroke-width", 4);

    const ortogonalRect150 = labels150
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle150))
        .attr("y", centerY - 15)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const ortRectPoint150 = labels150
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle150) + 8)
        .attr("cy", centerY - 8)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc150 = labels150
        .append("path")
        .attr("transform", `translate(${centerX}, ${centerY}) rotate(90, 0, 0)`)
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: (5 * -Math.PI) / 6,
            })
        )
        .raise();

    const degreeArcNeg30 = labels150
        .append("path")
        .attr(
            "transform",
            `translate(${centerX}, ${centerY}) rotate(270, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: Math.PI / 6,
            })
        )
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();

    const degreeArcNegText30 = labels150
        .append("text")
        .attr("x", centerX - 60)
        .attr("y", centerY - 6)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("30°");

    const degreeArcText150 = labels150
        .append("text")
        .attr("x", centerX + 10)
        .attr("y", centerY - 20)
        .attr("font-size", "18px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("150°");

    const koordinatText150 = labels150
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle150) - 110)
        .attr("y", centerY - radius * Math.sin(angle150) - 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(x, sin150°)");

    const point150 = labels150
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle150))
        .attr("cy", centerY - radius * Math.sin(angle150))
        .attr("r", 5)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();
    // #endregion
    // #region labels240
    const line240 = labels240
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle240))
        .attr("y2", centerY - radius * Math.sin(angle240))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const lineDash240 = labels240
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle240))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle240))
        .attr("y2", centerY - radius * Math.sin(angle240))
        .attr("stroke", "blue")
        .attr("stroke-width", 4);

    const ortogonalRect240 = labels240
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle240))
        .attr("y", centerY)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const ortRectPoint240 = labels240
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle240) + 8)
        .attr("cy", centerY + 8)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc240 = labels240
        .append("path")
        .attr("transform", `translate(${centerX}, ${centerY}) rotate(90, 0, 0)`)
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: (4 * -Math.PI) / 3,
            })
        )
        .raise();

    const degreeArcNe240 = labels240
        .append("path")
        .attr(
            "transform",
            `translate(${centerX}, ${centerY}) rotate(210, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 35,
                outerRadius: 36,
                startAngle: 0,
                endAngle: Math.PI / 3,
            })
        )
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();

    const degreeArcNegTex240 = labels240
        .append("text")
        .attr("x", centerX - 60)
        .attr("y", centerY + 30)
        .attr("font-size", "16px")
        .attr("font-weight", 400)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("60°");

    const degreeArcText240 = labels240
        .append("text")
        .attr("x", centerX + 10)
        .attr("y", centerY - 20)
        .attr("font-size", "18px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("240°");

    const koordinatText240 = labels240
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle240) - 110)
        .attr("y", centerY - radius * Math.sin(angle240) + 30)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(x, sin240°)");

    const point240 = labels240
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle240))
        .attr("cy", centerY - radius * Math.sin(angle240))
        .attr("r", 5)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();
    // #endregion
    // #region labels330
    const line330 = labels330
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle330))
        .attr("y2", centerY - radius * Math.sin(angle330))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const lineDash330 = labels330
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle330))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle330))
        .attr("y2", centerY - radius * Math.sin(angle330))
        .attr("stroke", "blue")
        .attr("stroke-width", 4);

    const ortogonalRect330 = labels330
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle330))
        .attr("y", centerY)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    const ortRectPoint330 = labels330
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle330) + 8)
        .attr("cy", centerY + 8)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc330 = labels330
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
        )
        .raise();

    const degreeArcNe330 = labels330
        .append("path")
        .attr(
            "transform",
            `translate(${centerX}, ${centerY}) rotate(90, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 35,
                outerRadius: 36,
                startAngle: 0,
                endAngle: Math.PI / 6,
            })
        )
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();

    const degreeArcNegTex330 = labels330
        .append("text")
        .attr("x", centerX + 50)
        .attr("y", centerY + 22)
        .attr("font-size", "16px")
        .attr("font-weight", 400)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("30°");

    const degreeArcText330 = labels330
        .append("text")
        .attr("x", centerX + 10)
        .attr("y", centerY - 20)
        .attr("font-size", "18px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("330°");

    const koordinatText330 = labels330
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle330) + 15)
        .attr("y", centerY - radius * Math.sin(angle330) + 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(x, sin330°)");

    const point330 = labels330
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle330))
        .attr("cy", centerY - radius * Math.sin(angle330))
        .attr("r", 5)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();
    // #endregion
    // #region ORTAK

    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5)
        .lower();

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", 10)
        .attr("x2", centerX)
        .attr("y2", 590)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .lower();

    svg2.append("line")
        .attr("x1", 10)
        .attr("y1", centerY)
        .attr("x2", 590)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${0} ${centerX - 10},${10} ${centerX + 10},${10}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${600},${centerY} ${/* 700 - 10 */ 590},${centerY - 10} ${590},${
                centerY + 10
            }`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${0},${centerY} ${10},${centerY - 10} ${10},${centerY + 10}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // alt
        .attr(
            "points",
            `${centerX},${600} ${centerX - 10},${590} ${centerX + 10},${590}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", 600)
        .attr("y", centerY + 40)
        .attr("font-size", "24px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 20)
        .attr("y", 15)
        .attr("font-size", "22px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("y");

    // #endregion
    const ilkMadde = document.getElementById("sin2madde");
    const toggle30madde = document.getElementById("toggle30madde");
    const toggle45madde = document.getElementById("toggle45madde");
    const toggle60madde = document.getElementById("toggle60madde");
    const toggle150madde = document.getElementById("toggle150madde");
    const toggle240madde = document.getElementById("toggle240madde");
    const toggle330madde = document.getElementById("toggle330madde");

    toggleDisplay("330");
    function toggleDisplay(selected) {
        if (selected === "30") {
            toggle30madde.style.display = "block";
            toggle45madde.style.display = "none";
            toggle60madde.style.display = "none";
            toggle150madde.style.display = "none";
            toggle240madde.style.display = "none";
            toggle330madde.style.display = "none";
            ilkMadde.style.display = "none";

            labelsHome.style("display", "none");
            labels30.style("display", "block");
            labels45.style("display", "none");
            labels60.style("display", "none");
            labels150.style("display", "none");
            labels240.style("display", "none");
            labels330.style("display", "none");

            document.querySelector("#toggle30").checked = true;
            document.querySelector("#toggle45").checked = false;
            document.querySelector("#toggle60").checked = false;
            document.querySelector("#toggle150").checked = false;
            document.querySelector("#toggle240").checked = false;
            document.querySelector("#toggle330").checked = false;
            document.querySelector("#toggleBos").checked = false;
        } else if (selected === "45") {
            toggle30madde.style.display = "none";
            toggle45madde.style.display = "block";
            toggle60madde.style.display = "none";
            toggle150madde.style.display = "none";
            toggle240madde.style.display = "none";
            toggle330madde.style.display = "none";
            ilkMadde.style.display = "none";

            labelsHome.style("display", "none");
            labels30.style("display", "none");
            labels45.style("display", "block");
            labels60.style("display", "none");
            labels150.style("display", "none");
            labels240.style("display", "none");
            labels330.style("display", "none");
            document.querySelector("#toggle30").checked = false;
            document.querySelector("#toggle45").checked = true;
            document.querySelector("#toggle60").checked = false;
            document.querySelector("#toggle150").checked = false;
            document.querySelector("#toggle240").checked = false;
            document.querySelector("#toggle330").checked = false;
            document.querySelector("#toggleBos").checked = false;
        } else if (selected === "60") {
            toggle30madde.style.display = "none";
            toggle45madde.style.display = "none";
            toggle60madde.style.display = "block";
            toggle150madde.style.display = "none";
            toggle240madde.style.display = "none";
            toggle330madde.style.display = "none";
            ilkMadde.style.display = "none";

            labelsHome.style("display", "none");
            labels30.style("display", "none");
            labels45.style("display", "none");
            labels60.style("display", "block");
            labels150.style("display", "none");
            labels240.style("display", "none");
            labels330.style("display", "none");
            document.querySelector("#toggle30").checked = false;
            document.querySelector("#toggle45").checked = false;
            document.querySelector("#toggle60").checked = true;
            document.querySelector("#toggle150").checked = false;
            document.querySelector("#toggle240").checked = false;
            document.querySelector("#toggle330").checked = false;
            document.querySelector("#toggleBos").checked = false;
        } else if (selected === "150") {
            toggle30madde.style.display = "none";
            toggle45madde.style.display = "none";
            toggle60madde.style.display = "none";
            toggle150madde.style.display = "block";
            toggle240madde.style.display = "none";
            toggle330madde.style.display = "none";
            ilkMadde.style.display = "none";

            labelsHome.style("display", "none");
            labels30.style("display", "none");
            labels45.style("display", "none");
            labels60.style("display", "none");
            labels150.style("display", "block");
            labels240.style("display", "none");
            labels330.style("display", "none");
            document.querySelector("#toggle30").checked = false;
            document.querySelector("#toggle45").checked = false;
            document.querySelector("#toggle60").checked = false;
            document.querySelector("#toggle150").checked = true;
            document.querySelector("#toggle240").checked = false;
            document.querySelector("#toggle330").checked = false;
            document.querySelector("#toggleBos").checked = false;
        } else if (selected === "240") {
            toggle30madde.style.display = "none";
            toggle45madde.style.display = "none";
            toggle60madde.style.display = "none";
            toggle150madde.style.display = "none";
            toggle240madde.style.display = "block";
            toggle330madde.style.display = "none";
            ilkMadde.style.display = "none";

            labelsHome.style("display", "none");
            labels30.style("display", "none");
            labels45.style("display", "none");
            labels60.style("display", "none");
            labels150.style("display", "none");
            labels240.style("display", "block");
            labels330.style("display", "none");
            document.querySelector("#toggle30").checked = false;
            document.querySelector("#toggle45").checked = false;
            document.querySelector("#toggle60").checked = false;
            document.querySelector("#toggle150").checked = false;
            document.querySelector("#toggle240").checked = true;
            document.querySelector("#toggle330").checked = false;
            document.querySelector("#toggleBos").checked = false;
        } else if (selected === "330") {
            toggle30madde.style.display = "none";
            toggle45madde.style.display = "none";
            toggle60madde.style.display = "none";
            toggle150madde.style.display = "none";
            toggle240madde.style.display = "none";
            toggle330madde.style.display = "block";
            ilkMadde.style.display = "none";

            labelsHome.style("display", "none");
            labels30.style("display", "none");
            labels45.style("display", "none");
            labels60.style("display", "none");
            labels150.style("display", "none");
            labels240.style("display", "none");
            labels330.style("display", "block");
            document.querySelector("#toggle30").checked = false;
            document.querySelector("#toggle45").checked = false;
            document.querySelector("#toggle60").checked = false;
            document.querySelector("#toggle150").checked = false;
            document.querySelector("#toggle240").checked = false;
            document.querySelector("#toggle330").checked = true;
            document.querySelector("#toggleBos").checked = false;
        } else if (selected === "bos") {
            toggle30madde.style.display = "none";
            toggle45madde.style.display = "none";
            toggle60madde.style.display = "none";
            toggle150madde.style.display = "none";
            toggle240madde.style.display = "none";
            toggle330madde.style.display = "none";
            ilkMadde.style.display = "block";

            labelsHome.style("display", "block");
            labels30.style("display", "none");
            labels45.style("display", "none");
            labels60.style("display", "none");
            labels150.style("display", "none");
            labels240.style("display", "none");
            labels330.style("display", "none");
            document.querySelector("#toggle30").checked = false;
            document.querySelector("#toggle45").checked = false;
            document.querySelector("#toggle60").checked = false;
            document.querySelector("#toggle150").checked = false;
            document.querySelector("#toggle240").checked = false;
            document.querySelector("#toggle330").checked = false;
            document.querySelector("#toggleBos").checked = true;
        }
    }

    document.querySelector("#toggle30").addEventListener("change", function () {
        toggleDisplay("30");
    });

    document.querySelector("#toggle45").addEventListener("change", function () {
        toggleDisplay("45");
    });

    document.querySelector("#toggle60").addEventListener("change", function () {
        toggleDisplay("60");
    });

    document
        .querySelector("#toggle150")
        .addEventListener("change", function () {
            toggleDisplay("150");
        });

    document
        .querySelector("#toggle240")
        .addEventListener("change", function () {
            toggleDisplay("240");
        });
    document
        .querySelector("#toggle330")
        .addEventListener("change", function () {
            toggleDisplay("330");
        });

    document
        .querySelector("#toggleBos")
        .addEventListener("change", function () {
            toggleDisplay("bos");
        });
})();
