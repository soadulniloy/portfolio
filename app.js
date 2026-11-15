const S=window.SITE,$=(s,r=document)=>r.querySelector(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const img=(src,alt,cls="")=>src?`<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" class="${cls}" onerror="this.remove()">`:"";
const chips=a=>(a||[]).map(t=>`<span class="chip">${esc(t)}</span>`).join("");
const vt=fn=>{const r=matchMedia("(prefers-reduced-motion:reduce)").matches;document.startViewTransition&&!r?document.startViewTransition(fn):fn()};
const sec=(id,title,html)=>`<section id="${id}"><h2>${title}</h2>${html}</section>`;
const L=S.links, cv=L.resume?`<a class="btn" href="${L.resume}" download>Download CV</a>`:"";
let out=`<section class="hero" id="home"><div><p class="role mono">&gt; ${esc(S.title)}</p><h1>${esc(S.name.replace("MD.","Md."))}</h1><p class="tag">${esc(S.tagline)}</p>
<div class="btns"><a class="btn p" href="#projects">Explore My Work</a><a class="btn" href="#research">View Research</a>${cv}<a class="btn" href="#contact">Contact Me</a></div>
<div class="stats">${S.stats.map(s=>`<div class="stat"><b>${esc(s[0])}</b><span>${esc(s[1])}</span></div>`).join("")}</div></div>
<div class="ph">${img(S.portrait,S.name)}</div></section>`;
out+=sec("about","About",`<div class="about">${S.about.map(p=>`<p>${esc(p)}</p>`).join("")}</div>`);
out+=sec("education","Education",`<div class="tl">${S.education.map(e=>`<div class="it card"><div class="box"><div><span class="when mono">${esc(e.when)}</span><h3>${esc(e.title)}</h3><div class="org">${esc(e.org)}</div><p>${esc(e.note||"")}</p>
${e.courses?`<table>${e.courses.map(c=>`<tr><td>${c[0]}</td><td>${esc(c[1])}</td></tr>`).join("")}</table>`:""}${e.link?`<p><a href="${L[e.link[1]]}" target="_blank" rel="noopener">${e.link[0]}</a></p>`:""}</div>${img(e.image,e.org)}</div></div>`).join("")}</div>`);
out+=sec("experience","Experience",S.experience.map(e=>`<div class="card" style="padding:22px"><span class="when mono">${esc(e.when)}</span><h3>${esc(e.role)}</h3><div class="org">${esc(e.org)}</div><ul style="margin:12px 0 12px 20px;color:#c4d8ec">${e.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>${chips(e.skills)}</div>`).join(""));
out+=sec("skills","Skills",`<div class="skills">${Object.entries(S.skills).map(([k,v])=>`<div class="card"><h3 class="mono">${esc(k)}</h3>${chips(v)}</div>`).join("")}</div>`);
const cats=["All",...new Set(S.projects.map(p=>p.cat))];
out+=sec("projects","Projects",`<div class="filters" id="flt">${cats.map((c,i)=>`<button class="${i?"":"on"}">${esc(c)}</button>`).join("")}</div><div class="grid" id="pg"></div>`);
out+=sec("research","Research",S.research.map(r=>`<div class="card rs"><span class="when mono">${esc(r.venue)}</span><h3>${esc(r.title)}</h3><div class="org">${esc(r.domain)}</div>${r.doi?`<p style="margin-top:10px"><a href="${r.doi}" target="_blank" rel="noopener">DOI: ${r.doi.replace("https://doi.org/","")}</a></p>`:""}${r.abstract?`<details><summary>Read abstract</summary><p>${esc(r.abstract)}</p></details>`:""}</div>`).join(""));
out+=sec("achievements","Achievements",`<div class="two">${S.achievements.map(a=>`<div class="card">${img(a.image,a.t,"")}<div style="padding:18px"><h3>${esc(a.t)}</h3><p>${esc(a.d)}</p></div></div>`).join("")}</div>`);
out+=sec("leadership","Leadership",`<div class="two">${S.leadership.map(a=>`<div class="card"><h3>${esc(a.role)}</h3><p>${esc(a.org)} ${esc(a.when)}</p></div>`).join("")}</div>`);
out+=sec("business","Niloy's Digital Solutions",`<div class="card" style="padding:22px"><p style="margin-bottom:12px;color:#c4d8ec">Digital solutions and technology services.</p>${chips(S.business.services)}</div>`);
out+=sec("karate","Karate",`<p style="margin-bottom:16px;color:#c4d8ec;max-width:46em">Competition, international championship experience and leadership as President of the DIU Karate-Do Club.</p><div class="gal" id="kg"></div>`);
out+=sec("beyond","Beyond the Keyboard",`<div class="two">${S.beyond.map(b=>`<div class="card"><h3>${esc(b[0])}</h3><p>${esc(b[1])}</p></div>`).join("")}</div>`);
out+=(S.extraSections||[]).map(x=>sec(x.id,x.title,(x.intro?`<p style="margin-bottom:16px;color:#c4d8ec;max-width:46em">${esc(x.intro)}</p>`:"")+`<div class="two">${(x.cards||[]).map(c=>`<div class="card">${img(c.image,c.t)}<div style="padding:18px"><h3>${esc(c.t)}</h3><p>${esc(c.d||"")}</p>${c.link?`<p><a href="${c.link[1]}" target="_blank" rel="noopener">${esc(c.link[0])}</a></p>`:""}</div></div>`).join("")}</div>`)).join("");
out+=sec("gallery","Gallery",`<div class="filters" id="gf"></div><div class="gal" id="gal"></div>`);
out+=sec("contact","Contact",`<p style="margin-bottom:16px;color:#c4d8ec">Email <a href="mailto:${S.email}">${S.email}</a>${L.linkedin?` · <a href="${L.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`:""}${L.github?` · <a href="${L.github}" target="_blank" rel="noopener">GitHub</a>`:""}</p>
<form class="cf" id="cf"><input name="n" placeholder="Your name" required><input name="e" type="email" placeholder="Your email" required><textarea name="m" rows="5" placeholder="Message" required></textarea><button class="btn p">Send message</button></form>`);
$("#app").innerHTML=out+`<footer class="mono">© ${new Date().getFullYear()} ${esc(S.name)}</footer>`;
// nav
const ids=[...document.querySelectorAll("section[id]")].filter(s=>s.id!=="business");
$("#links").innerHTML=ids.map(s=>`<a href="#${s.id}">${s.querySelector("h2")?s.querySelector("h2").firstChild.textContent:"Home"}</a>`).join("");
$("#burger").onclick=()=>$("#links").classList.toggle("open");$("#links").onclick=()=>$("#links").classList.remove("open");
new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&document.querySelectorAll("#links a").forEach(a=>a.classList.toggle("on",a.hash==="#"+e.target.id))),{rootMargin:"-45% 0px -50%"}).observe&&ids.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&document.querySelectorAll("#links a").forEach(a=>a.classList.toggle("on",a.hash==="#"+s.id))),{rootMargin:"-45% 0px -50%"}).observe(s));
// projects + morph
const pg=$("#pg"),ov=$("#ov"),md=$("#md");
function drawP(cat){pg.innerHTML=S.projects.filter(p=>cat==="All"||p.cat===cat).map(p=>`<button class="card pc" data-id="${p.id}">${img(p.image,p.title)}<span class="feat mono">${p.featured?"Featured · ":""}${esc(p.cat)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div>${chips(p.tags)}</div></button>`).join("")}
drawP("All");
$("#flt").onclick=e=>{if(e.target.tagName!=="BUTTON")return;document.querySelectorAll("#flt button").forEach(b=>b.classList.toggle("on",b===e.target));vt(()=>drawP(e.target.textContent))};
let from=null;
pg.onclick=e=>{const c=e.target.closest(".pc");if(!c)return;const p=S.projects.find(x=>x.id===c.dataset.id);from=c;
 const open=()=>{c.style.viewTransitionName="";md.innerHTML=`<button class="x" aria-label="Close">×</button>${img(p.image,p.title)}<span class="feat mono">${esc(p.cat)}</span><h3>${esc(p.title)}</h3><p>${esc(p.body||p.summary)}</p><div>${chips(p.tags)}</div><div class="btns">${(p.links||[]).map(l=>`<a class="btn p" href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`).join("")}</div>`;ov.hidden=false;$(".x",md).focus()};
 c.style.viewTransitionName="proj";vt(open)};
function closeP(){vt(()=>{ov.hidden=true;if(from)from.style.viewTransitionName="proj"});setTimeout(()=>{if(from)from.style.viewTransitionName="";from=null},600)}
ov.onclick=e=>{if(e.target===ov||e.target.classList.contains("x"))closeP()};
// gallery + lightbox
const lb=$("#lb"),li=$("#li"),lc=$("#lc");let list=[],gi=0;
const gimg=g=>`<button aria-label="${esc(g[1])}"><img src="${esc(g[0])}" alt="${esc(g[1])}" loading="lazy" onerror="this.closest('button').remove()"></button>`;
const show=i=>{gi=(i+list.length)%list.length;li.src=list[gi][0];li.alt=list[gi][1];lc.textContent=list[gi][1]};
function wire(box){box.onclick=e=>{const b=e.target.closest("button");if(!b)return;const ims=[...box.querySelectorAll("button img")];list=ims.map(x=>[x.getAttribute("src"),x.alt]);const im=b.querySelector("img");im.style.viewTransitionName="lbimg";vt(()=>{im.style.viewTransitionName="";show(ims.indexOf(im));lb.hidden=false})}}
const drawG=c=>{$("#gal").innerHTML=S.gallery.filter(g=>c==="All"||g[2]===c).map(gimg).join("")};
const gc=["All",...new Set(S.gallery.map(g=>g[2]))];
$("#gf").innerHTML=gc.map((c,i)=>`<button class="${i?"":"on"}">${esc(c)}</button>`).join("");
$("#gf").onclick=e=>{if(e.target.tagName!=="BUTTON")return;document.querySelectorAll("#gf button").forEach(b=>b.classList.toggle("on",b===e.target));vt(()=>drawG(e.target.textContent))};
drawG("All");wire($("#gal"));
const kar=S.gallery.filter(g=>g[2]==="Karate");$("#kg").innerHTML=kar.map(gimg).join("");wire($("#kg"));
const closeL=()=>vt(()=>{lb.hidden=true});
lb.onclick=e=>{if(e.target===lb)closeL()};$("#lx").onclick=closeL;
$("#lp").onclick=()=>vt(()=>show(gi-1));$("#ln").onclick=()=>vt(()=>show(gi+1));
addEventListener("keydown",e=>{if(!ov.hidden&&e.key==="Escape")closeP();if(!lb.hidden){if(e.key==="Escape")closeL();if(e.key==="ArrowLeft")show(gi-1);if(e.key==="ArrowRight")show(gi+1)}});
// contact (mailto: কোনো backend লাগে না)
$("#cf").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);location.href=`mailto:${S.email}?subject=${encodeURIComponent("Portfolio message from "+f.get("n"))}&body=${encodeURIComponent(f.get("m")+"\n\n"+f.get("e"))}`};
// empty section hide
document.querySelectorAll("section").forEach(s=>{if((s.id==="gallery"&&!S.gallery.length)||(s.id==="karate"&&!kar.length))s.hidden=true});
