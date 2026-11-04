/* Coltura – logica dell'app. I progressi restano nel localStorage del dispositivo. */
(function(){
const KEY="coltura-v2",OLDKEY="coltura-malattie-infettive-v1";
const LEVELS=["Spora","Colonia","Coltura pura","Gram-positiva","Antibiogramma","Specializzanda","Infettivologa","Primaria di reparto"];
const STEP=600;
const XPV={q:10,g:10,o:15,f:5,m:20};
const TYPE={q:"Risposta multipla",g:"Completa la frase",o:"Domanda aperta",f:"Flashcard",m:"Abbinamenti"};
const GOALS=[[30,"Leggero","10-15 minuti"],[60,"Regolare","20-30 minuti"],[100,"Serio","40 minuti"],[160,"Intenso","oltre un’ora"]];
const MILES=[[3,"Incubazione","🧫",30],[7,"Colonia stabile","🔬",70],[14,"Ceppo resistente","🧬",150],[30,"Coltura madre","🏆",300],[60,"Biobanca","💎",500],[100,"Premio Nobel","🥇",1000]];
const SUBJECTS=Object.keys(SUBJ);
const $app=document.getElementById("app");
const AGENT_ID="agent_7301m6knqh21esvrjhzb31hbt1yp";
const EL_SDK="./elevenlabs-client.js";

/* ---------- storage ---------- */
function base(){return{name:"Emilia",xp:0,done:{},err:{},studied:{},stats:{},days:{},goalDays:{},frozen:{},streak:0,best:0,lastGoal:null,freezes:0,goal:60,exam:{},today:{},planStart:{},badges:{},recovered:0,lastSubj:"mi",orali:[]}}
function load(){
  try{const r=JSON.parse(localStorage.getItem(KEY)||"null");if(r&&typeof r==="object")return Object.assign(base(),r)}catch(e){}
  const s=base();
  try{const o=JSON.parse(localStorage.getItem(OLDKEY)||"null");if(o){
    s.xp=o.xp||0;
    for(const k in o.done||{})s.done["mi:"+k]=o.done[k];
    for(const k in o.stats||{})s.stats["mi:"+k]=o.stats[k];
    for(const k in o.studied||{})s.studied["mi:"+k]=o.studied[k];
    for(const k in o.err||{}){const e=o.err[k];s.err["mi:"+k]={n:e.n,t:e.t}}
  }}catch(e){}
  return s}
let S=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}

/* ---------- helpers ---------- */
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function norm(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/,/g,".").replace(/[^a-z0-9.]/g,"")}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function ds(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function today(){return ds(new Date())}
function parse(s){const[y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d)}
function addDays(s,n){const d=parse(s);d.setDate(d.getDate()+n);return ds(d)}
function diffDays(a,b){return Math.round((parse(b)-parse(a))/864e5)}
const WD=["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],MO=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];
function nice(s){const d=parse(s);return WD[d.getDay()]+" "+d.getDate()+" "+MO[d.getMonth()]}
function nm(){return esc(S.name||"")}

/* ---------- content index ---------- */
const IDX={},CH={};
if(typeof QX!=="undefined")SUBJECTS.forEach(sk=>SUBJ[sk].ch.forEach(c=>{const x=QX[sk+":"+c.id];if(x)c.mcq=c.mcq.concat(x)}));
const QUIZ_N=10;
SUBJECTS.forEach(sk=>SUBJ[sk].ch.forEach(c=>{
  c.subj=sk;c.key=sk+":"+c.id;CH[c.key]=c;const p=c.key;
  c.mcq.forEach((d,i)=>IDX[p+"-q"+i]={id:p+"-q"+i,type:"q",ch:p,d});
  c.gap.forEach((d,i)=>IDX[p+"-g"+i]={id:p+"-g"+i,type:"g",ch:p,d});
  c.open.forEach((d,i)=>IDX[p+"-o"+i]={id:p+"-o"+i,type:"o",ch:p,d});
  c.fc.forEach((d,i)=>IDX[p+"-f"+i]={id:p+"-f"+i,type:"f",ch:p,d});
  IDX[p+"-m"]={id:p+"-m",type:"m",ch:p,d:c.match};
}));
const ALL=Object.values(IDX);
function items(ck,type){return ALL.filter(x=>x.ch===ck&&x.type===type)}
function graded(ck){return ALL.filter(x=>x.ch===ck&&x.type!=="f")}
function mastery(ck){const it=graded(ck);const ok=it.filter(x=>S.done[x.id]&&!S.err[x.id]).length;return it.length?ok/it.length:0}
function complete(ck){return mastery(ck)>=.8}
function errKeys(sk){return Object.keys(S.err).filter(k=>IDX[k]&&(!sk||CH[IDX[k].ch].subj===sk))}
function lvl(xp){const i=Math.min(LEVELS.length-1,Math.floor(xp/STEP));return{i,name:LEVELS[i],pct:i===LEVELS.length-1?100:((xp%STEP)/STEP*100),next:i===LEVELS.length-1?null:LEVELS[i+1]}}
function steps(ck){const c=CH[ck];const has=t=>items(ck,t).every(x=>S.stats[x.id]);
  return[["Studio",c.topics.every((t,i)=>S.studied[ck+"-"+i])],["Flashcard",has("f")],["Quiz",has("q")],["Esercizi",has("g")&&has("m")],["Aperte",has("o")],["80%",complete(ck)]]}

/* ---------- streak, goals, rewards ---------- */
let queue=[];
function checkStreak(){
  const t=today();if(!S.lastGoal){return}
  let gap=diffDays(S.lastGoal,t)-1;let used=0;
  while(gap>0){const d=addDays(S.lastGoal,1);if(S.freezes>0){S.freezes--;S.frozen[d]=1;S.lastGoal=d;used++;gap--}else{S.streak=0;break}}
  if(used)queue.push(overlayHTML("🛡️","Scudo usato",used===1?"Ieri non hai raggiunto l’obiettivo: uno scudo ha salvato la tua serie di "+S.streak+" giorni.":used+" scudi hanno salvato la tua serie di "+S.streak+" giorni."));
  save()}
function addXP(n,count){
  const b=lvl(S.xp).i;S.xp+=n;const t=today();
  if(count!==false){S.days[t]=(S.days[t]||0)+n;
    if(S.days[t]>=S.goal&&!S.goalDays[t]){S.goalDays[t]=1;goalReached()}}
  const a=lvl(S.xp);if(a.i>b)queue.push(overlayHTML("⭐","Nuovo livello: "+esc(a.name),"Grande, "+nm()+". La tua coltura cresce."));
  save();setTimeout(flush,350)}
function goalReached(){
  const t=today();
  S.streak=S.lastGoal===addDays(t,-1)?S.streak+1:1;S.lastGoal=t;S.best=Math.max(S.best,S.streak);
  const chest=10+Math.floor(Math.random()*21);
  let extra="";
  if(S.streak%7===0&&S.freezes<2){S.freezes++;extra+="<p>🛡️ Hai guadagnato uno <b>scudo</b>: protegge la serie se salti un giorno.</p>"}
  queue.push(overlayHTML("🔥",S.streak+(S.streak===1?" giorno":" giorni")+" di fila","Obiettivo di oggi raggiunto, "+nm()+"!</p><p class=\"chest\">🎁 Forziere del giorno: <b>+"+chest+" XP</b></p>"+extra+"<p>"));
  S.xp+=chest;
  MILES.forEach(([n,name,ic,rw])=>{if(S.streak>=n&&!S.badges["s"+n]){S.badges["s"+n]=t;S.xp+=rw;queue.push(overlayHTML(ic,"Traguardo: "+esc(name),n+" giorni di fila. Premio: +"+rw+" XP."))}});
  checkBadges()}
const BADGES=[
  ["first","Prima piastra","🧪","Completa il primo capitolo",()=>Object.keys(CH).some(complete)],
  ["orale1","Prima interrogazione","🎓","Fai un’interrogazione col professore",()=>(S.orali||[]).length>=1],
  ["lode","30 e lode","🏅","Prendi 30 e lode all’interrogazione",()=>(S.orali||[]).some(o=>o.lode)],
  ["perfect","Piastra sterile","✨","Quiz di almeno 5 domande senza errori",()=>!!S.badges.perfect],
  ["rec25","Seconda possibilità","♻️","Recupera 25 errori",()=>S.recovered>=25],
  ["goals10","Costanza","📅","Raggiungi l’obiettivo 10 volte",()=>Object.keys(S.goalDays).length>=10],
  ["mi","Infettivologa","🦠","Completa tutta Malattie infettive",()=>SUBJ.mi.ch.every(c=>complete(c.key))],
  ["de","Dermatologa","🧴","Completa tutta Dermatologia",()=>SUBJ.de.ch.every(c=>complete(c.key))]];
function checkBadges(){BADGES.forEach(([k,name,ic,desc,f])=>{if(!S.badges[k]&&f()){S.badges[k]=today();queue.push(overlayHTML(ic,"Nuovo badge: "+esc(name),esc(desc)+". Bravissima, "+nm()+"!"))}})}
function overlayHTML(ic,title,body){return '<div class="box"><p class="big">'+ic+'</p><h3>'+title+'</h3><p class="muted">'+body+'</p><button class="btn primary" data-a="closeov">Continua</button></div>'}
function flush(){if(document.querySelector(".overlay")||!queue.length)return;const o=document.createElement("div");o.className="overlay";o.innerHTML=queue.shift();document.body.appendChild(o);save()}

function record(id,result){
  const it=IDX[id];const st=S.stats[id]||(S.stats[id]={ok:0,ko:0});let gain=0,rec=false;
  if(result==="ok"){st.ok++;gain=S.done[id]?2:XPV[it.type];S.done[id]=true;if(S.err[id]){delete S.err[id];gain+=5;rec=true;S.recovered=(S.recovered||0)+1}}
  else{st.ko++;const e=S.err[id]||{n:0};S.err[id]={n:e.n+1,t:Date.now()};if(result==="half")gain=3}
  if(gain)addXP(gain);else save();checkBadges();return{gain,rec}}

let tt;function toast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("on"),1600)}

/* ---------- exam plan ---------- */
function reviewDays(D){return D>=14?3:D>=6?2:D>=3?1:0}
function plan(sk){
  const exam=S.exam[sk];if(!exam)return null;const t=today();const D=diffDays(t,exam);
  if(D<=0)return{exam,D,days:[],todayList:[],past:true};
  const chs=SUBJ[sk].ch.map(c=>c.key);
  let tod=S.today[sk];
  const remaining=chs.filter(k=>!complete(k));
  const R=reviewDays(D),SD=Math.max(1,D-R);
  if(!tod||tod.date!==t||tod.exam!==exam){
    const n=remaining.length;const take=SD>0?Math.ceil(n/SD):n;
    tod=S.today[sk]={date:t,exam,list:remaining.slice(0,D-R>0?take:0)};save()}
  const days=[];
  const todayIsReview=D<=R;
  days.push({date:t,list:tod.list,review:todayIsReview&&!tod.list.length});
  const rest=remaining.filter(k=>!tod.list.includes(k));
  const SD2=Math.max(0,D-1-R);
  for(let i=0;i<D-1;i++){const date=addDays(t,i+1);
    if(i<SD2){const a=Math.floor(i*rest.length/SD2),b=Math.floor((i+1)*rest.length/SD2);days.push({date,list:rest.slice(a,b),review:false})}
    else days.push({date,list:[],review:true})}
  if(SD2===0&&rest.length)days[days.length-1].list=days[days.length-1].list.concat(rest);
  return{exam,D,days,todayList:tod.list,review:days[0].review}}
function pace(sk){
  const p=S.planStart[sk];const pl=plan(sk);if(!p||!pl||pl.past)return null;
  const el=diffDays(p.date,today());const totalStudy=Math.max(1,p.D-reviewDays(p.D));
  const expected=p.doneAtStart+Math.min(p.total,Math.round(p.total*Math.min(1,(el+1)/totalStudy)));
  const actual=SUBJ[sk].ch.filter(c=>complete(c.key)).length;const pending=pl.todayList.filter(k=>!complete(k)).length;
  const behind=expected-actual-pending;if(behind>0)return -behind;return actual>expected?actual-expected:0}
function suggestedGoal(sk){const pl=plan(sk);if(!pl||pl.past)return null;const rem=SUBJ[sk].ch.filter(c=>!complete(c.key)).length;const sd=Math.max(1,pl.D-reviewDays(pl.D));const per=rem/sd;
  return Math.min(160,Math.max(30,Math.round(per*170/10)*10))}

/* ---------- state ---------- */
let V={view:"home",subj:SUBJECTS.includes(S.lastSubj)?S.lastSubj:"mi",ch:null,tab:"studia",blur:false,run:null,firstHome:true};

/* ---------- petri dish ---------- */
function rng(seed){let s=seed*9301+49297;return()=>{s=(s*9301+49297)%233280;return s/233280}}
function plateInner(seed,m){
  const r=rng(seed+3);const N=26;const shown=Math.round(m*N);const cols=["var(--gram)","var(--saf)","var(--agar)","var(--ok)"];
  let s='<circle cx="50" cy="50" r="47" fill="none" stroke="var(--line)" stroke-width="2.5"/><circle cx="50" cy="50" r="42" fill="var(--agar-soft)" stroke="var(--line)" stroke-width="1"/>';
  for(let k=0;k<N;k++){const a=r()*Math.PI*2,d=Math.sqrt(r())*34,x=50+Math.cos(a)*d,y=50+Math.sin(a)*d,rad=2+r()*4.2,c=cols[Math.floor(r()*cols.length)];
    if(k<shown)s+='<circle class="colony" style="--d:'+k+'" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+rad.toFixed(1)+'" fill="'+c+'" opacity=".85"/>'}
  return s}
function seedOf(ck){const c=CH[ck];return c.id+(c.subj==="de"?40:0)}
function plate(ck,cls){const m=mastery(ck);return '<svg viewBox="0 0 100 100" class="'+(cls||"")+'" role="img" aria-label="Padronanza '+Math.round(m*100)+'%">'+plateInner(seedOf(ck),m)+'</svg>'}

/* ---------- top bar ---------- */
function topbar(left){
  const e=errKeys().length;
  return '<header class="top"><div class="wrap">'+left+'<span class="spacer"></span><button class="pill" data-a="rewards" title="Serie di giorni con obiettivo raggiunto">🔥 '+S.streak+'</button><span class="pill hide-s">'+S.xp+' XP</span><button class="pill'+(e?" err":"")+'" data-a="errors">'+e+'<span class="hide-s">&nbsp;da rivedere</span></button><button class="pill" data-a="settings" aria-label="Impostazioni">⚙︎</button></div></header>'}
function segSubj(){return '<div class="seg" role="group" aria-label="Materia">'+SUBJECTS.map(k=>'<button aria-pressed="'+(V.subj===k)+'" data-a="subj" data-s="'+k+'">'+esc(SUBJ[k].short)+'</button>').join("")+'</div>'}

/* ---------- home ---------- */
function greet(){const h=new Date().getHours();return(h<12?"Buongiorno":h<18?"Buon pomeriggio":"Buonasera")+(S.name?", "+nm():"")}
function goalRing(){const x=S.days[today()]||0;const p=Math.min(1,x/S.goal);const C=2*Math.PI*40;
  return '<svg class="ring" viewBox="0 0 100 100" aria-label="Obiettivo giornaliero '+Math.round(p*100)+'%"><circle cx="50" cy="50" r="40" fill="none" stroke="var(--agar-soft)" stroke-width="11"/>'+(p>0?'<circle cx="50" cy="50" r="40" fill="none" stroke="var(--agar)" stroke-width="11" stroke-linecap="round" stroke-dasharray="'+(C*p).toFixed(1)+' '+C.toFixed(1)+'" transform="rotate(-90 50 50)"/>':'')+'<text x="50" y="47" text-anchor="middle" font-size="19">'+x+'</text><text x="50" y="66" text-anchor="middle" font-size="11" style="font-weight:600;fill:var(--muted)">di '+S.goal+' XP</text></svg>'}
function weekRow(){const t=today();let h='<div class="week">';
  for(let i=6;i>=0;i--){const d=addDays(t,-i);const on=S.goalDays[d],fz=S.frozen[d];h+='<span>'+WD[parse(d).getDay()].slice(0,1)+'<i class="'+(on?"on":fz?"frz":"")+(i===0?" now":"")+'">'+(on?"🔥":fz?"🛡️":"")+'</i></span>'}
  return h+'</div>'}
function streakCard(){const x=S.days[today()]||0;const left=Math.max(0,S.goal-x);
  return '<section class="card"><div class="goal">'+goalRing()+'<div><div class="flame">🔥 '+S.streak+' <small>'+(S.streak===1?"giorno":"giorni")+' di fila</small></div><p class="muted" style="margin:6px 0 0">'+(left?"Ancora "+left+" XP per l’obiettivo di oggi.":"Obiettivo di oggi raggiunto. Ci vediamo domani!")+'</p></div></div>'+weekRow()+'<div class="shields"><span>🛡️ Scudi: '+S.freezes+'/2</span><span>Record: '+S.best+' giorni</span><button class="btn small" data-a="rewards">Premi e badge</button></div></section>'}
function chapterTask(ck){const c=CH[ck];const st=steps(ck);
  return '<button class="task" data-a="open" data-ch="'+ck+'">'+plate(ck)+'<span class="tt"><b>'+c.id+'. '+esc(c.t)+'</b><span class="steps">'+st.map(([n,y])=>'<em class="'+(y?"y":"")+'">'+(y?"✓ ":"")+n+'</em>').join("")+'</span></span></button>'}
function planCard(sk){
  const s=SUBJ[sk];const pl=plan(sk);
  if(!pl){return '<section class="card"><h3>Quando hai l’esame di '+esc(s.name)+'?</h3><p class="muted" style="margin:4px 0 0">Inserisci la data: costruisco un percorso giorno per giorno, con capitoli da studiare e giorni di ripasso finale.</p><div class="datebox"><input type="date" id="examdate" min="'+addDays(today(),1)+'" aria-label="Data dell’esame"><button class="btn primary" data-a="setexam">Crea il mio piano</button></div></section>'}
  if(pl.past)return '<section class="card"><h3>Esame di '+esc(s.name)+'</h3><p>'+(pl.D===0?"È oggi. In bocca al lupo, "+nm()+"! 🍀":"La data impostata ("+nice(pl.exam)+") è passata.")+'</p><button class="btn small" data-a="clearexam">Imposta una nuova data</button></section>';
  const pc=pace(sk);const stat=pc==null?"":pc>0?'<span class="status ok">In anticipo di '+pc+(pc===1?" capitolo":" capitoli")+'</span>':pc===0?'<span class="status mid">In linea con il piano</span>':'<span class="status ko">Indietro di '+(-pc)+(pc===-1?" capitolo":" capitoli")+': il piano si è riadattato</span>';
  let h='<section class="card"><div class="countdown"><strong>'+pl.D+'</strong><span class="muted">'+(pl.D===1?"giorno":"giorni")+' all’esame, '+nice(pl.exam)+'</span></div><div style="margin:8px 0 14px">'+stat+'</div><h3>Il piano di oggi</h3>';
  const done=pl.todayList.length&&pl.todayList.every(complete);
  if(pl.todayList.length){h+='<div>'+pl.todayList.map(chapterTask).join("")+'</div>';if(done)h+='<p class="status ok" style="margin-top:8px">Capitoli di oggi completati 🎉 Se vuoi, anticipa quelli di domani.</p>'}
  else if(pl.review){const e=errKeys(sk).length;const weak=s.ch.map(c=>c.key).sort((a,b)=>mastery(a)-mastery(b)).slice(0,3);
    h+='<p class="muted" style="margin:4px 0 8px">Giorni di ripasso finale: niente di nuovo, si consolida.</p><div class="next" style="justify-content:flex-start;margin-top:0"><button class="btn primary" data-a="mix">Sfida mista</button><button class="btn" data-a="reviewsubj" '+(e?"":"disabled")+'>Ripassa '+e+' errori</button></div><p class="muted" style="margin:14px 0 4px">Capitoli più deboli:</p>'+weak.map(chapterTask).join("")}
  else{const e=errKeys(sk).length;h+='<p class="muted" style="margin:4px 0 8px">Oggi consolidamento: ripassa gli errori e rifai le flashcard dei capitoli già visti.</p><div class="next" style="justify-content:flex-start;margin-top:0"><button class="btn primary" data-a="reviewsubj" '+(e?"":"disabled")+'>Ripassa '+e+' errori</button><button class="btn" data-a="mix">Sfida mista</button></div>'}
  h+='<div class="next"><button class="btn small" data-a="plan">Vedi tutto il piano</button><button class="btn small" data-a="clearexam">Cambia data</button></div></section>';return h}
function home(){
  const L=lvl(S.xp);const s=SUBJ[V.subj];
  const grow=V.firstHome?" grow":"";V.firstHome=false;
  let h=topbar('<span class="brand">Coltura</span>');
  h+='<main class="wrap"><section class="hero"><div><p class="hello">'+greet()+' 👋</p><h1>'+esc(s.name).replace(" ","<br>")+'</h1><div style="margin-top:16px">'+segSubj()+'</div></div>';
  h+='<div class="level"><div class="sub">Livello '+(L.i+1)+' di '+LEVELS.length+'</div><div class="name">'+esc(L.name)+'</div><div class="bar"><i style="width:'+L.pct.toFixed(0)+'%"></i></div><div class="sub">'+(L.next?(STEP-S.xp%STEP)+" XP a "+esc(L.next):"Livello massimo raggiunto")+'</div></div></section>';
  h+='<div class="today">'+streakCard()+planCard(V.subj)+'</div>';
  h+='<div class="actions"><button class="btn primary" data-a="mix">Sfida mista: 10 domande</button><button class="btn" data-a="errors">Ripassa gli errori ('+errKeys(V.subj).length+')</button><button class="btn gram" data-a="orale">🎓 Interrogazione col professore</button></div>';
  h+='<div class="grid'+grow+'">';
  s.ch.forEach(c=>{const m=mastery(c.key);h+='<button class="plate'+(m>=.8?" done":"")+'" data-a="open" data-ch="'+c.key+'">'+plate(c.key)+'<span class="n">Capitolo '+c.id+'</span><span class="t">'+esc(c.t)+'</span><span class="m"><span>'+Math.round(m*100)+'% padroneggiato</span><span>'+(m>=.8?"✓":"")+'</span></span></button>'});
  h+='</div><p class="muted" style="margin-top:28px;font-size:.9rem">I progressi restano salvati su questo dispositivo, in questo browser. <button class="btn small" data-a="settings">Fai un backup</button></p></main>';
  return h}

/* ---------- plan view ---------- */
function planView(){
  const sk=V.subj;const pl=plan(sk);let h=topbar('<button class="back" data-a="home">‹ Home</button>');
  h+='<main class="wrap"><div class="narrow"><div class="chead"><div><div class="n">'+esc(SUBJ[sk].name)+'</div><h2>Il percorso verso l’esame</h2><div class="s">'+(pl&&!pl.past?"Esame "+nice(pl.exam)+". Il piano si ricalcola ogni giorno in base a quello che hai completato.":"")+'</div></div></div>';
  if(!pl||pl.past){h+=planCard(sk)+'</div></main>';return h}
  const doneCh=SUBJ[sk].ch.filter(c=>complete(c.key));
  if(doneCh.length)h+='<section class="panel"><h3>Già completati</h3><div class="w" style="display:flex;flex-wrap:wrap;gap:6px">'+doneCh.map(c=>'<span class="chip y">✓ '+c.id+'. '+esc(c.t)+'</span>').join("")+'</div></section>';
  h+='<section class="panel">';
  pl.days.forEach((d,i)=>{h+='<div class="day'+(i===0?" cur":"")+'"><span class="d">'+(i===0?"Oggi":nice(d.date))+'</span><span class="w">';
    if(d.list.length)h+=d.list.map(k=>'<button class="chip'+(complete(k)?" y":"")+'" data-a="open" data-ch="'+k+'">'+(complete(k)?"✓ ":"")+CH[k].id+'. '+esc(CH[k].t)+'</button>').join("");
    else if(d.review)h+='<span class="chip r">Ripasso finale: errori, sfide miste, recap</span>';
    else h+='<span class="chip r">Consolidamento: errori e flashcard</span>';
    h+='</span></div>'});
  h+='<div class="day"><span class="d">'+nice(pl.exam)+'</span><span class="w"><span class="chip x">Esame 🍀</span></span></div></section></div></main>';return h}

/* ---------- rewards ---------- */
function rewardsView(){
  let h=topbar('<button class="back" data-a="home">‹ Home</button>');
  h+='<main class="wrap"><div class="narrow"><div class="chead"><div><div class="n">Premi di '+nm()+'</div><h2>Serie e badge</h2><div class="s">Raggiungi l’obiettivo XP ogni giorno per far crescere la serie. Ogni obiettivo apre un forziere; ogni 7 giorni guadagni uno scudo che salva la serie se salti un giorno.</div></div></div>';
  h+=streakCard();
  h+='<section class="panel" style="margin-top:14px"><h3>Traguardi della serie</h3><div class="badges">'+MILES.map(([n,name,ic,rw])=>'<div class="badge'+(S.badges["s"+n]?"":" lock")+'"><div class="ic">'+ic+'</div><b>'+esc(name)+'</b><span>'+n+' giorni, +'+rw+' XP</span></div>').join("")+'</div></section>';
  h+='<section class="panel"><h3>Badge</h3><div class="badges">'+BADGES.map(([k,name,ic,desc])=>'<div class="badge'+(S.badges[k]?"":" lock")+'"><div class="ic">'+ic+'</div><b>'+esc(name)+'</b><span>'+esc(desc)+'</span></div>').join("")+'</div></section></div></main>';return h}

/* ---------- settings ---------- */
function settingsView(){
  const sg=suggestedGoal(V.subj);
  let h=topbar('<button class="back" data-a="home">‹ Home</button>');
  h+='<main class="wrap"><div class="narrow"><div class="chead"><div><h2>Impostazioni</h2></div></div>';
  h+='<section class="panel"><h3>Il tuo nome</h3><div class="datebox"><input id="nm" value="'+nm()+'" aria-label="Nome" style="flex:1"><button class="btn primary" data-a="setname">Salva</button></div></section>';
  h+='<section class="panel"><h3>Obiettivo giornaliero</h3><p class="muted" style="margin:0">'+(sg?"Per arrivare pronta all’esame di "+esc(SUBJ[V.subj].name)+" ti consiglio circa "+sg+" XP al giorno.":"Imposta la data dell’esame per ricevere un obiettivo consigliato.")+'</p><div class="goals">'+GOALS.map(([x,n,t])=>'<button aria-pressed="'+(S.goal===x)+'" data-a="goal" data-x="'+x+'"><b>'+n+'</b><span>'+x+' XP, '+t+'</span></button>').join("")+(sg&&!GOALS.some(g=>g[0]===sg)?'<button aria-pressed="'+(S.goal===sg)+'" data-a="goal" data-x="'+sg+'"><b>Consigliato</b><span>'+sg+' XP</span></button>':"")+'</div></section>';
  h+='<section class="panel"><h3>Date degli esami</h3>'+SUBJECTS.map(k=>'<p style="margin:6px 0">'+esc(SUBJ[k].name)+': <b>'+(S.exam[k]?nice(S.exam[k]):"non impostata")+'</b></p>').join("")+'</section>';
  h+='<section class="panel"><h3>Backup dei progressi</h3><p class="muted" style="margin:0 0 10px">Salva un codice con tutti i tuoi progressi: XP, serie, errori, piano e badge. Ti serve se cambi dispositivo, se cancelli i dati del browser o se cambia l’indirizzo dell’app.</p><div class="next" style="justify-content:flex-start;margin-top:0"><button class="btn primary" data-a="bkcopy">Copia codice di backup</button><button class="btn" data-a="bkdown">Scarica file di backup</button></div><p style="margin:18px 0 6px;font-weight:600">Ripristina da un backup</p><textarea id="bkin" placeholder="Incolla qui il codice di backup" style="min-height:90px"></textarea><div class="next" style="justify-content:flex-start"><button class="btn primary" data-a="bkimport">Importa dal codice</button><label class="btn" style="cursor:pointer">Importa da file<input type="file" id="bkfile" accept=".txt,.json,text/plain" hidden></label></div>'+(S.lastBackup?'<p class="muted" style="margin:10px 0 0">Ultimo backup: '+nice(S.lastBackup)+'</p>':'<p class="muted" style="margin:10px 0 0">Non hai ancora fatto un backup.</p>')+'</section>';
  h+='<section class="panel"><h3>Azzera</h3><p class="muted" style="margin:0 0 10px">Cancella XP, serie, badge, errori e piani salvati su questo dispositivo.</p><button class="btn" data-a="reset">Azzera tutti i progressi</button></section></div></main>';return h}

/* ---------- chapter ---------- */
const TABS=[["studia","Studia"],["flash","Flashcard"],["quiz","Quiz"],["eserc","Esercizi"],["aperte","Domande aperte"],["recap","Recap"]];
const TABTITLE={flash:"Flashcard",quiz:"Quiz a risposta multipla",eserc:"Esercizi",aperte:"Domande aperte"};
function chapterView(){
  const c=CH[V.ch];const m=mastery(c.key);
  let h=topbar('<button class="back" data-a="home">‹ '+esc(SUBJ[c.subj].short)+'</button>');
  h+='<main class="wrap"><div class="narrow"><div class="chead">'+plate(c.key)+'<div><div class="n">Capitolo '+c.id+', '+Math.round(m*100)+'% padroneggiato</div><h2>'+esc(c.t)+'</h2><div class="s">'+esc(c.sub)+'</div></div></div>';
  h+='<nav class="tabs" role="tablist">'+TABS.map(([k,l])=>'<button class="tab" role="tab" aria-selected="'+(V.tab===k)+'" data-a="tab" data-t="'+k+'">'+l+'</button>').join("")+'</nav>';
  if(V.tab==="studia")h+=study(c);else if(V.tab==="recap")h+=recap(c);else h+=runnerView();
  return h+'</div></main>'}
function hideDetails(p){
  const i=p.indexOf(": ");
  if(i>0&&i<70)return esc(p.slice(0,i+2))+'<span class="hid" data-a="rev" tabindex="0">'+esc(p.slice(i+2))+'</span>';
  return esc(p).replace(/(\d[\d.,\-–/]*\s?(?:%|mm|ml|mg|g|giorni|mesi|ore|settimane|anni|°C|kDa|UFC\/ml)?)/g,'<span class="hid" data-a="rev" tabindex="0">$1</span>')}
function study(c){
  const n=c.topics.filter((t,i)=>S.studied[c.key+"-"+i]).length;
  let h='<div class="tools"><span>'+n+' di '+c.topics.length+' argomenti studiati</span><button class="switch" data-a="blur" aria-pressed="'+V.blur+'"><span class="k"></span>Copri i dettagli</button></div>';
  if(V.blur)h+='<p class="muted" style="margin-top:-6px">Prova a ricordare la parte coperta, poi toccala per scoprirla.</p>';
  c.topics.forEach((t,i)=>{const done=S.studied[c.key+"-"+i];
    h+='<article class="topic"><h3>'+esc(t[0])+'</h3><ul>'+t[1].map(p=>'<li>'+(V.blur?hideDetails(p):esc(p))+'</li>').join("")+'</ul>';
    if(t[2])h+='<div class="trick"><b>Trucco per ricordare</b>'+esc(t[2])+'</div>';
    h+='<div class="foot"><button class="btn small'+(done?"":" gram")+'" data-a="studied" data-i="'+i+'" '+(done?"disabled":"")+'>'+(done?"Studiato ✓":"Segna come studiato (+5 XP)")+'</button></div></article>'});
  return h+'<div class="next"><button class="btn primary" data-a="tab" data-t="flash">Passa alle flashcard</button></div>'}
function recap(c){
  const m=mastery(c.key);let ok=0,ko=0;ALL.filter(x=>x.ch===c.key).forEach(x=>{const s=S.stats[x.id];if(s){ok+=s.ok;ko+=s.ko}});
  const errs=errKeys().filter(k=>IDX[k].ch===c.key);const studied=c.topics.filter((t,i)=>S.studied[c.key+"-"+i]).length;
  let h='<section class="panel"><h3>Da ricordare</h3><ol class="recap">'+c.recap.map(r=>'<li>'+esc(r)+'</li>').join("")+'</ol></section>';
  h+='<section class="panel"><h3>Come stai andando</h3><div class="kpis"><div class="kpi"><strong>'+Math.round(m*100)+'%</strong><span>padronanza</span></div><div class="kpi"><strong>'+studied+'/'+c.topics.length+'</strong><span>argomenti studiati</span></div><div class="kpi"><strong>'+(ok+ko?Math.round(ok/(ok+ko)*100)+"%":"–")+'</strong><span>risposte corrette</span></div><div class="kpi"><strong>'+errs.length+'</strong><span>errori aperti</span></div></div>';
  h+=m>=.8?'<p style="margin:16px 0 0"><span class="stamp">Capitolo completato, brava '+nm()+'!</span></p>':'<p class="muted" style="margin:14px 0 0">Il capitolo è completato all’80% di padronanza: rispondi correttamente a quiz, esercizi e domande aperte senza errori in sospeso.</p>';
  h+='</section>';
  if(errs.length)h+='<section class="panel"><h3>Punti deboli di questo capitolo</h3>'+errs.map(errRow).join("")+'<div class="next"><button class="btn primary" data-a="reviewch">Ripassa questi errori</button></div></section>';
  return h}
function errRow(k){const it=IDX[k];const e=S.err[k];const c=CH[it.ch];return '<div class="erow"><span class="x">×'+e.n+'</span><div class="tx">'+esc(it.type==="m"?"Abbinamenti del capitolo":it.d[0])+'<div class="tp">'+TYPE[it.type]+', capitolo '+c.id+'</div></div></div>'}
function errorsView(){
  let h=topbar('<button class="back" data-a="home">‹ Home</button>');
  h+='<main class="wrap"><div class="narrow"><div class="chead"><div><div class="n">Tracking degli errori</div><h2>Da rivedere</h2><div class="s">Ogni risposta sbagliata finisce qui. Rispondi giusto nel ripasso e la togli dalla lista (+5 XP di recupero).</div></div></div>';
  const keys=errKeys();
  if(!keys.length)h+='<div class="panel empty"><p style="font-size:1.2rem;color:var(--ink);font-weight:700">Nessun errore in sospeso.</p><p>Fai un quiz o una sfida mista: gli errori compariranno qui.</p><button class="btn primary" data-a="mix">Inizia la sfida mista</button></div>';
  else{
    h+='<div class="actions">'+SUBJECTS.map(sk=>{const n=errKeys(sk).length;return n?'<button class="btn'+(sk===V.subj?" primary":"")+'" data-a="reviewsubj" data-s="'+sk+'">Ripassa '+esc(SUBJ[sk].short)+' ('+n+')</button>':""}).join("")+'</div>';
    const by={};keys.forEach(k=>{(by[IDX[k].ch]=by[IDX[k].ch]||[]).push(k)});
    Object.keys(CH).filter(ck=>by[ck]).forEach(ck=>{const c=CH[ck];by[ck].sort((a,b)=>S.err[b].n-S.err[a].n);
      h+='<section class="panel"><h3>'+esc(SUBJ[c.subj].short)+', '+c.id+'. '+esc(c.t)+'</h3>'+by[ck].map(errRow).join("")+'<div class="next"><button class="btn small" data-a="open" data-ch="'+ck+'" data-t="recap">Vai al capitolo</button></div></section>'})}
  return h+'</div></main>'}

/* ---------- runner ---------- */
function newRun(list,title,back){V.run={items:list,i:0,res:[],title,state:{},combo:0,xp:0,back:back||null};prepItem()}
function prepItem(){const r=V.run;const it=r.items[r.i];r.state={};if(!it)return;
  if(it.type==="q")r.state.order=shuffle(it.d[1].map((_,k)=>k));
  if(it.type==="m"){r.state.right=shuffle(it.d.map((_,k)=>k));r.state.found={};r.state.sel=null;r.state.miss=0}}
function tabRun(c,tab){if(tab==="flash")return items(c.key,"f");if(tab==="quiz")return shuffle(items(c.key,"q")).slice(0,QUIZ_N);if(tab==="eserc")return items(c.key,"g").concat(items(c.key,"m"));if(tab==="aperte")return items(c.key,"o");return[]}
function nextBtn(){const r=V.run;return '<div class="next"><button class="btn primary" data-a="next">'+(r.i+1<r.items.length?"Avanti":"Vedi il risultato")+'</button></div>'}
function runnerView(){
  const r=V.run;if(!r)return "";if(r.i>=r.items.length)return runEnd();
  const it=r.items[r.i];const st=r.state;const c=CH[it.ch];
  let h='<div class="qcard"><div class="qmeta"><span>'+esc(r.title)+(V.view==="run"?", "+esc(SUBJ[c.subj].short)+" cap. "+c.id:"")+'</span><span>'+(r.i+1)+' / '+r.items.length+(r.combo>=3?' <span class="combo">Combo ×'+r.combo+'</span>':'')+'</span></div>';
  h+='<div class="dots">'+r.items.map((_,k)=>'<i class="'+(k<r.i?(r.res[k]==="ok"?"ok":"ko"):k===r.i?"cur":"")+'"></i>').join("")+'</div>';
  const d=it.d;
  if(it.type==="q"){h+='<p class="q">'+esc(d[0])+'</p><div class="opts">';
    st.order.forEach(k=>{let cls="";if(st.pick!=null){if(k===d[2])cls=" ok";else if(k===st.pick)cls=" ko"}h+='<button class="opt'+cls+'" data-a="pick" data-k="'+k+'" '+(st.pick!=null?"disabled":"")+'>'+esc(d[1][k])+'</button>'});
    h+='</div>';if(st.pick!=null){const ok=st.pick===d[2];h+='<div class="feedback '+(ok?"ok":"ko")+'"><b>'+(ok?"Esatto!":"Sbagliato. La risposta giusta è: "+esc(d[1][d[2]]))+'</b>'+(d[3]?'<br>'+esc(d[3]):'')+'</div>'+nextBtn()}}
  else if(it.type==="g"){h+='<p class="q">'+esc(d[0])+'</p>';
    if(st.ans==null)h+='<input class="gap" id="gapin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Scrivi la parola mancante"><div class="next"><button class="btn" data-a="gapskip">Non lo so</button><button class="btn primary" data-a="gapcheck">Verifica</button></div>';
    else h+='<div class="feedback '+(st.ok?"ok":"ko")+'"><b>'+(st.ok?"Corretto: ":"Risposta corretta: ")+'</b>'+esc(d[1])+(st.ok||!st.ans?"":'<br><span class="muted">Hai scritto: '+esc(st.ans)+'</span>')+'</div>'+nextBtn()}
  else if(it.type==="o"){h+='<p class="q">'+esc(d[0])+'</p>';
    if(!st.shown)h+='<textarea id="openin" placeholder="Scrivi la tua risposta come se fossi all’esame…">'+esc(st.text||"")+'</textarea><div class="next"><button class="btn primary" data-a="openshow">Confronta con la risposta modello</button></div>';
    else{const t=norm(st.text||"");const hits=d[2].map(k=>t.includes(norm(k)));const n=hits.filter(Boolean).length;
      h+='<p class="muted" style="margin:0 0 6px">Parole chiave trovate: '+n+' su '+d[2].length+'</p><div class="kws">'+d[2].map((k,i)=>'<span class="kw'+(hits[i]?" hit":"")+'">'+esc(k)+'</span>').join("")+'</div><div class="model"><b style="font-family:var(--display)">Risposta modello</b><br>'+esc(d[1])+'</div>';
      h+=st.rated==null?'<p style="margin:16px 0 0;font-weight:600">Com’è andata?</p><div class="rate"><button data-a="rate" data-v="ko">Da rivedere</button><button data-a="rate" data-v="half">A metà</button><button data-a="rate" data-v="ok">La sapevo</button></div>':nextBtn()}}
  else if(it.type==="f"){h+='<div class="flip"><div class="fc'+(st.flip?" on":"")+'" data-a="flip" tabindex="0" role="button" aria-label="Gira la carta"><div class="front"><p class="q">'+esc(d[0])+'</p><small>Tocca per girare</small></div><div class="back">'+esc(d[1])+'</div></div></div>';
    if(st.flip)h+='<div class="rate" style="grid-template-columns:1fr 1fr"><button data-a="fcrate" data-v="ko">Da ripassare</button><button data-a="fcrate" data-v="ok">Lo sapevo</button></div>'}
  else if(it.type==="m"){h+='<p class="q">Abbina ogni voce alla sua coppia</p><div class="match"><div class="col">';
    d.forEach((p,k)=>{h+='<button class="mi'+(st.found[k]?" done":"")+(st.sel===k?" sel":"")+'" data-a="ml" data-k="'+k+'" '+(st.found[k]?"disabled":"")+'>'+esc(p[0])+'</button>'});
    h+='</div><div class="col">';st.right.forEach(k=>{h+='<button class="mi'+(st.found[k]?" done":"")+(st.bad===k?" bad shake":"")+'" data-a="mr" data-k="'+k+'" '+(st.found[k]?"disabled":"")+'>'+esc(d[k][1])+'</button>'});
    h+='</div></div><p class="muted" style="margin:12px 0 0">Errori di abbinamento: '+st.miss+'</p>';
    if(Object.keys(st.found).length===d.length)h+='<div class="feedback '+(st.miss?"ko":"ok")+'"><b>'+(st.miss?"Completato con "+st.miss+" errori.":"Perfetto, nessun errore.")+'</b></div>'+nextBtn()}
  return h+'</div>'}
function done(res){const r=V.run;const it=r.items[r.i];r.res[r.i]=res;
  const o=record(it.id,res);let g=o.gain;
  if(res==="ok"){r.combo++;if(r.combo>=3){g+=2;addXP(2)}}else r.combo=0;
  r.xp+=g;if(g)toast((o.rec?"Errore recuperato! ":"")+"+"+g+" XP"+(res==="ok"&&r.combo>=3?" (combo)":""))}
function runEnd(){const r=V.run;const ok=r.res.filter(x=>x==="ok").length;const tot=r.items.length;
  if(!r.ended){r.ended=1;if(ok===tot&&tot>=5&&r.items.every(x=>x.type==="q")&&!S.badges.perfect){S.badges.perfect=today();queue.push(overlayHTML("✨","Nuovo badge: Piastra sterile","Quiz senza nemmeno un errore. Bravissima, "+nm()+"!"));save();setTimeout(flush,300)}}
  const msg=ok===tot?"Piastra pulita, "+nm()+": nessun errore!":ok/tot>=.7?"Ottimo lavoro, "+nm()+". Gli errori sono nella lista da rivedere.":"Rileggi la parte di studio e riprova: gli errori sono salvati.";
  let h='<div class="qcard" style="text-align:center"><p class="muted" style="margin:0">'+esc(r.title)+'</p><h3 style="font-size:2.6rem;margin:6px 0;letter-spacing:-.03em">'+ok+' / '+tot+'</h3><p>'+msg+'</p><p class="muted">+'+r.xp+' XP in questa sessione, '+(S.days[today()]||0)+' di '+S.goal+' XP oggi</p><div class="next" style="justify-content:center">';
  if(ok<tot)h+='<button class="btn" data-a="retrywrong">Rifai solo le sbagliate</button>';
  if(V.view==="chapter"){const nx={flash:"quiz",quiz:"eserc",eserc:"aperte",aperte:"recap"}[V.tab];h+='<button class="btn" data-a="restart">'+(V.tab==="quiz"?"Nuovo quiz: altre 10 domande":"Ricomincia")+'</button><button class="btn primary" data-a="tab" data-t="'+nx+'">'+(nx==="recap"?"Vai al recap":"Continua: "+TABTITLE[nx])+'</button>'}
  else h+='<button class="btn primary" data-a="home">Torna alla home</button>';
  return h+'</div></div>'}
function runScreen(){return topbar('<button class="back" data-a="'+(V.run&&V.run.back?"backrun":"home")+'">‹ Esci</button>')+'<main class="wrap"><div class="narrow" style="padding-top:22px">'+runnerView()+'</div></main>'}

/* ---------- interrogazione col professore (ElevenLabs) ---------- */
const OR={sel:null,num:6,corr:"alla fine",conv:null,status:"setup",mode:"",log:[],result:null,err:"",started:0,timer:null};
function orSel(){if(!OR.sel){OR.sel={};const sk=V.subj;SUBJ[sk].ch.forEach(c=>OR.sel[c.key]=1)}return OR.sel}
function orKeys(){const s=orSel();return Object.keys(CH).filter(k=>s[k])}
function orAmbito(keys){
  const parts=[];SUBJECTS.forEach(sk=>{const all=SUBJ[sk].ch.map(c=>c.key);const inS=all.filter(k=>keys.includes(k));if(!inS.length)return;
    if(inS.length===all.length)parts.push("tutto il programma di "+SUBJ[sk].name);
    else parts.push(SUBJ[sk].name+", "+(inS.length===1?"capitolo ":"capitoli ")+inS.map(k=>CH[k].id+" ("+CH[k].t+")").join(", "))});
  return parts.join("; e ")}
function orMateriale(keys){return keys.map(k=>{const c=CH[k];return "## "+SUBJ[c.subj].name+" – Cap. "+c.id+": "+c.t+"\n"+c.topics.map(t=>"### "+t[0]+"\n"+t[1].map(x=>"- "+x).join("\n")).join("\n")+"\nDa ricordare: "+c.recap.join(" ")}).join("\n\n")}
function votoTxt(o){return o.voto<18?"Non sufficiente":o.voto+(o.lode?" e lode":"")+"/30"}
function orHistory(){const h=(S.orali||[]).slice().reverse();if(!h.length)return "";
  return '<section class="panel"><h3>Le tue interrogazioni</h3>'+h.slice(0,10).map(o=>'<div class="erow"><span class="x" style="background:'+(o.voto>=18?"var(--ok-soft);color:var(--ok)":"var(--saf-soft)")+';min-width:54px">'+(o.voto<18?"✗":o.voto+(o.lode?"L":""))+'</span><div class="tx">'+esc(o.ambito)+'<div class="tp">'+nice(o.data)+(o.giudizio?" · "+esc(o.giudizio):"")+'</div></div></div>').join("")+'</section>'}
function oraleView(){
  let h=topbar('<button class="back" data-a="home">‹ Home</button>');
  h+='<main class="wrap"><div class="narrow"><div class="chead"><div><div class="n">Simulazione d’esame orale</div><h2>Interrogazione col professore</h2><div class="s">Parli a voce con il professore: ti fa le domande, ti aiuta se non sai, alla fine ti corregge e ti dà un voto in trentesimi.</div></div></div>';
  if(OR.status==="setup"){
    const s=orSel();const keys=orKeys();
    h+='<section class="panel"><h3>Su cosa vuoi essere interrogata?</h3>';
    SUBJECTS.forEach(sk=>{const all=SUBJ[sk].ch;const n=all.filter(c=>s[c.key]).length;
      h+='<div style="margin:14px 0 8px;display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><b>'+esc(SUBJ[sk].name)+' <span class="muted" style="font-weight:600">('+n+'/'+all.length+')</span></b><span><button class="btn small" data-a="orall" data-s="'+sk+'">Tutto</button> <button class="btn small" data-a="ornone" data-s="'+sk+'">Nessuno</button></span></div><div style="display:flex;flex-wrap:wrap;gap:6px">'+
      all.map(c=>'<button class="chip'+(s[c.key]?" y":"")+'" data-a="orch" data-ch="'+c.key+'" aria-pressed="'+!!s[c.key]+'">'+(s[c.key]?"✓ ":"")+c.id+'. '+esc(c.t)+'</button>').join("")+'</div>'});
    h+='</section><section class="panel"><h3>Come si svolge</h3><p class="muted" style="margin:0 0 6px">Quante domande principali</p><div class="seg">'+[4,6,8,12].map(n=>'<button data-a="ornum" data-x="'+n+'" aria-pressed="'+(OR.num===n)+'">'+n+'</button>').join("")+'</div>'+
      '<p class="muted" style="margin:16px 0 6px">Quando ti corregge</p><div class="seg"><button data-a="orcorr" data-x="alla fine" aria-pressed="'+(OR.corr==="alla fine")+'">Alla fine, come all’esame</button><button data-a="orcorr" data-x="subito" aria-pressed="'+(OR.corr==="subito")+'">Subito, dopo ogni risposta</button></div>'+
      '<p class="muted" style="margin:16px 0 0;font-size:.92rem">Se non sai una risposta dillo pure (“non lo so”, “non ricordo”): ti darà un indizio e poi la risposta. Durata massima 20 minuti. Serve il permesso al microfono.</p></section>';
    if(OR.err)h+='<p class="status ko" style="margin:0 0 12px">'+esc(OR.err)+'</p>';
    h+='<div class="next" style="margin-bottom:22px"><button class="btn primary" data-a="orstart" '+(keys.length?"":"disabled")+'>🎙️ Inizia l’interrogazione</button></div>'+orHistory();
  }else if(OR.status==="result"){
    const o=OR.result;
    if(o){h+='<section class="panel" style="text-align:center"><p class="muted" style="margin:0">'+esc(o.ambito)+'</p><p class="big" style="margin:8px 0 0">'+(o.voto>=28?"🏅":o.voto>=18?"🎓":"📚")+'</p><h3 style="font-size:2.6rem;margin:4px 0;letter-spacing:-.03em">'+votoTxt(o)+'</h3><p style="font-family:var(--serif);font-size:1.1rem">'+esc(o.giudizio||"")+'</p>'+(o.xp?'<p class="muted">+'+o.xp+' XP</p>':'')+'</section>'+
      (o.punti_forti?'<section class="panel"><h3>Cosa hai saputo bene</h3><p style="font-family:var(--serif);margin:0;line-height:1.6">'+esc(o.punti_forti)+'</p></section>':'')+
      (o.da_ripassare?'<section class="panel"><h3>Da ripassare</h3><p style="font-family:var(--serif);margin:0;line-height:1.6;white-space:pre-line">'+esc(o.da_ripassare)+'</p></section>':'')}
    else h+='<section class="panel"><h3>Interrogazione interrotta</h3><p class="muted" style="margin:0">La conversazione si è chiusa prima che il professore desse il voto. Puoi rileggere la trascrizione qui sotto o ricominciare.</p></section>';
    h+=orLogHTML()+'<div class="next"><button class="btn" data-a="home">Torna alla home</button><button class="btn primary" data-a="ornew">Nuova interrogazione</button></div>';
  }else{
    const lab={connecting:"Mi collego al professore…",listening:"Ti ascolto",speaking:"Il professore parla"}[OR.status==="connecting"?"connecting":OR.mode==="speaking"?"speaking":"listening"];
    h+='<section class="panel" style="text-align:center"><div class="orb'+(OR.mode==="speaking"?" talk":"")+(OR.status==="connecting"?" wait":"")+'" aria-hidden="true">🎓</div><p style="font-weight:700;font-size:1.15rem;margin:10px 0 2px" id="orlab">'+lab+'</p><p class="muted" style="margin:0" id="ortime"></p><div class="next" style="justify-content:center"><button class="btn" data-a="orstop">Termina l’interrogazione</button></div></section>'+orLogHTML();
  }
  return h+'</div></main>'}
function orLogHTML(){if(!OR.log.length)return "";return '<section class="panel"><h3>Trascrizione</h3><div id="orlog">'+OR.log.map(m=>'<div class="erow"><span class="x" style="'+(m.r==="ai"?"background:var(--gram-soft);color:var(--gram)":"background:var(--agar-soft);color:var(--ink)")+'">'+(m.r==="ai"?"P":nm().slice(0,1)||"Tu")+'</span><div class="tx">'+esc(m.t)+'</div></div>').join("")+'</div></section>'}
function orRefresh(){if(V.view!=="orale")return;const y=window.scrollY;render();window.scrollTo(0,y)}
function orTick(){const el=document.getElementById("ortime");if(!el||!OR.started)return;const s=Math.floor((Date.now()-OR.started)/1000);el.textContent=Math.floor(s/60)+":"+String(s%60).padStart(2,"0")+" di 20:00"}
async function oraleStart(){
  const keys=orKeys();if(!keys.length)return;
  OR.status="connecting";OR.err="";OR.log=[];OR.result=null;OR.mode="";render();window.scrollTo(0,0);
  const ambito=orAmbito(keys);
  try{
    await navigator.mediaDevices.getUserMedia({audio:true}).then(st=>st.getTracks().forEach(t=>t.stop()));
    const {Conversation}=await import(EL_SDK);
    OR.conv=await Conversation.startSession({
      agentId:AGENT_ID,connectionType:"webrtc",
      dynamicVariables:{nome:S.name||"studentessa",ambito,correzioni:OR.corr,num_domande:String(OR.num),materiale:orMateriale(keys)},
      clientTools:{registra_voto:(p)=>{oraleVoto(p,ambito);return "Voto registrato nell'app."}},
      onConnect:()=>{OR.status="live";OR.started=Date.now();clearInterval(OR.timer);OR.timer=setInterval(orTick,1000);orRefresh()},
      onModeChange:({mode})=>{OR.mode=mode;const l=document.getElementById("orlab");const o=document.querySelector(".orb");if(l)l.textContent=mode==="speaking"?"Il professore parla":"Ti ascolto";if(o)o.classList.toggle("talk",mode==="speaking")},
      onMessage:(m)=>{const t=(m.message||"").replace(/\[[^\]]{1,24}\]\s*/g,"").trim();if(!t)return;OR.log.push({r:(m.role||m.source)==="user"?"user":"ai",t});orRefresh()},
      onError:(e)=>{console.warn("ElevenLabs:",e)},
      onDisconnect:()=>{clearInterval(OR.timer);OR.conv=null;if(OR.status!=="setup"){OR.status="result";orRefresh()}}
    });
  }catch(e){
    console.warn(e);OR.conv=null;OR.status="setup";
    OR.err=(e&&e.name==="NotAllowedError")?"Serve il permesso al microfono: consentilo nelle impostazioni del browser e riprova.":"Non riesco a collegarmi al professore. Controlla la connessione e riprova tra poco.";
    render()}}
function oraleVoto(p,ambito){
  const voto=Math.max(0,Math.min(30,Math.round(+p.voto||0)));
  const o={data:today(),ambito,voto,lode:!!p.lode&&voto===30,giudizio:String(p.giudizio||""),punti_forti:String(p.punti_forti||""),da_ripassare:String(p.da_ripassare||""),domande:OR.num};
  o.xp=voto>=18?20+(voto-18)*5+(o.lode?40:0):10;
  S.orali=(S.orali||[]).concat([o]);OR.result=o;save();addXP(o.xp);checkBadges();toast("Voto registrato: "+votoTxt(o))}
function oraleStop(silent){clearInterval(OR.timer);const c=OR.conv;OR.conv=null;if(c){try{c.endSession()}catch(e){}}if(silent){OR.status="setup";return}OR.status="result";render()}

/* ---------- render & events ---------- */
function render(){
  const f={home,chapter:chapterView,errors:errorsView,run:runScreen,plan:planView,rewards:rewardsView,settings:settingsView,orale:oraleView}[V.view];
  $app.innerHTML=f();
  const gi=document.getElementById("gapin");if(gi){gi.focus({preventScroll:true});gi.addEventListener("keydown",e=>{if(e.key==="Enter")act("gapcheck")})}
  flush()}
function go(view){if(V.view==="orale"&&view!=="orale")oraleStop(true);V.view=view;V.run=null;render();window.scrollTo(0,0)}
function openTab(t){V.tab=t;if(t!=="studia"&&t!=="recap")newRun(tabRun(CH[V.ch],t),TABTITLE[t]);else V.run=null}
function bkCode(){return "COLTURA1:"+btoa(unescape(encodeURIComponent(JSON.stringify(S))))}
function bkRestore(txt){
  let o;try{txt=String(txt).trim();const i=txt.indexOf("COLTURA1:");if(i<0)throw 0;o=JSON.parse(decodeURIComponent(escape(atob(txt.slice(i+9).replace(/\s/g,"")))));if(!o||typeof o.xp!=="number"||typeof o.done!=="object")throw 0}
  catch(e){toast("Codice non valido: controlla di averlo incollato tutto");return}
  if(!confirm("Sostituire i progressi attuali con quelli del backup ("+o.xp+" XP, serie di "+(o.streak||0)+" giorni)?"))return;
  S=Object.assign(base(),o);save();checkStreak();toast("Progressi ripristinati");go("home")}
function fallbackCopy(c,ok){const t=document.getElementById("bkin");if(!t){toast("Copia non riuscita");return}t.value=c;t.focus();t.select();let r=false;try{r=document.execCommand("copy")}catch(e){}if(r)ok();else toast("Il codice è nel riquadro: selezionalo e copialo")}
function act(a,el){
  const r=V.run;
  switch(a){
    case "home":case "errors":case "rewards":case "settings":case "plan":go(a);break;
    case "subj":V.subj=el.dataset.s;S.lastSubj=V.subj;save();V.firstHome=true;render();break;
    case "open":V.view="chapter";V.ch=el.dataset.ch;V.subj=CH[V.ch].subj;openTab(el.dataset.t||"studia");render();window.scrollTo(0,0);break;
    case "tab":{const y=window.scrollY;openTab(el.dataset.t);render();const ch=document.querySelector(".chead");const lim=ch?ch.offsetTop+ch.offsetHeight-60:0;window.scrollTo(0,Math.min(y,lim));break}
    case "blur":V.blur=!V.blur;render();break;
    case "rev":el.classList.add("on");break;
    case "studied":{const k=V.ch+"-"+el.dataset.i;if(!S.studied[k]){S.studied[k]=1;addXP(5);toast("+5 XP")}render();break}
    case "pick":{const it=r.items[r.i];r.state.pick=+el.dataset.k;done(r.state.pick===it.d[2]?"ok":"ko");render();break}
    case "gapcheck":{const it=r.items[r.i];const v=(document.getElementById("gapin")||{}).value||"";if(!v.trim()){toast("Scrivi una risposta oppure tocca “Non lo so”");return}
      r.state.ans=v;r.state.ok=[it.d[1]].concat(it.d[2]||[]).map(norm).includes(norm(v));done(r.state.ok?"ok":"ko");render();break}
    case "gapskip":r.state.ans="";r.state.ok=false;done("ko");render();break;
    case "openshow":{const t=document.getElementById("openin");r.state.text=t?t.value:"";r.state.shown=true;render();break}
    case "rate":r.state.rated=el.dataset.v;done(el.dataset.v);render();break;
    case "flip":r.state.flip=!r.state.flip;el.classList.toggle("on");if(r.state.flip&&!document.querySelector(".rate"))setTimeout(render,matchMedia("(prefers-reduced-motion: reduce)").matches?0:480);break;
    case "fcrate":done(el.dataset.v);r.i++;prepItem();render();break;
    case "ml":r.state.sel=+el.dataset.k;r.state.bad=null;render();break;
    case "mr":{const k=+el.dataset.k;if(r.state.sel==null){toast("Scegli prima una voce a sinistra");return}
      if(k===r.state.sel){r.state.found[k]=1;r.state.sel=null;r.state.bad=null;if(Object.keys(r.state.found).length===r.items[r.i].d.length)done(r.state.miss?"ko":"ok")}
      else{r.state.miss++;r.state.bad=k}render();break}
    case "next":r.i++;prepItem();render();{const q=document.querySelector(".qcard");if(q&&q.getBoundingClientRect().top<0)q.scrollIntoView({block:"start"})}break;
    case "retrywrong":{const w=r.items.filter((_,k)=>r.res[k]!=="ok");const b=r.back;newRun(w,r.title+" (da rifare)",b);render();break}
    case "restart":openTab(V.tab);render();break;
    case "mix":{V.view="run";newRun(shuffle(ALL.filter(x=>x.type==="q"&&CH[x.ch].subj===V.subj)).slice(0,10),"Sfida mista");render();window.scrollTo(0,0);break}
    case "reviewsubj":{const sk=(el&&el.dataset.s)||V.subj;V.view="run";newRun(shuffle(errKeys(sk).map(k=>IDX[k])),"Ripasso errori","errors");render();window.scrollTo(0,0);break}
    case "reviewch":{const l=errKeys().filter(k=>IDX[k].ch===V.ch).map(k=>IDX[k]);V.view="run";newRun(shuffle(l),"Ripasso errori","chapter");render();window.scrollTo(0,0);break}
    case "backrun":{const b=V.run.back;V.run=null;if(b==="chapter"){V.view="chapter";openTab("recap")}else V.view=b;render();break}
    case "closeov":{const o=document.querySelector(".overlay");if(o)o.remove();flush();render();break}
    case "setexam":{const v=(document.getElementById("examdate")||{}).value;if(!v||diffDays(today(),v)<1){toast("Scegli una data a partire da domani");return}
      const sk=V.subj;S.exam[sk]=v;delete S.today[sk];
      const rem=SUBJ[sk].ch.filter(c=>!complete(c.key)).length;S.planStart[sk]={date:today(),D:diffDays(today(),v),total:rem,doneAtStart:SUBJ[sk].ch.length-rem};
      const sg=suggestedGoal(sk);if(sg)S.goal=sg;save();toast("Piano creato. Obiettivo: "+S.goal+" XP al giorno");render();break}
    case "clearexam":delete S.exam[V.subj];delete S.today[V.subj];delete S.planStart[V.subj];save();go("home");break;
    case "goal":{S.goal=+el.dataset.x;const t=today();if((S.days[t]||0)>=S.goal&&!S.goalDays[t]){S.goalDays[t]=1;goalReached()}save();render();break}
    case "setname":{const v=(document.getElementById("nm")||{}).value||"";S.name=v.trim().slice(0,30);save();toast("Salvato");render();break}
    case "bkcopy":{const c=bkCode();const ok=()=>{S.lastBackup=today();save();render();toast("Codice copiato: incollalo nelle Note o mandalo in chat")};if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(c).then(ok,()=>fallbackCopy(c,ok));else fallbackCopy(c,ok);break}
    case "bkdown":{const b=new Blob([bkCode()],{type:"text/plain"});const l=document.createElement("a");l.href=URL.createObjectURL(b);l.download="coltura-backup-"+today()+".txt";document.body.appendChild(l);l.click();l.remove();S.lastBackup=today();save();toast("File di backup creato");break}
    case "bkimport":bkRestore((document.getElementById("bkin")||{}).value||"");break;
    case "orale":OR.status="setup";OR.err="";go("orale");break;
    case "orch":{const k=el.dataset.ch;const s=orSel();if(s[k])delete s[k];else s[k]=1;orRefresh();break}
    case "orall":{const s=orSel();SUBJ[el.dataset.s].ch.forEach(c=>s[c.key]=1);orRefresh();break}
    case "ornone":{const s=orSel();SUBJ[el.dataset.s].ch.forEach(c=>delete s[c.key]);orRefresh();break}
    case "ornum":OR.num=+el.dataset.x;orRefresh();break;
    case "orcorr":OR.corr=el.dataset.x;orRefresh();break;
    case "orstart":oraleStart();break;
    case "orstop":oraleStop(false);break;
    case "ornew":OR.status="setup";OR.log=[];OR.result=null;render();window.scrollTo(0,0);break;
    case "reset":if(confirm("Azzerare XP, serie, badge, errori e piani? L’operazione non si può annullare.")){const n=S.name;S=base();S.name=n;save();go("home");toast("Progressi azzerati")}break;
  }
}
document.addEventListener("click",e=>{const el=e.target.closest("[data-a]");if(!el||el.disabled)return;act(el.dataset.a,el)});
document.addEventListener("change",e=>{if(e.target.id!=="bkfile"||!e.target.files[0])return;const fr=new FileReader();fr.onload=()=>bkRestore(fr.result);fr.readAsText(e.target.files[0]);e.target.value=""});
document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches('[data-a="flip"],[data-a="rev"]')){e.preventDefault();act(e.target.dataset.a,e.target)}});
checkStreak();render();
})();
