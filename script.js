//Inserindo os cards
window.addEventListener("load", () => {

  let main = document.querySelector("main");
  //  Criando a section
  var sectionCriada = document.createElement("section");
  sectionCriada.setAttribute("class", "container-fluid row row-cols-3 justify-content-around")
  sectionCriada.setAttribute("id", "section-cards")
  main.appendChild(sectionCriada)
  criarCardsAgricolas();
  criarCardsJardim();
})

//Array de plantas agricolas
var agricolas = ["MILHO", "SOJA", "TRIGO", "ALFACE", "CAFE", "CANA-DE-AÇUCAR",];

//Array de plantas de jardim
var jardim = ["CLUSIA", "COSMOS", "FLAMBOYANT", "HELICONIA-PAPAGAIO", "IRIS-AMARELO", "AGAVE"]


//Criação dos cards de plantas de jardim
function criarCardsJardim() {
  for (let pos in jardim) {
    let section = document.getElementById("section-cards");
    let divPAI = document.createElement("div");
    let divFILHO = document.createElement("div");
    let pTITULO = document.createElement("p");
    let spanTIPO = document.createElement("span");
    divPAI.setAttribute("id", `card-${pos}`);
    divPAI.setAttribute("class", "card-plant mb-5 position-relative");
    divPAI.setAttribute("style", "width:18rem; height: 250px;");
    divPAI.style.backgroundImage = `url(./images/${jardim[pos]}.jpg)`;
    divFILHO.setAttribute("class", "position-absolute card-info");
    pTITULO.setAttribute("class", "h2 text-center");
    pTITULO.innerText = jardim[pos];
    spanTIPO.setAttribute("class", "span-type position-absolute");
    divFILHO.appendChild(pTITULO);
    divFILHO.appendChild(spanTIPO);
    divPAI.appendChild(divFILHO);
    section.appendChild(divPAI);
    if (jardim[pos]) {
      spanTIPO.innerText = "Jardim";
    }
  }
}

//Criação dos cards de plantas agricolas
function criarCardsAgricolas() {
  for (let pos in agricolas) {
    let section = document.getElementById("section-cards");
    let divPAI = document.createElement("div");
    let divFILHO = document.createElement("div");
    let pTITULO = document.createElement("p");
    let spanTIPO = document.createElement("span");
    divPAI.setAttribute("id", `card-${pos}`);
    divPAI.setAttribute("class", "card-plant mb-5 position-relative");
    divPAI.setAttribute("style", "width:18rem; height: 250px;");
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

//Filtro de jardim
function exibirJardim() {
  let section = document.getElementById("section-cards");
  section.innerHTML = "";
  criarCardsJardim();
}
//Filtro de agricolas
function exibirAgricolas() {
  let section = document.getElementById("section-cards");
  section.innerHTML = "";
  criarCardsAgricolas();
}
//Filtro de inicio
function paginaInicial() {
  let section = document.getElementById("section-cards");
  document.location.reload(true)
}
