//*funções das habilidades*//
let textoIconHTML =document.querySelector(".iconhtml");
function CursorIconsProgHTML(){
  document.querySelector(".iconhtml").style.boxShadow="15px 25px 20px  black";
  document.querySelector(".iconhtml").style.backgroundColor="#ff5722";
;  document.querySelector("#tituloIconsProg").innerText="HTML 5"
  document.querySelector("#textoIconsProg").innerHTML="HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web."
}
let textoIconsCSS =document.querySelector(".iconcss");
function CursorIconsProgCSS(){
  document.querySelector(".iconcss").style.boxShadow="15px 25px 20px  black";
  document.querySelector(".iconcss").style.backgroundColor="#0c73b8";
  document.querySelector("#tituloIconsProg").innerText="CSS 3"
  document.querySelector("#textoIconsProg").innerHTML="O CSS (Cascading Style Sheet) é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. Ele separa o conteúdo da representação visual do site."
}
let textoIconsJS =document.querySelector(".iconjs");
function CursorIconsProgJS(){
  document.querySelector(".iconjs").style.boxShadow="15px 25px 20px  black";
  document.querySelector(".iconjs").style.backgroundColor="#e5a228";
  document.querySelector("#tituloIconsProg").innerText="JavaScript"
  document.querySelector("#textoIconsProg").innerHTML="O JavaScript permite ao desenvolvedor implementar diversos itens de alto nível de complexidade em páginas web, como animações, mapas, gráficos ou informações que se atualizam em intervalos de tempo padrão, por exemplo."
}
let textoIconsBS =document.querySelector(".iconbs");
function CursorIconsProgBS(){
  document.querySelector(".iconbs").style.boxShadow="15px 25px 20px  black";
  document.querySelector(".iconbs").style.backgroundColor="#8412fd";
  document.querySelector("#tituloIconsProg").innerText="BootStrap"
  document.querySelector("#textoIconsProg").innerHTML="Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript."
}
let textoIconsGIT =document.querySelector(".icongit");
function CursorIconsProgGIT(){
  document.querySelector(".icongit").style.boxShadow="15px 25px 20px  black";
  document.querySelector(".icongit").style.backgroundColor="#f05133";
  document.querySelector("#tituloIconsProg").innerText="Git"
  document.querySelector("#textoIconsProg").innerHTML="O Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software."
}
let textoIconsGitHub =document.querySelector(".icongithub");
function CursorIconsProgGitHub(){
  document.querySelector(".icongithub").style.boxShadow="15px 25px 20px  black";
  document.querySelector(".icongithub").style.backgroundColor="#1b1e23";
  document.querySelector("#tituloIconsProg").innerText="GitHub"
  document.querySelector("#textoIconsProg").innerHTML="O GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. "
}
let esconderTextoHTML = document.querySelector(".iconthmtl");
function CursorForaIconsProgHTML(){
    document.querySelector(".iconhtml").style.boxShadow="none";
    document.querySelector(".iconhtml").style.backgroundColor="#22223B";
    document.querySelector("#tituloIconsProg").innerText=" ";
    document.querySelector("#textoIconsProg").innerText="Passe o cursor em cima das habilidades para descobrir suas respectivas características :) "
}
let esconderTextoCSS = document.querySelector(".iconcss");
function CursorForaIconsProgCSS(){
    document.querySelector(".iconcss").style.boxShadow="none";
    document.querySelector(".iconcss").style.backgroundColor="#22223B";
    document.querySelector("#tituloIconsProg").innerText=" ";
    document.querySelector("#textoIconsProg").innerText="Passe o cursor em cima das habilidades para descobrir suas respectivas características :) "
}
let esconderTextoJS = document.querySelector(".iconjs");
function CursorForaIconsProgJS(){
    document.querySelector(".iconjs").style.boxShadow="none";
    document.querySelector(".iconjs").style.backgroundColor="#22223B";
    document.querySelector("#tituloIconsProg").innerText=" ";
    document.querySelector("#textoIconsProg").innerText="Passe o cursor em cima das habilidades para descobrir suas respectivas características :) "
}
let esconderTextoBS = document.querySelector(".iconbs");
function CursorForaIconsProgBS(){
    document.querySelector(".iconbs").style.boxShadow="none";
    document.querySelector(".iconbs").style.backgroundColor="#22223B";
    document.querySelector("#tituloIconsProg").innerText="";
    document.querySelector("#textoIconsProg").innerText="Passe o cursor em cima das habilidades para descobrir suas respectivas características :) "
}
let esconderTextoGIT = document.querySelector(".icongit");
function CursorForaIconsProgGIT(){
    document.querySelector(".icongit").style.boxShadow="none";
    document.querySelector(".icongit").style.backgroundColor="#22223B";
    document.querySelector("#tituloIconsProg").innerText=" ";
    document.querySelector("#textoIconsProg").innerText="Passe o cursor em cima das habilidades para descobrir suas respectivas características :) "
}
let esconderTextoGITHUB = document.querySelector(".icongithub");
function CursorForaIconsProgGitHub(){
    document.querySelector(".icongithub").style.boxShadow="none";
    document.querySelector(".icongithub").style.backgroundColor="#22223B";
    document.querySelector("#tituloIconsProg").innerText=" ";
    document.querySelector("#textoIconsProg").innerText="Passe o cursor em cima das habilidades para descobrir suas respectivas características :) "
}
//funções habilidades//

let mostrarMaisProjetos = document.querySelector("#maisprojetos");
function carregarMaisProjetos(){
  document.getElementById('maisprojetos').style.display="flex";
  document.getElementById('botaoMaisProjetos').style.display="none"
  document.getElementById('botaoMenosProjetos').style.display="flex"
  document.getElementById('botaoMenosProjetos').style.margin="0 auto";
}
let mostrarMenos = document.querySelector("#botaoMenosProjetos");
function ocultarMaisProjetos (){
  document.getElementById('maisprojetos').style.display="none";
  document.getElementById('botaoMenosProjetos').style.display="none";
  document.getElementById('botaoMaisProjetos').style.display="flex";
  document.getElementById('botaoMaisProjetos').style.margin="0 auto";
  document.getElementById('botaoMenosProjetos').style.margin="0 auto";
}

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}
const titulo = document.getElementById('textoInicio');
typeWriter(titulo);