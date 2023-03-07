/* Title */
let title = document.querySelector('h1');
let h1 = document.createElement('h1');
h1.textContent = 'Animals Gallery';
title.appendChild(h1);

/* Animals Images */
let principal = document.getElementById('cont-princ');

animal = new Array();
/* Vertebrate Animals */
  /* amphibian */
animal[0] = ["./images/amphibian/american-bullfrogs_img.png"];
animal[1] = ["./images/amphibian/axolotls_img.png"];
animal[2] = ["./images/amphibian/spotted-salamander_img.png"];
  
/* bird */
animal[3] = ["./images/bird/duck_img.png"];
animal[4] = ["./images/bird/pelican_img.png"];
animal[5] = ["./images/bird/white-stork_img.png"];

  /* fish */
animal[6] = ["./images/fish/puffer-fish_img.png"];
animal[7] = ["./images/fish/rainbow-fish_img.png"];
animal[8] = ["./images/fish/telescope-goldfish_img.png"];

  /* mamals */
animal[9] = ["./images/mammals/elephant_img.png"];
animal[10] = ["./images/mammals/giraffe_img.png"];
animal[11] = ["./images/mammals/lion_img.png"];

  /* reptile */
animal[12] = ["./images/reptile/anaconda_img.png"];
animal[13] = ["./images/reptile/crocodile_img.png"];
animal[14] = ["./images/reptile/lizard_img.png"];

/* Invertebrate */
animal[15] = ["./images/invertebrates/black-widow_img.png"];
animal[16] = ["./images/invertebrates/golden-jellyfish_img.png"];
animal[17] = ["./images/invertebrates/ladybugs_img.png"];

for(let i = 0; i < animal.length; i++) {
  let creaImg = document.createElement('img');

  creaImg.setAttribute('src', animal[i])
  principal.appendChild(creaImg);
} 

const gallery = [
  new Invertebrados(
    'Medusa Dorada',
    'Mastigias papua etpisoni',
    'No tiene',
    'Carnívoro',
    'Estrobilacion',
    'Agua',
    'imgs/jellyfish.png',
    'Invertebrados',
  ),
  new Invertebrados(
    'Ladybug',
    'Coccinellidae',
    'Fria',
    'Omnívoro',
    'Ovíparo',
    'Tierra',
    'imgs/ladybug.png',
    'Invertebrados',
  ),
  new Invertebrados(
    'Viuda Negra',
    'Latrodectus',
    'Fria',
    'Ovíparo',
    'Carnívoro',
    'Tierra',
    'imgs/BlackWidow.png',
    'Invertebrados',
  ),

  new Mamifero(
    'Elefante',
    'Elephas maximus',
    'Caliente',
    'Herbívoros',
    'Vivíparo',
    'Tierra',
    'Gris, Marron',
    'imgs/Elephant.png',
    'Mamífero',
  ),
  new Mamifero(
    'Jirafa',
    'Giraffa camelopardalis',
    'Caliente',
    'Herbívoros',
    'Vivíparo',
    'Tierra',
    'Beige con manchas marrones',
    'imgs/Giraffe.png',
    'Mamífero',
  ),
  new Mamifero(
    'León',
    'Panthera leo',
    'Caliente',
    'Carnívoro',
    'Vivíparo',
    'Agua',
    'Beige con Marrón',
    'imgs/Lyon.png',
    'Mamífero',
  ),
  new Peces(
    'Pez Globo',
    'Tetraodontidae',
    'Fría',
    'Omnívoro',
    'Ovíparo',
    'Agua',
    'Sí',
    'Arena',
    'imgs/PufferFish.png',
    'pez',
  ),
  new Peces(
    'Pez Arcoíris',
    'Melanotaeniidae',
    'Fría',
    'Omnívoro',
    'Ovíparo',
    'Agua',
    'Sí',
    'Azul,verde y amarillo',
    'imgs/RainbowFish.png',
    'pez',
  ),
  new Peces(
    'Pez Dorado Telescopio',
    'Carassious auratus',
    'Fría',
    'Omnívoro',
    'Ovíparo',
    'Agua',
    'Sí',
    'Dorado',
    'imgs/TelescopeGoldFish.png',
    'pez',
  ),
  new Reptiles(
    'Cocodrilo',
    'Crocodylidae',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua y Tierra',
    'Verdes, Marrones, Musgo',
    'imgs/Crocodile.png',
    'reptil',
  ),
  new Reptiles(
    'Anaconda Común',
    'Eunectes murinus',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua y Tierra',
    'Amarillas y manchas oscuras de color marrón y negro',
    'imgs/Anaconda.png',
    'reptil',
  ),
  new Reptiles(
    'Lagartija',
    'Podarcis muralis',
    'Fría',
    'Herbívoro',
    'Ovíparo',
    'Tierra',
    'Marrones, verdes y amarillas',
    'imgs/Lizard.png',
    'reptil',
  ),
  new Anfibio(
    'Axolote',
    'Axolotls',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua y Tierra',
    'imgs/Axolotl.png',
    'Anfibio',
    '4'
  ),
  new Anfibio(
    'Sapo Toro Americano',
    'Lithobates catesbeianus',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua y Tierra',
    'imgs/AmericanBullfrog.png',
    'Anfibio',
    '4',
  ),
  new Anfibio(
    'Salamandra',
    'Spotted Salamander',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua',
    'imgs/SpottedSalamander.png',
    'Anfibio',
    '4',
  ),
  new Aves(
    'Cigüeña',
    'Ciconia ciconia',
    'Caliente',
    'Carnívoro',
    'Ovíparo',
    'Tierra',
    'Blancas',
    'imgs/Stork.png',
    'aves',
  ),
  new Aves(
    'Pelícano',
    'Pelecanus onocrotalus',
    'Caliente',
    'Carnívoro',
    'Ovíparo',
    'Tierra',
    'Blancas',
    'imgs/Pelican.png',
    'aves',
  ),
  new Aves(
    'Pato',
    'Anas platyrhynchos',
    'Caliente',
    'Omnívoro',
    'Ovíparo',
    'Tierra',
    'Blancos,Marrones,Grises,Negros',
    'imgs/Duck.png',
    'aves',
  ),
]

console.log(gallery)
Animal.paraImagenes(gallery)