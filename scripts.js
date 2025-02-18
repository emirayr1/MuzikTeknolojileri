document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar a');  // Navbar bağlantıları
    const sidebar = document.querySelector('.sidebar')
    const sidebarLinks = document.querySelectorAll('.sidebar a');  // Sidebar bağlantıları
    const logo = document.querySelector('.logo');  // Logo bağlantısı
    const sesFizigiButon = document.querySelector('.sesFizigi-btn')
    const konularFizik = document.querySelector('.konular_fizik');  // Konular fizik
    const konularMikrofonlama = document.querySelector('.konular_mikrofonlama');  // Konular mikrofonlama
    const checkbox = document.getElementById('acikmi');
    // Mevcut sayfa yolunu alıyoruz
    const currentPath = window.location.pathname;


    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (link.href.includes("#")) {
            return;
        }
        // Eğer bağlantının path'i mevcut sayfaya eşitse veya path'inde 'sesfizigi' varsa, aktif yap
        if ((linkPath === currentPath || currentPath.includes(linkPath))) {
            link.classList.add('active');
            // Sidebar konularını güncelle
            if (linkPath.includes('/sesfizigi')) {
                konularFizik.style.display = 'block';
                //konularMikrofonlama.style.visibility = 'hidden';
                konularMikrofonlama.style.display = 'none';
            } else if (linkPath.includes('/mikrofonlama')) {               // sidebareach'de gözüken ses fizigi include yapıp navbardaki aktifliği etkilemeyi bulman lazım
                konularFizik.style.display = 'none';
                konularMikrofonlama.style.display = 'block';
            } else {
                //link.classList.remove('active');
            }
        }

    });

    sidebarLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;


        if (link.href.includes("#")) {
            return;
        }

        if (linkPath === currentPath || currentPath.includes(linkPath)) {
            //console.log("currentPath",currentPath)
            link.classList.add('active');
        }
        else {
            link.classList.remove('active');
        }

        if (currentPath.includes('/sesfizigi') && sesFizigiButon) {
            sesFizigiButon.classList.add('active');
        }

        // Sidebar'daki bağlantılar için tıklama olaylarını ayarla
        link.addEventListener('click', function () {
            // Tüm sidebar bağlantılarından aktifliği kaldır
            sidebarLinks.forEach(sidebarLink => sidebarLink.classList.remove('active'));
            // Tıklanan bağlantıyı aktif yap
            link.classList.add('active');
        });
    });

    // Logo'ya tıklanınca tüm aktiflikleri temizle
    logo.addEventListener('click', function () {
        // Navbar ve sidebar bağlantılarındaki aktifliği temizle
        navLinks.forEach(link => link.classList.remove('active'));
        sidebarLinks.forEach(link => link.classList.remove('active'));
    });
    // NAVBAR SIDEBAR LOGO AKTİFLİK //






    // LOGO SVG ANİMASYON 
    const logoText = document.querySelector(".logo-text");
    const logoImg = document.querySelector(".logo-img");

    // SVG dizisi
    const assets = [
        { svg: "/images/elec-gitar.svg", sound: "/sounds/elec-gitarSample.mp3" }, // 1. SVG ve 1. ses
        { svg: "/images/davul.svg", sound: "/sounds/drumSample.mp3" }, // 2. SVG ve 2. ses
        { svg: "/images/piyano.svg", sound: "/sounds/piyanoSample.mp3" }, // 3. SVG ve 3. ses
        { svg: "/images/keyboard.svg", sound: "/sounds/synthSample.mp3" }  // 4. SVG ve 4. ses
    ];

    let hoverCount = 0;
    let audio = null; // Oynatılan sesi kontrol etmek için
    let hoverTimeout = null; // Zamanlayıcıyı takip etmek için

    // Hover olayı
    logo.addEventListener("mouseenter", function () {
        // Daha önceki zamanlayıcıyı temizle
        if (hoverTimeout) clearTimeout(hoverTimeout);

        // 1.5 saniye bekle ve sonra animasyonu başlat
        hoverTimeout = setTimeout(() => {
            hoverCount++; // Hover sayısını artır
            const currentAsset = assets[(hoverCount - 1) % assets.length]; // Döngüsel seçim

            // SVG'yi güncelle
            logoImg.src = currentAsset.svg;
            logoImg.classList.remove("hidden");
            logoImg.classList.add("visible");

            // Yazıyı gizle ve küçült
            logoText.style.transform = "scale(0.8) rotate(10deg)";
            logoText.style.opacity = "0";

            // Yeni sesi çal
            if (audio) {
                audio.pause(); // Eski sesi durdur
                audio.currentTime = 0; // Sesi başa sar
            }
            audio = new Audio(currentAsset.sound); // Yeni ses dosyasını yükle
            audio.play();
        }, 1500); // 1.5 saniye sonra çalışır
    });

    // Hover dışına çıkıldığında
    logo.addEventListener("mouseleave", function () {
        // Zamanlayıcıyı iptal et
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            hoverTimeout = null;
        }

        // SVG'yi gizle
        logoImg.classList.remove("visible");
        logoImg.classList.add("hidden");

        // Yazıyı geri getir
        logoText.style.transform = "scale(1) rotate(0)";
        logoText.style.opacity = "1";

        // Çalan sesi durdur
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Başa sar
        }
    });
});



// EXTENDS //

class ExHeaderF extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <a href="/index.html" class="logo">
                    <span class="logo-text">ayr.</span>
                    <img src="/images/elec-gitar.svg" alt="Logo" class="logo-img hidden">
                </a>
                <nav class="navbar">
                    <a href="sesfizigi.html" class="sesFizigi-btn">Ses Fiziği</a>
                    <a href="/mikrofonlama/mikrofonlamaGiris.html" class="mikrofonlama-btn">Mikrofonlama Teknikleri</a>
                    <a href="#" class="sinyalAkisi-btn">Sinyal Akışı</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('ex-header-fizik', ExHeaderF);


class ExHeaderI extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <a href="index.html" class="logo">
                    <span class="logo-text">ayr.</span>
                    <img src="/images/elec-gitar.svg" alt="Logo" class="logo-img hidden">
                </a>
                <nav class="navbar">
                    <a href="sesfizigi/sesfizigi.html" class="sesFizigi-btn">Ses Fiziği</a>
                    <a href="/mikrofonlama/mikrofonlamaGiris.html" class="mikrofonlama-btn">Mikrofonlama Teknikleri</a>
                    <a href="#" class="sinyalAkisi-btn">Sinyal Akışı</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('ex-header-index', ExHeaderI);



class ExSidebarF extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar">
                <div class="menuSvg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </div>
                <div class="konularYazisi">
                    <h2>Konular</h2>
                </div>
                <div class="scrollbox">
                    <div class="inner-scrollbox">
                        <div class="konular konular_fizik">
                            <ul>
                                <li><a href="fizikGiris.html">Giriş</a></li>
                                <li><a href="trigonometri.html">Trigonometri</a></li>
                                <li><a href="#">Temel Kavramlar</a></li>
                                <li><a href="vektorler.html">Vektörler</a></li>
                                <li><a href="#">Kuvvet</a></li>
                                <li><a href="#">Basınç</a></li>
                                <li><a href="#">Güç ve Enerji</a></li>
                                <li><a href="#">Ses Nedir</a></li>
                                <li><a href="#">Sesin Oluşumu</a></li>
                                <li><a href="#">Periyodik Hareket</a></li>
                                <li><a href="#">Sinüs</a></li>
                                <li><a href="#">Dalga Kavramı</a></li>
                                <li><a href="#">Ses Dalgaları</a></li>
                                <li><a href="#">Sinüs Formülü</a></li>
                                <li><a href="#">Hareket Doğrultularına Göre Dalgalar</a></li>
                                <li><a href="#">Enerjilerine Göre Dalgalar</a></li>
                                <li><a href="#">Ses Dalgası Çeşitleri</a></li>
                                <li><a href="#">Katı Ve Sıvıda Yayılması</a></li>
                                <li><a href="#">Gazda Yayılması</a></li>
                                <li><a href="#">Ses Dalgalarının Enerjisi</a></li>
                                <li><a href="#">Ses Dalgalarının Şiddeti</a></li>
                                <li><a href="#">Ses Şiddeti Düzeyi</a></li>
                                <li><a href="#">Girişim</a></li>
                                <li><a href="#">Halat</a></li>
                                <li><a href="#">Molekül</a></li>
                            </ul>
                        </div>
                        <div class="konular konular_mikrofonlama">
                            <ul>
                                <li><a href="/mikarofonlama/mikrofonlamaGiris.html">Mikrofon</a></li>
                                <li><a href="#">Kondenser</a></li>
                                <li><a href="#">Dinamik</a></li>
                                <li><a href="#">Ribbon</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Custom element tanımlaması
customElements.define('ex-sidebar-fizik', ExSidebarF);




class ExFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <p>&copy; 2025 ayr</p>
        <div class="social-media">
            <a href="#">Mail</a> |
            <a href="#">YouTube</a> |
            <a href="https://www.instagram.com/emirayarmusic/" target="_blank">
                <img src="/images/instagram_icon.svg" alt="instagram" width="30px">
            </a>
        </div>
    </footer>
        `;
    }
}

customElements.define('ex-footer', ExFooter);




// scroll into

document.querySelectorAll(".ispat_369").forEach(element => {
    element.addEventListener("click", function () {
        document.getElementById("ucgendeAciKapsamasi").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});


