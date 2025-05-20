// Slider
/*const box = document.querySelector(".slides");
const imagens = document.querySelectorAll(".slide"); // Seleciona todas as divs de slide
let contador = 0;

// Função para mudar a imagem
function slide() {
    contador++;
    if (contador > imagens.length - 1) {
        contador = 0;
    }
    // Muda o botão de rádio correspondente
    document.getElementById(`radio${contador + 1}`).checked = true;
}*/

function showImage(imageId) {
  var images = document.getElementsByTagName('img');

  for (var i = 0; i < images.length; i++) {
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'none'; // Esconde todas as imagens exceto o goku
  }

  document.getElementById(imageId).style.display = 'block'; // Mostra a imagem desejada
}