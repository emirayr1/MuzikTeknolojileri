(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#birimçemberCos2")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 700);

    const labelsHomeCos = svg2.append("g").attr("id", "svgHome");
    const labels30Cos = svg2.append("g").attr("id", "svg30");
    const labels45Cos = svg2.append("g").attr("id", "svg45");
    const labels60Cos = svg2.append("g").attr("id", "svg60");
    const labels150Cos = svg2.append("g").attr("id", "sv150");
    const labels240Cos = svg2.append("g").attr("id", "sv240");
    const labels330Cos = svg2.append("g").attr("id", "sv330");

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
    const lineHomeCos = labelsHomeCos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY - radius * Math.sin(angle))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const cosLineHome = labelsHomeCos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 6);

    const cosLineDashHome = labelsHomeCos
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY - radius * Math.sin(angle))
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5,5")
        .attr("stroke-width", 2);

    const ortogonalRectHomeCos = labelsHomeCos
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle) - 15)
        .attr("y", centerY - 18)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const ortRectPointHome = labelsHomeCos
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle) - 8)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArcHomeCos = labelsHomeCos
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

    const degreeArcTextHomeCos = labelsHomeCos
        .append("text")
        .attr("x", centerX + 30)
        .attr("y", centerY - 8)
        .attr("font-size", "24px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("α");

    const koordinatTextHomeCos = labelsHomeCos
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle) + 8)
        .attr("y", centerY - radius * Math.sin(angle) - 5)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(cosα, sinα)");

    const pointHomeCos = labelsHomeCos
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
    const line30Cos = labels30Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle30))
        .attr("y2", centerY - radius * Math.sin(angle30))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const cosline30 = labels30Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle30))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 6);

    const cosLineDash30 = labels30Cos
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle30))
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle30))
        .attr("y2", centerY - radius * Math.sin(angle30))
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5,5")
        .attr("stroke-width", 2);

    const ortogonalRect30Cos = labels30Cos
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle30) - 16)
        .attr("y", centerY - 16)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const ortRectPoint30Cos = labels30Cos
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle30) - 8)
        .attr("cy", centerY - 8)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc30Cos = labels30Cos
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

    const degreeArcText30Cos = labels30Cos
        .append("text")
        .attr("x", centerX + 30)
        .attr("y", centerY - 4)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("30°");

    const koordinatText30Cos = labels30Cos
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle30) + 8)
        .attr("y", centerY - radius * Math.sin(angle30) - 5)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(cos30°, sin30°)");

    const point30Cos = labels30Cos
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle30))
        .attr("cy", centerY - radius * Math.sin(angle30))
        .attr("r", 4)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .raise();
    // #endregion
    // #region lables45
    const line45Cos = labels45Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY - radius * Math.sin(angle))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const cosLine45 = labels45Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle45))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 6);

    const cosLineDash45 = labels45Cos
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle45))
        .attr("y1", centerY - radius * Math.sin(angle45))
        .attr("x2", centerX + radius * Math.cos(angle45))
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5,5")
        .attr("stroke-width", 2);

    const ortogonalRect45Cos = labels45Cos
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle) - 15)
        .attr("y", centerY - 18)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const ortRectPoint45Cos = labels45Cos
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle) - 7)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc45Cos = labels45Cos
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

    const degreeArcText45Cos = labels45Cos
        .append("text")
        .attr("x", centerX + 30)
        .attr("y", centerY - 8)
        .attr("font-size", "18px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("45°");

    const koordinatText45Cos = labels45Cos
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle) + 8)
        .attr("y", centerY - radius * Math.sin(angle) - 5)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(cos45°, sin45°)");

    const point45Cos = labels45Cos
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
    const line60Cos = labels60Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle60))
        .attr("y2", centerY - radius * Math.sin(angle60))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const cosLine60 = labels60Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle60))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 6);

    const cosLineDash60 = labels60Cos
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle60))
        .attr("y1", centerY - radius * Math.sin(angle60))
        .attr("x2", centerX + radius * Math.cos(angle60))
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5,5")
        .attr("stroke-width", 2);

    const ortogonalRect60Cos = labels60Cos
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle60) - 15)
        .attr("y", centerY - 18)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const ortRectPoint60Cos = labels60Cos
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle60) - 7)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc60Cos = labels60Cos
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

    const degreeArcText60Cos = labels60Cos
        .append("text")
        .attr("x", centerX + 26)
        .attr("y", centerY - 8)
        .attr("font-size", "18px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("60°");

    const koordinatText60Cos = labels60Cos
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle60) + 8)
        .attr("y", centerY - radius * Math.sin(angle60) - 5)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(cos60°, sin60°)");

    const point60Cos = labels60Cos
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
    const line150Cos = labels150Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle150))
        .attr("y2", centerY - radius * Math.sin(angle150))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const cosLine150 = labels150Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle150))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 6);

    const cosLineDash150 = labels150Cos
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle150))
        .attr("y1", centerY - radius * Math.sin(angle150))
        .attr("x2", centerX + radius * Math.cos(angle150))
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5,5")
        .attr("stroke-width", 2);

    const ortogonalRect150Cos = labels150Cos
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle150))
        .attr("y", centerY - 16)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const ortRectPoint150Cos = labels150Cos
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle150) + 8)
        .attr("cy", centerY - 8)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc150Cos = labels150Cos
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

    const degreeArcNeg30Cos = labels150Cos
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

    const degreeArcNegText30Cos = labels150Cos
        .append("text")
        .attr("x", centerX - 60)
        .attr("y", centerY - 6)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("30°");

    const degreeArcText150Cos = labels150Cos
        .append("text")
        .attr("x", centerX + 10)
        .attr("y", centerY - 20)
        .attr("font-size", "18px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("150°");

    const koordinatText150Cos = labels150Cos
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle150) - 120)
        .attr("y", centerY - radius * Math.sin(angle150) - 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("cos150°, sin150°");

    const point150Cos = labels150Cos
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
    const line240Cos = labels240Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle240))
        .attr("y2", centerY - radius * Math.sin(angle240))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const cosLine240 = labels240Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle240))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .raise()
        .attr("stroke-width", 6);

    const dashLine240Cos = labels240Cos
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle240))
        .attr("y1", centerY - radius * Math.sin(angle240))
        .attr("x2", centerX + radius * Math.cos(angle240))
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5,5")
        .attr("stroke-width", 2);

    const ortogonalRect240Cos = labels240Cos
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle240) + 2)
        .attr("y", centerY + 4)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const ortRectPoint240Cos = labels240Cos
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle240) + 10)
        .attr("cy", centerY + 11)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc240Cos = labels240Cos
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

    const degreeArcNe240Cos = labels240Cos
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
        .lower();

    const degreeArcNegTex240Cos = labels240Cos
        .append("text")
        .attr("x", centerX - 60)
        .attr("y", centerY + 30)
        .attr("font-size", "16px")
        .attr("font-weight", 400)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("60°");

    const degreeArcText240Cos = labels240Cos
        .append("text")
        .attr("x", centerX + 10)
        .attr("y", centerY - 20)
        .attr("font-size", "18px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("240°");

    const koordinatText240Cos = labels240Cos
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle240) - 110)
        .attr("y", centerY - radius * Math.sin(angle240) + 30)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(cos240°, sin240°)");

    const point240Cos = labels240Cos
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
    const line330Cos = labels330Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle330))
        .attr("y2", centerY - radius * Math.sin(angle330))
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 2);

    const cosLine330 = labels330Cos
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle330))
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 6);

    const dashLine330Cos = labels330Cos
        .append("line")
        .attr("x1", centerX + radius * Math.cos(angle330))
        .attr("y1", centerY - radius * Math.sin(angle330))
        .attr("x2", centerX + radius * Math.cos(angle330))
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5,5")
        .attr("stroke-width", 2);

    const ortogonalRect330Cos = labels330Cos
        .append("rect")
        .attr("x", centerX + radius * Math.cos(angle330) - 18)
        .attr("y", centerY + 2)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const ortRectPoint330Cos = labels330Cos
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(angle330) - 10)
        .attr("cy", centerY + 9)
        .attr("r", 2)
        .attr("fill", "black");

    const degreeArc330Cos = labels330Cos
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

    const degreeArcNe330Cos = labels330Cos
        .append("path")
        .attr("transform", `translate(${centerX}, ${centerY}) rotate(90, 0, 0)`)
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
        .lower();

    const degreeArcNegTex330Cos = labels330Cos
        .append("text")
        .attr("x", centerX + 50)
        .attr("y", centerY + 22)
        .attr("font-size", "16px")
        .attr("font-weight", 400)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("30°");

    const degreeArcText330Cos = labels330Cos
        .append("text")
        .attr("x", centerX + 10)
        .attr("y", centerY - 20)
        .attr("font-size", "18px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("330°");

    const koordinatText330Cos = labels330Cos
        .append("text")
        .attr("x", centerX + radius * Math.cos(angle330) + 15)
        .attr("y", centerY - radius * Math.sin(angle330) + 15)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(cos330°, sin330°)");

    const point330Cos = labels330Cos
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

    svg2.append("text")
        .attr("x", centerX + 10)
        .attr("y", 90)
        .attr("font-size", "20px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");

    svg2.append("text")
        .attr("x", centerX + 10)
        .attr("y", 525)
        .attr("font-size", "20px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("-1");

    svg2.append("text")
        .attr("x", centerX + radius + 10)
        .attr("y", centerY - 10)
        .attr("font-size", "20px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("+1");
    svg2.append("text")
        .attr("x", centerX - radius - 35)
        .attr("y", centerY - 10)
        .attr("font-size", "20px")
        .attr("font-weight", 400)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("-1");

    // #endregion
    const ilkMaddeCos = document.getElementById("cos2madde");
    const toggle30maddeCos = document.getElementById("toggle30maddeCos");
    const toggle45maddeCos = document.getElementById("toggle45maddeCos");
    const toggle60maddeCos = document.getElementById("toggle60maddeCos");
    const toggle150maddeCos = document.getElementById("toggle150maddeCos");
    const toggle240maddeCos = document.getElementById("toggle240maddeCos");
    const toggle330maddeCos = document.getElementById("toggle330maddeCos");

    toggleDisplay("bos");
    function toggleDisplay(selected) {
        if (selected === "30") {
            toggle30maddeCos.style.display = "block";
            toggle45maddeCos.style.display = "none";
            toggle60maddeCos.style.display = "none";
            toggle150maddeCos.style.display = "none";
            toggle240maddeCos.style.display = "none";
            toggle330maddeCos.style.display = "none";
            ilkMaddeCos.style.display = "none";

            labelsHomeCos.style("display", "none");
            labels30Cos.style("display", "block");
            labels45Cos.style("display", "none");
            labels60Cos.style("display", "none");
            labels150Cos.style("display", "none");
            labels240Cos.style("display", "none");
            labels330Cos.style("display", "none");

            document.querySelector("#toggle30Cos").checked = true;
            document.querySelector("#toggle45Cos").checked = false;
            document.querySelector("#toggle60Cos").checked = false;
            document.querySelector("#toggle150Cos").checked = false;
            document.querySelector("#toggle240Cos").checked = false;
            document.querySelector("#toggle330Cos").checked = false;
            document.querySelector("#toggleBosCos").checked = false;
        } else if (selected === "45") {
            toggle30maddeCos.style.display = "none";
            toggle45maddeCos.style.display = "block";
            toggle60maddeCos.style.display = "none";
            toggle150maddeCos.style.display = "none";
            toggle240maddeCos.style.display = "none";
            toggle330maddeCos.style.display = "none";
            ilkMaddeCos.style.display = "none";

            labelsHomeCos.style("display", "none");
            labels30Cos.style("display", "none");
            labels45Cos.style("display", "block");
            labels60Cos.style("display", "none");
            labels150Cos.style("display", "none");
            labels240Cos.style("display", "none");
            labels330Cos.style("display", "none");
            document.querySelector("#toggle30Cos").checked = false;
            document.querySelector("#toggle45Cos").checked = true;
            document.querySelector("#toggle60Cos").checked = false;
            document.querySelector("#toggle150Cos").checked = false;
            document.querySelector("#toggle240Cos").checked = false;
            document.querySelector("#toggle330Cos").checked = false;
            document.querySelector("#toggleBosCos").checked = false;
        } else if (selected === "60") {
            toggle30maddeCos.style.display = "none";
            toggle45maddeCos.style.display = "none";
            toggle60maddeCos.style.display = "block";
            toggle150maddeCos.style.display = "none";
            toggle240maddeCos.style.display = "none";
            toggle330maddeCos.style.display = "none";
            ilkMaddeCos.style.display = "none";

            labelsHomeCos.style("display", "none");
            labels30Cos.style("display", "none");
            labels45Cos.style("display", "none");
            labels60Cos.style("display", "block");
            labels150Cos.style("display", "none");
            labels240Cos.style("display", "none");
            labels330Cos.style("display", "none");
            document.querySelector("#toggle30Cos").checked = false;
            document.querySelector("#toggle45Cos").checked = false;
            document.querySelector("#toggle60Cos").checked = true;
            document.querySelector("#toggle150Cos").checked = false;
            document.querySelector("#toggle240Cos").checked = false;
            document.querySelector("#toggle330Cos").checked = false;
            document.querySelector("#toggleBosCos").checked = false;
        } else if (selected === "150") {
            toggle30maddeCos.style.display = "none";
            toggle45maddeCos.style.display = "none";
            toggle60maddeCos.style.display = "none";
            toggle150maddeCos.style.display = "block";
            toggle240maddeCos.style.display = "none";
            toggle330maddeCos.style.display = "none";
            ilkMaddeCos.style.display = "none";

            labelsHomeCos.style("display", "none");
            labels30Cos.style("display", "none");
            labels45Cos.style("display", "none");
            labels60Cos.style("display", "none");
            labels150Cos.style("display", "block");
            labels240Cos.style("display", "none");
            labels330Cos.style("display", "none");
            document.querySelector("#toggle30Cos").checked = false;
            document.querySelector("#toggle45Cos").checked = false;
            document.querySelector("#toggle60Cos").checked = false;
            document.querySelector("#toggle150Cos").checked = true;
            document.querySelector("#toggle240Cos").checked = false;
            document.querySelector("#toggle330Cos").checked = false;
            document.querySelector("#toggleBosCos").checked = false;
        } else if (selected === "240") {
            toggle30maddeCos.style.display = "none";
            toggle45maddeCos.style.display = "none";
            toggle60maddeCos.style.display = "none";
            toggle150maddeCos.style.display = "none";
            toggle240maddeCos.style.display = "block";
            toggle330maddeCos.style.display = "none";
            ilkMaddeCos.style.display = "none";

            labelsHomeCos.style("display", "none");
            labels30Cos.style("display", "none");
            labels45Cos.style("display", "none");
            labels60Cos.style("display", "none");
            labels150Cos.style("display", "none");
            labels240Cos.style("display", "block");
            labels330Cos.style("display", "none");
            document.querySelector("#toggle30Cos").checked = false;
            document.querySelector("#toggle45Cos").checked = false;
            document.querySelector("#toggle60Cos").checked = false;
            document.querySelector("#toggle150Cos").checked = false;
            document.querySelector("#toggle240Cos").checked = true;
            document.querySelector("#toggle330Cos").checked = false;
            document.querySelector("#toggleBosCos").checked = false;
        } else if (selected === "330") {
            toggle30maddeCos.style.display = "none";
            toggle45maddeCos.style.display = "none";
            toggle60maddeCos.style.display = "none";
            toggle150maddeCos.style.display = "none";
            toggle240maddeCos.style.display = "none";
            toggle330maddeCos.style.display = "block";
            ilkMaddeCos.style.display = "none";

            labelsHomeCos.style("display", "none");
            labels30Cos.style("display", "none");
            labels45Cos.style("display", "none");
            labels60Cos.style("display", "none");
            labels150Cos.style("display", "none");
            labels240Cos.style("display", "none");
            labels330Cos.style("display", "block");
            document.querySelector("#toggle30Cos").checked = false;
            document.querySelector("#toggle45Cos").checked = false;
            document.querySelector("#toggle60Cos").checked = false;
            document.querySelector("#toggle150Cos").checked = false;
            document.querySelector("#toggle240Cos").checked = false;
            document.querySelector("#toggle330Cos").checked = true;
            document.querySelector("#toggleBosCos").checked = false;
        } else if (selected === "bos") {
            toggle30maddeCos.style.display = "none";
            toggle45maddeCos.style.display = "none";
            toggle60maddeCos.style.display = "none";
            toggle150maddeCos.style.display = "none";
            toggle240maddeCos.style.display = "none";
            toggle330maddeCos.style.display = "none";
            ilkMaddeCos.style.display = "block";

            labelsHomeCos.style("display", "block");
            labels30Cos.style("display", "none");
            labels45Cos.style("display", "none");
            labels60Cos.style("display", "none");
            labels150Cos.style("display", "none");
            labels240Cos.style("display", "none");
            labels330Cos.style("display", "none");
            document.querySelector("#toggle30Cos").checked = false;
            document.querySelector("#toggle45Cos").checked = false;
            document.querySelector("#toggle60Cos").checked = false;
            document.querySelector("#toggle150Cos").checked = false;
            document.querySelector("#toggle240Cos").checked = false;
            document.querySelector("#toggle330Cos").checked = false;
            document.querySelector("#toggleBosCos").checked = true;
        }
    }

    document
        .querySelector("#toggle30Cos")
        .addEventListener("change", function () {
            toggleDisplay("30");
        });

    document
        .querySelector("#toggle45Cos")
        .addEventListener("change", function () {
            toggleDisplay("45");
        });

    document
        .querySelector("#toggle60Cos")
        .addEventListener("change", function () {
            toggleDisplay("60");
        });

    document
        .querySelector("#toggle150Cos")
        .addEventListener("change", function () {
            toggleDisplay("150");
        });

    document
        .querySelector("#toggle240Cos")
        .addEventListener("change", function () {
            toggleDisplay("240");
        });
    document
        .querySelector("#toggle330Cos")
        .addEventListener("change", function () {
            toggleDisplay("330");
        });

    document
        .querySelector("#toggleBosCos")
        .addEventListener("change", function () {
            toggleDisplay("bos");
        });
})();
