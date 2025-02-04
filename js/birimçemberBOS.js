(function () {
    let svg2 = d3
        .select("#birimCemberBos")
        .append("svg")
        .attr("width", 710)
        .attr("height", 710);

    // Çemberin merkezi ve yarıçapı
    const centerX = 350;
    const centerY = 350;
    const radius = 250;
    // Küçük çemberin yarıçapı

    // **Birim çemberi çiziyoruz**
    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5);

    // **Sabit kırmızı yarıçap çizgisi (0°'de)**

    svg2.append("text")
        .attr("x", centerX + radius / 2)
        .attr("y", centerY - 10)
        .attr("font-size", "25px")
        .attr("fill", "black")
        .attr("font-weight", 600)
        .attr("text-anchor", "middle")
        .text("1 birim");

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", 10)
        .attr("x2", centerX)
        .attr("y2", 690)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .lower();

    svg2.append("line")
        .attr("x1", 10)
        .attr("y1", centerY)
        .attr("x2", 690)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    svg2.append("line")
        .attr("x1", centerX + 2)
        .attr("y1", centerY)
        .attr("x2", centerX + radius - 2)
        .attr("y2", centerY)
        .attr("stroke", "red")
        .attr("stroke-width", 4)
        .raise();

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
            `${700},${centerY} ${/* 700 - 10 */ 690},${centerY - 10} ${690},${
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
            `${centerX},${700} ${centerX - 10},${690} ${centerX + 10},${690}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", 680)
        .attr("y", centerY + 40)
        .attr("font-size", "24px")
        .attr("font-weight", 600)
        .attr("fill", "blue")
        .text("x");

    svg2.append("text") // y text
        .attr("x", centerX + 20)
        .attr("y", 15)
        .attr("font-size", "22px")
        .attr("font-weight", 600)
        .attr("fill", "blue")
        .text("y");

    // koordinat text

    const labelsKoordinat = svg2.append("g").attr("id", "toggleKoordinat");

    labelsKoordinat
        .append("text")
        .attr("x", centerX - 52)
        .attr("y", centerY - 10)
        .attr("font-size", "18px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .text("(0, 0)");

    labelsKoordinat
        .append("text")
        .attr("x", centerX + radius + 10)
        .attr("y", centerY - 10)
        .attr("font-size", "18px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .text("(1, 0)");

    labelsKoordinat
        .append("text")
        .attr("x", centerX - radius - 60)
        .attr("y", centerY - 10)
        .attr("font-size", "18px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .text("(-1, 0)");

    labelsKoordinat
        .append("text")
        .attr("x", centerX + 10)
        .attr("y", centerY - radius - 10)
        .attr("font-size", "18px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .text("(0, 1)");

    labelsKoordinat
        .append("text")
        .attr("x", centerX + 10)
        .attr("y", centerY + radius + 27)
        .attr("font-size", "18px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .text("(0,-1)");

    // dots

    labelsKoordinat
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", 3)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 5);

    labelsKoordinat
        .append("circle")
        .attr("cx", centerX + radius)
        .attr("cy", centerY)
        .attr("r", 3)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 5);

    labelsKoordinat
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY + radius)
        .attr("r", 3)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 5);

    labelsKoordinat
        .append("circle")
        .attr("cx", centerX - radius)
        .attr("cy", centerY)
        .attr("r", 3)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 5);

    labelsKoordinat
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY - radius)
        .attr("r", 3)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 5);

    // radian angles

    const labelsRadyan = svg2.append("g").attr("id", "toggleRadyan");
    const labelsDegree = svg2.append("g").attr("id", "toggleDegree");
    const anglesRadian = [
        { deg: 30, rad: "\\(\\frac{\\pi}{6}\\)" },
        { deg: 45, rad: "\\(\\frac{\\pi}{4}\\)" },
        { deg: 60, rad: "\\(\\frac{\\pi}{3}\\)" },
        { deg: 90, rad: "\\(\\frac{\\pi}{2}\\)" },
        { deg: 120, rad: "\\(\\frac{2\\pi}{3}\\)" },
        { deg: 135, rad: "\\(\\frac{3\\pi}{4}\\)" },
        { deg: 150, rad: "\\(\\frac{5\\pi}{6}\\)" },
        { deg: 180, rad: "\\(\\pi\\)" },
        { deg: 210, rad: "\\(\\frac{7\\pi}{6}\\)" },
        { deg: 225, rad: "\\(\\frac{5\\pi}{4}\\)" },
        { deg: 240, rad: "\\(\\frac{4\\pi}{3}\\)" },
        { deg: 270, rad: "\\(\\frac{3\\pi}{2}\\)" },
        { deg: 300, rad: "\\(\\frac{5\\pi}{3}\\)" },
        { deg: 315, rad: "\\(\\frac{7\\pi}{4}\\)" },
        { deg: 330, rad: "\\(\\frac{11\\pi}{6}\\)" },
        { deg: 360, rad: "\\(2\\pi\\)" },
    ];

    anglesRadian.forEach((angle) => {
        const theta = (angle.deg * Math.PI) / 180; // Dereceyi radyana çevir
        const x = centerX + radius * Math.cos(theta);
        const y = centerY - radius * Math.sin(theta); // SVG'de Y ekseni ters

        // Noktayı yeşil olarak işaretle
        labelsRadyan
            .append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 3)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 5);

        labelsDegree
            .append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 3)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 5);

        // **MathJax destekli text ekle**
        let textElementRadian = labelsRadyan
            .append("foreignObject")
            .attr("x", x + (x > centerX ? 15 : -40)) // Sağa ve sola göre konumlandır
            .attr("y", y + (y > centerY ? 5 : -39)) // Yukarı ve aşağı göre konumlandır
            .attr("width", 70)
            .attr("height", 70)
            .append("xhtml:div")
            .style("font-size", "20px")
            .style("font-weight", "700")
            .style("color", "black")
            .html(angle.rad);

        let textElementDegree = labelsDegree
            .append("foreignObject")
            .attr("x", x + (x > centerX ? 15 : -40)) // Sağa ve sola göre konumlandır
            .attr("y", y + (y > centerY ? 5 : -39)) // Yukarı ve aşağı göre konumlandır
            .attr("width", 70)
            .attr("height", 70)
            .append("xhtml:div")
            .style("font-size", "18px")
            .style("font-weight", "500")
            .style("color", "black")
            .html(angle.deg);
    });

    // **MathJax ile Yazıları Güncelle**
    if (window.MathJax) {
        MathJax.typesetPromise();
    }

    // toggle functions

    document
        .getElementById("toggleKoordinat")
        .addEventListener("change", function () {
            if (this.checked) {
                labelsKoordinat.style("display", "block"); // Metinleri göster
            } else {
                labelsKoordinat.style("display", "none"); // Metinleri gizle
            }
        });

    document
        .getElementById("toggleRadyan")
        .addEventListener("change", function () {
            if (this.checked) {
                labelsRadyan.style("display", "block"); // Metinleri göster
            } else {
                labelsRadyan.style("display", "none"); // Metinleri gizle
            }
        });
    document
        .getElementById("toggleDegree")
        .addEventListener("change", function () {
            if (this.checked) {
                labelsDegree.style("display", "block"); // Metinleri göster
            } else {
                labelsDegree.style("display", "none"); // Metinleri gizle
            }
        });
})();
