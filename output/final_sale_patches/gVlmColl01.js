
(function(){
  var END=new Date('2026-11-30T23:59:00+00:00');
  function pad(n){return String(n).padStart(2,'0');}
  function tick(){
    var left=Math.max(0, END-Date.now());
    var s=Math.floor(left/1000);
    var d=Math.floor(s/86400), h=Math.floor((s%86400)/3600), m=Math.floor((s%3600)/60), sec=s%60;
    document.querySelectorAll('[data-nm-t="d"]').forEach(function(el){el.textContent=pad(d);});
    document.querySelectorAll('[data-nm-t="h"]').forEach(function(el){el.textContent=pad(h);});
    document.querySelectorAll('[data-nm-t="m"]').forEach(function(el){el.textContent=pad(m);});
    document.querySelectorAll('[data-nm-t="s"]').forEach(function(el){el.textContent=pad(sec);});
  }
  tick(); setInterval(tick,1000);

  // Funnel / abandonment beacons → GA4 + dataLayer (visible in GA4 DebugView / Explorations)
  function emit(name, params){
    params=params||{};
    params.page_type='collection';
    params.collection='final-sale';
    try{
      if(typeof gtag==='function'){ gtag('event', name, params); }
      window.dataLayer=window.dataLayer||[]; window.dataLayer.push(Object.assign({event:name}, params));
      if(window.Shopify&&Shopify.analytics&&typeof Shopify.analytics.publish==='function'){
        Shopify.analytics.publish(name, params);
      }
    }catch(e){}
  }
  emit('nm_fs_view', {engagement_time_msec:1});
  var marks={25:0,50:0,75:0,90:0};
  window.addEventListener('scroll', function(){
    var h=document.documentElement;
    var pct=Math.round((h.scrollTop/(h.scrollHeight-h.clientHeight))*100)||0;
    Object.keys(marks).forEach(function(k){
      if(!marks[k] && pct>=Number(k)){ marks[k]=1; emit('nm_fs_scroll', {percent:Number(k)}); }
    });
  }, {passive:true});
  document.addEventListener('click', function(e){
    var a=e.target.closest('[data-nm-track]');
    if(!a) return;
    var card=a.closest('[data-nm-product-card]');
    emit('nm_fs_click', {
      click_type:a.getAttribute('data-nm-track'),
      product_handle: card && card.getAttribute('data-handle'),
      product_id: card && card.getAttribute('data-product-id')
    });
  });
  var spent=0;
  setInterval(function(){ spent+=5; if(spent===15||spent===30||spent===60) emit('nm_fs_time', {seconds:spent}); }, 5000);
  document.addEventListener('visibilitychange', function(){
    if(document.visibilityState==='hidden') emit('nm_fs_exit', {seconds:spent, scroll_marks:Object.keys(marks).filter(function(k){return marks[k];}).join(',')});
  });
})();

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
