/**
 * WORLD STRANGER 公式サイト
 * コアスクリプト (js/main.js)
 * 
 * 【役割】全ページ共通の基本UI制御・スクロール監視・ビジュアル演出
 * 【連携ファイル】css/style.css, css/animations.css, 全HTMLファイル
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. スクロールに応じたヘッダー背景切り替えの初期化
  initHeaderScroll();

  // 2. モバイル用ハンバーガーメニューの開閉制御の初期化
  initMobileNav();

  // 3. 画面内到達時のフェードインアニメーション監視の初期化
  initScrollReveal();

  // 4. ファーストビューの浮遊光パーティクル生成の初期化
  initFloatingLights();
});


/* ==========================================================================
   01. ヘッダーのスクロール追従背景切り替え
   【役割】画面が50px以上スクロールされたら .scrolled を付与して背景をガラス化
   【連携】#header, .site-header.scrolled (css/style.css)
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // 初期位置の判定 & スクロールイベント登録（passive: true で描画負荷を低減）
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
}


/* ==========================================================================
   02. モバイルハンバーガーメニューの開閉制御
   【役割】メニューのトグル開閉、aria-expanded更新、リンククリック時の自動クローズ
   【連携】#navToggle, #siteNav, .site-nav.is-open (css/responsive.css)
   ========================================================================== */
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  if (!navToggle || !siteNav) return;

  // ボタンクリック時の開閉切り替え
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    siteNav.classList.toggle('is-open');
  });

  // メニュー内のリンクをクリックした際、自動的にメニューを閉じる
  const navLinks = siteNav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    });
  });
}


/* ==========================================================================
   03. スクロール連動フェードインアニメーション
   【役割】要素が画面内に入ったタイミングで .is-visible を付与して表示
   【連携】.reveal-up, .reveal-on-scroll, data-delay (css/animations.css)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-up');
  if (revealElements.length === 0) return;

  // モダンブラウザ向け：IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // data-delay 属性が設定されている場合はディレイ実行
          const delay = parseInt(entry.target.dataset.delay, 10) || 0;
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);

          // 一度表示された要素は監視を解除してメモリ消費を抑える
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px', // 画面下端から少し入ったところで発火
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // 非対応ブラウザ向けフォールバック：即座に全表示
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}


/* ==========================================================================
   04. ファーストビューの浮遊光パーティクル生成
   【役割】青・金・ピンク・緑の4色エレメント光球を動的生成し、ランダム浮遊
   【連携】#floatingLights, .light-dot.* (css/style.css, css/animations.css)
   ========================================================================== */
function initFloatingLights() {
  const lightsContainer = document.getElementById('floatingLights');
  if (!lightsContainer) return;

  // 既存の要素があれば一度リセット
  lightsContainer.innerHTML = '';

  const count = 28; // 生成する粒の総数
  const colorTypes = ['cyan', 'blue', 'gold', 'pink']; // 4色エレメント

  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');

    // 4色の中からランダムでクラスを割り当て
    const color = colorTypes[Math.floor(Math.random() * colorTypes.length)];
    dot.className = `light-dot ${color}`;

    // ランダムな配置・サイズ・速度の算出
    const size = Math.random() * 10 + 8;     // 直径 8px〜18px
    const left = Math.random() * 100;        // 水平位置 0%〜100%
    const top = Math.random() * 85 + 5;      // 垂直位置 5%〜90%
    const duration = Math.random() * 4 + 4;  // アニメーション周期 4秒〜8秒
    const delay = Math.random() * 5;         // 開始ディレイ

    // インラインスタイルの適用（負のディレイで最初から画面内に浮遊している状態にする）
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${left}%`;
    dot.style.top = `${top}%`;
    dot.style.animationDuration = `${duration}s`;
    dot.style.animationDelay = `-${delay}s`;

    lightsContainer.appendChild(dot);
  }
}