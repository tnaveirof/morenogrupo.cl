const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));const gallery=document.querySelector('#projectGallery');
const images=[['assets/galeria-verticales/proyecto-33.jpg','RECEPCION   08'],['assets/galeria-verticales/proyecto-40.jpg','SALA DE PROC 01 Y CONSULTA   02'],['assets/galeria-verticales/proyecto-26.jpg','e9b311a3-a42e-4863-87fb-703f6ddd295b'],['assets/galeria-verticales/proyecto-15.jpg','B PASILLO 07'],['assets/galeria-verticales/proyecto-16.jpg','clinica'],['assets/galeria-verticales/nuevo-bano.jpg','Baño con lavamanos dorado y revestimiento marmoleado'],['assets/galeria-verticales/proyecto-28.jpg','E SALA DE PROC 2'],['assets/galeria-verticales/proyecto-02.jpg','60653b08-2fac-4a69-9e98-52b9df5e3676'],['assets/galeria-verticales/proyecto-10.jpg','B PASILLO 01'],['assets/galeria-verticales/proyecto-38.jpg','Recepción moderna con mármol y luz cálida'],['assets/galeria-verticales/proyecto-18.jpg','CONSULTA   02'],['assets/galeria-verticales/proyecto-24.jpg','diseno-arquitectura-bano'],['assets/galeria-verticales/proyecto-29.jpg','f41ad3f1-2313-4ea1-9a72-5ac7b2254af1'],['assets/galeria-verticales/proyecto-12.jpg','B PASILLO 03'],['assets/galeria-verticales/proyecto-32.jpg','RECEPCION   03'],['assets/galeria-verticales/proyecto-23.jpg','C SALA DE PROC 8'],['assets/galeria-verticales/nuevo-egon-recepcion-general.jpg','Vista general de recepción clínica'],['assets/galeria-verticales/proyecto-25.jpg','D SALA MULTIUSO 02'],['assets/galeria-verticales/proyecto-11.jpg','B PASILLO 02'],['assets/galeria-verticales/proyecto-34.jpg','recepcion'],['assets/galeria-verticales/proyecto-27.jpg','E SALA DE PROC 1'],['assets/galeria-verticales/proyecto-31.jpg','RECEPCION 04'],['assets/galeria-verticales/proyecto-09.jpg','b2f29a13-928e-456c-a95b-62d18977ad8b'],['assets/galeria-verticales/proyecto-14.jpg','B PASILLO 06'],['assets/galeria-verticales/proyecto-08.jpg','A RECEPCION 07'],['assets/galeria-verticales/proyecto-19.jpg','C SALA DE PROC 1'],['assets/galeria-verticales/proyecto-01.jpg','60246569-9be3-4885-baa9-ed37bfa8b387'],['assets/galeria-verticales/proyecto-13.jpg','B PASILLO 05'],['assets/galeria-verticales/nuevo-interior.jpg','Interior de clínica con iluminación cálida'],['assets/galeria-verticales/proyecto-43.jpg','SALA PROC 03   02'],['assets/galeria-verticales/proyecto-36.jpg','Recepción moderna con muro verde y madera'],['assets/galeria-verticales/proyecto-04.jpg','60af03dd-1092-4b9d-ae4f-4116eed91e43'],['assets/galeria-verticales/proyecto-35.jpg','Recepción clínica Oasis iluminada'],['assets/galeria-verticales/proyecto-17.jpg','closet'],['assets/galeria-verticales/proyecto-42.jpg','SALA DE PROC 01 Y CONSULTA   08'],['assets/galeria-verticales/proyecto-30.jpg','RECEPCION 01'],['assets/galeria-verticales/proyecto-03.jpg','606e0712-1e89-428a-9c69-63af28620fef'],['assets/galeria-verticales/proyecto-41.jpg','SALA DE PROC 01 Y CONSULTA   04'],['assets/galeria-verticales/proyecto-06.jpg','90f634bf-3f01-4de5-8714-8aef41d15f0a'],['assets/galeria-verticales/proyecto-22.jpg','C SALA DE PROC 7'],['assets/galeria-verticales/nuevo-egon-recepcion-detalle.jpg','Recepción clínica con panel negro y luz LED'],['assets/galeria-verticales/proyecto-07.jpg','A RECEPCION 05'],['assets/galeria-verticales/proyecto-39.jpg','recibidor-huechuraba'],['assets/galeria-verticales/proyecto-37.jpg','Recepción moderna con mármol y luz cálida (1)'],['assets/galeria-verticales/proyecto-21.jpg','C SALA DE PROC 5'],['assets/galeria-verticales/proyecto-20.jpg','C SALA DE PROC 2'],['assets/galeria-verticales/proyecto-05.jpg','68adf2a3-d768-4856-a55a-1e4d8f141761']];
let offset=0;
const projectSection=document.querySelector('.projects');
const lightboxForAutoplay=document.getElementById('morenoLightbox');
function renderGallery(){
 gallery.querySelectorAll('img').forEach((img,i)=>{
  const item=images[(offset+i)%images.length];
  img.src=item[0]; img.alt=item[1];
 });
}
function advanceGallery(step=1){offset=(offset+step+images.length)%images.length;renderGallery();}
document.querySelector('#next').addEventListener('click',()=>{advanceGallery(1);restartAutoplay();});
document.querySelector('#prev').addEventListener('click',()=>{advanceGallery(-1);restartAutoplay();});
let galleryTimer;
function pauseAutoplay(){clearInterval(galleryTimer);}
function startAutoplay(){
 pauseAutoplay();
 if(document.hidden || !lightboxForAutoplay.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 galleryTimer=setInterval(()=>advanceGallery(1),4000);
}
function restartAutoplay(){startAutoplay();}
projectSection.addEventListener('mouseenter',pauseAutoplay);
projectSection.addEventListener('mouseleave',startAutoplay);
projectSection.addEventListener('focusin',pauseAutoplay);
projectSection.addEventListener('focusout',()=>{setTimeout(()=>{if(!projectSection.contains(document.activeElement))startAutoplay();},0);});
document.addEventListener('visibilitychange',startAutoplay);
renderGallery();startAutoplay();
document.querySelector('#year').textContent=new Date().getFullYear();
// Activar los trazos luminosos solo en secciones que comienzan en la mitad inferior.
function updateLowerNeon() {
  const middle = document.documentElement.scrollHeight / 2;
  document.querySelectorAll('main > section, footer.footer').forEach(section => {
    const top = section.getBoundingClientRect().top + window.scrollY;
    section.classList.toggle('neon-lower', top >= middle);
  });
}
updateLowerNeon();
window.addEventListener('load', updateLowerNeon);
window.addEventListener('resize', updateLowerNeon);
document.querySelectorAll('details').forEach(item => item.addEventListener('toggle', updateLowerNeon));


// Visor de fotografías para Proyectos destacados (clic/tacto/teclado).
(() => {
  const lightbox = document.getElementById('morenoLightbox');
  const photo = lightbox.querySelector('.moreno-lightbox__image');
  const caption = lightbox.querySelector('.moreno-lightbox__caption');
  const closeButton = lightbox.querySelector('.moreno-lightbox__close');
  let current = 0;
  let previousFocus = null;
  function show(i) {
    current = (i + images.length) % images.length;
    photo.src = images[current][0];
    photo.alt = images[current][1];
    caption.textContent = images[current][1];
  }
  function open(i) {
    previousFocus = document.activeElement;
    show(i);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeButton.focus();
    pauseAutoplay();
  }
  function close() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (previousFocus?.focus) previousFocus.focus();
    startAutoplay();
  }
  gallery.querySelectorAll('.project-photo').forEach((card, i) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Ampliar fotografía del proyecto');
    const activate = () => open((offset + i) % images.length);
    card.addEventListener('click', activate);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
  });
  closeButton.addEventListener('click', close);
  lightbox.querySelector('.moreno-lightbox__prev').addEventListener('click', () => show(current-1));
  lightbox.querySelector('.moreno-lightbox__next').addEventListener('click', () => show(current+1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current-1);
    if (e.key === 'ArrowRight') show(current+1);
    if (e.key === 'Tab') {
      const controls = [...lightbox.querySelectorAll('button')];
      const index = controls.indexOf(document.activeElement);
      if (e.shiftKey && index === 0) {e.preventDefault();controls.at(-1).focus();}
      else if (!e.shiftKey && index === controls.length-1) {e.preventDefault();controls[0].focus();}
    }
  });
})();

/* Rotación automática de imágenes horizontales en Nosotros */
(()=>{const pictures=["assets/nosotros-horizontal/foto-01.png", "assets/nosotros-horizontal/foto-03.png", "assets/nosotros-horizontal/foto-04.png", "assets/nosotros-horizontal/foto-05.png", "assets/nosotros-horizontal/foto-07.png", "assets/nosotros-horizontal/foto-09.png", "assets/nosotros-horizontal/foto-10.png", "assets/nosotros-horizontal/foto-11.png", "assets/nosotros-horizontal/foto-12.png", "assets/nosotros-horizontal/foto-13.png", "assets/nosotros-horizontal/foto-14.png", "assets/nosotros-horizontal/foto-15.png", "assets/nosotros-horizontal/foto-18.png", "assets/nosotros-horizontal/foto-19.jpeg", "assets/nosotros-horizontal/foto-20.png", "assets/nosotros-horizontal/foto-21.png", "assets/nosotros-horizontal/foto-23.png", "assets/nosotros-horizontal/foto-24.jpeg", "assets/nosotros-horizontal/foto-25.png"];const photo=document.getElementById('nosotros-slide');if(!photo||!pictures.length)return;const counter=document.getElementById('nosotros-counter');let i=0;const change=(delta)=>{i=(i+delta+pictures.length)%pictures.length;photo.style.opacity='0.35';const preload=new Image();preload.onload=()=>{photo.src=pictures[i];photo.style.opacity='1'};preload.onerror=()=>{photo.src=pictures[i];photo.style.opacity='1'};preload.src=pictures[i];if(counter)counter.textContent=(i+1)+' / '+pictures.length};let timer;const start=()=>{clearInterval(timer);timer=setInterval(()=>change(1),3000)};document.querySelector('.nosotros-prev').addEventListener('click',()=>{change(-1);start()});document.querySelector('.nosotros-next').addEventListener('click',()=>{change(1);start()});start();})();
