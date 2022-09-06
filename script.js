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
  criarCardsJardim();
  menuMobile();
});

//Array de plantas agricolas
var agricolas = ["MILHO", "SOJA", "TRIGO", "ALFACE", "CAFE", "CANA-DE-AÇUCAR"];

//Array de plantas de jardim
var jardim = [
  "CLUSIA",
  "COSMOS",
  "FLAMBOYANT",
  "HELICONIA-PAPAGAIO",
  "IRIS-AMARELO",
  "AGAVE",
];

function criarCabecalho() {
  //CRIANDO AS TAGS E ATRIBUTOS
  let header = document.getElementById("header");
  let imgHeader = document.createElement("img");
  let ulHeader = document.createElement("ul");
  let liINICIO = document.createElement("li");
  let liIAgricola = document.createElement("li");
  let liJardim = document.createElement("li");
  ulHeader.setAttribute("class", "list-group list-group-horizontal");
  imgHeader.setAttribute("id", "logo");
  imgHeader.src = "./images/BD-PLANTAS.png";

  liINICIO.setAttribute("class", "list-group-item");
  liIAgricola.setAttribute("class", "list-group-item");
  liJardim.setAttribute("class", "list-group-item");

  liIAgricola.setAttribute("id", "agricola");
  liJardim.setAttribute("id", "jardim");

  liINICIO.setAttribute("onclick", "paginaInicial()");
  liIAgricola.setAttribute("onclick", "exibirAgricolas()");
  liJardim.setAttribute("onclick", "exibirJardim()");

  //CRIANDO OS TEXTOS
  liINICIO.innerText = "Inicio";
  liIAgricola.innerText = "Agricolas";
  liJardim.innerText = "Jardim";
  //INSERINDO AS TAGS NA PÁGINA
  ulHeader.appendChild(liINICIO);
  ulHeader.appendChild(liIAgricola);
  ulHeader.appendChild(liJardim);

  header.appendChild(imgHeader);
  header.appendChild(ulHeader);
}
//Criação dos cards de plantas de jardim
function criarCardsJardim() {
  for (let pos in jardim) {
    let section = document.getElementById("section-cards");
    let divPAI = document.createElement("div");
    let divFILHO = document.createElement("div");
    let pTITULO = document.createElement("p");
    let spanTIPO = document.createElement("span");
    divPAI.setAttribute("id", `card-${jardim[pos]}`);
    divPAI.setAttribute("class", "card-plant mb-5 position-relative");
    divPAI.setAttribute("style", "width:18rem; height: 250px;");
    divPAI.setAttribute("onclick", `criar${jardim[pos]}()`);
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
  let agricolasMenu = document.createElement("div");
  let inicioMenu = document.createElement("div");
  let jardimMenu = document.createElement("div");

  //Adicionando atributos nas divs

  baseMenu.setAttribute("class", "base");
  agricolasMenu.setAttribute("onclick", "exibirAgricolas()");
  agricolasMenu.setAttribute("id", "ball-1");
  agricolasMenu.setAttribute("class", "ball");
  inicioMenu.setAttribute("onclick", "paginaInicial()");
  inicioMenu.setAttribute("id", "ball-2");
  inicioMenu.setAttribute("class", "ball");
  jardimMenu.setAttribute("onclick", "exibirJardim()");
  jardimMenu.setAttribute("id", "ball-3");
  jardimMenu.setAttribute("class", "ball");

  //filhos das divs

  let imgAgricola = document.createElement("img");
  let spanAgricola = document.createElement("span");
  imgAgricola.src = "./images/AGRICOLA.svg";
  spanAgricola.setAttribute("id", "span-menu-0");
  spanAgricola.innerText = "Agricolas";

  let imginicio = document.createElement("img");
  let spanInicio = document.createElement("span");
  imginicio.src = "./images/CASA.svg";
  spanInicio.setAttribute("id", "span-menu-1");
  spanInicio.innerText = "Inicio";

  let imgJardim = document.createElement("img");
  let spanJardim = document.createElement("span");
  imgJardim.src = "./images/JARDIM.svg";
  spanJardim.setAttribute("id", "span-menu-2");
  spanJardim.innerText = "Jardim";

  agricolasMenu.appendChild(imgAgricola);
  agricolasMenu.appendChild(spanAgricola);
  inicioMenu.appendChild(imginicio);
  inicioMenu.appendChild(spanInicio);
  jardimMenu.appendChild(imgJardim);
  jardimMenu.appendChild(spanJardim);

  baseMenu.appendChild(agricolasMenu);
  baseMenu.appendChild(inicioMenu);
  baseMenu.appendChild(jardimMenu);

  footer.appendChild(baseMenu);
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
  document.location.reload(true);
}

var MILHOdb = {
  titulo: "CULTURA DO MILHO",
  subtitulo:
    "Como plantar milho: Condições climaticas, temperatura, umidade do solo,semeadura, densidade de plantio e espaçamento entre fileiras.",
  introducao:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  condicoesClimaticas: "CONDIÇÕES CLIMATICAS",
  infocondicoesClimaticas:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  temperatura: "TEMPERATURA",
  infoTemperatura:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  umidadeDoSolo: "UMIDADE DO SOLO",
  infoUmidadeDoSolo:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  semeadura: "SEMEADURA",
  infoSemeadura:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  densidadeDoPlantio: "DENSIDADE DO PLANTIO",
  infoDensidadeDoPlantio:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  espacamentoEntreFileiras: "ESPAÇAMENTO ENTRE FILEIRAS",
  infoEspacamentoEntreFileiras:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

function criarMILHO() {
  let section = document.getElementById("section-cards");
  section.innerHTML = "";

  //------------------------------------------------------------
  //
  //CRIANDO SEÇÃO E IMAGEM DE HEADER
  //
  //
  //------------------------------------------------------------
  let main = document.querySelector("main");
  let sectionMilho = document.createElement("section");
  let divIMG = document.createElement("div");
  let IMG = document.createElement("img");
  IMG.src = "./images/MILHO-INTERFACE.svg";
  divIMG.setAttribute("id", "sectionBoxIMG");
  sectionMilho.setAttribute("id", "sec-1");

  divIMG.appendChild(IMG);

  //------------------------------------------------------------
  //
  //CRIANDO TITULO
  //
  //
  //------------------------------------------------------------

  let divTITULO = document.createElement("div");
  divTITULO.setAttribute("id", "divTitle");
  let titulo = document.createElement("h1");
  let subtitulo = document.createElement("p");
  titulo.innerText = MILHOdb.titulo;
  subtitulo.innerText = MILHOdb.subtitulo;

  divTITULO.appendChild(titulo);
  divTITULO.appendChild(subtitulo);

  //------------------------------------------------------------
  //
  //
  //CRIANDO A INTRODUÇÃO
  //
  //
  //------------------------------------------------------------

  let DIVintroducao = document.createElement("div");
  let introducao = document.createElement("p");
  DIVintroducao.setAttribute("class", "introducao sectionStyle");
  introducao.innerText = MILHOdb.introducao;

  DIVintroducao.appendChild(introducao);
  //------------------------------------------------------------
  //
  //
  //CRIANDO CONDIÇÕES CLIMATICAS
  //
  //
  //------------------------------------------------------------
  let DIVcondicoes = document.createElement("div");
  let condicoes = document.createElement("h2");
  let textCONDICOES = document.createElement("p");
  DIVcondicoes.setAttribute("class", "condicoesClimaticas sectionStyle");
  condicoes.innerText = MILHOdb.condicoesClimaticas;
  textCONDICOES.innerText = MILHOdb.infocondicoesClimaticas;

  DIVcondicoes.appendChild(condicoes);
  DIVcondicoes.appendChild(textCONDICOES);

  //------------------------------------------------------------
  //
  //
  //CRIANDO TEMPERATURA 
  //
  //
  //------------------------------------------------------------
  let DIVtemperatura = document.createElement("div");
  let temperatura = document.createElement("h2");
  let textTemperatura = document.createElement("p");
  DIVtemperatura.setAttribute("class", "temperatura sectionStyle");
  temperatura.innerText=MILHOdb.temperatura;
  textTemperatura.innerText=MILHOdb.infoTemperatura;

  DIVtemperatura.appendChild(temperatura)
  DIVtemperatura.appendChild(textTemperatura)
  //------------------------------------------------------------
  //
  //
  //CRIANDO UMIDADE DO SOLO 
  //
  //
  //------------------------------------------------------------
  let DIVUmidadeDoSolo = document.createElement("div");
  let UmidadeDoSolo = document.createElement("h2");
  let textUmidadeDoSolo = document.createElement("p");
  DIVUmidadeDoSolo.setAttribute("class", "UmidadeDoSolo sectionStyle");
  UmidadeDoSolo.innerText=MILHOdb.umidadeDoSolo;
  textUmidadeDoSolo.innerText=MILHOdb.infoUmidadeDoSolo

  DIVUmidadeDoSolo.appendChild(UmidadeDoSolo)
  DIVUmidadeDoSolo.appendChild(textUmidadeDoSolo)
   //------------------------------------------------------------
  //
  //
  //CRIANDO SEMEADURA
  //
  //
  //------------------------------------------------------------
  let DIVsemeadura = document.createElement("div");
  let semeadura = document.createElement("h2");
  let textsemeadura = document.createElement("p");
  DIVsemeadura.setAttribute("class", "semeadura sectionStyle");
  semeadura.innerText=MILHOdb.semeadura;
  textsemeadura.innerText=MILHOdb.infoSemeadura

  DIVsemeadura.appendChild(semeadura)
  DIVsemeadura.appendChild(textsemeadura)
  //------------------------------------------------------------
  //
  //
  //CRIANDO DENSIDADE DO PLANTIO
  //
  //
  //------------------------------------------------------------
  let DIVdensidadePlantio = document.createElement("div");
  let densidadePlantio = document.createElement("h2");
  let textdensidadePlantio = document.createElement("p");
  DIVdensidadePlantio.setAttribute("class", "densidadePlantio sectionStyle");
  densidadePlantio.innerText=MILHOdb.densidadeDoPlantio;
  textdensidadePlantio.innerText=MILHOdb.infoDensidadeDoPlantio

  DIVdensidadePlantio.appendChild(densidadePlantio)
  DIVdensidadePlantio.appendChild(textdensidadePlantio)
//------------------------------------------------------------
  //
  //
  //CRIANDO ESPAÇAMENTO ENTRE FILEIRAS
  //
  //
  //------------------------------------------------------------
  let DIVespacamentoEntreFileiras = document.createElement("div");
  let espacamentoEntreFileiras = document.createElement("h2");
  let textespacamentoEntreFileiras = document.createElement("p");
  DIVespacamentoEntreFileiras.setAttribute("class", "espacamentoEntreFileiras sectionStyle");
  espacamentoEntreFileiras.innerText=MILHOdb.espacamentoEntreFileiras;
  textespacamentoEntreFileiras.innerText=MILHOdb.infoEspacamentoEntreFileiras

  DIVespacamentoEntreFileiras.appendChild(espacamentoEntreFileiras)
  DIVespacamentoEntreFileiras.appendChild(textespacamentoEntreFileiras)
  //------------------------------------------------------------
  //
  //
  //CRIANDO SPAN FONTE
  //
  //
  //------------------------------------------------------------

let spanFonte = document.createElement("span");
spanFonte.innerText="FONTE: Embrapa"
//------------------------------------------------------------
  //
  //
  //ADICIONANDO TUDO AO MAIN
  //
  //
  //------------------------------------------------------------

  sectionMilho.style.display = "block";
  sectionMilho.appendChild(divIMG);
  sectionMilho.appendChild(divTITULO);
  sectionMilho.appendChild(DIVintroducao);
  sectionMilho.appendChild(DIVcondicoes);
  sectionMilho.appendChild(DIVtemperatura)
  sectionMilho.appendChild(DIVUmidadeDoSolo)
  sectionMilho.appendChild(DIVsemeadura)
  sectionMilho.appendChild(DIVdensidadePlantio)
  sectionMilho.appendChild(DIVespacamentoEntreFileiras)
  sectionMilho.appendChild(spanFonte)
  main.appendChild(sectionMilho);
}
