var section = document.getElementById("section-cards");

var agricolas = ["MILHO", "SOJA", "TRIGO", "ALFACE","CAFE","CANA-DE-AÇUCAR",];

var jardim = ["CLUSIA","COSMOS","FLAMBOYANT","HELICONIA-PAPAGAIO"]


function criarCards() {
  for (let pos in jardim) {
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
    if(jardim[pos]){
      spanTIPO.innerText = "Jardim";
    }
  }


  for (let pos in agricolas) {
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
    if(agricolas[pos]){
      spanTIPO.innerText = "Agrícola";
    }
  }
}
