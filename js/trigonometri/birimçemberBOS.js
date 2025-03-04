(function () {
    const height = 600;
    const width = 600;
    let svg2 = d3
        .select("#birimCemberBos")
        .append("svg")
        .attr("width", width)
        // .style("background-color","white")
        .attr("height", height);

    // Çemberin merkezi ve yarıçapı
    const centerX = width / 2 - 10;
    const centerY = height / 2 - 10;
    const radius = 180;
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

    // koordinat text

    const labelsKoordinat = svg2.append("g").attr("id", "svgKoordinat");

    labelsKoordinat.append("line")
    .attr("x1", centerX + 2)
    .attr("y1", centerY)
    .attr("x2", centerX + radius - 2)
    .attr("y2", centerY)
    .attr("stroke", "red")
    .attr("stroke-width", 4)
    .raise();

    labelsKoordinat.append("text")
        .attr("x", centerX + radius / 2)
        .attr("y", centerY - 10)
        .attr("font-size", "25px")
        .attr("fill", "black")
        .attr("font-weight", 600)
        .attr("text-anchor", "middle")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("1 birim");

    let movingCircle = labelsKoordinat
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(Math.PI / 4)) // 0 derece konumu (1,0)
        .attr("cy", centerY - radius * Math.sin(Math.PI / 4))
        .attr("r", 8)
        .attr("fill", "red")
        .attr("cursor", "pointer");

    let movingText = labelsKoordinat
        .append("text")
        .attr("x", centerX + radius * Math.cos(Math.PI / 4) + 10)
        .attr("y", centerY - radius * Math.sin(Math.PI / 4))
        .attr("font-size", "18px")
        .attr("font-weight", "bold")
        .attr("fill", "red")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .raise()
        .text("(0.80, 0.60)");

    let isDragging = false;

    // Mouse basıldığında sürükleme başlasın
    movingCircle.on("mousedown", function (event) {
        isDragging = true;
    });

    d3.select("body").on("mousemove", function (event) {
        if (isDragging) {
            let [mouseX, mouseY] = d3.pointer(event, svg2.node()); // Mouse pozisyonunu al

            // Çemberin merkezi ile fare arasındaki açıyı hesapla
            let angle = Math.atan2(mouseY - centerY, mouseX - centerX);

            // Çember yayındaki karşılık gelen noktayı hesapla
            let newX = centerX + radius * Math.cos(angle);
            let newY = centerY + radius * Math.sin(angle);

            // Kırmızı noktayı çemberin üzerine taşı
            movingCircle.attr("cx", newX).attr("cy", newY);
            movingText.attr("x", newX + 10).attr("y", newY - 10);

            // Koordinatları normalize et (-1 ile 1 arasında)
            let normalizedX = (newX - centerX) / radius;
            let normalizedY = -(newY - centerY) / radius; // SVG'de Y ekseni ters olduğu için negatif alıyoruz

            // Metni güncelle
            movingText.text(
                `(${normalizedX.toFixed(2)}, ${normalizedY.toFixed(2)})`
            );
        }
    });

    // Mouse bırakıldığında sürüklemeyi durdur
    d3.select("body").on("mouseup", function () {
        isDragging = false;
    });

    // Mouse bırakıldığında sürüklemeyi durdur
    d3.select("body").on("mouseup", function () {
        isDragging = false;
    });

    labelsKoordinat
        .append("text")
        .attr("x", centerX - 52)
        .attr("y", centerY - 10)
        .attr("font-size", "18px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(0, 0)");

    labelsKoordinat
        .append("text")
        .attr("x", centerX + radius + 10)
        .attr("y", centerY - 10)
        .attr("font-size", "18px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(1, 0)");

    labelsKoordinat
        .append("text")
        .attr("x", centerX - radius - 60)
        .attr("y", centerY - 10)
        .attr("font-size", "18px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(-1, 0)");

    labelsKoordinat
        .append("text")
        .attr("x", centerX + 10)
        .attr("y", centerY - radius - 10)
        .attr("font-size", "18px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("(0, 1)");

    labelsKoordinat
        .append("text")
        .attr("x", centerX + 10)
        .attr("y", centerY + radius + 27)
        .attr("font-size", "18px")
        .attr("font-weight", 500)
        .attr("fill", "black")
        .attr("pointer-events", "none")
        .style("user-select", "none")
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

    const labelsRadyan = svg2.append("g").attr("id", "svgRadyan");
    const labelsDegree = svg2.append("g").attr("id", "svgDegree");
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

        document.querySelector("#toggleKoordinat").checked = true;
        document.querySelector("#toggleRadyan").checked = false;
        document.querySelector("#toggleDegree").checked = false;
        console.log(document.querySelector("#toggleKoordinat").checked);

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
            .attr("pointer-events", "none")
            .style("user-select", "none")
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
            .attr("pointer-events", "none")
            .style("user-select", "none")
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

    // YON BOLGE
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
        .attr("transform", "translate(290,290) rotate(90, 0, 0)")
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
        .attr("transform", `translate(340, 290) rotate(0)`)
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
        let arcEndXPos = 290 + r * Math.cos(newEndAngle); // 350 -> Çemberin merkezi X
        let arcEndYPos = 290 + r * Math.sin(newEndAngle); // 350 -> Çemberin merkezi Y

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
        arrow.attr(
            "transform",
            `translate(${arcEndXPos}, ${arcEndYPos}) rotate(${-positiveAngle})`
        );
        document.getElementById("negativeAngle").value = 0;
        console.log("çalıştı");
    }

    function updateNegative() {
        let negativeAngle = document.getElementById("negativeAngle").value;
        let negativeRad = (negativeAngle * Math.PI) / 180;

        // **Yarıçapı al (outerRadius)**
        let r = 50; // Yayın dış yarıçapı (Outer Radius)

        let arcEndXNeg = 290 + r * Math.cos(negativeRad);
        let arcEndYNeg = 290 + r * Math.sin(negativeRad);

        arcPath.attr(
            "d",
            d3.arc()({
                innerRadius: 50,
                outerRadius: 45,
                startAngle: 0,
                endAngle: negativeRad,
            })
        );
        arrow.attr(
            "transform",
            `translate(${arcEndXNeg}, ${arcEndYNeg}) rotate(${
                negativeAngle - 180
            })`
        );
        document.getElementById("positiveAngle").value = 0;
    }

    document
        .getElementById("positiveAngle")
        .addEventListener("input", updatePositive);
    document
        .getElementById("negativeAngle")
        .addEventListener("input", updateNegative);

    // toggle functions

    toggleDisplay("koordinat");

    function toggleDisplay(selected) {
        if (selected === "koordinat") {
            labelsKoordinat.style("display", "block");
            labelsRadyan.style("display", "none");
            labelsDegree.style("display", "none");
            labelsYon.style("display", "none");
            labelsBolge.style("display", "none");
            document.querySelector("#toggleKoordinat").checked = true;
            document.querySelector("#toggleRadyan").checked = false;
            document.querySelector("#toggleDegree").checked = false;
            document.querySelector("#toggleYon").checked = false;
            document.querySelector("#toggleBolge").checked = false;

            //slider visibility
            document.getElementById("slidersCember").style.display = "none";

        } else if (selected === "radyan") {
            labelsKoordinat.style("display", "none");
            labelsRadyan.style("display", "block");
            labelsDegree.style("display", "none");
            labelsYon.style("display", "none");
            labelsBolge.style("display", "none");
            document.querySelector("#toggleKoordinat").checked = false;
            document.querySelector("#toggleRadyan").checked = true;
            document.querySelector("#toggleDegree").checked = false;
            document.querySelector("#toggleYon").checked = false;
            document.querySelector("#toggleBolge").checked = false;

            //slider visibility
            document.getElementById("slidersCember").style.display = "none";

        } else if (selected === "degree") {
            labelsKoordinat.style("display", "none");
            labelsRadyan.style("display", "none");
            labelsDegree.style("display", "block");
            labelsYon.style("display", "none");
            labelsBolge.style("display", "none");
            document.querySelector("#toggleKoordinat").checked = false;
            document.querySelector("#toggleRadyan").checked = false;
            document.querySelector("#toggleDegree").checked = true;
            document.querySelector("#toggleYon").checked = false;
            document.querySelector("#toggleBolge").checked = false;

            //slider visibility
            document.getElementById("slidersCember").style.display = "none";

        } else if (selected === "yon") {
            labelsKoordinat.style("display", "none");
            labelsRadyan.style("display", "none");
            labelsDegree.style("display", "none");
            labelsYon.style("display", "block");
            labelsBolge.style("display", "none");
            document.querySelector("#toggleKoordinat").checked = false;
            document.querySelector("#toggleRadyan").checked = false;
            document.querySelector("#toggleDegree").checked = false;
            document.querySelector("#toggleYon").checked = true;
            document.querySelector("#toggleBolge").checked = false;
            
            //slider visibility
            document.getElementById("slidersCember").style.display = "block";

        } else if (selected === "bolge") {
            labelsKoordinat.style("display", "none");
            labelsRadyan.style("display", "none");
            labelsDegree.style("display", "none");
            labelsYon.style("display", "none");
            labelsBolge.style("display", "block");
            document.querySelector("#toggleKoordinat").checked = false;
            document.querySelector("#toggleRadyan").checked = false;
            document.querySelector("#toggleDegree").checked = false;
            document.querySelector("#toggleYon").checked = false;
            document.querySelector("#toggleBolge").checked = true;

            //slider visibility
            document.getElementById("slidersCember").style.display = "none";
        }
    }

    document
        .getElementById("positiveAngle")
        .addEventListener("input", function () {
            document.getElementById("positiveAngleValue").textContent =
                this.value;
        });

    document
        .getElementById("negativeAngle")
        .addEventListener("input", function () {
            document.getElementById("negativeAngleValue").textContent =
               - this.value;
        });
    // **Checkbox Event Listeners**
    document
        .querySelector("#toggleKoordinat")
        .addEventListener("change", function () {
            toggleDisplay("koordinat");
        });

    document
        .querySelector("#toggleRadyan")
        .addEventListener("change", function () {
            toggleDisplay("radyan");
        });

    document
        .querySelector("#toggleDegree")
        .addEventListener("change", function () {
            toggleDisplay("degree");
        });

    document
        .querySelector("#toggleYon")
        .addEventListener("change", function () {
            toggleDisplay("yon");
        });

    document
        .querySelector("#toggleBolge")
        .addEventListener("change", function () {
            toggleDisplay("bolge");
        });
})();
