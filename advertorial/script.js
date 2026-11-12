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

  const hEl = document.querySelector("[data-h]");
  const mEl = document.querySelector("[data-m]");
  const sEl = document.querySelector("[data-s]");
  const stockEls = document.querySelectorAll("[data-stock]");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function renderClock() {
    const left = Math.max(0, end - Date.now());
    const totalSec = Math.floor(left / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);
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

  // Reveal looping video once it actually plays; keep still fallback underneath.
  document.querySelectorAll("video[data-hero-video], .pdp-main-video").forEach((video) => {
    const shell = video.closest(".hero-media, .pdp-stage");
    const markPlaying = () => {
      if (shell) shell.classList.add("is-playing");
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
