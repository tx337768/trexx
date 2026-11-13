/* Noble Meridian — fill visitor city + local Black Friday deadline */
(function () {
  var END = new Date('2026-11-30T23:59:00+00:00'); // sale end (absolute)
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
    document.querySelectorAll('.nm-geo-city,[data-nm-geo-city]').forEach(function (el) {
      el.textContent = c;
    });
    document.querySelectorAll('.nm-geo-deadline,[data-nm-geo-deadline]').forEach(function (el) {
      el.textContent = localDeadline();
    });
    document.documentElement.setAttribute('data-nm-geo-city', c);
  }

  function fromGeoJson(d) {
    if (!d || typeof d !== 'object') return '';
    return d.city || d.region || d.country || d.country_name || '';
  }

  apply(FALLBACK);

  var controllers = [];
  function get(url) {
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    if (ctrl) controllers.push(ctrl);
    return fetch(url, {
      credentials: 'omit',
      signal: ctrl && ctrl.signal
    }).then(function (r) {
      if (!r.ok) throw new Error('geo');
      return r.json();
    });
  }

  Promise.race([
    get('https://get.geojs.io/v1/ip/geo.json').then(fromGeoJson),
    get('https://ipwho.is/').then(function (d) {
      return d && d.success !== false ? fromGeoJson(d) : '';
    })
  ])
    .then(function (city) {
      controllers.forEach(function (c) {
        try {
          c.abort();
        } catch (e) {}
      });
      apply(city || FALLBACK);
    })
    .catch(function () {
      apply(FALLBACK);
    });
})();
