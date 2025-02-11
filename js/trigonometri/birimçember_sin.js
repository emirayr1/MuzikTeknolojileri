(function () {

    // Global değişkenler ve fonksiyonlar
    let svg2 = d3.select('#birimçemberSin')
        .append('svg')
        .attr('width', 1000)
        .attr('height', 700);

    // Çemberin merkezi ve yarıçapı
    const centerX = 300;
    const centerY = 300;
    const radius = 250;
    const smallCircleRadius = 20;
    const tapeWidth = 20;
    const gripHeight = 10;

    // Birim çemberi çiziyoruz
    svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5);

    // Başlangıçta çizilecek çap çizgisi
    const line = svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY)
        .attr("stroke", "red")
        .lower()
        .attr("stroke-width", 2);

    const point = svg2.append("circle")
        .attr("cx",centerX + radius)
        .attr("cy",centerY)
        .attr("r",8)
        .attr("fill","red")
        .attr("stroke","red")
        .attr("stroke-width",4)
        .raise();

    dashLines = svg2.append("line")
        .attr("x1",centerX + radius)
        .attr("y1",centerY)
        .attr("x2",centerX + radius)
        .attr("y2",centerY)
        .attr("stroke","black")
        .attr("stroke-dasharray","10,5")
        .attr("stroke-width",2);

    const sinLine = svg2.append("line")
        .attr("x1", centerX + radius)
        .attr("y1", centerY)
        .attr("x2", centerX + radius)
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 5);

    const sinLineRight = svg2.append("line")
        .attr("x1", centerX + radius + 200)
        .attr("y1", centerY)
        .attr("x2", centerX + radius + 200)
        .attr("y2", centerY)
        .attr("stroke", "blue")
        .attr("stroke-width", 5);

    
    const smallCircle = svg2.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", smallCircleRadius)  // Küçük çemberin yarıçapı
        .attr("fill", "none")
        .attr("stroke", "none")
        .attr("stroke-width", 5)
        .attr("oppacity", 0);


    const smallCircleY = svg2.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + smallCircleRadius)
        .attr("y2", centerY)
        .attr("fill", "none")
        .attr("stroke", "none")
        .attr("oppacity", 0);


    const arcPath = svg2.append("path")
        .attr("fill", "grey")
        .attr("oppacity", 0.001)

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


        const tapeContainer = svg2.append("g")
        .attr("id", "tapeContainer")
        .attr("transform", `translate(${centerX + radius + 400 - tapeWidth / 2}, ${centerY})`);

    const body = tapeContainer.append("rect")
        .attr("x", -30)
        .attr("y", -50)
        .attr("width", 60)
        .attr("height", 100)
        .attr("rx", 20)
        .attr("ry", 20)
        .attr("fill", "#808080")
        .attr("stroke", "black")
        .attr("stroke-width", 3);

    // **Şerit (Sarı Dikdörtgen)**
    const tape = tapeContainer.append("rect")
        .attr("x", -tapeWidth / 2)
        .attr("y", -50)
        .attr("width", tapeWidth)
        .attr("height", 0)
        .attr("fill", "#FFD700")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    // **Şeritin Ucundaki Gri Tutacak**
    const tapeGrip = tapeContainer.append("rect")
        .attr("x", -tapeWidth / 2 - 5)
        .attr("y", -50 - gripHeight)
        .attr("width", tapeWidth + 10)
        .attr("height", gripHeight)
        .attr("fill", "#B0B0B0")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    let isDragging = false;

    // Fare basıldığında (mousedown) drag işlemini başlat
    svg2.on("mousedown", (event) => {
        isDragging = true;
        updateLine(event);

    });

    // Fare hareket ettiğinde (mousemove) çizgiyi güncelle
    svg2.on("mousemove", (event) => {
        if (isDragging) {
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

        let angleDegrees = (-1 * angleCircle) * (180 / Math.PI);
        if (angleDegrees < 0) {
            angleDegrees += 360;
        }

        let angleCircleTransform = (-1 * angleDegrees * (Math.PI / 180));


        const arcGenerator = d3.arc()
            .innerRadius(0)  // İç yarıçap
            .outerRadius(smallCircleRadius)  // Dış yarıçap (küçük çemberin yarıçapı)
            .startAngle(0)  // Başlangıç açısı
            .endAngle(angleCircleTransform);  // Son açı (yavaşça büyüyen dilim)


        // Küçük çemberin diliminin yolunu çiz
        arcPath
            .attr("d", arcGenerator)
            .attr("transform", `translate(${centerX}, ${centerY}) rotate(90)`)  // Çevreyi merkeze taşır

        distanceCos = Math.cos(angleCircle);
        distanceSin = (-1 * Math.sin(angleCircle));

        const newX2 = centerX + radius * Math.cos(angleCircle);
        const newY2 = centerY + radius * Math.sin(angleCircle);

        const sNewX2 = centerX + smallCircleRadius * Math.cos(angleCircle);
        const sNewY2 = centerY + smallCircleRadius * Math.sin(angleCircle);

        //console.log(Math.sin(-angleCircle))

        let tapeLength = Math.abs(newY2 - centerY);

        // Eğer nokta merkezden aşağıdaysa (newY2 > centerY), şerit aşağı doğru uzar
        // Eğer nokta merkezden yukarıdaysa (newY2 < centerY), şerit yukarı doğru uzar
        const tapeY = newY2 > centerY ? 0 : -tapeLength;


        tape.attr("y", tapeY)
            .attr("height", tapeLength);

        console.log(tapeLength)

        tapeLength = newY2 > centerY ? tapeLength : -tapeLength;
        tapeGrip.attr("y", tapeLength );
    

        // Çizgiyi güncelle
        line
            .attr("x2", newX2)
            .attr("y2", newY2);

        point
            .attr("cx",newX2)
            .attr("cy",newY2)

        sinLine
            .attr("x1", centerX)
            .attr("y1", newY2)
            .attr("x2", centerX)
            .attr("y2", centerY);
        sinLineRight
            .attr("x1",centerX + radius + 250)
            .attr("y1",newY2)
            .attr("x2",centerX + radius + 250)
            .attr("y2",centerY)
        dashLines
            .attr("x1",newX2)
            .attr("y1",newY2)
            .attr("x2",centerX)
            .attr("y2",newY2)

        smallCircleY
            .attr("x2", sNewX2)
            .attr("y2", sNewY2);

    }
})();
