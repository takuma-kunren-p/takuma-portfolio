document.addEventListener('DOMContentLoaded', function () {
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var globalNav = document.getElementById('globalNav');
  var navOverlay = document.getElementById('navOverlay');
  var navLinks = globalNav.querySelectorAll('a');

  function openMenu() {
    hamburgerBtn.classList.add('is-active');
    globalNav.classList.add('is-open');
    navOverlay.classList.add('is-visible');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    hamburgerBtn.setAttribute('aria-label', 'メニューを閉じる');
    document.body.style.overflow = 'hidden'; // 背景のスクロールを止める
  }

  function closeMenu() {
    hamburgerBtn.classList.remove('is-active');
    globalNav.classList.remove('is-open');
    navOverlay.classList.remove('is-visible');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.setAttribute('aria-label', 'メニューを開く');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (globalNav.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburgerBtn.addEventListener('click', toggleMenu);

  // オーバーレイをクリックしたら閉じる
  navOverlay.addEventListener('click', closeMenu);

  // メニュー内のリンクをクリックしたら閉じる
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // ESCキーで閉じる
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // 画面幅をPCサイズに変えた時、開いたままのメニュー状態をリセット
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 600) {
      closeMenu();
    }
  });
});
