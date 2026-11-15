const S=window.SITE,$=(s,r=document)=>r.querySelector(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const img=(src,alt)=>src?`<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">`:"";
const tg=a=>(a||[]).map(t=>`<i class="tg">${esc(t)}</i>`).join("");
const vt=fn=>{document.startViewTransition&&!matchMedia("(prefers-reduced-motion:reduce)").matches?document.startViewTransition(fn):fn()};
const sec=(id,t,h,c="")=>`<section id="${id}" class="${c}"><div class="w"><h2>${t}</h2>${h}</div></section>`;
const L=S.links,cv=L.resume?`<a class="btn g" href="${L.resume}" download>Download CV</a>`:"";
let o=`<section class="hero" id="home"><canvas id="cv"></canvas><div class="hin"><p class="clk" id="clk"></p>
<h1><span class="a">Md. Shoadul Islam</span><span class="b">${esc(S.short)}</span></h1><div class="arch">${img(S.profilePhoto,S.name)}</div>
<div class="hl"><p class="role">${esc(S.title)}</p><p class="tag">${esc(S.tagline)}</p><div class="btns"><a class="btn" href="#projects">Explore My Work</a><a class="btn g" href="#research">View Research</a>${cv}<a class="btn g" href="#contact">Contact Me</a></div></div></div>
<div class="stats">${S.stats.map(s=>`<div><b>${esc(s[0])}</b><span>${esc(s[1])}</span></div>`).join("")}</div></section>`;
const mqs=["Languages","Frontend","Backend","AI / ML","IoT"].flatMap(k=>S.skills[k]||[]);
const mqh=mqs.map(x=>`<span>${esc(x)}</span><i>+</i>`).join("");o+=`<div class="mq" aria-hidden="true"><div class="tr">${mqh}${mqh}</div></div>`;
o+=sec("about","About",`<div class="ab">${img(S.portrait,S.name)}<div><p class="lead">${esc(S.about[0])}</p>${S.about.slice(1).map(p=>`<p>${esc(p)}</p>`).join("")}</div></div>`,"ice");
o+=sec("education","Education",S.education.map(e=>`<div class="row"><div class="yr">${esc(e.when)}</div><div><h3>${esc(e.title)}</h3><div class="o">${esc(e.org)}</div><p>${esc(e.note||"")}</p>${e.courses?`<table>${e.courses.map(c=>`<tr><td>${c[0]}</td><td>${esc(c[1])}</td></tr>`).join("")}</table>`:""}${e.link?`<p><a href="${L[e.link[1]]}" target="_blank" rel="noopener">${e.link[0]}</a></p>`:""}</div><div>${img(e.image,e.org)}</div></div>`).join(""));
o+=sec("experience","Experience",S.experience.map(e=>`<div class="pn"><p class="yr">${esc(e.when)}</p><h3 style="font-size:34px;margin:8px 0">${esc(e.role)}</h3><p style="opacity:.7">${esc(e.org)}</p><ul style="margin:14px 0 16px 20px">${e.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>${tg(e.skills)}</div>`).join(""),"ice");
o+=sec("skills","Skills",Object.entries(S.skills).map(([k,v])=>`<div class="sk"><h3>${esc(k)}</h3><div>${v.map(x=>`<span>${esc(x)}</span>`).join(" ")}</div></div>`).join(""));
o+=sec("projects","Projects",`<div class="slices" id="sl">${S.projects.map((p,i)=>`<article class="sl${i?"":" on"}" data-id="${p.id}" tabindex="0" aria-label="${esc(p.title)}"><div class="rail"><b>${esc(p.title)}</b><small>${esc(p.cat)}</small></div><div class="pane"><small>${p.featured?"Featured · ":""}${esc(p.cat)}</small><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div>${tg(p.tags)}</div><div class="btns"><button class="btn open">Open project</button></div></div></article>`).join("")}</div>`,"ice");
o+=sec("research","Research",S.research.map(r=>`<div class="pn rs ch"><small>${esc(r.venue)}</small><h3>${esc(r.title)}</h3><p style="opacity:.75">${esc(r.domain)}</p>${r.doi?`<p style="margin-top:14px"><a class="btn" href="${r.doi}" target="_blank" rel="noopener">DOI ${r.doi.replace("https://doi.org/","")}</a></p>`:""}${r.abstract?`<details><summary>Read abstract</summary><p>${esc(r.abstract)}</p></details>`:""}</div>`).join(""),"dk");
o+=sec("achievements","Achievements",`<div class="g3">${S.achievements.map(a=>`<div class="pn">${img(a.image,a.t)}<h3>${esc(a.t)}</h3><p>${esc(a.d)}</p></div>`).join("")}</div>`);
o+=sec("leadership","Leadership",`<div class="g3">${S.leadership.map(a=>`<div class="pn"><h3>${esc(a.role)}</h3><p>${esc(a.org)} ${esc(a.when)}</p></div>`).join("")}</div>`,"ice");
o+=sec("business","Niloy's Digital Solutions",`<p style="max-width:40em;font-size:22px;margin-bottom:26px">Digital solutions and technology services.</p>${S.business.services.map(x=>`<div class="sk" style="grid-template-columns:1fr"><h3 style="font-size:clamp(24px,4vw,44px)">${esc(x)}</h3></div>`).join("")}`);
o+=sec("karate","Karate",`<p style="max-width:44em;margin-bottom:24px">Competition, international championship experience and leadership as President of the DIU Karate-Do Club.</p><div class="gal" id="kg"></div>`,"ice");
o+=sec("beyond","Beyond the Keyboard",`<div class="g3">${S.beyond.map(b=>`<div class="pn"><h3>${esc(b[0])}</h3><p>${esc(b[1])}</p></div>`).join("")}</div>`);
o+=(S.extraSections||[]).map(x=>sec(x.id,x.title,(x.intro?`<p style="margin-bottom:20px;max-width:46em">${esc(x.intro)}</p>`:"")+`<div class="g3">${(x.cards||[]).map(c=>`<div class="pn">${img(c.image,c.t)}<h3>${esc(c.t)}</h3><p>${esc(c.d||"")}</p>${c.link?`<p><a href="${c.link[1]}" target="_blank" rel="noopener">${esc(c.link[0])}</a></p>`:""}</div>`).join("")}</div>`,"ice")).join("");
o+=sec("gallery","Gallery",`<div class="filters" id="gf"></div><div class="gal" id="gal"></div>`,"ice");
o+=sec("contact","Let's build something.",`<p class="big"><a href="mailto:${S.email}">${esc(S.email)}</a></p><p>${L.linkedin?`<a href="${L.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`:""}${L.github?` · <a href="${L.github}" target="_blank" rel="noopener">GitHub</a>`:""}</p>
<form class="cf" id="cf"><input name="n" placeholder="Your name" required><input name="e" type="email" placeholder="Your email" required><textarea name="m" rows="5" placeholder="Message" required></textarea><button class="btn">Send message</button></form>`,"dk");
$("#app").innerHTML=o+`<footer>© ${new Date().getFullYear()} ${esc(S.name)}</footer>`;
// menu
const mn=$("#menu"),mb=$("#mb");
mn.innerHTML=[...document.querySelectorAll("main section[id]")].map(s=>`<a href="#${s.id}">${s.id==="home"?"Home":s.querySelector("h2").textContent}</a>`).join("");
const tgm=f=>{const on=f??!mn.classList.contains("open");mn.classList.toggle("open",on);mb.textContent=on?"Close":"Menu";mb.setAttribute("aria-expanded",on)};
mb.onclick=()=>tgm();mn.onclick=e=>{if(e.target.tagName==="A")tgm(false)};
// clock
const f=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Dhaka",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false});
const tick=()=>$("#clk").textContent="Bangladesh  "+f.format(new Date())+"  UTC+6";tick();setInterval(tick,1000);
// dot field
const cvs=$("#cv"),cx=cvs.getContext("2d");let mx=-999,my=-999,W,H;
const size=()=>{W=cvs.width=cvs.offsetWidth;H=cvs.height=cvs.offsetHeight};size();addEventListener("resize",size);
cvs.parentElement.addEventListener("pointermove",e=>{const r=cvs.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
const draw=()=>{cx.clearRect(0,0,W,H);for(let x=20;x<W;x+=34)for(let y=20;y<H;y+=34){const d=Math.hypot(x-mx,y-my),k=Math.max(0,1-d/190);cx.fillStyle=`rgba(22,133,255,${.2+k*.8})`;cx.beginPath();cx.arc(x,y,1.3+k*4.5,0,6.3);cx.fill()}};
draw();if(!matchMedia("(prefers-reduced-motion:reduce)").matches){const loop=()=>{draw();requestAnimationFrame(loop)};loop()}
// project slices + morph
const sl=$("#sl"),ov=$("#ov"),md=$("#md");let from=null;
sl.onclick=e=>{const c=e.target.closest(".sl");if(!c)return;
 if(e.target.closest(".open")){const p=S.projects.find(x=>x.id===c.dataset.id);from=c;c.style.viewTransitionName="proj";
  vt(()=>{c.style.viewTransitionName="";md.innerHTML=`<button class="x" aria-label="Close">×</button>${img(p.image,p.title)}<small>${esc(p.cat)}</small><h3>${esc(p.title)}</h3><p>${esc(p.body||p.summary)}</p><div>${tg(p.tags)}</div><div class="btns">${(p.links||[]).map(l=>`<a class="btn" href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`).join("")}</div>`;ov.hidden=false;$(".x",md).focus()});return}
 sl.querySelectorAll(".sl").forEach(s=>s.classList.toggle("on",s===c))};
sl.onkeydown=e=>{if(e.key==="Enter"&&e.target.classList.contains("sl"))e.target.click()};
const closeP=()=>{if(from)from.style.viewTransitionName="proj";vt(()=>{ov.hidden=true});setTimeout(()=>{if(from)from.style.viewTransitionName="";from=null},700)};
ov.onclick=e=>{if(e.target===ov||e.target.classList.contains("x"))closeP()};
// gallery + lightbox
const lb=$("#lb"),li=$("#li"),lc=$("#lc");let list=[],gi=0;
const gimg=g=>`<button aria-label="${esc(g[1])}"><img src="${esc(g[0])}" alt="${esc(g[1])}" loading="lazy" onerror="this.closest('button').remove()"></button>`;
const show=i=>{gi=(i+list.length)%list.length;li.src=list[gi][0];li.alt=list[gi][1];lc.textContent=list[gi][1]};
const wire=box=>{box.onclick=e=>{const b=e.target.closest("button");if(!b)return;const ims=[...box.querySelectorAll("button img")];list=ims.map(x=>[x.getAttribute("src"),x.alt]);const im=b.querySelector("img");im.style.viewTransitionName="lbimg";vt(()=>{im.style.viewTransitionName="";show(ims.indexOf(im));lb.hidden=false})}};
const drawG=c=>{$("#gal").innerHTML=S.gallery.filter(g=>c==="All"||g[2]===c).map(gimg).join("")};
$("#gf").innerHTML=["All",...new Set(S.gallery.map(g=>g[2]))].map((c,i)=>`<button class="${i?"":"on"}">${esc(c)}</button>`).join("");
$("#gf").onclick=e=>{if(e.target.tagName!=="BUTTON")return;document.querySelectorAll("#gf button").forEach(b=>b.classList.toggle("on",b===e.target));vt(()=>drawG(e.target.textContent))};
drawG("All");wire($("#gal"));
const kar=S.gallery.filter(g=>g[2]==="Karate");$("#kg").innerHTML=kar.map(gimg).join("");wire($("#kg"));
const closeL=()=>vt(()=>{lb.hidden=true});lb.onclick=e=>{if(e.target===lb)closeL()};$("#lx").onclick=closeL;
$("#lp").onclick=()=>vt(()=>show(gi-1));$("#ln").onclick=()=>vt(()=>show(gi+1));
addEventListener("keydown",e=>{if(e.key==="Escape"){tgm(false);if(!ov.hidden)closeP();if(!lb.hidden)closeL()}if(!lb.hidden){if(e.key==="ArrowLeft")show(gi-1);if(e.key==="ArrowRight")show(gi+1)}});
$("#cf").onsubmit=e=>{e.preventDefault();const d=new FormData(e.target);location.href=`mailto:${S.email}?subject=${encodeURIComponent("Portfolio message from "+d.get("n"))}&body=${encodeURIComponent(d.get("m")+"\n\n"+d.get("e"))}`};
document.querySelectorAll("section").forEach(s=>{if((s.id==="gallery"&&!S.gallery.length)||(s.id==="karate"&&!kar.length))s.hidden=true});
