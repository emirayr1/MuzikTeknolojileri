(function () {
    // Global değişkenler ve fonksiyonlar
    const width = 600;
    const height = 600;

    let svg2 = d3
        .select("#egimDogru")
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
        // .attr("stroke-dasharray", "5,5")
        .attr("stroke-width", 3);

    const yİzDüs = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", dogruX2)
        .attr("y2", centerY)
        .attr("stroke", "blue")
        // .attr("stroke-dasharray", "0.2")
        .raise()
        .attr("stroke-width", 3);

    const eğimText = svg2
        .append("text")
        .attr("x", centerX + xLine / 3)
        .attr("y", centerY - yLine / 2)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("Eğim: 1.0");

    const texts = svg2.append("g");

    const deltaTextX = texts
        .append("text")
        .attr("x", centerX + (length * Math.cos(Math.PI / 4)) / 2)
        .attr("y", centerY + 20)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "blue")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("Δx");

    const deltaTextY = texts
        .append("text")
        .attr("x", centerX + length * Math.cos(Math.PI / 4) + 10)
        .attr("y", centerY - (length * Math.sin(Math.PI / 4)) / 2)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("Δy");

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

    const sineText = texts
        .append("text")
        .attr("x", centerX + length * Math.cos(Math.PI / 4) + 40)
        .attr("y", centerY - (length * Math.sin(Math.PI / 4)) / 2)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("sinθ");

    const cosineText = texts
        .append("text")
        .attr("x", centerX + length * Math.cos(Math.PI / 4) / 2 - 10)
        .attr("y", centerY + 40)
        .attr("font-size", "16px")
        .attr("font-weight", 600)
        .attr("fill", "blue")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("cosθ");

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
        .append("polygon") // üst
        .attr("points", "0,0 -16,8 -16,-8")
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3)
        .attr("transform", "translate(10, 0)");

    triangleGroup.attr(
        "transform",
        `translate(${dogruX2}, ${dogruY2}) rotate(${70})`
    );
    let isDragging = false;

    svg2.on("mousedown", (event) => {
        isDragging = true;
        updateLine(event);
    });

    svg2.on("mousemove", (event) => {
        if (isDragging) {
            updateLine(event);
        }
    });

    svg2.on("mouseup", () => {
        isDragging = false;
    });

    function updateLine(event) {
        const [mouseX, mouseY] = d3.pointer(event);

        // Merkezden fareye olan açıyı hesapla
        let angleCircle = Math.atan2(mouseY - centerY, mouseX - centerX);

        const newX2 = centerX + length * Math.cos(angleCircle);
        const newY2 = centerY + length * Math.sin(angleCircle);

        console.log(newX2, newY2);

        const deltaX = newX2 - centerX;
        const deltaY = centerY - newY2;

        if (Math.abs(deltaY / deltaX) > 100) {
            console.log("Eğim: Tanımsız");
        } else {
            console.log("Eğim", deltaY / deltaX);
        }

        dogru
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", newX2)
            .attr("y2", newY2);

        xİzDüs.attr("x2", newX2).attr("y1", newY2).attr("x1", newX2);

        yİzDüs
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", newX2)
            .attr("y2", centerY);

        const angleDeg = (angleCircle * 180) / Math.PI;
        console.log("angleDeg", angleDeg);
        triangleGroup.attr(
            "transform",
            `translate(${newX2}, ${newY2}) rotate(${angleDeg})`
        );

        eğimText.text(
            "Eğim: " +
                (Math.abs(deltaY / deltaX) > 100
                    ? "Tanımsız"
                    : (deltaY / deltaX).toFixed(2))
        );

        // x 460 - 470   y 225 235   240 230    475 465

        if (newX2 >= 388 && newX2 <= 400 && newY2 >= 205 && newY2 <= 215) {
            texts.attr("opacity", 1);
        } else {
            texts.attr("opacity", 0);
        }
    }
})();
