
        try {
          (()=>{document.querySelectorAll('[data-vlm-gp-end]').forEach(el=>{const end=Date.parse(el.dataset.vlmGpEnd);const out=el.querySelector('.vg-countdown');const tick=()=>{const left=end-Date.now();if(left<=0){el.hidden=true;return;}const s=Math.floor(left/1000);if(out)out.textContent=`${Math.floor(s/86400)}d : ${String(Math.floor(s%86400/3600)).padStart(2,'0')}h : ${String(Math.floor(s%3600/60)).padStart(2,'0')}m : ${String(s%60).padStart(2,'0')}s`;};tick();setInterval(tick,1000);});})();;(()=>{const tick=()=>{const d=Math.max(0,Date.parse('2026-10-31T14:59:00Z')-Date.now());document.querySelectorAll('#vlm-countdown,#vlm-countdown-2').forEach(e=>e.textContent=d?Math.floor(d/86400000)+'d '+Math.floor(d%86400000/3600000)+'h '+Math.floor(d%3600000/60000)+'m':'The extra savings have ended')};tick();setInterval(tick,1000)})();;(()=>{let e=document.querySelector("link[rel~=icon]");if(!e){e=document.createElement("link");e.rel="icon";document.head.appendChild(e)}e.href="https://cdn.shopify.com/s/files/1/0811/8239/2552/files/noble-meridian-logo.png?v=1792820935";})();
        } catch(err){}
      
(()=>{
 if(window.__nmReferenceUI)return;window.__nmReferenceUI=true;
 const lang=(document.documentElement.lang||'en').split('-')[0];
 const copy=({en:{color:'COLOR',size:'SIZE',sole:'SOLE',find:'Find my size',choose:'Choose your size before it’s gone.',urgency:'FINAL SALE · YOUR NEXT PAIR IS HERE',body:'Popular sizes can sell out. Choose your colour and size, then make your pair yours.',shop:'Shop Final Sale',reviews:'Reviews'},de:{color:'FARBE',size:'GRÖSSE',sole:'SOHLE',find:'Meine Größe finden',choose:'Wähle deine Größe, bevor sie vergriffen ist.',urgency:'FINAL SALE · DEIN NÄCHSTES PAAR WARTET',body:'Beliebte Größen können ausverkauft sein. Wähle Farbe und Größe und sichere dir dein Paar.',shop:'Final Sale entdecken',reviews:'Reviews'},es:{color:'COLOR',size:'TALLA',sole:'SUELA',find:'Encuentra tu talla',choose:'Elige tu talla antes de que se agote.',urgency:'FINAL SALE · TU PRÓXIMO PAR ESTÁ AQUÍ',body:'Las tallas más buscadas pueden agotarse. Elige tu color y talla y hazte con tu par.',shop:'Comprar Final Sale',reviews:'Reviews'},fr:{color:'COULEUR',size:'POINTURE',sole:'SEMELLE',find:'Trouver ma pointure',choose:'Choisissez votre pointure avant qu’elle ne soit épuisée.',urgency:'FINAL SALE · VOTRE PROCHAINE PAIRE EST ICI',body:'Les pointures les plus demandées peuvent s’épuiser. Choisissez votre couleur et votre pointure, puis commandez votre paire.',shop:'Découvrir Final Sale',reviews:'Reviews'}})[lang]||{color:'COLOR',size:'SIZE',sole:'SOLE',find:'Find my size',choose:'Choose your size before it’s gone.',urgency:'FINAL SALE · YOUR NEXT PAIR IS HERE',body:'Popular sizes can sell out. Choose your colour and size, then make your pair yours.',shop:'Shop Final Sale',reviews:'Reviews'};
 const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const country=()=>document.querySelector('[data-nm-country]')?.dataset.nmCountry||document.querySelector('select[name="country_code"]')?.value||'US';
 const system=()=>['US','CA','MX'].includes(country())?'US':country()==='GB'?'UK':'EU';
 function sizeLabel(value){
  const sys=system(),m=value.match(new RegExp(sys+'\\s*([0-9.]+)','i'));if(m)return m[1]+' '+sys;
  const row=[...document.querySelectorAll('#PrSizeDialog tbody tr')].find(r=>norm(r.cells[0]?.textContent)===norm(value));
  const cell=row?.cells[sys==='UK'?2:sys==='US'?3:1];if(cell&&/^[0-9.]+$/.test(cell.textContent.trim()))return cell.textContent.trim()+' '+sys;
  return value;
 }
 const colors={black:'#000000',bordeaux:'#850000',burgundy:'#6c2830',brown:'#51200d',oak:'#703a2e',tan:'#964a2b',sand:'#c9b28e',chestnut:'#8f4c2d',chocolate:'#38251e',walnut:'#69422e',navy:'#18263c',blue:'#344860',grey:'#8b8c8b',gray:'#8b8c8b',white:'#f7f7f2',olive:'#626045',cognac:'#9b582c',beige:'#cbbd9f',peru:'#a87548',maroon:'#69222b',taupe:'#9e9383',cream:'#e6ddc7'};
 function canonical(select,value){try{const data=JSON.parse(select.closest('gp-product-variants').querySelector('script[gp-data]').textContent);const idx=data.optionsWithValues.findIndex(o=>o.name===select.name);const v=data.variants.find(v=>v.options[idx]===value);return v?.featured_image?.src?.match(/color_(.+?)_\d+_/i)?.[1]?.replaceAll('_',' ')||value;}catch{return value;}}
 let busy=false;
 function refresh(){
  if(busy)return;busy=true;const wordmark=document.querySelector('.vg-wordmark b');if(wordmark&&wordmark.textContent!=='Noble Meridian')wordmark.textContent='Noble Meridian';
  document.querySelectorAll('gp-product-variants select').forEach(select=>{
   const name=norm(select.name);const kind=/color|colour|farbe|couleur/.test(name)?'color':/size|grosse|große|pointure|talla|taille/.test(name)?'size':/sole|sohle|semelle|suela/.test(name)?'sole':null;if(!kind)return;
   const field=select.closest('[option-name]')||select.parentElement;field.classList.add('nm-reference-field');field.dataset.nmKind=kind;
   let ui=field.querySelector('.nm-reference-options');
   if(!ui){
    ui=document.createElement('div');ui.className='nm-reference-options';ui.innerHTML='<div class="nm-ref-option-head"><span class="nm-ref-option-label"></span><span class="nm-ref-option-selected"></span></div><div class="nm-ref-option-grid" role="listbox"></div>';field.append(ui);
    ui.querySelector('.nm-ref-option-grid').addEventListener('click',e=>{const b=e.target.closest('[data-nm-option]');if(!b||b.disabled)return;select.value=b.dataset.nmOption;select.dispatchEvent(new Event('input',{bubbles:true}));select.dispatchEvent(new Event('change',{bubbles:true}));refresh();});
    select.addEventListener('change',()=>queueMicrotask(refresh));
   }
   const label=ui.querySelector('.nm-ref-option-label'),head=ui.querySelector('.nm-ref-option-selected'),grid=ui.querySelector('.nm-ref-option-grid');
   const order=kind==='color'?'01':kind==='sole'?'02':select.closest('gp-product-variants').querySelectorAll('select').length>2?'03':'02';
   const nextLabel=order+' — '+copy[kind];if(label.textContent!==nextLabel)label.textContent=nextLabel;
   const selected=kind==='size'?sizeLabel(select.value):select.selectedOptions[0]?.textContent||select.value;
   let val=head.querySelector('b');if(!val){val=document.createElement('b');head.append(val);}if(val.textContent!==selected)val.textContent=selected;
   if(kind==='size'&&!head.querySelector('button')){const dialog=document.querySelector('#PrSizeDialog');if(dialog)ui.append(dialog);const b=document.createElement('button');b.type='button';b.className='nm-find-size';b.textContent=copy.find+' ↗';b.addEventListener('click',()=>document.querySelector('#PrSizeDialog')?.showModal());head.append(b);}
   grid.setAttribute('aria-label',copy[kind]);
   [...select.options].forEach((option,i)=>{
    let b=grid.children[i];if(!b){b=document.createElement('button');b.type='button';b.setAttribute('role','option');grid.append(b);}
    const text=kind==='size'?sizeLabel(option.value):option.textContent.trim();if(b.dataset.nmOption!==option.value)b.dataset.nmOption=option.value;
    if(b.getAttribute('aria-label')!==text)b.setAttribute('aria-label',text);const selected=String(select.value===option.value);if(b.getAttribute('aria-selected')!==selected)b.setAttribute('aria-selected',selected);
    b.disabled=select.disabled||option.disabled||option.dataset.gpOptionAvailable==='false';
    if(kind==='color'){
     const key=norm(canonical(select,option.value)),color=colors[key]||Object.entries(colors).find(([k])=>key.includes(k))?.[1];
     if(color&&b.style.backgroundColor!==color){b.style.backgroundColor=color;b.style.setProperty('--nm-swatch',color);}
     if(!color&&!b.querySelector('img')){try{const data=JSON.parse(select.closest('gp-product-variants').querySelector('script[gp-data]').textContent);const v=data.variants.find(v=>v.options.includes(option.value));if(v?.featured_image?.src){const im=document.createElement('img');im.src=v.featured_image.src;im.alt='';b.append(im);}}catch{}}
    }else if(b.textContent!==text)b.textContent=text;
   });while(grid.children.length>select.options.length)grid.lastElementChild.remove();
  });
  const vf=document.querySelector('gp-product-variants');if(vf){const sole=vf.querySelector('[data-nm-kind=sole]'),size=vf.querySelector('[data-nm-kind=size]');if(sole&&size&&sole.parentElement===size.parentElement&&sole.nextElementSibling!==size)size.before(sole);}
  const title=document.querySelector('gp-product-title h1')||document.querySelector('.product-info h1');
  if(title){const clean=title.textContent.trim().replace(/^Noble Meridian\s+/i,'');if(title.textContent.trim()!==clean)title.textContent=clean;
   const host=title.closest('gp-product-title')||title.parentElement;
   if(!host.previousElementSibling?.classList.contains('nm-product-breadcrumb')){const nav=document.createElement('nav');nav.className='nm-product-breadcrumb';const labels=({de:['Startseite','Schuhe'],es:['Inicio','Calzado'],fr:['Accueil','Chaussures']})[lang]||['Home','Footwear'];const root=window.Shopify?.routes?.root||'/';nav.innerHTML='<a href="'+root+'">'+labels[0]+'</a> / <a href="'+root+'collections/final-sale">'+labels[1]+'</a>';host.before(nav);}
   const material=[...document.querySelectorAll('.nmr-material-text h3')].map(x=>x.textContent.trim()).find(t=>/calfskin|full.grain|suede|leather|kalbsleder|vollnarben|wildleder|cuero|ante|daim|cuir/i.test(t)&&!/(sole|sohle|semelle|suela)/i.test(t));if(material&&!title.parentElement.querySelector('.nm-product-material')){const p=document.createElement('p');p.className='nm-product-material';p.textContent=material;title.after(p);}
  }
  const rating=document.querySelector('.nm-title-reviews');if(title&&rating){if(rating.nextElementSibling!==title)title.before(rating);const total=rating.querySelector('[data-nm-review-total]');if(total){const n=total.textContent.match(/\d[\d.,]*/)?.[0];const t=(n?n+' ':'')+copy.reviews;if(total.textContent!==t)total.textContent=t;}rating.removeAttribute('aria-label');}
  const reviewImages=document.querySelectorAll('.nm-gallery-grid [data-nm-photo]');reviewImages.forEach(el=>{if(!el.hidden&&el.querySelector('img')&&!el.dataset.nmStyled)el.dataset.nmStyled='true';});
  const final=document.querySelector('[data-nmr-edit]');
  if(final&&!final.dataset.nmUrgency){final.dataset.nmUrgency='true';final.innerHTML='<div class="nm-urgency-panel"><p>'+copy.urgency+'</p><h2>'+copy.choose+'</h2><p>'+copy.body+'</p><a href="'+(window.Shopify?.routes?.root||'/')+'collections/final-sale">'+copy.shop+'</a></div>';}
  busy=false;
 }
 function start(){document.addEventListener('click',e=>{if(e.target.closest('.nm-find-size')){e.preventDefault();e.stopImmediatePropagation();const d=document.getElementById('PrSizeDialog');if(d&&!d.open)d.showModal();}if(e.target.closest('.pr-size-close')){const d=document.getElementById('PrSizeDialog');if(d&&d.open)d.close();}},true);refresh();let scheduled=false;new MutationObserver(()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;refresh();});}).observe(document.body,{childList:true,subtree:true});}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();

(()=>{
if(window.__nmNavigationFixed)return;window.__nmNavigationFixed=true;
function setup(){
const header=document.querySelector('.vg-header');if(!header||header.dataset.nmNavigationReady)return;header.dataset.nmNavigationReady='true';
const desktop=[...header.querySelectorAll('.vg-desktop-nav details')],mobile=header.querySelector('.vg-mobile-menu');let last=null;
function closeDesktop(except=null){desktop.forEach(d=>{if(d!==except)d.open=false;});}
function closeMobile(){if(mobile)mobile.open=false;}
desktop.forEach((d,i)=>{
const s=d.querySelector('summary'),panel=d.querySelector('div');if(!s||!panel)return;
panel.id='NmHeaderSubmenu'+i;s.setAttribute('aria-controls',panel.id);s.setAttribute('aria-expanded',String(d.open));
d.addEventListener('toggle',()=>{s.setAttribute('aria-expanded',String(d.open));if(d.open){last=d;closeDesktop(d);closeMobile();}});
s.addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();closeDesktop(d);d.open=true;last=d;const links=[...panel.querySelectorAll('a')];(e.key==='ArrowUp'?links.at(-1):links[0])?.focus();}});
});
if(mobile)mobile.addEventListener('toggle',()=>{mobile.querySelector('summary')?.setAttribute('aria-expanded',String(mobile.open));if(mobile.open)closeDesktop();});
header.addEventListener('click',e=>{const s=e.target.closest('.vg-desktop-nav summary');if(s){const d=s.closest('details');last=d;closeDesktop(d);}},true);
document.addEventListener('click',e=>{if(!e.target.closest('.vg-desktop-nav details'))closeDesktop();if(!e.target.closest('.vg-mobile-menu'))closeMobile();},true);
document.addEventListener('focusin',e=>{if(!e.target.closest('.vg-desktop-nav details'))closeDesktop();if(!e.target.closest('.vg-mobile-menu'))closeMobile();});
document.addEventListener('keydown',e=>{
if(e.key!=='Escape'||document.querySelector('dialog[open]'))return;
const active=desktop.find(d=>d.open)||((mobile?.open)?mobile:null);if(!active)return;
e.preventDefault();e.stopPropagation();closeDesktop();closeMobile();(active||last)?.querySelector('summary')?.focus();
},true);
window.matchMedia('(max-width:900px)').addEventListener('change',()=>{closeDesktop();closeMobile();});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
new MutationObserver(setup).observe(document.documentElement,{childList:true,subtree:true});
})();
