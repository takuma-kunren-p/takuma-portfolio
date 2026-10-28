/* メイン機能：テーマ判定・切替、ハンバーガーメニュー、フォーム */
(function () {
  var root = document.documentElement, KEY = "pf-theme";
  function stored() { try { return localStorage.getItem(KEY) } catch (e) { return null } }
  function setTheme(t) { root.setAttribute("data-theme", t); try { localStorage.setItem(KEY, t) } catch (e) { } }
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  root.setAttribute("data-theme", stored() || (mq.matches ? "dark" : "light"));
  if (mq.addEventListener) mq.addEventListener("change", function (e) { if (!stored()) root.setAttribute("data-theme", e.matches ? "dark" : "light") });
  document.addEventListener("DOMContentLoaded", function () {
    var t = document.getElementById("themeBtn");
    if (t) t.addEventListener("click", function () { setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark") });
    var b = document.getElementById("burger"), n = document.getElementById("nav");
    if (b && n) {
      var close = function () { n.classList.remove("open"); b.setAttribute("aria-expanded", "false") };
      b.addEventListener("click", function () { var o = n.classList.toggle("open"); b.setAttribute("aria-expanded", o) });
      n.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close) });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") close() });
    }
    var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
    var f = document.getElementById("contactForm");
    if (f) f.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(f);
      location.href = "mailto:takuma.prsite.p@gmail.com?subject=" + encodeURIComponent("Portfolio: " + d.get("name")) + "&body=" + encodeURIComponent(d.get("message") + "\n\n" + d.get("email"));
    });
  });
})();
