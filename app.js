  function criarSOJA() {
    let section = document.getElementById("section-cards");
    section.innerHTML = "";
  
    //------------------------------------------------------------
    //
    //CRIANDO SEÇÃO E IMAGEM DE HEADER
    //
    //
    //------------------------------------------------------------
    

    let divIMG = document.createElement("div");
    let IMG = document.createElement("img");
    IMG.src = "./images/SOJA-INTERFACE.svg";
    divIMG.setAttribute("id", "sectionBoxIMG");
    sectionSOJA.setAttribute("id", "sec-1");
  
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
    titulo.innerText = SOJAdb.titulo;
    subtitulo.innerText = SOJAdb.subtitulo;
  
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
    introducao.innerText = SOJAdb.introducao;
  
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
    condicoes.innerText = SOJAdb.condicoesClimaticas;
    textCONDICOES.innerText = SOJAdb.infocondicoesClimaticas;
  
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
    temperatura.innerText=SOJAdb.temperatura;
    textTemperatura.innerText=SOJAdb.infoTemperatura;
  
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
    UmidadeDoSolo.innerText=SOJAdb.umidadeDoSolo;
    textUmidadeDoSolo.innerText=SOJAdb.infoUmidadeDoSolo
  
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
    semeadura.innerText=SOJAdb.semeadura;
    textsemeadura.innerText=SOJAdb.infoSemeadura
  
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
    densidadePlantio.innerText=SOJAdb.densidadeDoPlantio;
    textdensidadePlantio.innerText=SOJAdb.infoDensidadeDoPlantio
  
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
    espacamentoEntreFileiras.innerText=SOJAdb.espacamentoEntreFileiras;
    textespacamentoEntreFileiras.innerText=SOJAdb.infoEspacamentoEntreFileiras
  
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
  
    sectionSOJA.style.display = "block";
    sectionSOJA.appendChild(divIMG);
    sectionSOJA.appendChild(divTITULO);
    sectionSOJA.appendChild(DIVintroducao);
    sectionSOJA.appendChild(DIVcondicoes);
    sectionSOJA.appendChild(DIVtemperatura)
    sectionSOJA.appendChild(DIVUmidadeDoSolo)
    sectionSOJA.appendChild(DIVsemeadura)
    sectionSOJA.appendChild(DIVdensidadePlantio)
    sectionSOJA.appendChild(DIVespacamentoEntreFileiras)
    sectionSOJA.appendChild(spanFonte)
    main.appendChild(sectionSOJA);
  }


function criarMILHO() {
    let section = document.getElementById("section-cards");
    section.innerHTML = "";
  
    //------------------------------------------------------------
    //
    //CRIANDO SEÇÃO E IMAGEM DE HEADER
    //
    //
    //------------------------------------------------------------
    

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

  function criarMELANCIA() {
    let section = document.getElementById("section-cards");
    section.innerHTML = "";
  
    //------------------------------------------------------------
    //
    //CRIANDO SEÇÃO E IMAGEM DE HEADER
    //
    //
    //------------------------------------------------------------
    

    let divIMG = document.createElement("div");
    let IMG = document.createElement("img");
    IMG.src = "./images/MELANCIA-INTERFACE.svg";
    divIMG.setAttribute("id", "sectionBoxIMG");
    sectionMELANCIA.setAttribute("id", "sec-1");
  
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
    titulo.innerText = MELANCIAdb.titulo;
    subtitulo.innerText = MELANCIAdb.subtitulo;
  
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
    introducao.innerText = MELANCIAdb.introducao;
  
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
    condicoes.innerText = MELANCIAdb.condicoesClimaticas;
    textCONDICOES.innerText = MELANCIAdb.infocondicoesClimaticas;
  
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
    temperatura.innerText=MELANCIAdb.temperatura;
    textTemperatura.innerText=MELANCIAdb.infoTemperatura;
  
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
    UmidadeDoSolo.innerText=MELANCIAdb.umidadeDoSolo;
    textUmidadeDoSolo.innerText=MELANCIAdb.infoUmidadeDoSolo
  
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
    semeadura.innerText=MELANCIAdb.semeadura;
    textsemeadura.innerText=MELANCIAdb.infoSemeadura
  
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
    densidadePlantio.innerText=MELANCIAdb.densidadeDoPlantio;
    textdensidadePlantio.innerText=MELANCIAdb.infoDensidadeDoPlantio
  
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
    espacamentoEntreFileiras.innerText=MELANCIAdb.espacamentoEntreFileiras;
    textespacamentoEntreFileiras.innerText=MELANCIAdb.infoEspacamentoEntreFileiras
  
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
  
    sectionMELANCIA.style.display = "block";
    sectionMELANCIA.appendChild(divIMG);
    sectionMELANCIA.appendChild(divTITULO);
    sectionMELANCIA.appendChild(DIVintroducao);
    sectionMELANCIA.appendChild(DIVcondicoes);
    sectionMELANCIA.appendChild(DIVtemperatura)
    sectionMELANCIA.appendChild(DIVUmidadeDoSolo)
    sectionMELANCIA.appendChild(DIVsemeadura)
    sectionMELANCIA.appendChild(DIVdensidadePlantio)
    sectionMELANCIA.appendChild(DIVespacamentoEntreFileiras)
    sectionMELANCIA.appendChild(spanFonte)
    main.appendChild(sectionMELANCIA);
  }

  
  function criarALFACE() {
    let section = document.getElementById("section-cards");
    section.innerHTML = "";
  
    //------------------------------------------------------------
    //
    //CRIANDO SEÇÃO E IMAGEM DE HEADER
    //
    //
    //------------------------------------------------------------
    

    let divIMG = document.createElement("div");
    let IMG = document.createElement("img");
    IMG.src = "./images/ALFACE-INTERFACE.svg";
    divIMG.setAttribute("id", "sectionBoxIMG");
    sectionALFACE.setAttribute("id", "sec-1");
  
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
    titulo.innerText = ALFACEdb.titulo;
    subtitulo.innerText = ALFACEdb.subtitulo;
  
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
    introducao.innerText = ALFACEdb.introducao;
  
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
    condicoes.innerText = ALFACEdb.condicoesClimaticas;
    textCONDICOES.innerText = ALFACEdb.infocondicoesClimaticas;
  
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
    temperatura.innerText=ALFACEdb.temperatura;
    textTemperatura.innerText=ALFACEdb.infoTemperatura;
  
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
    UmidadeDoSolo.innerText=ALFACEdb.umidadeDoSolo;
    textUmidadeDoSolo.innerText=ALFACEdb.infoUmidadeDoSolo
  
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
    semeadura.innerText=ALFACEdb.semeadura;
    textsemeadura.innerText=ALFACEdb.infoSemeadura
  
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
    densidadePlantio.innerText=ALFACEdb.densidadeDoPlantio;
    textdensidadePlantio.innerText=ALFACEdb.infoDensidadeDoPlantio
  
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
    espacamentoEntreFileiras.innerText=ALFACEdb.espacamentoEntreFileiras;
    textespacamentoEntreFileiras.innerText=ALFACEdb.infoEspacamentoEntreFileiras
  
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
  
    sectionALFACE.style.display = "block";
    sectionALFACE.appendChild(divIMG);
    sectionALFACE.appendChild(divTITULO);
    sectionALFACE.appendChild(DIVintroducao);
    sectionALFACE.appendChild(DIVcondicoes);
    sectionALFACE.appendChild(DIVtemperatura)
    sectionALFACE.appendChild(DIVUmidadeDoSolo)
    sectionALFACE.appendChild(DIVsemeadura)
    sectionALFACE.appendChild(DIVdensidadePlantio)
    sectionALFACE.appendChild(DIVespacamentoEntreFileiras)
    sectionALFACE.appendChild(spanFonte)
    main.appendChild(sectionALFACE);
  }
