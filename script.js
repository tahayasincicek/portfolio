document.addEventListener("DOMContentLoaded", () => {

    /* ── Dil (i18n.js) ──────────────────────────────────────── */
    initI18n();

    /* ── Mobil menü ─────────────────────────────────────────── */
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {
        const setMenu = open => {
            navMenu.classList.toggle("is-open", open);
            navToggle.setAttribute("aria-expanded", String(open));
            navToggle.querySelector("use").setAttribute("href", open ? "#i-x" : "#i-menu");
        };

        navToggle.addEventListener("click", event => {
            event.stopPropagation();
            setMenu(!navMenu.classList.contains("is-open"));
        });

        // Bir linke tıklanınca kapat
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => setMenu(false));
        });

        // Menü dışına dokununca kapat
        document.addEventListener("click", event => {
            if (!navMenu.classList.contains("is-open")) return;
            if (!navMenu.contains(event.target)) setMenu(false);
        });

        // Esc ile kapat
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") setMenu(false);
        });
    }

    /* ── Navbar: kaydırınca küçülsün ────────────────────────── */
    const navbar = document.querySelector(".navbar");
    const onScroll = () => navbar.classList.toggle("is-stuck", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ── Resume akordiyonu ──────────────────────────────────── */
    document.querySelectorAll(".acc-head").forEach(head => {
        head.addEventListener("click", () => {
            const item = head.closest(".acc-item");
            const column = item.closest(".resume-col");
            const willOpen = !item.classList.contains("is-open");

            // Aynı sütundaki diğerlerini kapat
            column.querySelectorAll(".acc-item").forEach(other => {
                other.classList.remove("is-open");
                other.querySelector(".acc-head").setAttribute("aria-expanded", "false");
            });

            item.classList.toggle("is-open", willOpen);
            head.setAttribute("aria-expanded", String(willOpen));
        });
    });

    /* ── Navigasyonda aktif bölümü işaretle ─────────────────── */
    const sections = [...document.querySelectorAll("main section[id]")];
    const navLinks = [...document.querySelectorAll(".nav-menu a")];

    if (sections.length && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const id = entry.target.id;
                navLinks.forEach(link =>
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`)
                );
            });
        }, { rootMargin: "-45% 0px -50% 0px" });

        sections.forEach(section => observer.observe(section));
    }

    /* ── Bölümler görünüme girince animasyonlu gelsin ───────── */
    if ("IntersectionObserver" in window) {
        // Ana bloklar tek parça, kart ızgaraları ise tek tek gelsin
        const blocks = [
            ".hero-intro", ".hero-photo", ".hero-cta",
            ".about-text",
            ".section-head", ".resume-col",
            ".contact-info", ".contact-form",
            ".projects-more"
        ];
        const staggered = [".skill-grid", ".service-grid", ".project-list"];

        const targets = blocks.flatMap(selector => [...document.querySelectorAll(selector)]);

        // Izgara çocuklarına artan gecikme ver
        staggered.forEach(selector => {
            document.querySelectorAll(selector).forEach(grid => {
                [...grid.children].forEach((child, index) => {
                    child.style.setProperty("--reveal-delay", `${Math.min(index, 8) * 70}ms`);
                    targets.push(child);
                });
            });
        });

        // Her girişte yeniden oynasın: çıkışta sınıf geri alınır,
        // eleman gözlemde kalır (unobserve YOK).
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("is-visible", entry.isIntersecting);
            });
        }, { rootMargin: "0px 0px -12% 0px", threshold: 0.05 });

        targets.forEach(element => {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });
    }

    /* ── İletişim formu (Formspree) ─────────────────────────── */
    const form = document.querySelector(".contact-form");
    const status = document.getElementById("formStatus");

    if (form && status) {
        form.addEventListener("submit", async event => {
            // Web3Forms erişim anahtarı henüz girilmediyse gönderme
            const accessKey = form.querySelector('input[name="access_key"]');
            if (!accessKey || accessKey.value.trim() === "" || accessKey.value.includes("YOUR_ACCESS_KEY")) {
                event.preventDefault();
                status.textContent = t("form.notWired");
                status.className = "form-status err";
                return;
            }

            event.preventDefault();
            const button = form.querySelector("button[type=submit]");

            button.disabled = true;
            status.textContent = t("form.sending");
            status.className = "form-status";

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: { Accept: "application/json" }
                });

                if (response.ok) {
                    form.reset();
                    status.textContent = t("form.ok");
                    status.className = "form-status ok";
                } else {
                    throw new Error("Sunucu hatası");
                }
            } catch (error) {
                status.textContent = t("form.err");
                status.className = "form-status err";
            } finally {
                button.disabled = false;
            }
        });
    }
});
