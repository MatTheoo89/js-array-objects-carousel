console.log('collegato ok');

/*
**Consegna:**
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.

Le immagini devono essere 5 e nella grafica devono essere presenti:
- immagine in evidenza
- thumbnail di tutte le immagine con in evidenza l’immagine attiva
- bottone avanti e indietro
*/

// ! usando un array di oggetti

const locations = [
  {
    country: 'Svezia',
    description: 'Stoccolma, la capitale della Svezia, sorge su un ampio arcipelago nel mar Baltico e comprende 14 isole e più di 50 ponti.',
    image: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
  },
  {
    country: 'Perù',
    description: 'Lima, la capitale del Perù, sorge sull\'arida costa del Pacifico.',
    image: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
  },
  {
    country: 'Chile',
    description: 'Santiago, capitale del Cile nonché città più grande del Paese, sorge in una valle circondata dalle cime innevate della Cordigliera delle Ande e dai rilievi della Cordigliera della Costa',
    image: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
  },
  {
    country: 'Argentina',
    description: 'Buenos Aires, la capitale dell\'Argentina, è una grande città cosmopolita.',
    image:'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
  },
  {
    country: 'Colombia',
    description: 'Bogotá è l\'ampia capitale ad alta quota della Colombia.',
    image: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
  },
]

const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const sliderImage = document.querySelector('.slider-image-container');
const sliderThumbnails = document.querySelector('.slider-thumbnails');

console.log(locations);
console.log(btnPrev, btnNext, sliderImage, sliderThumbnails);
// ? Fino qui ok

// Apro la pagina e stampa le immagini contenute nella array ed inizia il carosello
// Premendo il bottone avant/indietro cambiano le immagini

//1- prendi ogni singola città con il suo contenuto
// stampa in pagina una immaggine grande con la sua descrizione
// stampa in pagina una immagine piccola
// fai cambiare immagine ogni 2 secondi e accendi l'immagine piccola corrispondente
// se premi su indietro vedi la immaggine prima
// se premi su avanti vai all'immagine successiva

locations.forEach(location => {
  
  sliderImage.innerHTML += `
  <div class="slider-image hide">
    <img src="${location.image}" alt="${location.country}">

    <div class="description">
      <h2>${location.country}</h2>
      <p>${location.description}</p>
    </div> 

  </div>
  `
});

const sliderImageItems = document.getElementsByClassName('slider-image');
const sliderThumbnailsItems = document.getElementsByClassName('thumb');
//console.log(sliderImageItems);
console.log(sliderThumbnailsItems);

let activeIndex = 0;

sliderImageItems[activeIndex].classList.remove('hide');
sliderImageItems[activeIndex].classList.add('active');
// sliderThumbnailsItems[activeIndex].classList.add('active');
//console.log(sliderThumbnailsItems[activeIndex]);

btnNext.addEventListener('click', function(){
  if(activeIndex === locations.length - 1){

    sliderImageItems[activeIndex].classList.remove('active');
    sliderImageItems[activeIndex].classList.add('hide');
    activeIndex = 0;
  }
  else{
    
    sliderImageItems[activeIndex].classList.remove('active');
    sliderImageItems[activeIndex].classList.add('hide');
    activeIndex++;
    
  }
  sliderImageItems[activeIndex].classList.remove('hide');
  sliderImageItems[activeIndex].classList.add('active');
});

btnPrev.addEventListener('click', function(){
  if(activeIndex === 0){

    sliderImageItems[activeIndex].classList.remove('active');
    sliderImageItems[activeIndex].classList.add('hide');
    activeIndex = locations.length - 1;
  }
  else{
    
    sliderImageItems[activeIndex].classList.remove('active');
    sliderImageItems[activeIndex].classList.add('hide');
    activeIndex--;
    
  }
  sliderImageItems[activeIndex].classList.remove('hide');
  sliderImageItems[activeIndex].classList.add('active');
});












locations.forEach(location => {
  
  sliderThumbnails.innerHTML += `
  <div class="thumb">
  <img src="${location.image}" alt="${location.country}">
  </div>
  `
});
