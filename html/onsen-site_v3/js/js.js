/**
 * 温泉施設「湯煙の里 翠泉閣」メインスクリプト
 * ・テーマ切り替え (ライト / ダーク)
 * ・スマホメニュー開閉
 * ・カルーセルスライダー
 * ・スクロールアニメーション (Intersection Observer)
 * ・お問い合わせフォーム
 * ・クリック遅延動画再生
 */

document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initMobileMenu();
    initCarousel();
    initScrollAnimations();
    initContactForm();
    initHeaderScroll();
    initLazyVideo();
});

/* ==========================================================================
   1. ライト / ダークモード切り替え (ブラウザ設定検知 & LocalStorage連動)
   ========================================================================== */
function initThemeToggle() {
    const toggleBtn = document.querySelector("#theme-toggle");
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    let isDarkMode = false;
    if (savedTheme === "dark") {
        isDarkMode = true;
    } else if (savedTheme === "light") {
        isDarkMode = false;
    } else {
        isDarkMode = systemPrefersDark;
    }

    function applyTheme(isDark) {
        root.classList.toggle("dark-mode", isDark);
        if (toggleBtn) {
            toggleBtn.innerHTML = isDark ? "☀️" : "🌙";
        }
    }

    applyTheme(root.classList.contains("dark-mode") || isDarkMode);

    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        const nextIsDark = !root.classList.contains("dark-mode");
        applyTheme(nextIsDark);
        localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
            applyTheme(e.matches);
        }
    });
}

/* ==========================================================================
   2. スマホ向けハンバーガーメニュー
   ========================================================================== */
function initMobileMenu() {
    const toggleBtn = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".global-nav");

    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("open");
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            toggleBtn.classList.remove("open");
            nav.classList.remove("open");
        });
    });
}

/* ==========================================================================
   3. ヘッダーのスクロール追従シャドウ付与
   ========================================================================== */
function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/* ==========================================================================
   4. カルーセルスライダー
   ========================================================================== */
function initCarousel() {
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".indicator");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");

    if (slides.length === 0) return;

    let currentIndex = 0;
    const slideInterval = 5000;
    let timerId = null;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    function startAutoPlay() {
        stopAutoPlay();
        timerId = setInterval(nextSlide, slideInterval);
    }

    function stopAutoPlay() {
        if (timerId) clearInterval(timerId);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            nextSlide();
            startAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            prevSlide();
            startAutoPlay();
        });
    }

    indicators.forEach((ind, i) => {
        ind.addEventListener("click", () => {
            showSlide(i);
            startAutoPlay();
        });
    });

    showSlide(0);
    startAutoPlay();
}

/* ==========================================================================
   5. スクロールアニメーション (Intersection Observer)
   ========================================================================== */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(".fade-up");
    if (animatedElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   6. 問い合わせフォームの送信イベント & バリデーション
   ========================================================================== */
function initContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    const statusMsg = document.querySelector("#form-status");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const message = form.querySelector("#message").value.trim();

        const currentLang = document.documentElement.lang || "ja";
        const isEn = currentLang === "en";

        if (!name || !email || !message) {
            alert(isEn ? "Please fill in all required fields." : "必須項目をすべて入力してください。");
            return;
        }

        const submitBtn = form.querySelector("button[type='submit']");
        submitBtn.disabled = true;
        submitBtn.textContent = isEn ? "Sending..." : "送信中...";

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = isEn ? "Submit Message" : "送信する";
            form.reset();

            if (statusMsg) {
                statusMsg.classList.add("success");
                statusMsg.textContent = isEn
                    ? "Thank you. Your message has been received. Our team will contact you shortly."
                    : "お問い合わせを受け付けました。折り返し担当者よりご連絡いたします。";
                statusMsg.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 1200);
    });
}

/* ==========================================================================
   7. クリック時のみ動画読み込み (遅延再生)
   ========================================================================== */
function initLazyVideo() {
    const cover = document.querySelector("#video-cover");
    const video = document.querySelector("#onsen-video");

    if (!cover || !video) return;

    cover.addEventListener("click", () => {
        cover.classList.add("is-hidden");
        video.load();
        video.play();
    });
}