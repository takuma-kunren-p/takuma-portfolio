/**
 * WORLD STRANGER 公式サイト
 * インタラクション制御スクリプト (js/interactions.js)
 * 
 * 【役割】ユーザー操作に応じた動的UI（タブ、フィルター、アコーディオン、カルーセル）の制御
 * 【連携ファイル】css/components.css, 各HTMLファイル
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. タブ切り替えシステムの初期化（WORLD・ADVENTURERS）
  initTabSystem();

  // 2. お知らせカテゴリーフィルターの初期化（INFORMATION）
  initNewsFilter();

  // 3. アコーディオン開閉ギミックの初期化（全ページ共通）
  initAccordionSystem();

  // 4. 五大地域カルーセルスライダーの初期化（TOP）
  initRegionCarousel();
});


/* ==========================================================================
   01. 汎用タブ切り替えシステム
   【対象】WORLD（五大地域図鑑）、ADVENTURERS（3大プリセット詳細）
   【連携】.region-tab-btn / .preset-nav-btn, aria-controls, [role="tabpanel"]
   ========================================================================== */
function initTabSystem() {
  /**
   * タブグループのセットアップ共通処理
   * @param {string} tabSelector - タブボタンのセレクタ
   * @param {string} panelSelector - 対応するパネルのセレクタ
   */
  const setupTabGroup = (tabSelector, panelSelector) => {
    const tabs = document.querySelectorAll(tabSelector);
    const panels = document.querySelectorAll(panelSelector);
    if (tabs.length === 0 || panels.length === 0) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // すべてのタブのアクティブ状態とaria属性を解除
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });

        // クリックされたタブをアクティブ化
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        // 対応するパネルを表示（aria-controlsで紐付けられたIDを対象にする）
        const targetId = tab.getAttribute('aria-controls');
        panels.forEach(panel => {
          if (panel.id === targetId) {
            panel.classList.add('active');
            panel.removeAttribute('hidden');
          } else {
            panel.classList.remove('active');
            panel.setAttribute('hidden', 'true');
          }
        });
      });
    });
  };

  // WORLDページ：五大地域タブの登録
  setupTabGroup('.region-tab-btn', '.region-detail-panel');

  // ADVENTURERSページ：プリセットキャラクタータブの登録
  setupTabGroup('.preset-nav-btn', '.preset-detail-panel');
}


/* ==========================================================================
   02. お知らせカテゴリーフィルター
   【対象】INFORMATIONページ（ニュースアーカイブ）
   【連携】.filter-btn, .archive-item, data-filter, data-category
   ========================================================================== */
function initNewsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const archiveItems = document.querySelectorAll('.archive-item');
  if (filterButtons.length === 0 || archiveItems.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // フィルターボタンのアクティブ切り替え
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // リスト項目の絞り込み表示
      archiveItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('is-hidden');
        } else {
          item.classList.add('is-hidden');
        }
      });
    });
  });
}


/* ==========================================================================
   03. アコーディオン開閉制御
   【対象】全ページの詳細解説折りたたみ
   【連携】.accordion-item, .accordion-trigger, .accordion-content, aria-expanded
   ========================================================================== */
function initAccordionSystem() {
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  if (accordionTriggers.length === 0) return;

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      if (!item) return;

      // 開閉状態（is-open）のトグル
      const isOpen = item.classList.toggle('is-open');

      // アクセシビリティ属性（aria-expanded）の更新
      trigger.setAttribute('aria-expanded', String(isOpen));
    });
  });
}


/* ==========================================================================
   04. 五大地域カルーセルスライダー
   【対象】TOPページ（待ち受ける五つの未知なる大地）
   【連携】#regionsTrack, #regionPrev, #regionNext (css/components.css)
   ========================================================================== */
function initRegionCarousel() {
  const carouselTrack = document.getElementById('regionsTrack');
  const prevBtn = document.getElementById('regionPrev');
  const nextBtn = document.getElementById('regionNext');
  if (!carouselTrack || !prevBtn || !nextBtn) return;

  // カード1枚分のスクロール量（カード幅340px + gap 24px）
  const scrollAmount = 364;

  // 左へスクロール
  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    carouselTrack.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  // 右へスクロール
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    carouselTrack.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
}