// Cuando tengas los mensajes, completa message y photo. No se asignan fotos a personas sin confirmación.
const letters = [
  {name:'Luciana',message:"HOLA MI MILEEE HERMOSA BELLA FANTÁSTICA INCREÍBLE SÚPER MEGA HIPER RECONTRA FABULOSA, FELIZ CUMPLEAÑOS MI MILELEEE!!!, Ya son 19 añotes que cumples que felicidad, se que esto es una gran sorpresa para ti de verdad, se que no te lo esperabas fue plan mío y un poco de chavo ajajsj más bien de los dos para tí, se que has estado mal este tiempo pero tranquila estoy yo mientras que estoy yo todo saldrá bien, el año pasado te dije que este año sería mejor porque no pude estar contigo y salió un poquito mal pero este año no mi vida, tu papá por algo me puse en tu camino yo doy todo de mi para las personas especiales que tengo en mi corazóncito, tu eres una de ellas, una de las únicas ajajja no sabes cómo soy gracias por haberte conocido mi mile,.me salvaste de muchas cosas, creer que tengo a mi hermana de otra madre, te quiero mucho y que este añito se cumpla todos tus sueños y deseos de parte de tu loquita lucciii",photo:'assets/foto-luciana.jpg'},
  {name:'Yanin',message:"Quiero agradecerte por estar siempre ahí. Tenerte como hermana es saber que nunca estoy sola, que siempre tengo una cómplice, una compañera de risas y alguien con quien puedo contar en cualquier momento. Gracias por tus consejos, por las charlas y por todos los momentos que compartimos.\n\nA veces podemos discutir o tener nuestras diferencias, pero nada de eso cambia el cariño gigante que te tengo y lo mucho que te admiro. Me hace muy feliz verte crecer, lograr tus metas y saber que siempre vamos a caminar de la mano en esta vida, apoyándonos pase lo que pase.\n\nMe encanta ver cómo cada día te esfuerzas por conseguir lo que te propones y cómo superas cualquier obstáculo que se te cruza. De verdad admiro tu determinación, y quiero que sepas que siempre voy a estar celebrando cada uno de tus triunfos y apoyándote cuando las cosas se pongan difíciles,Te quiero mucho renegona. Feliz cumpleaños",photo:'assets/foto-yanin.jpg'},
  {name:'Ángelo',message:"Feliz cumpleaños, Milena. Hoy quería aprovechar para decirte algo que quizá no te digo muy seguido. Todavía me acuerdo de cómo nos conocimos: fue una tarde en el colegio, cuando tú estabas practicando saya. Yo me acerqué de chismoso y, sin imaginarlo, terminé conociéndote por primera vez. Me da risa pensar que todo empezó así, de pura casualidad.\n\nDespués fuimos agarrando confianza y nos hicimos amigos. Pasar tiempo contigo, con Luciana y con Alfonso era de las cosas que más disfrutaba. Nos reíamos por cualquier cosa y la pasábamos increíble. Son recuerdos que guardo con mucho cariño.\n\nCuando terminaste el colegio, cada uno siguió con sus cosas y nos fuimos distanciando. Hubo un tiempo en que casi no hablábamos, pero me alegró mucho que este año volviéramos a conversar. Fue bonito darme cuenta de que, aunque haya pasado tiempo, sigo teniéndote el mismo cariño.\n\nEres una buena persona, Milena, y quiero que sepas que eres importante para mí. Te tengo muchísimo aprecio y agradezco haberte conocido aquella tarde tan inesperada. Espero que tus 19 años vengan con momentos bonitos, personas que te cuiden y muchas razones para sonreír. Feliz cumpleaños, y ojalá sigamos sumando recuerdos juntos.",photo:'assets/saludo-milena-angelo.webp'},
  {name:'Kiara',message:'Feliz cumpleaños, mi Milena hermosa. 🥹💗 Hoy cumples tus 19 añitos y no sabes lo feliz que me hace poder celebrar este día tan especial contigo. Ya casi son 2 años de amistad desde que nos conocimos al comenzar a estudiar Enfermería, y qué bonito ha sido compartir tantas risas, locuras y momentos juntas. 🩺🤍\nLe agradezco mucho a Dios por haber cruzado nuestros caminos y por regalarme una amistad tan bonita como la tuya. Deseo de todo corazón que cumplas cada uno de tus sueños, que nunca te falten motivos para sonreír y que la vida te regale muchísima felicidad. Espero que nuestra amistad siga creciendo y que nos queden muchísimos años más de aventuras y recuerdos juntas. Te quiero muchísimo, mi niña. ¡Felices 19 añitos! 🎂💕🫂',photo:'assets/foto-kiara.jpg'},
  {name:'Lucero',message:"Hoy es un día muy especial porque celebramos tu vida y quiero aprovechar para decirte lo mucho que te quiero y lo importante que eres para mí. 💕 Me siento muy feliz de poder llamarte mi amiga y de haber compartido tantos momentos, risas, conversaciones y recuerdos juntas.\n\nEres una persona increíble, con un corazón muy bonito y una forma de ser que te hace especial. Nunca olvides lo valiosa que eres y todo lo bonito que mereces. ✨ Deseo de todo corazón que este nuevo año de vida esté lleno de felicidad, salud, amor, sueños cumplidos y muchísimas razones para sonreír.\n\nEspero que nunca cambies esa hermosa manera de ser, que sigas luchando por tus sueños y que siempre tengas personas a tu lado que te quieran, te valoren y te apoyen de verdad. 💐\n\nFeliz cumpleaños, Milena. 🥳💗 Gracias por existir, por tu amistad y por tantos momentos bonitos. Espero que nuestra amistad siga creciendo y que nos queden muchísimos recuerdos por vivir juntas. Te quiero muchísimo, amiga, y deseo que hoy y siempre seas muy feliz. 🥹🎂🎀\n\nCon muchísimo cariño,\nLucero, tu amiga por siempre. 💕",photo:'assets/foto-lucero.jpg'},
  {name:'Angie',message:"Hola Milena, te conozco desde la primaria y sé que eres un chica increíble y maravilloso, contagias tus risas y su buena vibra, nunca desde que apaguen el brillo que tienes en ti, feliz cumpleaños espero que tu vida se siga llegando de bonitos recuerdos porque te lo mereces!!! Que Diosito y la virgen te cuiden en todo momento 💗🫂",photo:'assets/saludo-milena-angie.png'}
];
const memories=Array.from({length:36},(_,i)=>({src:`assets/memory-${String(i+1).padStart(2,'0')}.jpg`,alt:`Recuerdo ${i+1} con Milena y sus amigos`}));
const pages=['inicio','fiesta','cartitas','recuerdos','carta-final'];
const labels=['Inicio','Celebración','Cartitas','Recuerdos','Carta final'];
let current='inicio',currentPhoto=0,activeLetter=-1;const opened=new Set();
const $=s=>document.querySelector(s);
const grid=$('#letters-grid');
letters.forEach((letter,i)=>{const btn=document.createElement('button');btn.className=`envelope${letter.name?'':' pending'}`;btn.setAttribute('aria-label',`Abrir cartita ${i+1}${letter.name?' de '+letter.name:': nombre pendiente'}`);btn.innerHTML=`<span class="number">${String(i+1).padStart(2,'0')}</span><span class="seal" aria-hidden="true">♥</span><span class="name"></span>`;btn.querySelector('.name').textContent=letter.name||'Nombre por añadir';btn.addEventListener('click',()=>openLetter(i));grid.append(btn)});
pages.forEach((id,i)=>{const btn=document.createElement('button');btn.setAttribute('aria-label',labels[i]);btn.addEventListener('click',()=>go(id));$('#steps').append(btn)});
function go(id,updateHash=true){if(!pages.includes(id))id='inicio';document.querySelectorAll('dialog[open]').forEach(d=>d.close());current=id;pages.forEach(p=>{const s=document.getElementById(p);s.hidden=p!==id;s.classList.toggle('active',p===id)});[...$('#steps').children].forEach((b,i)=>{if(pages[i]===id)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});$('#back').hidden=id==='inicio';if(updateHash){try{history.replaceState(null,'','#'+id)}catch{ /* Algunos visores locales restringen el historial. */ }}window.scrollTo({top:0,behavior:'instant'});if(id!=='recuerdos')pauseFilm();if(id==='carta-final')confetti();else $('#confetti').replaceChildren();const h=document.querySelector(`#${id} h1,#${id} h2`);h.setAttribute('tabindex','-1');if(updateHash)h.focus({preventScroll:true})}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
$('#back').addEventListener('click',()=>go(pages[Math.max(0,pages.indexOf(current)-1)]));window.addEventListener('hashchange',()=>go(location.hash.slice(1),false));
function openLetter(i){activeLetter=i;const letter=letters[i];$('#modal-name').textContent=letter.name?`De ${letter.name}`:`Cartita ${i+1}`;const content=$('#letter-content');content.replaceChildren();if(letter.message){const p=document.createElement('p');p.style.whiteSpace='pre-wrap';p.textContent=letter.message;content.append(p);if(letter.photo){if(letter.name==='Ángelo'){const scene=document.createElement('figure');scene.className='friendship-scene';const img=document.createElement('img');img.src=letter.photo;img.alt='Hello Kitty y un chico de piel trigueña y cabello oscuro chocan los puños';const milena=document.createElement('figcaption');milena.className='friendship-name milena-name';milena.textContent='Milena';const angelo=document.createElement('figcaption');angelo.className='friendship-name angelo-name';angelo.textContent='Ángelo';scene.append(img,milena,angelo);content.append(scene)}else{const img=document.createElement('img');img.src=letter.photo;img.alt=`Un recuerdo de ${letter.name} con Milena`;content.append(img)}}}else{const empty=document.createElement('div');empty.className='empty-letter';empty.innerHTML='<p>Esta cartita todavía guarda una sorpresa.</p><small>El mensaje y la foto llegarán pronto.</small>';content.append(empty)}$('#letter-dialog').showModal()}
function finishLetter(){if(activeLetter>=0){opened.add(activeLetter);grid.children[activeLetter].classList.add('opened');grid.children[activeLetter].querySelector('.seal').textContent='✓';$('#letter-count').textContent=`${opened.size} de ${letters.length} abiertas`}$('#letter-dialog').close()}
$('#finish-letter').addEventListener('click',finishLetter);$('#modal-memories').addEventListener('click',()=>{finishLetter();go('recuerdos')});
document.querySelectorAll('dialog .close').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
// Presentación de recuerdos. Agrega nuevas imágenes aumentando memories.
const filmPhoto=$('#film-photo'),filmBackdrop=$('#film-backdrop'),filmThumbs=$('#film-thumbs');
const filmCaptions=['Los momentos más simples también se vuelven inolvidables.','Una sonrisa que siempre recordaremos.','Qué bonito fue compartir este día.','Contigo, cada plan tuvo algo especial.','Esos días que dan ganas de repetir.','Nuestra historia también vive en estas fotos.'];
const filmMusic=document.getElementById('film-music');
const backgroundMusic=document.getElementById('background-music');
let soundReady=false;
const fades=new Map();
function volumeOf(audio){return audio.volume;}
function setVolume(audio,value){audio.muted=false;audio.volume=Math.max(0,Math.min(1,value));}
function audioError(){document.getElementById('audio-help').hidden=false;}
function fadeAudio(audio,target,duration,done){
 clearInterval(fades.get(audio));
 const start=volumeOf(audio),started=performance.now();
 const timer=setInterval(()=>{
  const progress=Math.min(1,(performance.now()-started)/duration);
  setVolume(audio,start+(target-start)*progress);
  if(progress===1){clearInterval(timer);fades.delete(audio);if(done)done();}
 },40);
 fades.set(audio,timer);
}
function fadeMusic(target,duration){fadeAudio(filmMusic,target,duration);}
function restoreBackground(){if(soundReady){backgroundMusic.play().catch(audioError);fadeAudio(backgroundMusic,0.5,1600);}}
function openSurprise(){
 soundReady=true;
 clearInterval(fades.get(backgroundMusic));
 setVolume(backgroundMusic,0.5);
 backgroundMusic.play().then(()=>{document.getElementById('audio-help').hidden=true;}).catch(audioError);
 document.getElementById('welcome-gate').close();
}
document.getElementById('open-surprise').addEventListener('click',openSurprise);
document.getElementById('welcome-gate').addEventListener('cancel',event=>event.preventDefault());
let filmIndex=0,filmTimer=null,filmPlaying=false,filmGeneration=0;
memories.forEach((m,i)=>{
 const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`Ver recuerdo ${i+1}`);
 const img=document.createElement('img');img.src=m.src;img.alt='';img.loading='lazy';b.append(img);
 b.addEventListener('click',()=>{showFilm(i);if(filmPlaying)armFilmTimer()});filmThumbs.append(b);
 const segment=document.createElement('span');$('#film-progress').append(segment);
});
function showFilm(i){
 filmIndex=(i+memories.length)%memories.length;
 const m=memories[filmIndex],generation=++filmGeneration;
 const preloaded=new Image();preloaded.src=m.src;
 const commit=()=>{
  if(generation!==filmGeneration)return;
  filmPhoto.classList.remove('film-enter');void filmPhoto.offsetWidth;
  filmPhoto.src=m.src;filmPhoto.alt=m.alt;filmBackdrop.src=m.src;filmPhoto.classList.add('film-enter');
  $('#film-caption').textContent=filmCaptions[filmIndex%filmCaptions.length];
  $('#film-counter').textContent=`${String(filmIndex+1).padStart(2,'0')} / ${String(memories.length).padStart(2,'0')}`;
  [...filmThumbs.children].forEach((b,n)=>{b.classList.toggle('selected',n===filmIndex);b.setAttribute('aria-current',n===filmIndex?'true':'false')});
  [...$('#film-progress').children].forEach((s,n)=>s.classList.toggle('done',n<=filmIndex));
  filmThumbs.children[filmIndex].scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});
 };
 if(preloaded.complete)commit();else preloaded.onload=commit;
}
function armFilmTimer(){clearTimeout(filmTimer);if(filmIndex===memories.length-1)fadeMusic(0,4000);else if(filmPlaying)fadeMusic(0.65,600);filmTimer=setTimeout(()=>{if(current!=='recuerdos'||!filmPlaying)return;if(filmIndex===memories.length-1){pauseFilm();return}showFilm(filmIndex+1);armFilmTimer()},4200)}
function playFilm(){if(filmIndex===memories.length-1){showFilm(0);filmMusic.currentTime=0;}filmPlaying=true;clearInterval(fades.get(filmMusic));setVolume(filmMusic,0);fadeAudio(backgroundMusic,0,1400);filmMusic.play().then(()=>{if(!filmPlaying)filmMusic.pause();else fadeMusic(0.65,1200)}).catch(()=>{audioError();pauseFilm();});$('#film-overlay').hidden=true;$('#film-toggle').innerHTML='Ⅱ <span>Pausar</span>';$('#film-toggle').setAttribute('aria-label','Pausar');armFilmTimer()}
function pauseFilm(){filmPlaying=false;fadeAudio(filmMusic,0,900,()=>{if(!filmPlaying)filmMusic.pause();});restoreBackground();clearTimeout(filmTimer);$('#film-toggle').innerHTML='▶ <span>Reproducir</span>';$('#film-toggle').setAttribute('aria-label','Reproducir')}
$('#film-overlay').addEventListener('click',playFilm);
$('#film-toggle').addEventListener('click',()=>filmPlaying?pauseFilm():playFilm());
$('#film-prev').addEventListener('click',()=>{showFilm(filmIndex-1);if(filmPlaying)armFilmTimer()});
$('#film-next').addEventListener('click',()=>{showFilm(filmIndex+1);if(filmPlaying)armFilmTimer()});
document.addEventListener('keydown',e=>{if(current!=='recuerdos'||document.querySelector('dialog[open]'))return;if(e.key==='ArrowRight')$('#film-next').click();if(e.key==='ArrowLeft')$('#film-prev').click();if(e.code==='Space'&&e.target.tagName!=='BUTTON'){e.preventDefault();$('#film-toggle').click()}});
showFilm(0);
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const container=$('#confetti');container.replaceChildren();const colors=['#d93668','#efb7cd','#d1b36b','#f083ab','#a396d3'];for(let i=0;i<65;i++){const c=document.createElement('i');c.className='confetto';c.style.cssText=`--c:${colors[i%colors.length]};--left:${Math.random()*100}%;--duration:${3+Math.random()*3}s;--delay:${Math.random()*1.4}s;border-radius:${i%3===0?'50%':'1px'}`;container.append(c)}setTimeout(()=>container.replaceChildren(),8000)}
go(location.hash.slice(1)||'inicio',false);

document.getElementById("welcome-gate").showModal();

document.getElementById('retry-sound').addEventListener('click',()=>{if(filmPlaying)filmMusic.play().then(()=>{document.getElementById('audio-help').hidden=true;fadeMusic(0.65,1200)}).catch(audioError);else openSurprise();});
