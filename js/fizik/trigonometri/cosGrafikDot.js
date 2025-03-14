(function () {
    const button = document.getElementById("startButtonCos");

    svg2 = d3
        .select("#cosGrafikDot")
        // .style("background-color","white")
        .append("svg")
        .attr("width", 600)
        .attr("height", 400);

    const width = 600;
    const height = 400;
    const margin = 50;

    // Ölçekler
    const xScale = d3
        .scaleLinear()
        .domain([0, 360])
        .range([margin, width - margin]);

    const yScale = d3
        .scaleLinear()
        .domain([-1, 1])
        .range([height - margin, margin]);

    // X ekseni
    svg2.append("g")
        .attr("transform", `translate(0, ${yScale(0)})`)
        .call(d3.axisBottom(xScale).tickValues([0, 90, 180, 270, 360]));

    // Y ekseni
    svg2.append("g")
        .attr("transform", `translate(${margin}, 0)`)
        .call(d3.axisLeft(yScale));

    const cosLine = d3
        .line()
        .x((d) => xScale(d))
        .y((d) => yScale(Math.cos((d * Math.PI) / 180)));

    // Başlangıç noktaları (Sadece ana açılar)
    let points = [0, 90, 180, 270, 360];

    // Nokta çizme fonksiyonu
    function updatePoints() {
        // Slider değerini al
        const sliderValue = +document.getElementById("dotSliderCos").value;

        // Nokta yoğunluğuna göre yeni noktaları belirle
        if (sliderValue === 0) {
            points = [0, 90, 180, 270, 360];
        } else if (sliderValue === 1) {
            points = d3.range(0, 361, 45); // 90° aralıklarla
        } else if (sliderValue === 2) {
            points = d3.range(0, 361, 30); // 45° aralıklarla
        } else if (sliderValue === 3) {
            points = d3.range(0, 361, 15); // 30° aralıklarla
        }

        // Önce eski noktaları temizle
        svg2.selectAll(".cos-point").remove();
        svg2.selectAll(".dash-lineY").remove();
        svg2.selectAll(".dash-lineX").remove();

        // Yeni noktaları ekle
        svg2.selectAll(".cos-point")
            .data(points)
            .enter()
            .append("circle")
            .attr("class", "cos-point")
            .attr("cx", (d) => xScale(d))
            .attr("cy", (d) => yScale(Math.cos((d * Math.PI) / 180)))
            .attr("r", 5)
            .lower()
            .attr("fill", "red");
            

        svg2.selectAll(".dash-lineY")
            .data(points)
            .enter()
            .append("line")
            .attr("class", "dash-lineY")
            .attr("x1", (d) => xScale(d))
            .attr("y1", 200)
            .attr("x2", (d) => xScale(d))
            .attr("y2", (d) => yScale(Math.cos((d * Math.PI) / 180)))
            .attr("stroke", "black")
            .attr("stroke-dasharray", 5.5)
            .attr("opacity", 0.2)
            .attr("stroke-width", 2);

        svg2.selectAll(".dash-lineX")
            .data(points)
            .enter()
            .append("line")
            .attr("class", "dash-lineX")
            .attr("x1", 50)
            .attr("y1", (d) => yScale(Math.cos((d * Math.PI) / 180)))
            .attr("x2", (d) => xScale(d))
            .attr("y2", (d) => yScale(Math.cos((d * Math.PI) / 180)))
            .attr("stroke", "black")
            .attr("stroke-dasharray", 5.5)
            .attr("opacity", 0.05)
            .attr("stroke-width", 2);
    }

    // İlk çizim
    updatePoints();

    function startAnimation() {
        button.disabled = true; // Butonu devre dışı bırak
        console.log("KOSAGirdi")

        // 0'dan 360'a kadar olan açıları al
        const data = d3.range(0, 361, 1);
        svg2.selectAll(".cosLine").remove();
        const linePath = svg2
            .append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("class", "cosLine")
            .raise()
            .attr("stroke-width", 3)
            .attr("d", cosLine)

        // Çizgiyi 3 saniye içinde çizmek için animasyon ekleyelim
        linePath
            .transition()
            .duration(3000) // 3 saniye
            .attrTween("stroke-dasharray", function () {
                const len = this.getTotalLength(); // Çizgi uzunluğunu al
                return function (t) {
                    return t * len + "," + len;
                };
            });

        // 3 saniye sonra butonu tekrar etkinleştir
        setTimeout(() => {
            button.disabled = false;
        }, 3000);
    }

    document
        .getElementById("startButtonCos")
        .addEventListener("click", startAnimation);

    // Slider değiştikçe güncelle
    document
        .getElementById("dotSliderCos")
        .addEventListener("input", updatePoints);
})();
