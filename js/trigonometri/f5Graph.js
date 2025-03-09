(function () {
    const button = document.getElementById("startButtonLine");

    const margin = 30;
    const length = 150;

    const xNum = [1, 2, 3, 4, 5];
    const yNum = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let svg = d3
        .select("#f5Grafik_Svg")
        .append("svg")
        .attr("width", 300)
        // .style("background-color", "white")
        .attr("height", 400);

    svg.append("line")
        .attr("x1", margin + 10)
        .attr("y1", 350)
        .attr("x2", 300 - margin + 10)
        .attr("y2", 350)
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    svg.append("line")
        .attr("x1", margin + 10)
        .attr("y1", margin)
        .attr("x2", margin + 10)
        .attr("y2", 350)
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    svg.append("polygon") // üst
        .attr(
            "points",
            `${margin + 10},${margin - 5} ${margin + 5},${margin} ${
                margin + 15
            },${margin}`
        )
        .attr("fill", "black")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    svg.append("polygon") // sağ
        .attr(
            "points",
            `${300 - margin + 10},${350 - 5} ${300 - margin + 10},${350 + 5} ${
                300 - margin + 15
            },${350}`
        )
        .attr("fill", "black")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    for (let i = 0; i < 5; ++i) {
        svg.append("circle")
            .attr("cx", margin + 10 + (length / 5) * i + length / 5 - 10)
            .attr("cy", 350)
            .attr("r", 3)
            .attr("fill", "black");

        // noktalar
        svg.append("circle")
            .attr("cx", margin + 10 + (length / 5) * i + length / 5 - 10)
            .attr("cy", 280 - (length / 5) * 2 * i + length / 5 - 10)
            .attr("r", 4)
            .attr("fill", "red");

        // x dashes
        svg.append("line")
            .attr("x1", margin + 10)
            .attr("y1", 280 - (length / 5) * 2 * i + length / 5 - 10)
            .attr("x2", margin + 10 + (length / 5) * i + length / 5 - 10)
            .attr("y2", 280 - (length / 5) * 2 * i + length / 5 - 10)
            .attr("stroke", "black")
            .attr("stroke-dasharray", 5.5)
            .attr("opacity", 0.2)
            .lower()
            .attr("stroke-width", 2);

        // y dashes
        svg.append("line")
            .attr("x1", margin + 10 + (length / 5) * i + length / 5 - 10)
            .attr("y1", 350)
            .attr("x2", margin + 10 + (length / 5) * i + length / 5 - 10)
            .attr("y2", 280 - (length / 5) * 2 * i + length / 5 - 10)
            .attr("stroke", "black")
            .attr("stroke-dasharray", 5.5)
            .attr("opacity", 0.2)
            .lower()
            .attr("stroke-width", 2);

        svg.append("text")
            .attr("x", margin + 10 + (length / 5) * i + length / 5 - 14)
            .attr("y", 375)
            .attr("font-size", "15px")
            .attr("font-weight", 600)
            .attr("color", "black")
            .text(xNum[i]);
    }

    for (let i = 0; i < 10; ++i) {
        svg.append("circle")
            .attr("cx", margin + 10)
            .attr("cy", margin + 10 + (length / 5) * i + length / 5 - 10)
            .attr("r", 3)
            .attr("fill", "black");

        svg.append("text")
            .attr("x", margin - 15)
            .attr("y", margin + 10 + (length / 5) * i + length / 5 - 5)
            .attr("font-size", "14px")
            .attr("font-weight", 600)
            .attr("color", "black")
            .text(yNum[i]);
    }

    const finLine = svg
        .append("line")
        .attr("x1", margin + 30) // Başlangıç x
        .attr("y1", 300) // Başlangıç y
        .attr("x2", margin + 30) // Başlangıçta x1 = x2
        .attr("y2", 300) // Başlangıçta y1 = y2 (hiçbir şey gözükmez)
        .attr("stroke", "green")
        .attr("stroke-width", 4);

    function startAnimation() {
        button.disabled = true;

        finLine
            .attr("x1", margin + 30) // Başlangıç x
            .attr("y1", 300) // Başlangıç y
            .attr("x2", margin + 30) // Başlangıçta x1 = x2
            .attr("y2", 300);

        finLine
            .transition()
            .duration(3000) // 3 saniye sürsün
            .attr("y2", 60) // Yavaşça aşağıya insin
            .attr("x2", 180);

        setTimeout(() => {
            button.disabled = false; // Butonu tekrar aktif yap
        }, 3000);
    }

    document
        .getElementById("startButtonLine")
        .addEventListener("click", startAnimation);
})();
