new p5((p) => {
    let x, y, w, h, k, g, fs, a, v, m, scale;
    let isRunning = false;

    p.setup = function () {
        let canvas = p.createCanvas(1000, 600);
        canvas.parent("kuvvetSim");
        p.textSize(16);
        resetSim(); // Başlangıçta bir kez çalışsın
    };

    p.draw = function () {
        p.background(255);
        let dt = p.deltaTime / 1000;

        if (isRunning) {
            // Sürtünme kuvveti
            fs = k * m * g;
            let fNet = -Math.sign(v) * fs;
            a = fNet / m;

            // Hız çok küçükse durdur
            if (Math.abs(v) < 0.01) {
                v = 0;
                a = 0;
            } else {
                v += a * dt;
                x += v * dt * scale;
            }
        }

        // Cisim
        p.fill(200);
        p.rect(x, y, w, h);

        // Bilgi
        p.fill(0);
        p.text(`v = ${v.toFixed(2)} m/s`, 20, 20);
        p.text(`a = ${a.toFixed(2)} m/s²`, 20, 40);
        p.text(`fs = ${fs?.toFixed(2) ?? 0} N`, 20, 60);
        p.text(`Simülasyon: ${isRunning ? "ÇALIŞIYOR" : "BEKLİYOR"}`, 20, 90);
        p.text(`Tuş: A (sıfırla & başlat)`, 20, 110);
    };

    p.keyPressed = function () {
        if (p.key === "a") {
            resetSim();
        }
    };

    function resetSim() {
        // Tüm başlangıç değerlerini yeniden kur
        x = 100;
        y = p.height - 100;
        w = 100;
        h = 100;

        k = 0.2; // sürtünme katsayısı // Buzda 0.1, Tahta 0.3, Kum 0.4, Çim 0.5, Beton 0.6, Kuru zemin 0.7, Kaygan zemin 0.8
        g = 9.81; // ayda 1.62, Mars'ta 3.71, Jüpiter'de 24.79, Venüs'te 8.87, Uranüs'te 8.69, Neptün'de 11.15, Plüton'da 0.62
        m = 10;
        scale = 200; // 1 birim = 200px m

        let F_push = 20; // Uygulanan kuvvet
        let pushDuration = 1; // duration (saniye)
        let a_push = F_push / m; // ivme
        v = a_push * pushDuration; // son hız
        a = 0;
        fs = 0;

        isRunning = true;
    }
});
