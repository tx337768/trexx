(() => {
  const END_KEY = "sh_adv_offer_end";
  const STOCK_KEY = "sh_adv_stock";
  const HOURS = 11;

  function getEnd() {
    const saved = localStorage.getItem(END_KEY);
    if (saved) {
      const n = Number(saved);
      if (Number.isFinite(n) && n > Date.now()) return n;
    }
    const end = Date.now() + HOURS * 60 * 60 * 1000;
    localStorage.setItem(END_KEY, String(end));
    return end;
  }

  function getStock() {
    const saved = localStorage.getItem(STOCK_KEY);
    if (saved) {
      const n = Number(saved);
      if (Number.isFinite(n) && n >= 12 && n <= 47) return n;
    }
    localStorage.setItem(STOCK_KEY, "47");
    return 47;
  }

  const end = getEnd();
  let stock = getStock();

  const hEls = document.querySelectorAll("[data-h]");
  const mEls = document.querySelectorAll("[data-m]");
  const sEls = document.querySelectorAll("[data-s]");
  const stockEls = document.querySelectorAll("[data-stock]");
  const viewerEl = document.querySelector("[data-viewers]");
  const recentName = document.querySelector("[data-recent-name]");
  const recentCity = document.querySelector("[data-recent-city]");
  const recentMins = document.querySelector("[data-recent-mins]");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function renderClock() {
    const left = Math.max(0, end - Date.now());
    const totalSec = Math.floor(left / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    hEls.forEach((el) => { el.textContent = pad(h); });
    mEls.forEach((el) => { el.textContent = pad(m); });
    sEls.forEach((el) => { el.textContent = pad(s); });
  }

  function renderStock() {
    stockEls.forEach((el) => {
      el.textContent = String(stock);
    });
  }

  renderClock();
  renderStock();
  setInterval(renderClock, 1000);

  setInterval(() => {
    if (stock <= 12) return;
    if (Math.random() > 0.22) return;
    stock -= 1;
    localStorage.setItem(STOCK_KEY, String(stock));
    renderStock();
  }, 48000);

  // Soft social proof: viewers fluctuate, recent orders rotate.
  if (viewerEl) {
    let viewers = 18 + Math.floor(Math.random() * 12);
    const tickViewers = () => {
      viewers += Math.random() > 0.5 ? 1 : -1;
      viewers = Math.max(14, Math.min(38, viewers));
      viewerEl.textContent = String(viewers);
    };
    viewerEl.textContent = String(viewers);
    setInterval(tickViewers, 9000);
  }

  const recentPool = [
    ["Elena", "Madrid"],
    ["Marco", "Milan"],
    ["Sofia", "Lisbon"],
    ["Noah", "Amsterdam"],
    ["Inês", "Porto"],
    ["Jonas", "Berlin"],
    ["Claire", "Lyon"],
    ["Hugo", "Brussels"],
  ];

  if (recentName && recentCity && recentMins) {
    const tickRecent = () => {
      const [name, city] = recentPool[Math.floor(Math.random() * recentPool.length)];
      recentName.textContent = name;
      recentCity.textContent = city;
      recentMins.textContent = String(2 + Math.floor(Math.random() * 11));
    };
    tickRecent();
    setInterval(tickRecent, 14000);
  }

  // Gallery thumbs: swap still image over video when not the main bag clip.
  const stage = document.querySelector(".pdp-stage");
  const fallback = document.querySelector(".pdp-stage .pdp-fallback");
  document.querySelectorAll(".pdp-thumbs [data-thumb]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-thumb");
      if (!src || !fallback || !stage) return;
      fallback.src = src;
      document.querySelectorAll(".pdp-thumbs button").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const isBag = src.includes("mala-gratis");
      stage.classList.toggle("show-still", !isBag);
      if (isBag) stage.classList.add("is-playing");
    });
  });

  document.querySelectorAll("video[data-hero-video], .pdp-main-video").forEach((video) => {
    const shell = video.closest(".hero-media, .pdp-stage");
    const markPlaying = () => {
      if (shell && !shell.classList.contains("show-still")) shell.classList.add("is-playing");
    };
    video.addEventListener("playing", markPlaying);
    if (!video.paused && video.readyState >= 2) markPlaying();

    const play = video.play();
    if (play && typeof play.catch === "function") {
      play.catch(() => {
        video.removeAttribute("autoplay");
        if (shell) shell.classList.remove("is-playing");
      });
    }
  });
})();
