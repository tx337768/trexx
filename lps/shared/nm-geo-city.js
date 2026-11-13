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
    // Classes only — never [data-nm-geo-city] (that matched <html> and wiped the page)
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

  // First non-empty success wins; empty/fail from one provider does not cancel the other
  get('https://get.geojs.io/v1/ip/geo.json', fromGeoJson);
  get('https://ipwho.is/', function (d) {
    return d && d.success !== false ? fromGeoJson(d) : '';
  });
})();
