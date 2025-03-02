(function () {
    // Global değişkenler ve fonksiyonlar
    let height = 800;
    let svg2 = d3
        .select("#tanInteractive")
        .append("svg")
        .attr("width", 600)
        .attr("height", height);
    // .call(
    //     d3
    //         .zoom()
    //         .scaleExtent([0.2, 1.3]) // Min ve max zoom seviyeleri
    //         .on("zoom", (event) => {
    //             svg2.select("g").attr("transform", event.transform);
    //         })
    // )
    // .on("mousedown.zoom", null) // Mouse drag ile hareketi engelle
    // .on("dblclick.zoom", null); // Çift tıklama zoom'u engelle

    // const g = svg2.append("g");
    // Çemberin merkezi ve yarıçapı

    const tanInteractiveG = svg2.append("g").attr("id", "tanInteractive_svg");
    const tan30G = svg2.append("g").attr("id", "tan30_svg");
    const tan45G = svg2.append("g").attr("id", "tan45_svg");
    const tan60G = svg2.append("g").attr("id", "tan60_svg");
    const tan90G = svg2.append("g").attr("id", "tan90_svg");
    const tan150G = svg2.append("g").attr("id", "tan150_svg");
    const tan240G = svg2.append("g").attr("id", "tan240_svg");
    const tan270G = svg2.append("g").attr("id", "tan270_svg");
    const tan330G = svg2.append("g").attr("id", "tan330_svg");

    const centerX = 300;
    let centerY = height / 2;
    const radius = 150;
    const smallCircleRadius = 20;

    // Birim çemberi çiziyoruz
    const unitCircle = svg2
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    // Başlangıçta çizilecek çap çizgisi
    const line = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(Math.PI / 4))
        .attr("y2", centerY - radius * Math.sin(Math.PI / 4))
        .attr("stroke", "red")
        .attr("stroke-width", 3);

    const tanLine = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY - radius * Math.tan(Math.PI / 4))
        .attr("stroke", "blue")
        .attr("stroke-width", 3);

    const point = svg2
        .append("circle")
        .attr("cx", centerX + radius * Math.cos(Math.PI / 4))
        .attr("cy", centerY - radius * Math.sin(Math.PI / 4))
        .attr("r", 6)
        .attr("fill", "red")
        .raise();

    const tanAxis = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", height - 50)
        .attr("x2", centerX + radius)
        .attr("y2", 50)
        .lower()
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    const arcPath = svg2
        .append("path")
        .attr("fill", "grey")
        .attr("oppacity", 0.001);

    const yAxis = svg2
        .append("line")
        .attr("x1", centerX)
        .attr("y1", 50)
        .attr("x2", centerX)
        .attr("y2", height - 50)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .lower();

    const xAxis = svg2
        .append("line")
        .attr("x1", 10)
        .attr("y1", centerY)
        .attr("x2", 590)
        .attr("y2", centerY)
        .attr("stroke", "black")
        .lower()
        .attr("stroke-width", 3);

    const upTri = svg2
        .append("polygon") // üst
        .attr(
            "points",
            `${centerX},${centerY - (height / 2 - 40)} ${centerX - 10},${
                centerY - (height / 2 - 50)
            } ${centerX + 10},${centerY - (height / 2 - 50)}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    const rightTri = svg2
        .append("polygon") // sağ
        .attr(
            "points",
            `${600},${centerY} ${/* 700 - 10 */ 590},${centerY - 10} ${590},${
                centerY + 10
            }`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    const leftTri = svg2
        .append("polygon") // sol
        .attr(
            "points",
            `${0},${centerY} ${10},${centerY - 10} ${10},${centerY + 10}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    const downTri = svg2
        .append("polygon") // alt
        .attr(
            "points",
            `${centerX},${centerY + (height / 2 - 40)} ${centerX - 10},${
                centerY + (height / 2 - 50)
            } ${centerX + 10},${centerY + (height / 2 - 50)}`
        )
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 3);

    xAxisText = svg2
        .append("text") // x text
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

    const aci = svg2
        .append("text")
        .attr("x", centerX + 30 * Math.cos(Math.PI / 4))
        .attr("y", centerY - 10 * Math.sin(Math.PI / 4))
        .attr("font-size", "12px")
        .attr("font-weight", 600)
        .attr("fill", "black")
        .attr("opacity", "0")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .text("30°");

    const dashLinesC = svg2
        .append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY - radius * Math.tan(Math.PI / 4))
        .attr("x2", centerX)
        .attr("y2", centerY - radius * Math.tan(Math.PI / 4))
        .attr("stroke", "red")
        .attr("stroke-dasharray", "5.5")
        .attr("stroke-width", 3);

    let isDragging = false;

    // Fare basıldığında (mousedown) drag işlemini başlat
    svg2.on("mousedown", (event) => {
        isDragging = true;
        console.log("bastıtuttu");
        updateLine(event);
    });

    // Fare hareket ettiğinde (mousemove) çizgiyi güncelle
    svg2.on("mousemove", (event) => {
        if (isDragging) {
            console.log("hareketettirdi");
            updateLine(event);
        }
    });

    // Fare bırakıldığında (mouseup) drag işlemini durdur
    svg2.on("mouseup", () => {
        isDragging = false;
    });

    // Çizgiyi güncelleyen fonksiyon
    function updateLine(event) {
        const [mouseX, mouseY] = d3.pointer(event);

        // Merkezden fareye olan açıyı hesapla
        const angleCircle = Math.atan2(mouseY - centerY, mouseX - centerX);

        let angleDegrees = -1 * angleCircle * (180 / Math.PI);
        if (angleDegrees < 0) {
            angleDegrees += 360;
        }

        let angleCircleTransform = -1 * angleDegrees * (Math.PI / 180);

        const arcGenerator = d3
            .arc()
            .innerRadius(0) // İç yarıçap
            .outerRadius(smallCircleRadius) // Dış yarıçap (küçük çemberin yarıçapı)
            .startAngle(0) // Başlangıç açısı
            .endAngle(angleCircleTransform); // Son açı (yavaşça büyüyen dilim)

        // Küçük çemberin diliminin yolunu çiz
        arcPath
            .attr("d", arcGenerator)
            .attr("opacity", 0.4)
            .attr("transform", `translate(${centerX}, ${centerY}) rotate(90)`); // Çevreyi merkeze taşır

        distanceCos = Math.cos(angleCircle);
        distanceSin = -1 * Math.sin(angleCircle);

        const newX2 = centerX + radius * Math.cos(angleCircle);
        const newY2 = centerY + radius * Math.sin(angleCircle);

        //console.log(Math.sin(-angleCircle))

        aci.attr("opacity", "0");
        line.attr("x2", newX2).attr("y2", newY2);

        point.attr("cx", newX2).attr("cy", newY2);

        tanLine
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", centerX + radius)
            .attr("y2", centerY - radius * Math.tan(-angleCircleTransform));

        // 300den küçük olursa solda demek 550 max sağ 50 max sol NEWX2

        dashLinesC
            .attr("x1", centerX + radius)
            .attr("y1", centerY - radius * Math.tan(-angleCircleTransform))
            .attr("x2", centerX)
            .attr("y2", centerY - radius * Math.tan(-angleCircleTransform))
            .lower();

        document.getElementById(
            "eqTanCounter"
        ).textContent = `tan${angleDegrees.toFixed(0)}°`;
        document.getElementById(
            "eqSinCounter"
        ).textContent = `sin${angleDegrees.toFixed(0)}°`;
        document.getElementById(
            "eqCosCounter"
        ).textContent = `cos${angleDegrees.toFixed(0)}°`;
        document.getElementById(
            "eqPayCounter"
        ).textContent = `${distanceSin.toFixed(2)}`;
        document.getElementById(
            "eqPaydaCounter"
        ).textContent = `${distanceCos.toFixed(2)}`;
        document.getElementById("eqSonuçCounter").textContent = `${
            (angleDegrees > 89 && angleDegrees < 92) ||
            (angleDegrees > 269 && angleDegrees < 272)
                ? `tanımsız`
                : (distanceSin / distanceCos).toFixed(1)
        }`;
    }

    function changeDegree(degree) {
        const radian = -1 * ((degree * Math.PI) / 180);

        const arcGenerator = d3
            .arc()
            .innerRadius(0) // İç yarıçap
            .outerRadius(smallCircleRadius) // Dış yarıçap (küçük çemberin yarıçapı)
            .startAngle(0) // Başlangıç açısı
            .endAngle(radian); // Son açı (yavaşça büyüyen dilim)

        // Küçük çemberin diliminin yolunu çiz
        arcPath
            .attr("d", arcGenerator)
            .attr("opacity", 0.4)
            .attr("transform", `translate(${centerX}, ${centerY}) rotate(90)`); // Çevreyi merkeze taşır

        const newX2 = centerX + radius * Math.cos(radian);
        const newY2 = centerY + radius * Math.sin(radian);

        //console.log(Math.sin(-angleCircle))

        line.attr("x2", newX2).attr("y2", newY2);

        point.attr("cx", newX2).attr("cy", newY2);

        tanLine
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", centerX + radius)
            .attr("y2", centerY - radius * Math.tan(-radian));

        // 300den küçük olursa solda demek 550 max sağ 50 max sol NEWX2
        aci.attr("x", centerX + 40 * Math.cos(radian))
            .attr("y", centerY + 10 * Math.sin(radian))
            .attr("opacity","1")
            .text(`${degree}°`);

        dashLinesC
            .attr("x1", centerX + radius)
            .attr("y1", centerY - radius * Math.tan(-radian))
            .attr("x2", centerX)
            .attr("y2", centerY - radius * Math.tan(-radian))
            .lower();
    }

    toggleDeneme("150");
    function toggleDeneme(selected){
        changeDegree(selected === "Bos" ? 45 : selected);

        const options = ["30", "45", "60", "90", "150", "240", "270", "330","Bos"];

        const excluded = options.filter(item => item !== selected);

        document.getElementById(`toggle${selected}maddeTan`).style.display = "block";
        document.querySelector(`#toggle${selected}Tan`).checked = true;

        excluded.forEach(item => {
            document.getElementById(`toggle${item}maddeTan`).style.display = "none"; // burada hata var okuyamıyor
            document.querySelector(`#toggle${item}Tan`).checked = false;
        });
    }
    
    document
        .querySelector("#toggle30Tan")
        .addEventListener("change", function () {
            toggleDeneme("30");
        });

    document
        .querySelector("#toggle45Tan")
        .addEventListener("change", function () {
            toggleDeneme("45");
        });

    document
        .querySelector("#toggle60Tan")
        .addEventListener("change", function () {
            toggleDeneme("60");
        });

    document
        .querySelector("#toggle90Tan")
        .addEventListener("change", function () {
            toggleDeneme("90");
        });

    document
        .querySelector("#toggle150Tan")
        .addEventListener("change", function () {
            toggleDeneme("150");
        });

    document
        .querySelector("#toggle240Tan")
        .addEventListener("change", function () {
            toggleDeneme("240");
        });

    document
        .querySelector("#toggle270Tan")
        .addEventListener("change", function () {
            toggleDeneme("270");
        });

    document
        .querySelector("#toggle330Tan")
        .addEventListener("change", function () {
            toggleDeneme("330");
        });

    document
        .querySelector("#toggleBosTan")
        .addEventListener("change", function () {
            toggleDeneme("Bos");
        });

    // document.getElementById("scaleUp-btn").addEventListener("click", () => {
    //     updateScale(true);
    // });

    // document.getElementById("scaleDown-btn").addEventListener("click", () => {
    //     updateScale(false);
    // });
})();
