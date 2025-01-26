(function () {


    const canvas = document.getElementById("sineCanvas");
    const clearButton = document.getElementById("clearBalls-btn");
    const ctx = canvas.getContext("2d");
    const body = document.body;

    // Özel imleç oluştur
    const customCursor = document.createElement('div');
    customCursor.style.width = '35px'; // Ball radius ile aynı
    customCursor.style.height = '35px'; // Ball radius ile aynı
    customCursor.style.backgroundColor = 'rgb(0, 150, 196)'; // Ball color ile aynı
    customCursor.style.borderRadius = '50%'; // Yuvarlak
    customCursor.style.position = 'absolute';
    customCursor.style.pointerEvents = 'none'; // Tıklamayı engelle
    customCursor.style.zIndex = '1000';
    customCursor.style.transform = 'translate(-50%, -50%)';
    customCursor.style.display = 'none'; // Başlangıçta gizli
    body.appendChild(customCursor);

    // Canvas üzerinde fare hareketlerini dinle
    canvas.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.pageX}px`;
        customCursor.style.top = `${e.pageY}px`;
    });

    // Canvas üzerine gelince özel imleci göster ve varsayılan imleci gizle
    canvas.addEventListener('mouseenter', () => {
        customCursor.style.display = 'block';
        canvas.style.cursor = 'none'; // Varsayılan imleci gizle
    });

    // Canvas'tan çıkınca özel imleci gizle ve varsayılan imleci geri getir
    canvas.addEventListener('mouseleave', () => {
        customCursor.style.display = 'none';
        canvas.style.cursor = 'default'; // Varsayılan imleci geri getir
    });

    // Canvas boyutlarını ayarla
    canvas.width = window.innerWidth * 0.8;
    canvas.height = 1000;

    const width = canvas.width;
    const height = canvas.height;
    let phase = 0;
    const phaseSpeed = 0.05;

    // Sinüs dalgası parametreleri
    const amplitude = 150; // Genlik
    const frequency = 3; // Frekans (1 Hz)
    const waveLength = width / frequency; // Dalga uzunluğu
    const centerY = height / 2; // Sinüs dalgasının merkezi

    // Toplar dizisi
    const balls = [];

    // Yerçekimi ve sürtünme katsayıları
    const gravity = 0.9;
    const friction = 0.999;

    // Sinüs dalgası çizimi
    function drawSineWave() {
        ctx.beginPath();
        ctx.moveTo(-50, centerY); // x eksenini -50 yaptım çünkü ekranda centerdan aldıgı gözükmesin diye 
        for (let x = 0; x < width; x++) {
            const y = centerY - amplitude * Math.cos((2 * Math.PI * x) / waveLength + phase);
            ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "rgb(212, 91, 35)";
        ctx.lineWidth = 10;
        ctx.stroke();
    }



    // Top nesnesi
    class Ball {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = 18;
            this.color = "rgb(0, 150, 196)";
            this.vx = 0; // X yönündeki hız
            this.vy = 0; // Y yönündeki hız
            this.onWave = false; // Sinüs üzerinde mi?
        }

        update() {
            if (!this.onWave) {
                // Yerçekimi etkisi
                this.vy += gravity;
                this.y += this.vy;

                // Sinüs dalgasına çarpışma kontrolü
                const waveY = centerY - amplitude * Math.cos((2 * Math.PI * this.x) / waveLength + phase);
                if (this.y >= waveY - this.radius) {
                    this.onWave = true;
                    this.y = waveY - this.radius; // Sinüs dalgası üzerinde
                }
            } else {
                // Sinüs dalgası üzerinde hareket
                const waveSlope = Math.sin((2 * Math.PI * this.x) / waveLength + phase); // Eğri eğimi
                this.vx += waveSlope * 0.7; // Eğime göre hızlanma
                this.vx *= friction; // Sürtünme etkisi
                this.x += this.vx;

                // Sinüs dalgasındaki y konumunu güncelle
                this.y = centerY - amplitude * Math.cos((2 * Math.PI * this.x) / waveLength + phase);

                // Ekrandan çıktıysa listeden çıkar
                if (this.x > width || this.x < 0) {
                    const index = balls.indexOf(this);
                    if (index > -1) {
                        balls.splice(index, 1);
                    }
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y - 25, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Animasyon döngüsü
    function animate() {
        ctx.clearRect(0, 0, width, height); // Canvas'ı temizle
        drawSineWave(); // Sinüs dalgasını çiz

        phase += phaseSpeed;
        // Tüm topları güncelle ve çiz
        balls.forEach(ball => {
            ball.update();
            ball.draw();
        });

        requestAnimationFrame(animate); // Sonsuz döngü
    }

    // Canvas üzerine tıklama olayı
    canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Yükseklik ile sinüs merkezi arasındaki mesafeyi hesapla
        const distanceFromCenter = Math.abs(mouseY - (centerY - amplitude));

        // Hızı aralığa indirgeme (0 ile 5 arasında)
        let initialSpeed = 5 * (distanceFromCenter / amplitude) / 3; // Yaklaştıkça hız azalır
        //initialSpeed = Math.max(0, Math.min(initialSpeed, 5)); // Hızı 0 ile 5 arasında tut

        // Yeni top oluştur
        const newBall = new Ball(mouseX, mouseY);
        newBall.vx = initialSpeed; // X yönündeki başlangıç hızını ayarla
        newBall.vy = initialSpeed; // Y yönündeki başlangıç hızını ayarla (isteğe bağlı)

        // Tıklama noktasında bir top oluştur
        balls.push(newBall);

        // Debug için konsola yazdır
        console.log("Distance from center:", distanceFromCenter);
        console.log("Initial Speed:", initialSpeed);
    });

    clearButton.addEventListener("click", () => {
        balls.length = 0; // Topları tutan dizi temizlenir
        console.log("Tüm toplar temizlendi.");
    });

    // Animasyonu başlat
    animate();

})();