/**
 * 温泉施設「湯煙の里 翠泉閣」翻訳・多言語（i18n）モジュール
 * ・翻訳辞書データ (ja / en)
 * ・ブラウザ言語自動判定 & 手動切り替え (LocalStorage連動)
 */

// 翻訳辞書データ（他言語の追加はここへ追記）
const translations = {
    ja: {
        // ナビ・ロゴ
        "logo.sub": "奥日光の名湯 源泉掛け流し",
        "logo.main": "湯煙の里 翠泉閣",
        "nav.home": "ホーム",
        "nav.onsen": "温泉・施設",
        "nav.price": "料金・プラン",
        "nav.access": "アクセス",
        "nav.contact": "お問い合わせ",

        // フッター
        "footer.address": "〒321-1662 栃木県日光市湯元温泉2048<br>TEL: 0288-00-0000（受付時間 9:00〜21:00）<br>チェックイン 15:00 / チェックアウト 10:00",
        "footer.nav1_title": "館内案内",
        "footer.nav2_title": "インフォメーション",
        "footer.faq": "よくあるご質問",
        "footer.privacy": "プライバシーポリシー",
        "footer.rights": "© 2026 湯煙の里 翠泉閣 All Rights Reserved.",

        // トップページ
        "home.hero1_title": "悠久の時を紡ぐ、至福のにごり湯",
        "home.hero1_sub": "創業八十年、守り継ぐ<br>源泉かけ流しの贅",
        "home.hero2_title": "旬彩を味わう、滋味深き山海の幸",
        "home.hero2_sub": "地元契約農家の朝採れ野菜と<br>銘柄牛会席",
        "home.hero3_title": "木の薫りに抱かれ、心澄みわたる宿",
        "home.hero3_sub": "全室渓谷ビューの<br>静謐なくつろぎ空間",
        "home.concept_title": "ごあいさつ",
        "home.concept_sub": "CONCEPT",
        "home.concept_text": "奥日光の清澄な大自然と、滔々と湧き出る乳白色の名湯。<br>「翠泉閣」は、日々の喧騒から離れ、五感を解放する特別な時間をお届けいたします。<br>四季の移ろいを肌で感じながら、木の温もりに満ちた湯の宿でゆったりとお寛ぎください。",
        "home.concept_btn": "温泉の魅力を詳しく見る",
        "home.features_title": "翠泉閣の見どころ",
        "home.features_sub": "FACILITIES & SERVICE",
        "home.card1_title": "源泉かけ流しの天然湯",
        "home.card1_text": "一切の加水・加温を行わない天然硫黄泉。肌に吸い付くような柔らかな湯触りをご堪能ください。",
        "home.card1_btn": "詳細を見る",
        "home.card2_title": "四季の味覚 厳選会席",
        "home.card2_text": "地元契約農家の新鮮野菜やブランド和牛など、料理長が毎朝厳選した山海の幸を美しく仕立てます。",
        "home.card2_btn": "宿泊プランを見る",
        "home.card3_title": "都心から好アクセスの秘湯",
        "home.card3_text": "特急電車と無料送迎バスで快適にお越しいただけます。周辺には名勝やハイキング道も充実。",
        "home.card3_btn": "アクセスを見る",

        // 温泉・施設紹介ページ
        "onsen.page_title": "温泉・施設案内",
        "onsen.page_sub": "ONSEN & FACILITIES",
        "onsen.main_title": "名湯「翠泉の湯」",
        "onsen.main_sub": "NATURAL HOT SPRING",
        "onsen.video_label": "館内の雰囲気を動画で見る",
        "onsen.intro_title": "地底から湧き出る生きた源泉",
        "onsen.intro_text": "翠泉閣の温泉は、毎分約200リットル湧出する極上の単純硫黄温泉。空気に触れることで乳白色へと色を変え、古くから湯治場として多くの旅人を癒やしてきました。",
        "onsen.spec_type": "泉質：",
        "onsen.spec_type_val": "含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉",
        "onsen.spec_temp": "泉温：",
        "onsen.spec_temp_val": "68.5℃（湯守による自然放熱管理）",
        "onsen.spec_eff": "効能：",
        "onsen.spec_eff_val": "神経痛、筋肉痛、冷え性、美肌作用、疲労回復",
        "onsen.fac_title": "館内設備",
        "onsen.fac_sub": "HOTEL FACILITIES",
        "onsen.fac1_title": "貸切檜露天風呂",
        "onsen.fac1_text": "ご家族やカップルで気兼ねなく湯浴みを楽しめるプライベート風呂。豊かな檜の薫りが漂います。（要予約制）",
        "onsen.fac2_title": "個室食事処「月あかり」",
        "onsen.fac2_text": "坪庭を望む全席掘りごたつ式の個室空間。周囲を気にせずゆったりと会席料理をご堪能いただけます。",
        "onsen.fac3_title": "湯上がり処「森の調べ」",
        "onsen.fac3_text": "清らかな湧水と特製麦茶をご用意。暖炉の火を眺めながら、読書やお寛ぎのひとときをお過ごしください。",

        // 料金・プランページ
        "price.page_title": "料金・コース案内",
        "price.page_sub": "PLANS & PRICING",
        "price.plan_sec_title": "ご宿泊プラン",
        "price.plan_sec_sub": "ACCOMMODATION",
        "price.th_planname": "プラン名",
        "price.th_desc": "内容・特徴",
        "price.th_price": "料金（1名様 / 1泊2食）",
        "price.plan1_title": "翠泉スタンダード会席プラン",
        "price.plan1_desc": "当館一番人気の定番プラン。旬の食材を散りばめた季節会席と源泉かけ流しの湯を堪能。",
        "price.plan2_title": "特選とちぎ和牛三昧極みプラン",
        "price.plan2_desc": "厳選ブランド「とちぎ和牛」のサーロインステーキとすき焼きを両方味わえる贅沢コース。",
        "price.plan3_title": "記念日・アニバーサリープラン",
        "price.plan3_desc": "貸切露天風呂1回無料＋スパークリングワイン＆特製デザートプレート付き。",
        "price.plan4_title": "連泊湯治ワーケーションプラン",
        "price.plan4_desc": "静かな渓谷を望むワークスペース完備。3泊以上からご利用いただける特別割引プラン。",
        "price.note": "※上記料金は平日2名1室利用時の1名様あたりの税込金額です。入湯税別途150円を頂戴いたします。",
        "price.day_sec_title": "日帰り温泉・立寄り湯",
        "price.day_sec_sub": "DAY TRIP ONSEN",
        "price.th_type": "区分",
        "price.th_hours": "ご利用時間",
        "price.th_fee": "料金（税込）",
        "price.day_adult": "大人（中学生以上）",
        "price.day_child": "小人（4歳〜小学生）",
        "price.day_private": "貸切檜風呂（1枠 45分）",
        "price.day_set": "日帰り昼食＋入浴セットプラン",
        "price.day_time1": "11:00 〜 19:00（最終受付 18:00）",
        "price.day_time2": "12:00 〜 17:00（要当日電話予約）",
        "price.day_time3": "11:30 〜 15:00（要前日予約）",
        "price.btn_inquiry": "宿泊・プランの空き状況を問い合わせる",

        // アクセスページ
        "access.page_title": "交通アクセス・周辺観光",
        "access.page_sub": "ACCESS & SIGHTSEEING",
        "access.map_title": "アクセスマップ",
        "access.map_sub": "LOCATION MAP",
        "access.train_title": "電車でお越しの方",
        "access.train_sub": "東武日光駅・JR日光駅より",
        "access.train_text": "東武日光駅より東武バス「湯元温泉行き」に乗車（約75分）。終点「湯元温泉」バス停より徒歩3分。",
        "access.train_bus": "<strong>無料送迎バス（要予約）</strong><br>東武日光駅発：14:00 / 15:30<br>翠泉閣発：10:15 / 11:30",
        "access.car_title": "お車でお越しの方",
        "access.car_sub": "日光宇都宮道路 清滝ICより",
        "access.car_text": "日光宇都宮有料道路「清滝IC」より国道120号（いろは坂経由）で約45分。中禅寺湖を抜けて湯ノ湖方面へ。",
        "access.car_parking": "<strong>無料駐車場完備</strong><br>乗用車50台収容可能（大型バス対応可）<br>※冬季（11月〜4月）はスタッドレスタイヤ携行必須",
        "access.spot_sec_title": "周辺の観光スポット",
        "access.spot_sec_sub": "NEARBY HIGHLIGHTS",
        "access.spot1_title": "湯ノ湖・湯滝",
        "access.spot1_text": "周囲3kmの美しい湖。湖畔沿いの散策路はマイナスイオンに満ち溢れています。",
        "access.spot2_title": "戦場ヶ原",
        "access.spot2_text": "日本有数の広大な湿原。木道が整備されており、四季折々の高山植物に出会えます。",
        "access.spot3_title": "日光の社寺 (世界遺産)",
        "access.spot3_text": "徳川家康を祀る絢爛豪華な国宝建築。当館への行き帰りのお立ち寄りに最適です。",

        // お問い合わせページ
        "contact.page_title": "お問い合わせ",
        "contact.page_sub": "CONTACT & INQUIRY",
        "contact.sec_title": "ご予約・お問い合わせ",
        "contact.sec_sub": "MESSAGE FORM",
        "contact.desc": "ご宿泊の相談、アレルギー対応、送迎バスのお申し込みなど、お気軽にお問い合わせください。<br>お電話（0288-00-0000 / 9:00〜21:00）でも承っております。",
        "contact.lbl_name": "お名前",
        "contact.req": "必須",
        "contact.ph_name": "例：山田 太郎",
        "contact.lbl_email": "メールアドレス",
        "contact.ph_email": "例：yamada@example.com",
        "contact.lbl_phone": "お電話番号",
        "contact.ph_phone": "例：090-1234-5678",
        "contact.lbl_category": "お問い合わせ種別",
        "contact.opt_select": "選択してください",
        "contact.opt_res": "宿泊予約について",
        "contact.opt_day": "日帰り温泉について",
        "contact.opt_shuttle": "無料送迎バスの予約",
        "contact.opt_other": "その他のお問い合わせ",
        "contact.lbl_message": "お問い合わせ内容",
        "contact.ph_message": "ご希望の日程やご質問内容を入力してください。",
        "contact.btn_submit": "送信する",
        "contact.submitting": "送信中...",
        "contact.success_msg": "お問い合わせを受け付けました。折り返し担当者よりご連絡いたします。"
    },

    en: {
        // Header & Nav
        "logo.sub": "Oku-Nikko Natural Hot Spring",
        "logo.main": "Suisenkaku",
        "nav.home": "Home",
        "nav.onsen": "Onsen & Facilities",
        "nav.price": "Rates & Plans",
        "nav.access": "Access",
        "nav.contact": "Contact",

        // Footer
        "footer.address": "2048 Yumoto Onsen, Nikko City, Tochigi 321-1662<br>TEL: +81-288-00-0000 (9:00 - 21:00 JST)<br>Check-in 15:00 / Check-out 10:00",
        "footer.nav1_title": "Facilities",
        "footer.nav2_title": "Information",
        "footer.faq": "FAQ",
        "footer.privacy": "Privacy Policy",
        "footer.rights": "© 2026 Suisenkaku Ryokan. All Rights Reserved.",

        // Home
        "home.hero1_title": "Timeless Serenity in Milky Hot Waters",
        "home.hero1_sub": "80 Years of Tradition<br>100% Free-Flowing Hot Springs",
        "home.hero2_title": "Culinary Delights of Land and Sea",
        "home.hero2_sub": "Fresh Morning Vegetables &<br>Selected Wagyu Kaiseki",
        "home.hero3_title": "Embraced by Woods and Tranquility",
        "home.hero3_sub": "All Rooms with Valley View<br>Peaceful Modern Sukiya Style",
        "home.concept_title": "Welcome",
        "home.concept_sub": "CONCEPT",
        "home.concept_text": "Surrounded by the serene wilderness of Oku-Nikko and rich natural springs.<br>Suisenkaku offers an extraordinary escape to release all your senses.<br>Relax deeply in our warm wooden retreat while taking in the ever-changing seasonal views.",
        "home.concept_btn": "Discover Our Hot Springs",
        "home.features_title": "Highlights of Suisenkaku",
        "home.features_sub": "FACILITIES & SERVICE",
        "home.card1_title": "Natural Free-Flowing Springs",
        "home.card1_text": "Pure sulfur spring water without dilution or reheating. Enjoy the velvety touch on your skin.",
        "home.card1_btn": "Learn More",
        "home.card2_title": "Seasonal Kaiseki Dining",
        "home.card2_text": "Masterfully prepared delicacies featuring regional Wagyu beef and organic produce fresh from contracted farms.",
        "home.card2_btn": "View Stay Plans",
        "home.card3_title": "Easily Accessible Sanctuary",
        "home.card3_text": "Comfortable access via express train and our complimentary shuttle bus. Surrounded by scenic trails.",
        "home.card3_btn": "View Access",

        // Onsen
        "onsen.page_title": "Hot Springs & Facilities",
        "onsen.page_sub": "ONSEN & FACILITIES",
        "onsen.main_title": "Sacred Spring 'Suisen-no-Yu'",
        "onsen.main_sub": "NATURAL HOT SPRING",
        "onsen.video_label": "Watch Atmospheric Video",
        "onsen.intro_title": "Living Waters Born from the Earth",
        "onsen.intro_text": "Flowing at 200 liters per minute, our milky sulfur waters turn white upon contact with pure mountain air. It has nurtured and healed travelers for generations.",
        "onsen.spec_type": "Spring Type: ",
        "onsen.spec_type_val": "Sulfur - Calcium / Sodium - Sulfate / Bicarbonate Spring",
        "onsen.spec_temp": "Temperature: ",
        "onsen.spec_temp_val": "68.5°C (Naturally cooled by hot spring masters)",
        "onsen.spec_eff": "Benefits: ",
        "onsen.spec_eff_val": "Nerve pain, muscle fatigue, poor circulation, skin beautification",
        "onsen.fac_title": "Hotel Facilities",
        "onsen.fac_sub": "HOTEL FACILITIES",
        "onsen.fac1_title": "Private Cypress Open-Air Bath",
        "onsen.fac1_text": "A secluded bath for families and couples filled with relaxing aroma of natural Japanese cypress (Hinoki). Reservation required.",
        "onsen.fac2_title": "Private Dining 'Tsukiakari'",
        "onsen.fac2_text": "Sunken kotatsu seating overlooking an authentic courtyard garden. Savor your Kaiseki in quiet privacy.",
        "onsen.fac3_title": "Lounge 'Mori no Shirabe'",
        "onsen.fac3_text": "Complimentary fresh spring water and cold barley tea by the hearth. Unwind with books and soft ambient music.",

        // Price
        "price.page_title": "Rates & Plans",
        "price.page_sub": "PLANS & PRICING",
        "price.plan_sec_title": "Accommodation Plans",
        "price.plan_sec_sub": "ACCOMMODATION",
        "price.th_planname": "Plan Name",
        "price.th_desc": "Overview",
        "price.th_price": "Price (Per Person / 2 Meals)",
        "price.plan1_title": "Suisen Standard Kaiseki Plan",
        "price.plan1_desc": "Our most popular signature stay with full seasonal multi-course dinner and breakfast.",
        "price.plan2_title": "Premium Tochigi Wagyu Feast",
        "price.plan2_desc": "Luxury course serving both premium sirloin steak and hot-pot sukiyaki.",
        "price.plan3_title": "Anniversary Celebration Plan",
        "price.plan3_desc": "Includes 1 complimentary private bath session, sparkling wine, and anniversary dessert plate.",
        "price.plan4_title": "Long Stay Healing & Workation",
        "price.plan4_desc": "Special discount for stays of 3+ nights. Equipped with quiet valley-view desk workspace.",
        "price.note": "*Prices include tax based on 2 guests per room on weekdays. Bathing tax of 150 JPY per adult applies separately.",
        "price.day_sec_title": "Day-Trip Hot Springs",
        "price.day_sec_sub": "DAY TRIP ONSEN",
        "price.th_type": "Category",
        "price.th_hours": "Hours",
        "price.th_fee": "Price (Tax incl.)",
        "price.day_adult": "Adults (Junior High & above)",
        "price.day_child": "Children (Age 4 - Elementary)",
        "price.day_private": "Private Cypress Bath (45 min)",
        "price.day_set": "Day Lunch & Bath Package",
        "price.day_time1": "11:00 - 19:00 (Last entry 18:00)",
        "price.day_time2": "12:00 - 17:00 (Same-day call required)",
        "price.day_time3": "11:30 - 15:00 (Reservation 1 day prior)",
        "price.btn_inquiry": "Inquire Availability & Booking",

        // Access
        "access.page_title": "Access & Sightseeing",
        "access.page_sub": "ACCESS & SIGHTSEEING",
        "access.map_title": "Location Map",
        "access.map_sub": "LOCATION MAP",
        "access.train_title": "By Train & Public Bus",
        "access.train_sub": "From Tobu-Nikko / JR Nikko Station",
        "access.train_text": "Take the Tobu Bus bound for 'Yumoto Onsen' (approx. 75 min). 3-minute walk from the final stop.",
        "access.train_bus": "<strong>Free Shuttle Bus (Reservation required)</strong><br>From Tobu-Nikko: 14:00 / 15:30<br>From Suisenkaku: 10:15 / 11:30",
        "access.car_title": "By Car",
        "access.car_sub": "From Nikko-Utsunomiya Road Kiyotaki IC",
        "access.car_text": "Approx. 45 min via Route 120 (Irohazaka Slope). Pass Lake Chuzenji towards Lake Yunoko.",
        "access.car_parking": "<strong>Free Parking Available</strong><br>Capacity for 50 cars (Tour buses accommodated)<br>*Winter tires mandatory from Nov to Apr",
        "access.spot_sec_title": "Nearby Highlights",
        "access.spot_sec_sub": "NEARBY HIGHLIGHTS",
        "access.spot1_title": "Lake Yunoko & Yudaki Falls",
        "access.spot1_text": "Picturesque 3km mountain lake perimeter with refreshing lakeside forest walking paths.",
        "access.spot2_title": "Senjogahara Marshland",
        "access.spot2_text": "Vast national highland marsh. Well-maintained wooden trails with rich alpine flora.",
        "access.spot3_title": "Nikko Toshogu (World Heritage)",
        "access.spot3_text": "Magnificent gilded shrine dedicated to Tokugawa Ieyasu, ideal for stops to and from our ryokan.",

        // Contact
        "contact.page_title": "Contact Us",
        "contact.page_sub": "CONTACT & INQUIRY",
        "contact.sec_title": "Inquiry Form",
        "contact.sec_sub": "MESSAGE FORM",
        "contact.desc": "Feel free to inquire regarding bookings, dietary requirements, and shuttle transfers.<br>Phone inquiries (+81-288-00-0000 / 9:00 - 21:00 JST) are also welcome.",
        "contact.lbl_name": "Full Name",
        "contact.req": "Required",
        "contact.ph_name": "e.g., John Smith",
        "contact.lbl_email": "Email Address",
        "contact.ph_email": "e.g., john@example.com",
        "contact.lbl_phone": "Phone Number",
        "contact.ph_phone": "e.g., +81-90-1234-5678",
        "contact.lbl_category": "Inquiry Category",
        "contact.opt_select": "Please select",
        "contact.opt_res": "Room Reservation",
        "contact.opt_day": "Day-Trip Bathing",
        "contact.opt_shuttle": "Free Shuttle Bus Booking",
        "contact.opt_other": "General Inquiries",
        "contact.lbl_message": "Message / Details",
        "contact.ph_message": "Please write your desired dates, questions, or special requests.",
        "contact.btn_submit": "Submit Message",
        "contact.submitting": "Sending...",
        "contact.success_msg": "Thank you. Your message has been received. Our team will contact you shortly."
    }
};

// 外部スクリプト（js.js等）からも参照できるようにグローバル公開
window.translations = translations;

/* ==========================================================================
   言語切り替え機能の初期化
   ========================================================================== */
function initLanguageToggle() {
    const langBtn = document.querySelector("#lang-toggle");
    const savedLang = localStorage.getItem("site_lang");

    // ブラウザ設定を判定（日本語なら ja、その他は en）
    const browserLang = (navigator.language || navigator.userLanguage || "ja").toLowerCase();
    const systemPrefersLang = browserLang.startsWith("ja") ? "ja" : "en";

    let currentLang = savedLang || systemPrefersLang;
    if (!translations[currentLang]) {
        currentLang = "ja";
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        document.documentElement.lang = lang;

        const dict = translations[lang];

        // 1. テキスト置換
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) el.textContent = dict[key];
        });

        // 2. HTML（改行入り）置換
        document.querySelectorAll("[data-i18n-html]").forEach((el) => {
            const key = el.getAttribute("data-i18n-html");
            if (dict[key]) el.innerHTML = dict[key];
        });

        // 3. プレースホルダー置換
        document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
            const key = el.getAttribute("data-i18n-ph");
            if (dict[key]) el.setAttribute("placeholder", dict[key]);
        });

        // 4. ボタン表記更新（日本語なら「EN」、英語なら「JP」）
        if (langBtn) {
            langBtn.textContent = (lang === "ja") ? "EN" : "JP";
            langBtn.setAttribute("aria-label", (lang === "ja") ? "Switch to English" : "日本語に切り替え");
        }

        localStorage.setItem("site_lang", lang);
    }

    // 初回適用
    setLanguage(currentLang);

    // クリックイベント
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            const nextLang = (currentLang === "ja") ? "en" : "ja";
            setLanguage(nextLang);
        });
    }
}

// 読み込み完了時に実行
document.addEventListener("DOMContentLoaded", initLanguageToggle);