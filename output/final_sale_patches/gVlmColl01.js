
/* Collection color swatches — update card image + links */
(function(){
  document.addEventListener('click', function(e){
    var btn = e.target.closest('[data-vlm-color-swatch]');
    if(!btn) return;
    e.preventDefault();
    var card = btn.closest('.vlm-gp-card');
    if(!card) return;
    var group = btn.closest('.vlm-gp-swatches');
    if(group){
      group.querySelectorAll('[data-vlm-color-swatch]').forEach(function(b){
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed','false');
      });
    }
    btn.classList.add('is-active');
    btn.setAttribute('aria-pressed','true');
    var imgUrl = btn.getAttribute('data-image');
    var linkUrl = btn.getAttribute('data-url');
    var img = card.querySelector('.vlm-gp-card-image img');
    if(img && imgUrl){
      // Clear responsive attrs first — browsers prefer srcset over src.
      img.removeAttribute('srcset');
      img.removeAttribute('sizes');
      img.src = imgUrl;
    }
    if(linkUrl){
      card.querySelectorAll('a.vlm-gp-card-image, .vlm-gp-card-info h2 a, a.vlm-gp-explore').forEach(function(a){
        a.setAttribute('href', linkUrl);
      });
    }
  });
})();

/* Noble Meridian — fill visitor city + local Black Friday deadline */
(function () {
  var END = new Date('2026-11-30T23:59:00+00:00');
  var FALLBACK = 'your area';

  function localDeadline() {
    try {
      return new Intl.DateTimeFormat(undefined, {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      }).format(END);
    } catch (e) {
      return '30 Nov, 23:59';
    }
  }

  function apply(city) {
    var c = (city || FALLBACK).trim() || FALLBACK;
    document.querySelectorAll('.nm-geo-city').forEach(function (el) {
      el.textContent = c;
    });
    document.querySelectorAll('.nm-geo-deadline').forEach(function (el) {
      el.textContent = localDeadline();
    });
    document.documentElement.setAttribute('data-nm-geo-resolved', c);
  }

  function fromGeoJson(d) {
    if (!d || typeof d !== 'object') return '';
    return (d.city || d.region || d.country || d.country_name || '').trim();
  }

  if (!document.querySelector('.nm-geo-city, .nm-geo-deadline')) return;

  apply(FALLBACK);

  var pending = 2;
  var found = false;

  function settle(city) {
    if (found) return;
    if (city) {
      found = true;
      apply(city);
      return;
    }
    pending -= 1;
    if (pending <= 0) apply(FALLBACK);
  }

  function get(url, parse) {
    fetch(url, { credentials: 'omit' })
      .then(function (r) {
        if (!r.ok) throw new Error('geo');
        return r.json();
      })
      .then(function (d) {
        settle(parse(d));
      })
      .catch(function () {
        settle('');
      });
  }

  get('https://get.geojs.io/v1/ip/geo.json', fromGeoJson);
  get('https://ipwho.is/', function (d) {
    return d && d.success !== false ? fromGeoJson(d) : '';
  });
})();
