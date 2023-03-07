
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



