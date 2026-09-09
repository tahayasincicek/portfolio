/* ══════════════════════════════════════════════════════════════
   Dil sistemi (TR / EN)

   Metin eklemek/değiştirmek için:
     1. Aşağıdaki TR ve EN sözlüklerine aynı anahtarı ekle
     2. HTML'de ilgili elemana data-i18n="anahtar" yaz
   İçinde HTML etiketi olan metinler için data-i18n-html kullan.
   Input placeholder'ları için data-i18n-ph kullan.

   Başlıklar Figma tasarımındaki metinlerdir; TR karşılıkları
   birebir çeviridir.
   ══════════════════════════════════════════════════════════════ */

const I18N = {
    tr: {
        "nav.home": "Ana Sayfa",
        "nav.about": "Hakkımda",
        "nav.services": "Çalışma Alanlarım",
        "nav.resume": "Özgeçmiş",
        "nav.skills": "Yetenekler",
        "nav.projects": "Projeler",
        "nav.contact": "İletişim",
        "nav.hire": "İletişime Geç",

        "hero.eyebrow": "MERHABA, BEN",
        "hero.role": "Yazılım Mühendisi",
        "hero.desc": "Tutkulu bir geliştirici ve makine öğrenmesi meraklısıyım. Dinamik web projelerinin ve veri odaklı uygulamaların geliştirme sürecinin tamamında deneyim sahibiyim; kullanıcı ihtiyaçlarıyla sağlam mühendisliği dengeleyen ürünler geliştiriyorum.",
        "hero.contact": "Bana Ulaş",

        "about.eyebrow": "Hakkımda",
        "about.title": "<span class=\"accent\">Azimli,</span> yenilikçi<br>Yazılım <span class=\"accent\">Mühendisi</span>",
        "about.body": "Kocaeli Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim. Yazılım geliştirme süreçlerinde Full-Stack (frontend & backend) yetkinliklerine sahibim; aynı zamanda makine öğrenmesi ve derin öğrenme alanlarında projeler geliştirerek veri odaklı akıllı çözümler üretme konusunda deneyim kazandım. Analitik düşünen, çözüm odaklı ve sürekli öğrenmeye istekli bir geliştiriciyim.",
        "about.c1": "Full-Stack web geliştirme ve REST API (React, Node.js, ASP.NET Core, Django)",
        "about.c2": "Makine öğrenmesi ve derin öğrenme: sınıflandırma, regresyon, anomali tespiti",
        "about.c3": "Veri işleme ve analiz pipeline'ları (Pandas, NumPy, SQL)",
        "about.c4": "Mobil ve bilgisayarlı görü uygulamaları (Flutter, TensorFlow Lite, OpenCV)",

        "services.eyebrow": "Üzerinde çalışmayı sevdiğim konular",
        "services.title": "Geliştirme Yaptığım<br>Başlıca <span class=\"accent\">Alanlar</span>",
        "services.s1.t": "Web Geliştirme",
        "services.s1.d": "Backend'den arayüze uçtan uca web uygulamaları geliştiriyorum; React, Node.js ve ASP.NET Core ile çalışıyorum.",
        "services.s2.t": "Makine Öğrenmesi",
        "services.s2.d": "Veriden değer üreten modeller üzerinde çalışıyorum: tahminleme, sınıflandırma ve anomali tespiti.",
        "services.s3.t": "Veri Analizi",
        "services.s3.d": "Veri toplama, temizleme ve analiz pipeline'ları kuruyor, ham veriyi anlamlı bilgiye dönüştürüyorum.",

        "resume.eyebrow": "<span class=\"accent\">Özgeçmişim</span>",
        "resume.title": "Gerçek <span class=\"accent\">Problem Çözümleri</span><br>Deneyimi",
        "resume.edu": "Eğitim",
        "resume.exp": "Deneyim",

        "resume.e1.name": "KOCAELİ ÜNİVERSİTESİ",
        "resume.e1.role": "Yazılım Mühendisliği (Lisans) — GANO: 3,27 / 4,00",
        "resume.e1.date": "2023 - <span class=\"accent\">2026</span>",
        "resume.e2.name": "KIRKLARELİ ÜNİVERSİTESİ",
        "resume.e2.role": "Yazılım Mühendisliği (Lisans)",
        "resume.e2.date": "2022 - 2023",
        "resume.e3.name": "KURSLAR & SERTİFİKALAR",
        "resume.e3.role": "AkademIQ · BTK Akademi · Avrupa Dil Okulları",
        "resume.e3.date": "Sertifika",
        "resume.e3.body": ".NET & React Full Stack Geliştirme (AkademIQ AI Business School), Makine Öğrenmesi (BTK Akademi), Algoritma ve Veri Yapıları İleri Seviye (BTK Akademi), B2 Seviye İngilizce Sertifikası (Kırklareli Avrupa Dil Okulları).",

        "resume.x1.name": "BİRLEŞİK YAZILIM HİZMETLERİ",
        "resume.x1.role": "Yazılım Mühendisliği Stajyeri",
        "resume.x1.date": "10.08.2026 - <span class=\"accent\">Devam Ediyor</span>",
        "resume.x1.body": "Birleşik Yazılım Hizmetleri Ltd. Şti. bünyesinde yazılım mühendisliği stajyeri olarak görev alıyorum. Kurumsal yazılım geliştirme süreçlerinde ekiple birlikte çalışıyor, uçtan uca geliştirme pratiklerini gerçek bir üretim ortamında deneyimliyorum.",

        "resume.x2.name": "ARGEDE BİLİŞİM TEKNOLOJİLERİ",
        "resume.x2.role": "Frontend Yazılım Geliştirme Stajyeri",
        "resume.x2.date": "04.08.2025 - 29.08.2025",
        "resume.x2.body": "Argede Bilişim Teknolojileri Sanayi ve Ticaret Ltd. Şti. bünyesinde frontend geliştirme ekibinde yer aldım. Modern web teknolojileriyle arayüz geliştirme, bileşen tabanlı mimari ve responsive tasarım üzerine çalışarak gerçek bir ürün geliştirme sürecinde deneyim kazandım.",

        "skills.eyebrow": "Yeteneklerim",
        "skills.title": "profesyonel <span class=\"accent\">beceriler</span>",

        "projects.eyebrow": "Son Çalışmalar",
        "projects.title": "Popüler <span class=\"accent\">Projelerimi</span> Keşfet",
        "projects.p1.cat": "Makine Öğrenmesi",
        "projects.p1.title": "Uydu Telemetri Anomali Tespiti",
        "projects.p1.desc": "TUSAŞ LIFT UP programı kapsamında, Avrupa Uzay Ajansı (ESA) OPS-SAT uydusunun telemetri veri setleri üzerinde makine öğrenmesi yöntemleriyle anomalileri otomatik tespit eden sistem.",
        "projects.p2.cat": "Mobil & Derin Öğrenme",
        "projects.p2.title": "NutriSense — Görme Engelliler İçin Beslenme Asistanı",
        "projects.p2.desc": "TÜBİTAK 2209-A destekli araştırma projesi. Flutter ve Dart ile geliştirilen, Python/FastAPI tabanlı backend ve TensorFlow Lite modeliyle görme engelli bireylerin besinleri tanımasına, sesli geri bildirim almasına ve günlük kalori takibi yapmasına yardımcı olan erişilebilir mobil uygulama.",
        "projects.p3.cat": "Full-Stack Web",
        "projects.p3.title": "Task Manager REST API",
        "projects.p3.desc": "Node.js (Express) ve TypeScript backend, React arayüz. Görev takibi, raporlama, rol bazlı yetkilendirme ve kapsamlı test altyapısı sunan modern bir Kanban uygulaması.",
        "projects.p4.cat": "Web Uygulaması",
        "projects.p4.title": "Market Otomasyon Sistemi",
        "projects.p4.desc": "ASP.NET Core MVC, Dapper ve SQL Server ile geliştirilen katmanlı mimariye sahip otomasyon. Ürün, kategori, stok ve satış süreçlerinin uçtan uca yönetimini sağlar.",
        "projects.p5.cat": "Full-Stack Web",
        "projects.p5.title": "Üniversite Bölüm Yönetim Sistemi",
        "projects.p5.desc": "Node.js backend ve React frontend mimarisiyle geliştirilen, ders ve sınav programlarının yönetildiği rol bazlı yetkilendirme sistemine sahip web uygulaması. Çakışma kontrolü ve otomatik sınav oturma düzeni üretimi içerir.",
        "projects.p6.cat": "Doğal Dil İşleme",
        "projects.p6.title": "Yorumlardan Kalite Tahmini",
        "projects.p6.desc": "Yelp restoran yorumları üzerinde metin madenciliği ile müşteri deneyimini üç sınıfa ayıran NLP boru hattı. TF-IDF ve BERT tabanlı modelleri, yön-bazlı duygu analizini ve LIME ile açıklanabilirliği kapsar.",
        "projects.p7.cat": "Backend / Sistem",
        "projects.p7.title": "File Storage & Backup System",
        "projects.p7.desc": "Veri güvenliğini ön planda tutarak sistem dosyalarının saklanmasını ve düzenli periyotlarla yedeklenmesini sağlayan arka plan mimarisi. Python ve modern backend prensipleriyle geliştirildi.",
        "projects.more": "Daha Fazla Proje",

        "contact.eyebrow": "İletişim",
        "contact.title": "Benimle <span class=\"accent\">İletişime</span><br>Geçebilirsiniz",
        "contact.desc": "Projelerim veya çalışmalarım hakkında merak ettiğiniz bir şey olursa formu doldurabilir ya da doğrudan e-posta ile yazabilirsiniz.",
        "contact.c1": "Yazılım Mühendisliği öğrencisi",
        "contact.c2": "Full-Stack web geliştirme",
        "contact.c3": "Makine öğrenmesi ve derin öğrenme",
        "contact.c4": "Veri analizi",
        "contact.c5": "Mobil ve bilgisayarlı görü",
        "contact.f.name": "Ad Soyad",
        "contact.f.namePh": "Adın Soyadın",
        "contact.f.email": "E-posta Adresi",
        "contact.f.emailPh": "ornek@mail.com",
        "contact.f.phone": "Telefon Numarası",
        "contact.f.phonePh": "+90 5XX XXX XX XX",
        "contact.f.subject": "Konu",
        "contact.f.subjectPh": "Konu",
        "contact.f.message": "Mesaj",
        "contact.f.messagePh": "Mesajını buraya yaz...",
        "contact.f.send": "Mesajı Gönder",

        "form.notWired": "Form henüz bağlanmadı — index.html içindeki YOUR_ACCESS_KEY kısmını Web3Forms erişim anahtarınla değiştir.",
        "form.sending": "Gönderiliyor...",
        "form.ok": "Mesajın gönderildi, teşekkürler! En kısa sürede döneceğim.",
        "form.err": "Mesaj gönderilemedi. Doğrudan cicektahayasin46@gmail.com adresine yazabilirsin.",

        "footer.copyright": "Copyright © 2026, Taha Yasin Çiçek. Tüm hakları saklıdır."
    },

    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.services": "What I Do",
        "nav.resume": "Resume",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.hire": "Get In Touch",

        "hero.eyebrow": "HELLO, MY NAME IS",
        "hero.role": "Software Engineer",
        "hero.desc": "A passionate developer and machine learning enthusiast. I have experience across the full development cycle of dynamic web projects and data-driven applications, building products that balance user needs with solid engineering.",
        "hero.contact": "Contact Me",

        "about.eyebrow": "About Me",
        "about.title": "<span class=\"accent\">Driven,</span> innovative<br>Software <span class=\"accent\">Engineer</span>",
        "about.body": "I'm a final-year Software Engineering student at Kocaeli University. I work across the full stack — frontend and backend — and I have also built machine learning and deep learning projects, producing data-driven, intelligent solutions. I'm an analytical, solution-oriented developer who is always eager to keep learning.",
        "about.c1": "Full-stack web development and REST APIs (React, Node.js, ASP.NET Core, Django)",
        "about.c2": "Machine learning and deep learning: classification, regression, anomaly detection",
        "about.c3": "Data processing and analysis pipelines (Pandas, NumPy, SQL)",
        "about.c4": "Mobile and computer vision applications (Flutter, TensorFlow Lite, OpenCV)",

        "services.eyebrow": "The topics I enjoy working on",
        "services.title": "The Main <span class=\"accent\">Areas</span><br>I Build In",
        "services.s1.t": "Web Development",
        "services.s1.d": "I build web applications end to end, from the backend to the interface, working with React, Node.js and ASP.NET Core.",
        "services.s2.t": "Machine Learning",
        "services.s2.d": "I work on models that turn data into value: forecasting, classification and anomaly detection.",
        "services.s3.t": "Data Analysis",
        "services.s3.d": "I set up data collection, cleaning and analysis pipelines, turning raw data into meaningful information.",

        "resume.eyebrow": "My <span class=\"accent\">Resume</span>",
        "resume.title": "Real <span class=\"accent\">Problem Solutions</span><br>Experience",
        "resume.edu": "Education",
        "resume.exp": "Experience",

        "resume.e1.name": "KOCAELI UNIVERSITY",
        "resume.e1.role": "Software Engineering (BSc) - GPA: 3.27 / 4.00",
        "resume.e1.date": "2023 - <span class=\"accent\">2026</span>",
        "resume.e2.name": "KIRKLARELI UNIVERSITY",
        "resume.e2.role": "Software Engineering (BSc)",
        "resume.e2.date": "2022 - 2023",
        "resume.e3.name": "COURSES & CERTIFICATES",
        "resume.e3.role": "AkademIQ · BTK Akademi · Avrupa Language Schools",
        "resume.e3.date": "Certificate",
        "resume.e3.body": ".NET & React Full Stack Development (AkademIQ AI Business School), Machine Learning (BTK Akademi), Advanced Algorithms & Data Structures (BTK Akademi), B2 Level English Certificate (Kırklareli Avrupa Language Schools).",

        "resume.x1.name": "BİRLEŞİK YAZILIM HİZMETLERİ",
        "resume.x1.role": "Software Engineering Intern",
        "resume.x1.date": "Aug 10, 2026 - <span class=\"accent\">Present</span>",
        "resume.x1.body": "Working as a software engineering intern at Birleşik Yazılım Hizmetleri Ltd. Şti. I collaborate with the team on enterprise software development processes and experience end-to-end development practices in a real production environment.",

        "resume.x2.name": "ARGEDE INFORMATION TECHNOLOGIES",
        "resume.x2.role": "Frontend Software Development Intern",
        "resume.x2.date": "Aug 4, 2025 - Aug 29, 2025",
        "resume.x2.body": "Worked with the frontend team at Argede Bilişim Teknolojileri San. ve Tic. Ltd. Şti. I built interfaces with modern web technologies, working on component-based architecture and responsive design within a real product development process.",

        "skills.eyebrow": "My Talent",
        "skills.title": "professional <span class=\"accent\">skills</span>",

        "projects.eyebrow": "Latest Works",
        "projects.title": "Explore My Popular <span class=\"accent\">Projects</span>",
        "projects.p1.cat": "Machine Learning",
        "projects.p1.title": "Satellite Telemetry Anomaly Detection",
        "projects.p1.desc": "Developed within the TUSAŞ LIFT UP program, a system that automatically detects anomalies in telemetry datasets from the European Space Agency (ESA) OPS-SAT satellite using machine learning methods.",
        "projects.p2.cat": "Mobile & Deep Learning",
        "projects.p2.title": "NutriSense — Nutrition Assistant for the Visually Impaired",
        "projects.p2.desc": "A research project supported by the TÜBİTAK 2209-A program. Built with Flutter and Dart on a Python/FastAPI backend, it uses a TensorFlow Lite model to help visually impaired users recognize food, receive voice feedback, and track daily calories through an accessible mobile app.",
        "projects.p3.cat": "Full-Stack Web",
        "projects.p3.title": "Task Manager REST API",
        "projects.p3.desc": "A Node.js (Express) and TypeScript backend with a React frontend. A modern Kanban application offering task tracking, reporting, role-based authorization, and a comprehensive test suite.",
        "projects.p4.cat": "Web Application",
        "projects.p4.title": "Supermarket Automation System",
        "projects.p4.desc": "A layered-architecture automation system built with ASP.NET Core MVC, Dapper, and SQL Server. It manages products, categories, stock, and sales processes end to end.",
        "projects.p5.cat": "Full-Stack Web",
        "projects.p5.title": "University Department Management System",
        "projects.p5.desc": "A web application built with a Node.js backend and React frontend for managing course and exam schedules with role-based authorization. It includes conflict checking and automated exam seating arrangement generation.",
        "projects.p6.cat": "Natural Language Processing",
        "projects.p6.title": "Quality Estimation from Reviews",
        "projects.p6.desc": "An NLP pipeline that classifies customer experience into three levels using text mining on Yelp restaurant reviews. It covers TF-IDF and BERT-based models, aspect-based sentiment analysis, and explainability with LIME.",
        "projects.p7.cat": "Backend / System",
        "projects.p7.title": "File Storage & Backup System",
        "projects.p7.desc": "A background architecture that stores system files and backs them up at regular intervals, with data security as the priority. Built with Python and modern backend principles.",
        "projects.more": "View More Projects",

        "contact.eyebrow": "Contact",
        "contact.title": "You Can <span class=\"accent\">Reach</span><br>Out to Me",
        "contact.desc": "If there's anything you'd like to know about my projects or my work, you can fill in the form or simply send me an email.",
        "contact.c1": "Software Engineering student",
        "contact.c2": "Full-stack web development",
        "contact.c3": "Machine learning and deep learning",
        "contact.c4": "Data analysis",
        "contact.c5": "Mobile and computer vision",
        "contact.f.name": "Full Name",
        "contact.f.namePh": "Your full name",
        "contact.f.email": "Email Address",
        "contact.f.emailPh": "you@example.com",
        "contact.f.phone": "Phone Number",
        "contact.f.phonePh": "+90 5XX XXX XX XX",
        "contact.f.subject": "Subject",
        "contact.f.subjectPh": "Subject",
        "contact.f.message": "Message",
        "contact.f.messagePh": "Write your message...",
        "contact.f.send": "Send Message",

        "form.notWired": "The form isn't wired up yet - replace YOUR_ACCESS_KEY in index.html with your Web3Forms access key.",
        "form.sending": "Sending...",
        "form.ok": "Your message was sent, thank you! I'll get back to you soon.",
        "form.err": "The message couldn't be sent. You can email me directly at cicektahayasin46@gmail.com.",

        "footer.copyright": "Copyright © 2026, Taha Yasin Çiçek. All Rights Reserved"
    }
};

const I18N_STORAGE_KEY = "portfolio-lang";

function t(key) {
    const lang = document.documentElement.lang === "en" ? "en" : "tr";
    return (I18N[lang] && I18N[lang][key]) || I18N.tr[key] || key;
}

function applyLanguage(lang) {
    if (!I18N[lang]) lang = "tr";
    document.documentElement.lang = lang;

    const dict = I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const value = dict[el.dataset.i18n];
        if (value === undefined) return;
        if (el.hasAttribute("data-i18n-html")) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
        const value = dict[el.dataset.i18nPh];
        if (value !== undefined) el.placeholder = value;
    });

    document.querySelectorAll(".lang-switch button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
        btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });

    try {
        localStorage.setItem(I18N_STORAGE_KEY, lang);
    } catch (e) {
        /* localStorage kapalıysa sessizce geç */
    }
}

function initI18n() {
    let saved = null;
    try {
        saved = localStorage.getItem(I18N_STORAGE_KEY);
    } catch (e) {
        /* yoksay */
    }

    // Kayıt yoksa tarayıcı dilini dene, Türkçe değilse İngilizce'ye düş
    const fallback = (navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en";
    applyLanguage(saved || fallback);

    document.querySelectorAll(".lang-switch button").forEach(btn => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });
}
