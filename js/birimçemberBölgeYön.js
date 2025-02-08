(function () {
    let svg2 = d3
        .select("#birimCemberBolge")
        .append("svg")
        .attr("width", 710)
        .attr("height", 710);

    // Çemberin merkezi ve yarıçapı
    const centerX = 350;
    const centerY = 350;
    const radius = 230;
    // Küçük çemberin yarıçapı

    // **Birim çemberi çiziyoruz**
    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5);

    svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY - radius - 50)
        .attr("x2", centerX)
        .attr("y2", centerY + radius + 60)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .lower();

    svg2.append("line")
        .attr("x1", centerX - radius - 50)
        .attr("y1", centerY)
        .attr("x2", centerX + radius + 60)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    svg2.append("polygon") // üst
        .attr(
            "points",
            `${centerX},${centerY - radius - 60} ${centerX - 10},${centerY - radius - 50} ${centerX + 10},${centerY - radius - 50}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // sağ
        .attr(
            "points",
            `${centerX + radius + 60},${centerY} ${/* 700 - 10 */ centerX + radius + 50},${centerY - 10} ${centerX + radius + 50},${
                centerY + 10
            }`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // sol
        .attr(
            "points",
            `${centerX - radius - 50},${centerY} ${centerX - radius - 40},${centerY - 10} ${centerX - radius - 40},${centerY + 10}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("polygon") // alt
        .attr(
            "points",
            `${centerX},${centerY + radius + 60} ${centerX - 10},${centerY + radius + 50} ${centerX + 10},${centerY + radius + 50}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    svg2.append("text") // x text
        .attr("x", 680)
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

    const labelsBolge = svg2.append("g").attr("id", "svgBolge");
    const labelsYon = svg2.append("g").attr("id", "svgYon");

    const stepSize = radius / 5; // Aralık: Yarıçapı 5'e bölerek eşit paylaştırdık
    const values = [0.2, 0.4, 0.6, 0.8]; // Kullanılacak değerler

    values.forEach((val, i) => {
        let xPositive = centerX + (i + 1) * stepSize;
        let xNegative = centerX - (i + 1) * stepSize;

        let yPositive = centerY - (i + 1) * stepSize;
        let yNegative = centerY + (i + 1) * stepSize;

        // **Pozitif bölge çizgileri** X
        labelsBolge
            .append("line")
            .attr("x1", xPositive)
            .attr("y1", centerY - 7)
            .attr("x2", xPositive)
            .attr("y2", centerY + 7)
            .attr("stroke", "black")
            .attr("stroke-width", 2);

        // **Pozitif bölge etiketleri** X
        labelsBolge
            .append("text")
            .attr("x", xPositive)
            .attr("y", centerY + 30)
            .attr("font-size", "14px")
            .attr("fill", "black")
            .attr("text-anchor", "middle")
            .style("user-select", "none")
            .text(val.toFixed(1));

        // **Negatif bölge çizgileri** X
        labelsBolge
            .append("line")
            .attr("x1", xNegative)
            .attr("y1", centerY - 7)
            .attr("x2", xNegative)
            .attr("y2", centerY + 7)
            .attr("stroke", "black")
            .attr("stroke-width", 2);

        // **Negatif bölge etiketleri** X
        labelsBolge
            .append("text")
            .attr("x", xNegative - 4)
            .attr("y", centerY + 30)
            .attr("font-size", "14px")
            .attr("fill", "black")
            .attr("text-anchor", "middle")
            .style("user-select", "none")
            .text((-val).toFixed(1));

        // POSITIVE BOLGE Y
        labelsBolge
            .append("line")
            .attr("x1", centerX - 7)
            .attr("y1", yPositive)
            .attr("x2", centerX + 7)
            .attr("y2", yPositive)
            .attr("stroke", "black")
            .attr("stroke-width", 2);

        // NEGATİF BOLGE Y
        labelsBolge
            .append("line")
            .attr("x1", centerX - 7)
            .attr("y1", yNegative)
            .attr("x2", centerX + 7)
            .attr("y2", yNegative)
            .attr("stroke", "black")
            .attr("stroke-width", 2);

        labelsBolge
            .append("text")
            .attr("x", centerX - 25)
            .attr("y", yPositive + 5)
            .attr("font-size", "14px")
            .attr("fill", "black")
            .attr("text-anchor", "middle")
            .style("user-select", "none")
            .text(val.toFixed(1));

        labelsBolge
            .append("text")
            .attr("x", centerX - 25)
            .attr("y", yNegative + 5)
            .attr("font-size", "14px")
            .attr("fill", "black")
            .attr("text-anchor", "middle")
            .style("user-select", "none")
            .text((-val).toFixed(1));
    });

    labelsBolge
        .append("text")
        .attr("x", centerX + radius / 2 - 20)
        .attr("y", centerY - radius / 2 + 35)
        .attr("font-size", "24px")
        .attr("fill", "black")
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .text("(+, +)");

    labelsBolge
        .append("text")
        .attr("x", centerX - radius / 2 + 20)
        .attr("y", centerY - radius / 2 + 35)
        .attr("font-size", "24px")
        .attr("fill", "black")
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .text("(-, +)");

    labelsBolge
        .append("text")
        .attr("x", centerX - radius / 2 + 20)
        .attr("y", centerY + radius / 2 - 15)
        .attr("font-size", "24px")
        .attr("fill", "black")
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .text("(-, -)");

    labelsBolge
        .append("text")
        .attr("x", centerX + radius / 2 - 20)
        .attr("y", centerY + radius / 2 - 15)
        .attr("font-size", "24px")
        .attr("fill", "black")
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .text("(+, -)");

    // üzerindeki bölge texti 1.bölge, 2.bölge,
    labelsBolge
        .append("text")
        .attr("x", centerX + radius / 2 - 20)
        .attr("y", centerY - radius / 2 - 10)
        .attr("font-size", "24px")
        .attr("fill", "black")
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .text("1. Bölge");

    labelsBolge
        .append("text")
        .attr("x", centerX - radius / 2 + 20)
        .attr("y", centerY - radius / 2 - 10)
        .attr("font-size", "24px")
        .attr("fill", "black")
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .text("2. Bölge");

    labelsBolge
        .append("text")
        .attr("x", centerX - radius / 2 + 20)
        .attr("y", centerY + radius / 2 + 25)
        .attr("font-size", "24px")
        .attr("fill", "black")
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .text("3. Bölge");

    labelsBolge
        .append("text")
        .attr("x", centerX + radius / 2 - 20)
        .attr("y", centerY + radius / 2 + 25)
        .attr("font-size", "24px")
        .attr("fill", "black")
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .text("4. Bölge");

    // ARC LABELS YON

    let arcPath = labelsYon
        .append("path")
        .attr("transform", "translate(350,350) rotate(90, 0, 0)")
        .attr(
            "d",
            d3.arc()({
                innerRadius: 50,
                outerRadius: 45,
                endAngle: 0, // Başlangıçta 0 derece
                startAngle: 0,
            })
        )
        .attr("fill", "red");

    // **updateArc Fonksiyonu: Slider değerleri ile yayı güncelle**
    let arrow = labelsYon
    .append("polygon")
    .attr("id", "arrow")
    .attr("points", "0,-10 10,10 -10,10") // Üçgen şekli
    .attr("transform", `translate(400, 350) rotate(0)`)
    .attr("fill", "blue");

function updatePositive() {
    // **Slider'lardan değerleri al**
    let positiveAngle = document.getElementById("positiveAngle").value;
    let negativeAngle = document.getElementById("negativeAngle").value;

    // **Dereceyi radyana çevir**
    let positiveRad = (positiveAngle * Math.PI) / 180;
    let negativeRad = (negativeAngle * Math.PI) / 180;

    // **Yeni endAngle hesapla**
    let newEndAngle = -positiveRad; // D3.js'de negatif yönde döndürmek için '-' işareti kullandık

    // **Yarıçapı al (outerRadius)**
    let r = 50; // Yayın dış yarıçapı (Outer Radius)

    // **Yayın ucunun koordinatlarını hesapla**
    let arcEndXPos = 350 + r * Math.cos(newEndAngle); // 350 -> Çemberin merkezi X
    let arcEndYPos = 350 + r * Math.sin(newEndAngle); // 350 -> Çemberin merkezi Y



    //console.log(`Yay Ucu Koordinatları: X = ${arcEndXPos.toFixed(2)}, Y = ${arcEndYPos.toFixed(2)}`);

    // **Yay'ı güncelle**
    arcPath.attr(
        "d",
        d3.arc()({
            innerRadius: 50,
            outerRadius: 45,
            startAngle: 0,
            endAngle: newEndAngle,
        })
    );  
    arrow.attr("transform", `translate(${arcEndXPos}, ${arcEndYPos}) rotate(${-positiveAngle})`);
    document.getElementById("negativeAngle").value = 0;
    console.log("çalıştı")
}


function updateNegative(){
    let negativeAngle = document.getElementById("negativeAngle").value;
    let negativeRad = (negativeAngle * Math.PI) / 180;

    // **Yarıçapı al (outerRadius)**
    let r = 50; // Yayın dış yarıçapı (Outer Radius)

    let arcEndXNeg = 350 + r * Math.cos(negativeRad);
    let arcEndYNeg = 350 + r * Math.sin(negativeRad);

    arcPath.attr(
        "d",
        d3.arc()({
            innerRadius: 50,
            outerRadius: 45,
            startAngle: 0,
            endAngle: negativeRad,
        })
    );
    arrow.attr("transform", `translate(${arcEndXNeg}, ${arcEndYNeg}) rotate(${negativeAngle - 180})`);
    document.getElementById("positiveAngle").value = 0;
}

    document
        .getElementById("positiveAngle")
        .addEventListener("input", updatePositive);
    document
        .getElementById("negativeAngle")
        .addEventListener("input", updateNegative);

    //toggleDisplay("yon");

    function toggleDisplay(selected) {
        if (selected === "bolge") {
            labelsBolge.style("display", "block");
            labelsRadyan.style("display", "none");
            // document.querySelector("#toggleKoordinat").checked = true;
            // document.querySelector("#toggleRadyan").checked = false;
            // document.querySelector("#toggleDegree").checked = false;
        } else if (selected === "yon") {
            labelsBolge.style("display", "none");
            labelsYon.style("display", "block");
            // document.querySelector("#toggleKoordinat").checked = false;
            // document.querySelector("#toggleRadyan").checked = true;
            // document.querySelector("#toggleDegree").checked = false;
        }
    }

    // **Checkbox Event Listeners**
    // document
    //     .querySelector("#toggleKoordinat")
    //     .addEventListener("change", function () {
    //         toggleDisplay("koordinat");
    //     });

    //     document
    //     .querySelector("#toggleRadyan")
    //     .addEventListener("change", function () {
    //         console.log("değişti")
    //         toggleDisplay("radyan");
    //     });

    // document
    //     .querySelector("#toggleDegree")
    //     .addEventListener("change", function () {
    //         toggleDisplay("degree");
    //     });

    // document.getElementById("positiveAngle").addEventListener("input", function() {
    //     document.getElementById("positiveAngleValue").textContent = this.value;
    // });
    
    // document.getElementById("negativeAngle").addEventListener("input", function() {
    //     document.getElementById("negativeAngleValue").textContent = this.value;
    // });
})();
