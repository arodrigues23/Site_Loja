{
const COLORS={Preto:"#0e0e0f",Branco:"#f4f2ec",Verde:"#b6ff1f",Cromo:"#c9ced3",Grafite:"#3a3c40",Oliva:"#6b7046",Areia:"#cdb98f",Vinho:"#7a2232"};
/* Produtos: a loja vende apenas Moletons, Camisetas e Calças. top 1 a 4 aparecem no carrossel. */
const P=[
 {id:1,n:"Moletom Asfalto",c:"Moletons",p:349,col:["Preto","Grafite","Oliva"],img:{Preto:"img/moletom_preto.png",Grafite:"img/moletom_cinza.png",Oliva:"img/moletom_verde.png"},sz:["P","M","G","GG"],top:1,d:"Moletom 480 g/m² com capuz duplo e bolso canguru. A peça que esgota toda coleção.",t:"hoodie"},
 {id:2,n:"Camiseta Faixa",c:"Camisetas",p:129,col:["Branco","Preto","Verde"],img:{Branco:"img/camisa_off_white.png",Preto:"img/camisa_preta.png",Verde:"img/camisa_verde.png"},sz:["P","M","G","GG","XGG"],top:2,d:"Algodão 240 g/m², modelagem boxy e estampa em silk de faixa de pedestre nas costas.",t:"tee"},
 {id:3,n:"Calça Cargo Viaduto",c:"Calças",p:289,col:["Oliva","Preto","Areia"],img:{Oliva:"img/cargo_verde.jpeg",Preto:"img/cargo_preta.jpeg",Areia:"img/cargo_bege.jpeg"},sz:["38","40","42","44","46"],top:3,d:"Sarja pesada, seis bolsos e barra com ajuste em cordão. Feita pra andar o dia todo.",t:"pants"},
 {id:4,n:"Moletom Zíper Breu",c:"Moletons",p:379,col:["Preto","Cromo","Verde"],img:{Cromo:"img/ziper_branco.png",Preto:"img/ziper_preto.png",Verde:"img/ziper_verde.png"},sz:["P","M","G","GG"],top:4,d:"Moletom com zíper inteiro de metal, capuz forrado e punhos canelados.",t:"zip"},
 {id:5,n:"Camiseta Estêncil",c:"Camisetas",p:119,col:["Preto","Grafite","Vinho"],img:{Preto:"img/camisa_2pret.jpeg",Grafite:"img/camisa_2cin.jpeg",Vinho:"img/camisa_2ver.jpeg"},sz:["P","M","G","GG"],top:5,d:"Logo em estêncil no peito, algodão penteado.",t:"tee"},
 {id:7,n:"Calça Jogger Metrô",c:"Calças",p:229,col:["Grafite","Preto"],img:{Grafite:"img/jogger_cinza.jpeg",Preto:"img/jogger_preto.jpeg"},sz:["P","M","G","GG"],top:7,d:"Jogger de moletom com punho na barra.",t:"pants"},
 {id:8,n:"Camiseta Oversized Sé",c:"Camisetas",p:139,col:["Areia","Branco","Oliva"],img:{Areia:"img/oversized_bege.jpeg",Branco:"img/oversized_branca.jpeg",Oliva:"img/oversized_verde.jpeg"},sz:["M","G","GG","XGG"],top:8,d:"Oversized de ombro caído com etiqueta externa.",t:"tee"},
 {id:9,n:"Calça Wide Concreto",c:"Calças",p:259,col:["Cromo","Preto","Areia"],img:{Cromo:"img/wide_branca.jpeg",Preto:"img/wide_preta.jpeg",Areia:"img/wide_bege.jpeg"},sz:["38","40","42","44","46"],top:9,d:"Perna larga em sarja lavada, cintura alta e passantes duplos.",t:"pants"},
 {id:10,n:"Camiseta Vácuo",c:"Camisetas",p:149,col:["Preto","Verde"],img:{Preto:"img/basica_preta.jpeg",Verde:"basica_verde.jpeg"},sz:["P","M","G","GG","XGG"],top:10,d:"Estampa refletiva que aparece só com flash.",t:"tee"},
 {id:11,n:"Moletom Eclipse",c:"Moletons",p:339,col:["Preto","Areia"],img:{Preto:"img/eclipse_preto.png",Areia:"img/eclipse_bege.png"},sz:["P","M","G","GG","XGG"],top:11,d:"Capuz oversized com estampa puff em alto relevo.",t:"hoodie"},
 {id:12,n:"Calça Parachute Sereno",c:"Calças",p:249,col:["Preto","Oliva","Cromo"],img:{Preto:"img/para_preta.jpeg",Oliva:"img/para_verde.jpeg",Cromo:"img/para_branca.jpeg"},sz:["P","M","G","GG"],top:12,d:"Nylon leve com elástico na cintura e na barra.",t:"pants"},
 {id:13,n:"Camiseta Manga Longa Linha",c:"Camisetas",p:159,col:["Branco","Grafite"],img:{Branco:"img/longa_cinza.png",Grafite:"img/longa_preta.jpeg"},sz:["P","M","G","GG"],top:13,d:"Manga longa com texto nas mangas, malha 220 g/m².",t:"tee"},
 {id:14,n:"Moletom Careca Ruído",c:"Moletons",p:299,col:["Cromo","Preto","Vinho"],img:{Cromo:"img/careca_branco.png",Preto:"img/careca_preto.png",Vinho:"img/careca_vermelho.png"},sz:["P","M","G","GG"],top:14,d:"Careca básico em moletom flanelado por dentro.",t:"hoodie"}
];
const ROUTES={moletons:"Moletons",camisetas:"Camisetas",calcas:"Calças"};
const BLURB={Moletons:"Capuz, careca e zíper em algodão pesado.",Camisetas:"Boxy, oversized e manga longa.",Calças:"Cargo, jogger, wide e parachute."};
const FEAT=P.filter(x=>x.top<=4);
const brl=v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));

/* desenhos das peças */
const SHAPES={
 tee:'<path d="M62 42 86 30q14 13 28 0l24 12 32 30-20 20-12-10v96H62V82L50 92 30 72Z"/><path d="M86 30q14 16 28 0" fill="none" stroke="#0003" stroke-width="3"/>',
 hoodie:'<path d="M68 48q32-42 64 0l18 6 24 96-20 6-14-58v76H60V98l-14 58-20-6 24-96Z"/><path d="M80 50q20 26 40 0" fill="#0003"/><rect x="76" y="128" width="48" height="26" rx="6" fill="#0002"/><path d="M92 62v28M108 62v28" stroke="#0004" stroke-width="2.5"/>',
 zip:'<path d="M66 40l20-8q14 10 28 0l20 8 24 108-20 6-14-56v78H60V98l-14 56-20-6Z"/><path d="M100 40v136" stroke="#0005" stroke-width="3"/><path d="M86 32l14 18 14-18" fill="none" stroke="#0004" stroke-width="3"/><rect x="70" y="112" width="20" height="4" fill="#0003"/><rect x="110" y="112" width="20" height="4" fill="#0003"/>',
 pants:'<path d="M64 26h72l10 150h-36l-10-96-10 96H54Z"/><rect x="64" y="26" width="72" height="10" fill="#0003"/><rect x="58" y="96" width="18" height="24" rx="3" fill="#0002"/><rect x="124" y="96" width="18" height="24" rx="3" fill="#0002"/>'
};
let gid=0;
function art(t,hex,cls="art"){
  const id="g"+(gid++);
  return `<svg class="${cls}" viewBox="0 0 200 200" role="img" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient></defs><ellipse cx="100" cy="184" rx="66" ry="7" /><g fill="${hex}" stroke="#fff" stroke-width="1.5" stroke-linejoin="round">${SHAPES[t]}</g><g fill="url(#${id})">${SHAPES[t].split("/>")[0]}/></g></svg>`;
}
function foto(p,cor,cls="art"){
  const src=typeof p.img==="string"?p.img:(p.img&&p.img[cor]);
  if(!src)return art(p.t,COLORS[cor],cls);
  return `<img class="${cls} foto" src="${src}" alt="${esc(p.n)} na cor ${cor}" loading="lazy">`;
}

/* modo claro / escuro */
const root=document.documentElement;
let theme="dark";
try{theme=localStorage.getItem("vazio-theme")||root.dataset.theme||"dark"}catch(e){}
function setTheme(t){
  theme=t;root.dataset.theme=t;
  const light=t==="light";
  $("#theme").setAttribute("aria-pressed",light);
  $("#theme").setAttribute("aria-label",light?"Ativar modo escuro":"Ativar modo claro");
  $("#themeLabel").textContent=light?"Escuro":"Claro";
  try{localStorage.setItem("vazio-theme",t)}catch(e){}
}
$("#theme").addEventListener("click",()=>setTheme(theme==="light"?"dark":"light"));
setTheme(theme);

/* carrinho com memória local */
let cart=[];
try{cart=JSON.parse(localStorage.getItem("vazio-cart-v2"))||[]}catch(e){}
cart=Array.isArray(cart)?cart.filter(l=>P.some(p=>p.id===l.id)&&COLORS[l.color]):[];
const save=()=>{try{localStorage.setItem("vazio-cart-v2",JSON.stringify(cart))}catch(e){}};
const FREE=399;
function addToCart(id,color,size){
  const k=`${id}|${color}|${size}`,f=cart.find(l=>l.k===k);
  f?f.q++:cart.push({k,id,color,size,q:1});
  save();renderCart();
  const p=P.find(x=>x.id===id);toast(`${p.n} (${size}) adicionado ao carrinho`);
  const c=$("#count");c.classList.remove("bump");void c.offsetWidth;c.classList.add("bump");
}
let tt;function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),2200)}
function renderCart(){
  const n=cart.reduce((a,l)=>a+l.q,0),sub=cart.reduce((a,l)=>a+l.q*P.find(x=>x.id===l.id).p,0);
  $("#count").textContent=n;
  $("#items").innerHTML=cart.length?cart.map((l,i)=>{const p=P.find(x=>x.id===l.id);return `<div class="line"><div class="th">${foto(p,l.color,"")}</div><div><h4>${esc(p.n)}</h4><small>${l.color} · Tam. ${l.size}</small><div class="qty"><button data-q="${i}" data-d="-1" aria-label="Diminuir quantidade">−</button><span aria-label="Quantidade">${l.q}</span><button data-q="${i}" data-d="1" aria-label="Aumentar quantidade">+</button></div><button class="rm" data-rm="${i}">Remover</button></div><strong class="lineTot">${brl(p.p*l.q)}</strong></div>`}).join(""):`<div class="empty cartEmpty"><p><strong>Seu carrinho está vazio.</strong></p><p>Escolha uma peça no catálogo para começar.</p><button class="btn" id="goCat">Ver catálogo</button></div>`;
  const left=FREE-sub;
  $("#dfoot").innerHTML=cart.length?`<div class="shipMsg">${left>0?`Faltam <strong>${brl(left)}</strong> para frete grátis`:"Você ganhou frete grátis"}</div><div class="ship"><i style="width:${Math.min(100,sub/FREE*100)}%"></i></div><div class="tot"><span>Subtotal</span><span>${brl(sub)}</span></div><button class="btn solid" id="checkout">Finalizar compra</button><p class="note" id="coNote"></p>`:"";
}
$("#items").addEventListener("click",e=>{
  const q=e.target.closest("[data-q]"),r=e.target.closest("[data-rm]");
  if(q){const l=cart[+q.dataset.q];l.q+=+q.dataset.d;if(l.q<1)cart.splice(+q.dataset.q,1)}
  else if(r)cart.splice(+r.dataset.rm,1);
  else if(e.target.id==="goCat"){closeCart();location.hash="catalogo";return}
  else return;
  save();renderCart();
});
function showCart(){$("#cartTitle").textContent="Carrinho";renderCart()}
function renderCheckout(){
  const sub=cart.reduce((a,l)=>a+l.q*P.find(x=>x.id===l.id).p,0),frete=sub>=FREE?0:29.9;
  $("#cartTitle").textContent="Finalizar compra";
  $("#items").innerHTML=`<form id="coForm" class="co" novalidate>
    <p class="simNote">Simulação: nenhum pagamento é cobrado e nenhum pedido é enviado.</p>
    <label>Nome completo<input name="nome" required autocomplete="name"></label>
    <label>E-mail<input name="email" type="email" required autocomplete="email"></label>
    <label>CEP<input name="cep" required inputmode="numeric" maxlength="9" placeholder="00000-000" autocomplete="postal-code"></label>
    <label>Endereço e número<input name="end" required autocomplete="street-address"></label>
    <fieldset><legend>Forma de pagamento</legend>
      <label class="radio"><input type="radio" name="pag" value="pix" checked> Pix</label>
      <label class="radio"><input type="radio" name="pag" value="cartao"> Cartão de crédito</label>
    </fieldset>
    <p class="err" id="coErr" aria-live="polite"></p>
  </form>`;
  $("#dfoot").innerHTML=`<div class="tot2"><span>Frete</span><span>${frete?brl(frete):"Grátis"}</span></div><div class="tot"><span>Total</span><span>${brl(sub+frete)}</span></div><button class="btn solid" type="submit" form="coForm">Confirmar pedido simulado</button><button class="btn ghost" id="coBack" type="button">Voltar ao carrinho</button>`;
}
$("#dfoot").addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.id==="checkout"&&cart.length)renderCheckout();
  else if(b.id==="coBack")showCart();
  else if(b.id==="coDone")closeCart();
});
$("#items").addEventListener("submit",e=>{
  if(e.target.id!=="coForm")return;
  e.preventDefault();
  const f=e.target,err=$("#coErr");
  let bad=null;
  for(const el of f.querySelectorAll("input[required]")){
    let ok=el.checkValidity();
    if(el.name==="cep")ok=ok&&/^\d{5}-?\d{3}$/.test(el.value.trim());
    el.setAttribute("aria-invalid",String(!ok));
    if(!ok&&!bad)bad=el;
  }
  if(bad){err.textContent="Revise os campos destacados.";bad.focus();return}
  err.textContent="";
  const num="VZ-"+Date.now().toString(36).slice(-6).toUpperCase();
  const nome=f.elements.nome.value.trim().split(/\s+/)[0];
  cart=[];save();
  $("#count").textContent="0";
  $("#cartTitle").textContent="Pedido";
  $("#items").innerHTML=`<div class="done"><h3 class="st">Pedido simulado confirmado</h3><p>Obrigado, ${esc(nome)}. Este é um pedido de demonstração: nada foi cobrado nem enviado.</p><p>Número de referência: <strong>${num}</strong></p></div>`;
  $("#dfoot").innerHTML=`<button class="btn solid" id="coDone" type="button">Voltar à loja</button>`;
});
const wrapEl=$("#cartWrap");let lastFocus;
function openCart(){lastFocus=document.activeElement;wrapEl.classList.add("open");$("#drawer").setAttribute("aria-hidden","false");$("#closeCart").focus()}
function closeCart(){showCart();wrapEl.classList.remove("open");$("#drawer").setAttribute("aria-hidden","true");lastFocus&&lastFocus.focus()}
$("#openCart").addEventListener("click",e=>{e.preventDefault();openCart()});
$("#closeCart").addEventListener("click",closeCart);$("#scrim").addEventListener("click",closeCart);
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&wrapEl.classList.contains("open"))closeCart()});

/* carrossel */
let cur=0,timer;
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
$("#slides").innerHTML=FEAT.map((p,i)=>`<article class="slide${i?"":" on"}" aria-roledescription="slide" aria-label="${i+1} de ${FEAT.length}"><div><p class="rank">Mais vendido nº ${p.top}</p><h2 class="st">${esc(p.n)}</h2><p class="d">${esc(p.d)}</p><div class="row"><span class="price">${brl(p.p)}</span><button class="btn solid" data-quick="${p.id}">Adicionar ao carrinho</button><button class="btn" data-see="${esc(p.n)}">Ver no catálogo</button></div></div>${foto(p,p.col[0])}</article>`).join("");
$("#dots").innerHTML=FEAT.map((p,i)=>`<button aria-label="Ver ${esc(p.n)}" aria-current="${!i}" data-go="${i}"></button>`).join("");
function go(i){
  cur=(i+FEAT.length)%FEAT.length;
  document.querySelectorAll(".slide").forEach((s,j)=>s.classList.toggle("on",j===cur));
  document.querySelectorAll("#dots button").forEach((d,j)=>d.setAttribute("aria-current",j===cur));
}
const play=()=>{if(reduce)return;clearInterval(timer);timer=setInterval(()=>go(cur+1),6000)};
const stop=()=>clearInterval(timer);
$("#prev").addEventListener("click",()=>{go(cur-1);play()});
$("#next").addEventListener("click",()=>{go(cur+1);play()});
$("#dots").addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b){go(+b.dataset.go);play()}});
const hero=$("#topo");
hero.addEventListener("mouseenter",stop);hero.addEventListener("mouseleave",play);
hero.addEventListener("focusin",stop);hero.addEventListener("focusout",play);
hero.addEventListener("keydown",e=>{if(e.key==="ArrowRight")go(cur+1);if(e.key==="ArrowLeft")go(cur-1)});
$("#slides").addEventListener("click",e=>{
  const q=e.target.closest("[data-quick]"),s=e.target.closest("[data-see]");
  if(q){const p=P.find(x=>x.id===+q.dataset.quick);addToCart(p.id,p.col[0],p.sz.includes("M")?"M":p.sz[1]||p.sz[0])}
  if(s){F.q=s.dataset.see;$("#q").value=F.q;renderGrid();$("#catalogo").scrollIntoView()}
});
play();

/* catálogo e filtros */
const CATS=["Tudo",...new Set(P.map(p=>p.c))];
let route=null; 
const curCat=()=>route||F.cat;
const sizesFor=()=>[...new Set(P.filter(p=>curCat()==="Tudo"||p.c===curCat()).flatMap(p=>p.sz))];
const MAXP=Math.ceil(Math.max(...P.map(p=>p.p))/10)*10;
let F={q:"",cat:"Tudo",sizes:[],colors:[],max:MAXP,sort:"rel"};
try{const s=JSON.parse(localStorage.getItem("vazio-filters-v2"));if(s){const {cat,...rest}=s;F={...F,...rest}}}catch(e){}
if(!CATS.includes(F.cat))F.cat="Tudo";F.colors=F.colors.filter(c=>COLORS[c]);
const pick={};
$("#fPrice").max=MAXP;
function renderFilters(){
  $("#fCat").innerHTML=CATS.map(c=>`<button class="chip" aria-pressed="${F.cat===c}" data-cat="${c}">${c}</button>`).join("");
  $("#fSize").innerHTML=sizesFor().map(s=>`<button class="chip" aria-pressed="${F.sizes.includes(s)}" data-size="${s}">${s}</button>`).join("");
  $("#fColor").innerHTML=Object.entries(COLORS).map(([n,h])=>`<button class="sw" style="background:${h}" aria-pressed="${F.colors.includes(n)}" data-color="${n}" aria-label="${n}" title="${n}"></button>`).join("");
  $("#fPrice").value=F.max;$("#priceOut").textContent="até "+brl(F.max);
  $("#q").value=F.q;$("#sort").value=F.sort;
  const a=(F.cat!=="Tudo")+F.sizes.length+F.colors.length+(F.max<MAXP);
  $("#fcount").textContent=a?`(${a} ativos)`:"";
}
function renderGrid(){
  const q=F.q.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
  let list=P.filter(p=>{
    const hay=(p.n+" "+p.c+" "+p.d).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
    return (!q||q.split(/\s+/).every(w=>hay.includes(w)))&&(curCat()==="Tudo"||p.c===curCat())&&(!F.sizes.length||F.sizes.some(s=>p.sz.includes(s)))&&(!F.colors.length||F.colors.some(c=>p.col.includes(c)))&&p.p<=F.max;
  });
  const S={rel:(a,b)=>a.top-b.top,asc:(a,b)=>a.p-b.p,desc:(a,b)=>b.p-a.p,az:(a,b)=>a.n.localeCompare(b.n,"pt")};
  list.sort(S[F.sort]);
  $("#resCount").textContent=`${list.length} ${list.length===1?"peça":"peças"}`;
  $("#grid").innerHTML=list.length?list.map(p=>{
    const s=pick[p.id]||(pick[p.id]={color:F.colors.find(c=>p.col.includes(c))||p.col[0],size:p.sz.length===1?p.sz[0]:null});
    return `<article class="card" data-id="${p.id}"><div class="pic">${p.top<=4?`<span class="tag">Mais vendido</span>`:""}${foto(p,s.color)}</div><h3>${esc(p.n)}</h3><div class="info"><span class="cats">${p.c}</span><span class="pr">${brl(p.p)}</span></div><div class="opts" role="group" aria-label="Cor">${p.col.map(c=>`<button class="sw" style="background:${COLORS[c]}" aria-pressed="${s.color===c}" data-pc="${c}" aria-label="${c}" title="${c}"></button>`).join("")}</div><div class="opts" role="group" aria-label="Tamanho">${p.sz.map(z=>`<button class="sz" aria-pressed="${s.size===z}" data-ps="${z}">${z}</button>`).join("")}</div><button class="btn solid add" data-add>Adicionar ao carrinho</button><p class="hint" aria-live="polite"></p></article>`}).join("")
  :`<div class="empty"><p><strong>Nenhuma peça com esses filtros.</strong></p><p>Tente outro termo ou remova algum filtro.</p><button class="btn" id="clear2">Limpar filtros</button></div>`;
  try{localStorage.setItem("vazio-filters-v2",JSON.stringify(F))}catch(e){}
}
function update(){renderFilters();renderGrid()}
$("#filters").addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.dataset.cat){
    F.cat=b.dataset.cat;
    if(route){location.hash=Object.keys(ROUTES).find(k=>ROUTES[k]===F.cat)||"catalogo";return}
  }
  else if(b.dataset.size){const s=b.dataset.size;F.sizes=F.sizes.includes(s)?F.sizes.filter(x=>x!==s):[...F.sizes,s]}
  else if(b.dataset.color){const c=b.dataset.color;F.colors=F.colors.includes(c)?F.colors.filter(x=>x!==c):[...F.colors,c]}
  else if(b.id==="clear")F={q:"",cat:route||"Tudo",sizes:[],colors:[],max:MAXP,sort:F.sort};
  update();
});
$("#fPrice").addEventListener("input",e=>{F.max=+e.target.value;$("#priceOut").textContent="até "+brl(F.max);renderGrid();renderFilters()});
$("#q").addEventListener("input",e=>{F.q=e.target.value;renderGrid()});
$("#sort").addEventListener("change",e=>{F.sort=e.target.value;renderGrid()});
$("#grid").addEventListener("click",e=>{
  if(e.target.id==="clear2"){F={q:"",cat:route||"Tudo",sizes:[],colors:[],max:MAXP,sort:F.sort};update();return}
  const card=e.target.closest(".card");if(!card)return;
  const id=+card.dataset.id,s=pick[id],b=e.target.closest("button");if(!b)return;
  if(b.dataset.pc){s.color=b.dataset.pc;card.querySelector(".pic .art").outerHTML=foto(P.find(x=>x.id===id),s.color);card.querySelectorAll("[data-pc]").forEach(x=>x.setAttribute("aria-pressed",x===b))}
  else if(b.dataset.ps){s.size=b.dataset.ps;card.querySelectorAll("[data-ps]").forEach(x=>x.setAttribute("aria-pressed",x===b));card.querySelector(".hint").textContent=""}
  else if("add" in b.dataset){if(!s.size){card.querySelector(".hint").textContent="Escolha um tamanho antes de adicionar.";return}addToCart(id,s.color,s.size)}
});
const mobQ=matchMedia("(max-width:860px)");
function fSet(open){$("#fBody").classList.toggle("closed",!open);$("#fToggle").setAttribute("aria-expanded",String(open))}
fSet(!mobQ.matches);
mobQ.addEventListener("change",e=>fSet(!e.matches));
$("#fToggle").addEventListener("click",()=>fSet($("#fBody").classList.contains("closed")));

/* cartões de categoria */
$("#tiles").innerHTML=Object.entries(ROUTES).map(([slug,c])=>{
  const p=P.find(x=>x.c===c),n=P.filter(x=>x.c===c).length;
  return `<a class="tile" href="#${slug}"><div><strong>${c}</strong><span>${BLURB[c]} ${n} peças.</span></div>${foto(p,p.col[0],"")}</a>`;
}).join("");

/* páginas por categoria: #moletons, #camisetas, #calcas */
let lastRoute=null;
function applyRoute(){
  const h=location.hash.slice(1);
  route=ROUTES[h]||null;
  if(route)F.cat=route;
  else if(lastRoute)F.cat="Tudo"; 
  lastRoute=route;
  document.body.classList.toggle("catpage",!!route);
  $("#crumb").hidden=!route;
  $("#crumbCat").textContent=route||"";
  $("#catTitle").textContent=route||"Catálogo";
  $("#catLede").textContent=route?`${BLURB[route]} Use a busca e os filtros para achar o seu.`:"Busque pelo nome da peça ou use os filtros. Escolha o tamanho no card e adicione direto ao carrinho.";
  document.title=route?`${route} · VAZIO`:"VAZIO Streetwear";
  document.querySelectorAll(".catnav a").forEach(a=>{
    const on=a.dataset.route!==undefined&&(a.dataset.route===(route?h:"")&&(route||h===""||h==="topo"));
    on?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current");
  });
  F.sizes=F.sizes.filter(z=>sizesFor().includes(z));
  update();
  route?stop():play();
  if(route)window.scrollTo(0,0);
  else if(h){const el=document.getElementById(h);el&&requestAnimationFrame(()=>el.scrollIntoView())}
}
addEventListener("hashchange",applyRoute);
applyRoute();renderCart();
}
