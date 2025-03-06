(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#tri_1_Pisagor")
        .append("svg")
        .attr("width", 280)
        .attr("height", 250);

    // Çemberin merkezi ve yarıçapı
    const centerX = 125;
    const centerY = 125;

    svg2.append("polygon")
        .attr(
            "points",
            `${centerX - 100},${centerY} ${centerX + 100},${centerY} ${
                centerX + 100
            },${centerY - 100}`
        )
        .attr("fill", "none")
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    svg2.append("rect")
        .attr("x", centerX + 100 - 20)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower()
        .attr("fill", "none");

    svg2.append("circle")
        .attr("cx", centerX + 100 - 10)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const arcPath30 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX - 95}, ${centerY}) rotate(90, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 6,
            })
        );

    const arcPath60 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX + 106}, ${centerY - 98}) rotate(260, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 3,
            })
        );

    const degreeArcText30 = svg2
        .append("text")
        .attr("x", centerX - 60)
        .attr("y", centerY - 4)
        .attr("font-size", "15px")
        .attr("font-weight", 500)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("θ");

    const degreeArcText60 = svg2
        .append("text")
        .attr("x", centerX + 77)
        .attr("y", centerY - 65)
        .attr("font-size", "16px")
        .attr("font-weight", 500)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("α");

    const oppText = svg2
        .append("text")
        .attr("x", centerX + 100 + 15)
        .attr("y", centerY - 50)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("3");

    const adjacentText = svg2
        .append("text")
        .attr("x", centerX)
        .attr("y", centerY + 20)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("4");

    const hipText = svg2
        .append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - 65)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("5");
})();

(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#tri_2_Pisagor")
        .append("svg")
        .attr("width", 280)
        .attr("height", 250);

    // Çemberin merkezi ve yarıçapı
    const centerX = 125;
    const centerY = 125;

    svg2.append("polygon")
        .attr(
            "points",
            `${centerX - 100},${centerY} ${centerX + 100},${centerY} ${
                centerX + 100
            },${centerY - 100}`
        )
        .attr("fill", "none")
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    svg2.append("rect")
        .attr("x", centerX + 100 - 20)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower()
        .attr("fill", "none");

    svg2.append("circle")
        .attr("cx", centerX + 100 - 10)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const arcPath30 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX - 95}, ${centerY}) rotate(90, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 6,
            })
        );

    const arcPath60 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX + 106}, ${centerY - 98}) rotate(260, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 3,
            })
        );

    const degreeArcText30 = svg2
        .append("text")
        .attr("x", centerX - 60)
        .attr("y", centerY - 4)
        .attr("font-size", "15px")
        .attr("font-weight", 500)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("θ");

    const degreeArcText60 = svg2
        .append("text")
        .attr("x", centerX + 77)
        .attr("y", centerY - 65)
        .attr("font-size", "16px")
        .attr("font-weight", 500)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("α");

    const oppText = svg2
        .append("text")
        .attr("x", centerX + 100 + 15)
        .attr("y", centerY - 50)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("5");

    const adjacentText = svg2
        .append("text")
        .attr("x", centerX)
        .attr("y", centerY + 20)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("12");

    const hipText = svg2
        .append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - 65)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("13");
})();

(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#tri_3_Pisagor")
        .append("svg")
        .attr("width", 280)
        .attr("height", 250);

    // Çemberin merkezi ve yarıçapı
    const centerX = 125;
    const centerY = 125;

    svg2.append("polygon")
        .attr(
            "points",
            `${centerX - 100},${centerY} ${centerX + 100},${centerY} ${
                centerX + 100
            },${centerY - 100}`
        )
        .attr("fill", "none")
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    svg2.append("rect")
        .attr("x", centerX + 100 - 20)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower()
        .attr("fill", "none");

    svg2.append("circle")
        .attr("cx", centerX + 100 - 10)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const arcPath30 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX - 95}, ${centerY}) rotate(90, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 6,
            })
        );

    const arcPath60 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX + 106}, ${centerY - 98}) rotate(260, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 3,
            })
        );

    const degreeArcText30 = svg2
        .append("text")
        .attr("x", centerX - 60)
        .attr("y", centerY - 4)
        .attr("font-size", "15px")
        .attr("font-weight", 500)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("θ");

    const degreeArcText60 = svg2
        .append("text")
        .attr("x", centerX + 77)
        .attr("y", centerY - 65)
        .attr("font-size", "16px")
        .attr("font-weight", 500)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("α");

    const oppText = svg2
        .append("text")
        .attr("x", centerX + 100 + 15)
        .attr("y", centerY - 50)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("8");

    const adjacentText = svg2
        .append("text")
        .attr("x", centerX)
        .attr("y", centerY + 20)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("15");

    const hipText = svg2
        .append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - 65)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("C");
})();

(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#tri_4_Pisagor")
        .append("svg")
        .attr("width", 280)
        .attr("height", 250);

    // Çemberin merkezi ve yarıçapı
    const centerX = 125;
    const centerY = 125;

    svg2.append("polygon")
        .attr(
            "points",
            `${centerX - 100},${centerY} ${centerX + 100},${centerY} ${
                centerX + 100
            },${centerY - 100}`
        )
        .attr("fill", "none")
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    svg2.append("rect")
        .attr("x", centerX + 100 - 20)
        .attr("y", centerY - 20)
        .attr("width", 20)
        .attr("height", 20)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .lower()
        .attr("fill", "none");

    svg2.append("circle")
        .attr("cx", centerX + 100 - 10)
        .attr("cy", centerY - 10)
        .attr("r", 2)
        .attr("fill", "black");

    const arcPath30 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX - 95}, ${centerY}) rotate(90, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 6,
            })
        );

    const arcPath60 = svg2
        .append("path")
        .attr(
            "transform",
            `translate(${centerX + 106}, ${centerY - 98}) rotate(260, 0, 0)`
        )
        .attr(
            "d",
            d3.arc()({
                innerRadius: 20,
                outerRadius: 22,
                startAngle: 0,
                endAngle: -Math.PI / 3,
            })
        );

    const degreeArcText30 = svg2
        .append("text")
        .attr("x", centerX - 60)
        .attr("y", centerY - 4)
        .attr("font-size", "15px")
        .attr("font-weight", 500)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("θ");

    const degreeArcText60 = svg2
        .append("text")
        .attr("x", centerX + 77)
        .attr("y", centerY - 65)
        .attr("font-size", "16px")
        .attr("font-weight", 500)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("α");

    const oppText = svg2
        .append("text")
        .attr("x", centerX + 100 + 15)
        .attr("y", centerY - 50)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("16");

    const adjacentText = svg2
        .append("text")
        .attr("x", centerX)
        .attr("y", centerY + 20)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("B");

    const hipText = svg2
        .append("text")
        .attr("x", centerX - 20)
        .attr("y", centerY - 65)
        .attr("font-size", "15px")
        .attr("font-weight", 600)
        .attr("fill", "FF5722")
        .attr("pointer-events", "none")
        .attr("user-select", "none")
        .text("34");

    let isOn3 = false;
    let isOn4 = false; // Başlangıç durumu (Kapalı)

    document
        .getElementById("tri4cozum-btn")
        .addEventListener("click", function () {
            isOn4 = !isOn4; // Durumu tersine çevir

            if (isOn4) {
                this.textContent = "Çözümü Kapat";
                this.style.backgroundColor = "red";
                document.getElementById("tri4Res").style.display = "block";
                document.getElementById("tri4question").style.display = "none";
            } else {
                this.textContent = "Çözümü Göster";
                this.style.backgroundColor = "green";
                document.getElementById("tri4Res").style.display = "none";
                document.getElementById("tri4question").style.display = "block";
            }
        });

    document
        .getElementById("tri3cozum-btn")
        .addEventListener("click", function () {
            isOn3 = !isOn3; // Durumu tersine çevir

            if (isOn3) {
                this.textContent = "Çözümü Kapat";
                this.style.backgroundColor = "red";
                document.getElementById("tri3Res").style.display = "block";
                document.getElementById("tri3question").style.display = "none";
            } else {
                this.textContent = "Çözümü Göster";
                this.style.backgroundColor = "green";
                document.getElementById("tri3Res").style.display = "none";
                document.getElementById("tri3question").style.display = "block";
            }
        });
})();
