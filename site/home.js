(function () {
  var products = [
    { name: "Family Blackout Kit", price: "€249.90", href: "https://standbyhouse.com/products/family-blackout-kit" },
    { name: "Home Essentials Blackout Kit", price: "€179.90", href: "https://standbyhouse.com/products/home-essentials-blackout-kit" },
    { name: "Home Blackout Kit", price: "€109.90", href: "https://standbyhouse.com/products/standby-home-blackout-kit" },
    { name: "Blackout Comms Kit", price: "€349.90", href: "https://standbyhouse.com/products/blackout-comms-kit" },
    { name: "Home Command Blackout Kit", price: "€499.90", href: "https://standbyhouse.com/products/home-command-blackout-kit" },
    { name: "Rechargeable Room Lantern", price: "€44.90", href: "https://standbyhouse.com/products/standby-rechargeable-lantern" },
    { name: "Hand-Crank Emergency Radio", price: "€39.90", href: "https://standbyhouse.com/products/standby-emergency-radio" },
    { name: "20,000 mAh USB-C Power Bank", price: "€39.90", href: "https://standbyhouse.com/products/standby-power-bank" }
  ];

  var menu = document.querySelector(".menu-btn");
  var drawer = document.getElementById("drawer");
  function closeDrawer() {
    drawer.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }
  menu.addEventListener("click", function () {
    var open = !drawer.classList.contains("open");
    drawer.classList.toggle("open", open);
    menu.setAttribute("aria-expanded", open ? "true" : "false");
  });
  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });
  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 981px)").matches) closeDrawer();
  });

  var searchBtn = document.getElementById("search-open");
  var panel = document.getElementById("search");
  var input = document.getElementById("q");
  var hits = document.getElementById("hits");
  searchBtn.addEventListener("click", function () {
    var open = !panel.classList.contains("open");
    panel.classList.toggle("open", open);
    searchBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) input.focus();
  });

  function render(list) {
    hits.innerHTML = "";
    list.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.name + " — " + item.price;
      li.appendChild(a);
      hits.appendChild(li);
    });
  }

  function matches(name, q) {
    return q.split(/\s+/).every(function (word) { return name.indexOf(word) !== -1; });
  }
  panel.addEventListener("submit", function (event) {
    event.preventDefault();
    var first = hits.querySelector("a");
    if (first) window.location.href = first.href;
  });
  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();
    if (!q) { hits.innerHTML = ""; return; }
    render(products.filter(function (p) { return matches(p.name.toLowerCase(), q); }));
  });
})();
