//declarando um array de imagens
let imagens =[
    'src/assets/daniil-silantev-6VhIHgqo5qI-unsplash.jpg',
    'src/assets/david-schultz-tRiYQKKVVxQ-unsplash.jpg',
    'src/assets/matthew-stephenson-t9WAj-SSBmc-unsplash.jpg',

]
//DECLARANDO AS VARIAVEIS

let i = 0;
let tempo = 5000;

//CRIANDO A FUNÇÃO DO SLIDESHOW

function slideShow(){
    document.getElementById('image').src = imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout("slideShow()",tempo)

}
slideShow();
const toggleBtn = document.querySelector(".side-bar-");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});


