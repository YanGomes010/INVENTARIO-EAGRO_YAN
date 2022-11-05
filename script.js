//Inserindo os cards
window.addEventListener("load", () => {
  criarCabecalho();
  let main = document.querySelector("main");
  //  Criando a section
  var sectionCriada = document.createElement("section");
  sectionCriada.setAttribute(
    "class",
    "container-fluid row row-cols-3 justify-content-around"
  );
  sectionCriada.setAttribute("id", "section-cards");
  main.appendChild(sectionCriada);
  criarCardsAgricolas();
  //criarCardsJardim();
  menuMobile();
  ScrollTop();
});

//Main
let main = document.querySelector("main");

//SEÇÕES DAS INFORMAÇOES DE CARDS
let sectionMilho = document.createElement("section");
let sectionSOJA = document.createElement("section");
let sectionMELANCIA = document.createElement("section");
let sectionMANDIOCA = document.createElement("section");
//Array de plantas agricolas
var agricolas = ["MILHO", "SOJA", "MELANCIA", "MANDIOCA"];

 //PROXIMA VERSÃO, ADIÇÃO JARDIM

//Array de plantas de jardim
//var jardim = [
//"CLUSIA",
//"FLAMBOYANT",
//"HELICONIA-PAPAGAIO",
// "AGAVE",
///];

function criarCabecalho() {
  //CRIANDO AS TAGS E ATRIBUTOS
  let header = document.getElementById("header");
  let imgHeader = document.createElement("img");
  let ulHeader = document.createElement("ul");
  let liINICIO = document.createElement("li");
  //let liIAgricola = document.createElement("li");
  ulHeader.setAttribute("class", "list-group list-group-horizontal");
  imgHeader.setAttribute("id", "logo");
  imgHeader.src = "./images/BD-PLANTAS.png";

  liINICIO.setAttribute("class", "list-group-item");
 // liIAgricola.setAttribute("class", "list-group-item");
  //liJardim.setAttribute("class", "list-group-item");
 // liIAgricola.setAttribute("id", "agricola");
 liINICIO.setAttribute("onclick", "paginaInicial()");
  //liIAgricola.setAttribute("onclick", "exibirAgricolas()");

  //CRIANDO OS TEXTOS
  liINICIO.innerText = "Inicio";
  //liIAgricola.innerText = "Agricolas";

  //INSERINDO AS TAGS NA PÁGINA
  ulHeader.appendChild(liINICIO);
  //ulHeader.appendChild(liIAgricola);

  header.appendChild(imgHeader);
  header.appendChild(ulHeader);
}


 //PROXIMA VERSÃO, ADIÇÃO JARDIM


//Criação dos cards de plantas de jardim
//function criarCardsJardim() {
//  for (let pos in jardim) {
//    let section = document.getElementById("section-cards");
//    let divPAI = document.createElement("div");
//    let divFILHO = document.createElement("div");
//   let pTITULO = document.createElement("p");
//   let spanTIPO = document.createElement("span");
//   divPAI.setAttribute("id", `card-${jardim[pos]}`);
//   divPAI.setAttribute("class", "card-plant mb-5 position-relative");
//  divPAI.setAttribute("style", "width:18rem; height: 250px;");
//   divPAI.setAttribute("onclick", `criar${jardim[pos]}()`);
//  divPAI.style.backgroundImage = `url(./images/${jardim[pos]}.jpg)`;
// divFILHO.setAttribute("class", "position-absolute card-info");
//   pTITULO.setAttribute("class", "h2 text-center");
//  pTITULO.innerText = jardim[pos];
//  spanTIPO.setAttribute("class", "span-type position-absolute");
// divFILHO.appendChild(pTITULO);
// divFILHO.appendChild(spanTIPO);
// divPAI.appendChild(divFILHO);
// section.appendChild(divPAI);
// if (jardim[pos]) {
//    spanTIPO.innerText = "Jardim";
//   }
//  }
//}

//Criação dos cards de plantas agricolas
function criarCardsAgricolas() {
  let section = document.getElementById("section-cards");

  for (let pos in agricolas) {
    let divPAI = document.createElement("div");
    let divFILHO = document.createElement("div");
    let pTITULO = document.createElement("p");
    let spanTIPO = document.createElement("span");
    divPAI.setAttribute("id", `card-${agricolas[pos]}`);
    divPAI.setAttribute("class", "card-plant mb-5 position-relative");
    divPAI.setAttribute("style", "width:18rem; height: 250px;");
    divPAI.setAttribute("onclick", `criar${agricolas[pos]}()`);
    divPAI.style.backgroundImage = `url(./images/${agricolas[pos]}.jpg)`;
    divFILHO.setAttribute("class", "position-absolute card-info");
    pTITULO.setAttribute("class", "h2 text-center");
    pTITULO.innerText = agricolas[pos];
    spanTIPO.setAttribute("class", "span-type position-absolute");

    divFILHO.appendChild(pTITULO);
    divFILHO.appendChild(spanTIPO);
    divPAI.appendChild(divFILHO);
    section.appendChild(divPAI);
    if (agricolas[pos]) {
      spanTIPO.innerText = "Agrícola";
    }
  }
}
function menuMobile() {
  //criando footer
  let footer = document.querySelector(".footer");

  //criando divs base
  let baseMenu = document.createElement("div");
 //let agricolasMenu = document.createElement("div");
  let inicioMenu = document.createElement("div");

  //Adicionando atributos nas divs

  baseMenu.setAttribute("class", "base");
 // agricolasMenu.setAttribute("onclick", "exibirAgricolas()");
  //agricolasMenu.setAttribute("id", "ball-1");
  //agricolasMenu.setAttribute("class", "ball");
  inicioMenu.setAttribute("onclick", "paginaInicial()");
  inicioMenu.setAttribute("id", "ball-2");
  inicioMenu.setAttribute("class", "ball");

  //PROXIMA VERSÃO, ADIÇÃO JARDIM

  //jardimMenu.setAttribute("onclick", "exibirJardim()");
  //jardimMenu.setAttribute("id", "ball-3");
  //jardimMenu.setAttribute("class", "ball");




  
  //filhos das divs

  //let imgAgricola = document.createElement("img");
  //let spanAgricola = document.createElement("span");
  //imgAgricola.src = "./images/AGRICOLA.svg";
  //spanAgricola.setAttribute("id", "span-menu-0");
  //spanAgricola.innerText = "Agricolas";

  let imginicio = document.createElement("img");
  let spanInicio = document.createElement("span");
  imginicio.src = "./images/CASA.svg";
  spanInicio.setAttribute("id", "span-menu-1");
  spanInicio.innerText = "Inicio";

  //let imgJardim = document.createElement("img");
 // let spanJardim = document.createElement("span");
  //imgJardim.src = "./images/JARDIM.svg";
 // spanJardim.setAttribute("id", "span-menu-2");
  //spanJardim.innerText = "Jardim";

  //agricolasMenu.appendChild(imgAgricola);
  //agricolasMenu.appendChild(spanAgricola);
  inicioMenu.appendChild(imginicio);
  inicioMenu.appendChild(spanInicio);
  //jardimMenu.appendChild(imgJardim);
  //jardimMenu.appendChild(spanJardim);

  //baseMenu.appendChild(agricolasMenu);
  baseMenu.appendChild(inicioMenu);
  //baseMenu.appendChild(jardimMenu);

  footer.appendChild(baseMenu);
}

function ScrollTop() {
window.scrollTo({
  top:0,
  behavior:"smooth"
})
}



//PRÓXIMA VERSÃO JARDIM



//Filtro de jardim
//function exibirJardim() {
 // let sec1 = document.querySelector("#sec-1");
 // sec1.innerHTML = "";
  //sectionMilho.style.display = "none";
 // sectionMELANCIA.style.display = "none";
 // sectionMANDIOCA.style.display = "none";
 // sectionSOJA.style.display = "none";
 // let section = document.getElementById("section-cards");
  //section.innerHTML = "";
 // criarCardsJardim();
//}



//Filtro de agricolas
function exibirAgricolas() {
  let sec1 = document.querySelector("#sec-1");
  sec1.innerHTML = "";
  sectionMilho.style.display = "none";
  sectionMELANCIA.style.display = "none";
  sectionMANDIOCA.style.display = "none";
  sectionSOJA.style.display = "none";
  let section = document.getElementById("section-cards");
  section.innerHTML = "";
  criarCardsAgricolas();
}

//Filtro de inicio
function paginaInicial() {
  let section = document.getElementById("section-cards");
  document.location.reload(true);
}

function apagarSection() {
  let section = document.getElementById("section-cards");
  section.parentNode.removeChild(section);
}
