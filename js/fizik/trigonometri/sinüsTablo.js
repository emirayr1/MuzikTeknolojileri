(function () {
    // Global değişkenler ve fonksiyonlar
    let svg2 = d3
        .select("#sinusTablo")
        .append("svg")
        .attr("width", 610)
        .attr("height", 410);

    const length = 600;
    const height = 150;
    const colSection = 6;
    const rowSection = 2;

    // Başlangıçta çizilecek çap çizgisi
    const line1 = svg2
        .append("line")
        .attr("x1", 0)
        .attr("y1", 10)
        .attr("x2", length)
        .attr("y2", 10)
        .attr("stroke", "black")
        .attr("stroke-width", 6);
    const line2 = svg2
        .append("line")
        .attr("x1", 0)
        .attr("y1", height / 2)
        .attr("x2", length)
        .attr("y2", height / 2)
        .attr("stroke", "black")
        .attr("stroke-width", 6);
    const line3 = svg2
        .append("line")
        .attr("x1", 0)
        .attr("y1", height)
        .attr("x2", length)
        .attr("y2", height)
        .attr("stroke", "black")
        .attr("stroke-width", 6);

    const lines4 = svg2
        .append("line")
        .attr("x1", 2)
        .attr("y1", 10)
        .attr("x2", 2)
        .attr("y2", height)
        .attr("stroke", "black")
        .attr("stroke-width", 6);

    for (let i = 0; i < 7; i++) {
        const lines4 = svg2
            .append("line")
            .attr("x1", i * length / 6)
            .attr("y1", 10)
            .attr("x2", i * length / 6)
            .attr("y2", height)
            .attr("stroke", "black")
            .attr("stroke-width", 6);
    }

    const tableData = [
        ["α", "0°", "90°", "180°", "270°", "360°"],  
        ["sinα", "0", "1", "0", "-1", "0"]
    ];

    tableData.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            svg2.append("text")
                .attr("x", colIndex * length / 6 + 30)  // X pozisyonu (kolon sayısına göre)
                .attr("y", rowIndex === 0 ? height / 2 - 20 : height - 25) // Y pozisyonu (satır sayısına göre)
                .attr("font-size", "20px")
                .attr("fill", "black")
                .attr("font-weight","600")

                .text(value);  // Array'in içindeki string değerleri doğrudan yazdır
        });
    });

})();
