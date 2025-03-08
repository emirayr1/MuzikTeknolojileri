(function () {
    const div = d3.select("#noktadanCember");
    const button = document.getElementById("playButton"); // HTML'deki butonu seç

    if (div.empty()) {
        console.error("HATA: #noktadanCember ID'li div bulunamadı!");
        return;
    }

    // SVG'yi burada oluştur ve genişlik/yükseklik ekle
    const svg = div.append("svg").attr("width", 600).attr("height", 600);

    const width = 600;
    const height = 600;
    const centerX = width / 2; // Çemberin merkezi (X)
    const centerY = height / 2; // Çemberin merkezi (Y)
    const radius = 250; // Çemberin yarıçapı
    const numPoints = 360; // 360 Nokta (derece)

    let isPlaying = false; // Animasyonun oynayıp oynamadığını kontrol eder

    function drawStaticScene() {
        svg.selectAll("*").remove(); // Önceki çizimleri temizle

        // **Merkez noktası (O harfi ile birlikte)**
        svg.append("circle")
            .attr("cx", centerX)
            .attr("cy", centerY)
            .attr("r", 5)
            .raise()
            .attr("fill", "black");

        svg.append("text")
            .attr("x", centerX - 20) // Merkez noktasının soluna "O" koy
            .attr("y", centerY + 5)
            .attr("font-size", "25px")
            .attr("fill", "black")
            .attr("font-weight", 600)
            .attr("text-anchor", "middle")
            .text("O");

        // **Yarıçap çizgisi**
        const radiusLine = svg
            .append("line")
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", centerX + radius)
            .attr("y2", centerY)
            .attr("stroke", "red")
            .lower()
            .attr("stroke-width", 2);

        // **Yarıçap yazısı (r)**
        svg.append("text")
            .attr("x", centerX + radius / 2 - 20)
            .attr("y", centerY - 10)
            .attr("font-size", "25px")
            .attr("fill", "black")
            .attr("font-weight", 600)
            .attr("text-anchor", "middle")
            .text("r");

        // **Noktaları çiz (çember tamamlanmış olacak)**
        const points = d3.range(numPoints).map((d) => {
            const angle = (d * Math.PI) / 180; // Dereceyi radyana çevir
            return {
                x: centerX + radius * Math.cos(angle),
                y: centerY + radius * Math.sin(angle),
            };
        });

        points.forEach((point) => {
            svg.append("circle")
                .attr("cx", point.x)
                .attr("cy", point.y)
                .attr("r", 2)
                .attr("fill", "black");
        });
    }

    function startAnimation() {
        if (isPlaying) return; // Eğer animasyon zaten oynuyorsa tekrar başlatma
        isPlaying = true;

        button.disabled = true; // Butonu devre dışı bırak

        svg.selectAll("*").remove(); // Önceki çizimleri temizle

        // **Merkez noktası**
        svg.append("circle")
            .attr("cx", centerX)
            .attr("cy", centerY)
            .attr("r", 5)
            .raise()
            .attr("fill", "black");

        // **Yarıçap çizgisi**
        const radiusLine = svg
            .append("line")
            .attr("x1", centerX)
            .attr("y1", centerY)
            .attr("x2", centerX)
            .attr("y2", centerY)
            .attr("stroke", "red")
            .lower()
            .attr("stroke-width", 2);

        // **Noktaları oluştur**
        const points = d3.range(numPoints).map((d) => {
            const angle = (d * Math.PI) / 180;
            return {
                x: centerX + radius * Math.cos(angle),
                y: centerY + radius * Math.sin(angle),
            };
        });

        // **Yarıçap çizgisi animasyonu (ilk noktaya uzansın)**
        radiusLine
            .transition()
            .duration(2000)
            .attr("x2", points[0].x)
            .attr("y2", points[0].y)
            .on("end", () => startDrawing(points, radiusLine));
    }

    function startDrawing(points, radiusLine) {
        points.forEach((point, i) => {
            setTimeout(() => {
                svg.append("circle")
                    .attr("cx", point.x)
                    .attr("cy", point.y)
                    .attr("r", 2)
                    .attr("fill", "black");

                radiusLine
                    .transition()
                    .duration(10)
                    .attr("x2", point.x)
                    .attr("y2", point.y);
            }, (i / numPoints) * 4000);
        });

        // **Animasyon tamamlandığında durumu eski haline getir**
        setTimeout(() => {
            drawStaticScene();
            isPlaying = false; // Kullanıcı tekrar başlatabilsin
            button.disabled = false; // Butonu tekrar aktif yap
        }, 4000);
    }

    // **Başlangıçta statik sahneyi çiz**
    drawStaticScene();

    // **Butonun tıklanmasını dinle**
    button.addEventListener("click", startAnimation);
})();
