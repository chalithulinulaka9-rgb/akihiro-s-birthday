const intro=document.getElementById("intro");
const site=document.getElementById("site");
const chapter=document.getElementById("chapter");
const modal=document.getElementById("modal");

document.getElementById("begin").onclick=()=>{
  intro.style.transition="opacity 1s";
  intro.style.opacity="0";
  setTimeout(()=>{intro.classList.add("hidden");site.classList.remove("hidden")},900);
};

function go(id){
  const el=document.getElementById(id);
  if(el) el.scrollIntoView({behavior:"smooth"});
}
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go));

const nums={hero:"01",gift:"02",friends:"03",finale:"04"};
new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting&&nums[e.target.id])chapter.textContent="CHAPTER "+nums[e.target.id]})
},{threshold:.35}).observe(document.getElementById("hero"));
Object.keys(nums).slice(1).forEach(id=>{
  new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)chapter.textContent="CHAPTER "+nums[id]})
  },{threshold:.35}).observe(document.getElementById(id));
});

document.querySelectorAll(".friend-card").forEach(card=>{
  card.onclick=()=>{
    document.getElementById("modalName").textContent=card.dataset.name;
    document.getElementById("modalMessage").textContent=card.dataset.message;
    document.getElementById("modalGift").textContent=card.dataset.gift;
    const img=document.getElementById("modalImage");
    img.src=card.dataset.image;
    img.alt=card.dataset.name+" gift";
    img.style.display="block";
    img.onerror=()=>{img.style.display="none"};
    modal.classList.add("show");
    document.body.style.overflow="hidden";
  };
});
function closeModal(){modal.classList.remove("show");document.body.style.overflow=""}
document.getElementById("close").onclick=closeModal;
document.getElementById("close2").onclick=closeModal;
modal.onclick=e=>{if(e.target===modal)closeModal()};
document.onkeydown=e=>{if(e.key==="Escape")closeModal()};
document.getElementById("restart").onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

const particles=document.getElementById("particles");
function makeParticles(){
  for(let i=0;i<45;i++){
    const p=document.createElement("i");
    p.className="particle";
    p.style.left=Math.random()*100+"%";
    p.style.top=(65+Math.random()*35)+"%";
    p.style.animationDelay=Math.random()*2+"s";
    p.style.animationDuration=3+Math.random()*4+"s";
    particles.appendChild(p);
    setTimeout(()=>p.remove(),7500);
  }
}
new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)makeParticles()}),{threshold:.3}).observe(document.getElementById("finale"));

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

document.getElementById("begin").onclick = () => {

  // Start music
  bgMusic.volume = 0.35;

  bgMusic.play().catch(() => {
    console.log("Music could not start.");
  });

  // Hide intro
  intro.style.transition = "opacity 1s";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.classList.add("hidden");
    site.classList.remove("hidden");
  }, 900);
};

musicToggle.onclick = () => {

  if (bgMusic.paused) {

    bgMusic.play();

    musicToggle.classList.remove("off");
    musicToggle.innerHTML = "♫ <span>ON</span>";

  } else {

    bgMusic.pause();

    musicToggle.classList.add("off");
    musicToggle.innerHTML = "♫ <span>OFF</span>";

  }

};

const dragonSecret = document.getElementById("dragonSecret");
const dragonGift = document.getElementById("dragonGift");
const dragonBack = document.getElementById("dragonBack");

dragonSecret.addEventListener("click", () => {

  dragonGift.classList.add("show");

  document.body.style.overflow = "hidden";

});


dragonBack.addEventListener("click", () => {

  dragonGift.classList.remove("show");

  document.body.style.overflow = "";

});