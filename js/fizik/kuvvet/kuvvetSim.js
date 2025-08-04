new p5((p) => {
    let x, y, w, h, k, g, fs, a, v, m, scale;
    let k1;
    let k2;
    let box, ice, asphalt, grass, earth, moon, mars, bridge;
    let currentPlanet;
    let firstFloor;
    let secondFloor;
    let isRunning = false;
    const planetSel = document.getElementById("planetSel");
    const firstFloorSel = document.getElementById("firstFloorSel");
    const secondFloorSel = document.getElementById("secondFloorSel");
    let width = 1200;
    let height = 600;

    p.preload = function () {
        box = p.loadImage("../../../images/fraction/kutu.png");
        ice = p.loadImage("../../../images/fraction/buz.png");
        //asphalt = p.loadImage("../../../images/fraction/asfalt.png");
        //grass = p.loadImage("../../../images/fraction/cim.png");
        earth = p.loadImage("../../../images/fraction/dunya.png");
        moon = p.loadImage("../../../images/fraction/ay.png");
        mars = p.loadImage("../../../images/fraction/mars.png");
        bridge = p.loadImage("../../../images/fraction/bridge.png");
    };

    p.setup = function () {
        let canvas = p.createCanvas(width, height);
        canvas.parent("kuvvetSim");
        p.textSize(16);

        // initiliaze
        currentPlanet = earth; // Başlangıçta Dünya
        firstFloor = ice;
        secondFloor = ice; // Başlangıçta buz
        g = 9.81; // ayda 1.62, Mars'ta 3.71, Jüpiter'de 24.79, Venüs'te 8.87, Uranüs'te 8.69, Neptün'de 11.15, Plüton'da 0.62
        k1 = 0.1; // buz
        k2 = 0.1; // buz

        resetSim(); // Başlangıçta bir kez çalışsın
    };

    p.draw = function () {
        p.background(255);
        p.image(currentPlanet, 0, 0, width, height);
        p.image(box, x, 349, 121, 161);
        p.image(firstFloor, 0, 472, width / 2, 42);
        p.image(secondFloor, 600, 472, width / 2, 42);
        p.image(bridge, 0, 0, width, height);
        let dt = p.deltaTime / 1000;

        if (isRunning) {
            // Sürtünme kuvveti
            if (x > width / 2 - 121) {
                k = k2;
            } else {
                k = k1;
            }

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
        console.log(k);
        // Cisim
        p.fill(200);
        // test rectangle
        //p.rect(x, y, w, h);

        // Bilgi
        p.fill(0);
        p.text(`v = ${v.toFixed(2)} m/s`, 20, 20);
        p.text(`a = ${a.toFixed(2)} m/s²`, 20, 40);
        p.text(`fs = ${fs?.toFixed(2) ?? 0} N`, 20, 60);
        p.text(`Simülasyon: ${isRunning ? "ÇALIŞIYOR" : "BEKLİYOR"}`, 20, 90);
        p.text(`Tuş: A (sıfırla & başlat)`, 20, 110);
    };

    p.keyPressed = function () {
        if (p.key === "a" || p.key === "A") {
            resetSim();
        }
    };

    function resetSim() {
        // Tüm başlangıç değerlerini yeniden kur
        x = 100;
        y = p.height - 100;
        w = 100;
        h = 100;

        //k = 0.2; // sürtünme katsayısı // Buzda 0.1, Tahta 0.3, Kum 0.4, Çim 0.5, Beton 0.6, Kuru zemin 0.7, Kaygan zemin 0.8
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

    planetSel.addEventListener("change", function () {
        switch (planetSel.value) {
            case "earth":
                currentPlanet = earth;
                g = 9.81; // Dünya'daki yerçekimi ivmesi
                break;
            case "moon":
                currentPlanet = moon;
                g = 1.62; // Ay'daki yerçekimi ivmesi
                break;
            case "mars":
                currentPlanet = mars;
                g = 3.71; // Mars'taki yerçekimi ivmesi
                break;
        }
    });

    firstFloorSel.addEventListener("change", function () {
        switch (firstFloorSel.value) {
            case "ice":
                k = 0.1;
                firstFloor = ice;
                break;
            case "asphalt":
                k = 0.3; // asfalt
                firstFloor = asphalt;
                break;
            case "grass":
                k = 0.5; // çim
                firstFloor = grass;
                break;
        }
    });

    secondFloorSel.addEventListener("change", function () {
        switch (secondFloorSel.value) {
            case "ice":
                k2 = 0.1;
                secondFloor = ice;
                break;
            case "asphalt":
                k2 = 0.3; // asfalt
                secondFloor = asphalt;
                break;
            case "grass":
                k2 = 0.5; // çim
                secondFloor = grass;
                break;
        }
    });
});
