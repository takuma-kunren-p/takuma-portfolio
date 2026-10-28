/* 翻訳機能：ブラウザ言語の自動判定＋手動切替（data-i18n属性を辞書で差し替え） */
(function () {
  var KEY = "pf-lang";

  // 以前のlocalStorageキャッシュをクリアしてブラウザ設定を優先
  try { localStorage.removeItem(KEY); } catch (e) { }

  var D = {
    ja: {
      "nav.home": "ホーム", "nav.contents": "作品集", "nav.about": "自己紹介",
      "hero.status": "学習中",
      "hero.title1": "じっくり",
      "hero.title2": "学ぶ。",
      "hero.lead": "TAKUMAが職業訓練を通じて学んできた、これまでの学習記録を紹介するホームページです。",
      "hero.c1": "制作物ページへ", "hero.c2": "自己紹介ページへ",
      "home.h": "学習内容",
      "home.1h": "officeソフト活用", "home.1p": "資格取得を通じて、Word、Excel、PowerPointなどのofficeソフトを習得してきました。",
      "home.2h": "Web制作", "home.2p": "資格取得を通じてHTML、CSSを自分で記述し、ホームページを制作することを学びました。",
      "home.3h": "生成AI活用", "home.3p": "複数の生成AIを活用し、文章やメディアコンテンツ生成、ホームページのバイブコーディングまで。",
      "home.latest": "最新の作品", "home.more": "すべての制作物を見る",
      "c.h": "作品集",
      "c.large": "最新の作品紹介",
      "c.small": "その他の作品/学習",
      "c.l.t": "WORLD STRANGER公式ホームページ",
      "c.l.p": "架空のゲームを題材にした公式サイトです。Google AI Studioに指示を出してコードを生成し、手作業でコードを修正せずに制作しました。AIへの指示を通じたWeb制作に取り組んだ作品です。",
      "c.l2.t": "温泉公式ホームページ",
      "c.l2.p": "架空の温泉宿を題材にした公式サイトです。Google AI Studioを初めて活用して制作しました。",
      "c.s1": "カフェサイト（JavaScript）", "c.s1p": "授業で制作したカフェサイトです。JavaScriptを組み込み、Webページに動きを加える練習をしました。",
      "c.s2": "カフェサイト", "c.s2p": "授業課題として制作したカフェサイトです。HTMLとCSSを使ったページ制作に取り組みました。",
      "c.s3": "パソコン教室サイト", "c.s3p": "授業課題として制作したパソコン教室のサイトです。HTMLとCSSで構成しました。",
      "c.s4": "会議の文字起こし・議事録", "c.s4p": "グループワークで、トランスクリプトを活用した会議の文字起こしと議事録作成に取り組みました。",
      "c.s5": "AIを活用した広告制作", "c.s5p": "画像生成AIを活用した広告制作のワークショップです。プロンプトの作成にもAIを活用しました。",
      "c.s6": "OfficeソフトとAI", "c.s6p": "AIを活用し、Officeソフトでの文章作成、表計算、スライド制作に取り組みました。",
      "c.s7": "AIを活用した文章・資料制作", "c.s7p": "AIを活用した文章・資料制作のワークショップです。発表資料の制作にもAIを活用しました。",
      "c.s8": "Webサイト機能の実習", "c.s8p": "カルーセルやハンバーガーメニューなど、Webサイトの基本的な機能を学習しました。",
      "c.view": "作品を見る",
      "a.h1": "プロフィール",
      "a.name": "TAKUMA",
      "a.bio": "幼少期からパソコンに慣れ親しみながら育つ。学生時代にＩＴ技術を学ぶも、うつ病を発症し長い療養生活を送る。社会復帰し数年間、正社員として働いたのち、転職活動の傍ら職業訓練に通っています。<br>趣味はゲームやネットサーフィン、RPGからアクション、シミュレーションまで幅広く遊びます。<br>専攻分野はIT技術。調べ物をして学習するのが得意です。",
      "a.h2": "スキル",
      "a.s1.t": "officeソフト",
      "a.s1.d": "・コンピュータサービス技能評価試験 表計算部門 ２級表計算技士 取得<br>・コンピュータサービス技能評価試験 ワープロ部門 ２級ワープロ技士 取得<br>基本的な文章作成、関数利用などを学んできました。",
      "a.s2.t": "Web制作",
      "a.s2.d": "・Webクリエイター能力認定試験 エキスパート級<br>・HTML、CSSの編集を学びました<br>・JavaScriptなど個人での学習を継続中。",
      "a.s3.t": "生成AI活用",
      "a.s3.d": "・文章作成、メディアコンテンツの生成、ホームページ制作などを学習<br>・全てをAIに任せきりにするのではなく、人の手とAIを併用することを意識しています。<br>・当ホームページもベースをAIで制作、人の手で装飾や文章を整えて制作しています。",
      "a.h3": "お問い合わせ",
      "a.n": "お名前", "a.e": "メールアドレス", "a.m": "メッセージ", "a.send": "メールで送る",
      "a.mailnote": "送信すると、お使いのメールアプリが開きます。",
      "f.note": "TAKUMAのホームページ"
    },
    en: {
      "nav.home": "Home", "nav.contents": "Works", "nav.about": "About",
      "hero.status": "Learning",
      "hero.title1": "Learn",
      "hero.title2": "slowly.",
      "hero.lead": "This website introduces TAKUMA's learning progress and portfolio developed through vocational training.",
      "hero.c1": "Go to Works", "hero.c2": "Go to About",
      "home.h": "Curriculum",
      "home.1h": "Office Applications", "home.1p": "Acquired proficiency in Word, Excel, and PowerPoint through certification studies.",
      "home.2h": "Web Development", "home.2p": "Learned to build websites by writing HTML and CSS directly through certification studies.",
      "home.3h": "Generative AI", "home.3p": "Utilized multiple generative AIs for writing, media generation, and vibe coding of websites.",
      "home.latest": "Latest Works", "home.more": "See all works",
      "c.h": "Works",
      "c.large": "Featured Works",
      "c.small": "Other Works & Studies",
      "c.l.t": "WORLD STRANGER Official Website",
      "c.l.p": "An official website concept for a fictional game. I used Google AI Studio to generate the code from prompts and built the site without manually editing the code. This project explores a prompt-driven approach to web development.",
      "c.l2.t": "Hot Spring Resort Official Website",
      "c.l2.p": "An official website concept for a fictional hot spring inn. This was my first project using Google AI Studio.",
      "c.s1": "Cafe Website (JavaScript)", "c.s1p": "A cafe website created for class. Practiced adding interactive behavior with JavaScript.",
      "c.s2": "Cafe Website", "c.s2p": "A cafe website created as a class assignment using HTML and CSS.",
      "c.s3": "Computer School Website", "c.s3p": "A website for a computer school created as a class assignment using HTML and CSS.",
      "c.s4": "Meeting Transcription & Minutes", "c.s4p": "Group work on transcribing a meeting and preparing minutes using a transcript.",
      "c.s5": "AI-Assisted Ad Creation", "c.s5p": "An advertising workshop using AI-generated images. AI was also used to help create prompts.",
      "c.s6": "Office Applications & AI", "c.s6p": "Practiced document writing, spreadsheets, and slide creation in Office applications with AI assistance.",
      "c.s7": "AI-Assisted Writing & Documents", "c.s7p": "A workshop on writing and document creation with AI, including presentation materials.",
      "c.s8": "Website Feature Practice", "c.s8p": "Learned common website features such as carousels and hamburger menus.",
      "c.view": "View project",
      "a.h1": "Profile",
      "a.name": "TAKUMA",
      "a.bio": "Grew up familiar with computers from an early age. Studied IT during student years, followed by a period of medical recovery. After returning to society and working as a full-time employee for several years, currently attending vocational training alongside career transition activities.<br>Hobbies include gaming and web surfing, playing a wide variety from RPGs to action and simulation games.<br>Specializing in IT, with strong skills in research and self-directed learning.",
      "a.h2": "Skills",
      "a.s1.t": "Office Software",
      "a.s1.d": "・Computer Service Skills Certification - Spreadsheet Division Grade 2<br>・Computer Service Skills Certification - Word Processing Division Grade 2<br>Acquired fundamental skills in document drafting and spreadsheet formula utilization.",
      "a.s2.t": "Web Development",
      "a.s2.d": "・Web Creator Certification Exam - Expert Level<br>・Learned structure & styling using HTML and CSS<br>・Continuing self-directed learning in JavaScript and modern web technologies.",
      "a.s3.t": "Generative AI",
      "a.s3.d": "・Practiced text composition, multimedia asset creation, and website development<br>・Focusing on combining human craftsmanship with AI rather than leaving everything to AI<br>・This website is also prototyped with AI assistance and hand-tuned with precise styling and copywriting.",
      "a.h3": "Contact",
      "a.n": "Name", "a.e": "Email", "a.m": "Message", "a.send": "Send by email",
      "a.mailnote": "Your email app will open when you submit the form.",
      "f.note": "TAKUMA's Website"
    }
  };

  // ブラウザの言語設定を最優先で判定（日本語系なら'ja'、英語圏などそれ以外なら'en'）
  function detect() {
    try {
      var s = sessionStorage.getItem(KEY);
      if (s) return s;
    } catch (e) { }
    var lang = (navigator.language || navigator.userLanguage || "ja").toLowerCase();
    return lang.indexOf("ja") === 0 ? "ja" : "en";
  }

  function apply(l) {
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = D[l][el.getAttribute("data-i18n")];
      if (v) {
        if (v.indexOf("<br>") !== -1) {
          el.innerHTML = v;
        } else {
          el.textContent = v;
        }
      }
    });
    var b = document.getElementById("langBtn"); if (b) b.textContent = l === "ja" ? "EN" : "JA";
    try { sessionStorage.setItem(KEY, l); } catch (e) { }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var cur = detect(); apply(cur);
    var b = document.getElementById("langBtn");
    if (b) b.addEventListener("click", function () { cur = cur === "ja" ? "en" : "ja"; apply(cur); });
  });
})();
