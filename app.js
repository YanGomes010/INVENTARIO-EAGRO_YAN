  function criarSOJA() {
    let section = document.getElementById("section-cards");
    section.innerHTML = "";
    sectionSOJA.innerHTML="";
  
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
    DIVcondicoes.setAttribute("class", "Clima sectionStyle");
    condicoes.innerText = SOJAdb.Clima;
    textCONDICOES.innerText = SOJAdb.infoClima;
  
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
    let DIVSolo = document.createElement("div");
    let Solo = document.createElement("h2");
    let textSolo = document.createElement("p");
    DIVSolo.setAttribute("class", "Solo sectionStyle");
    Solo.innerText=SOJAdb.Solo;
    textSolo.innerText=SOJAdb.infoSolo
  
    DIVSolo.appendChild(Solo)
    DIVSolo.appendChild(textSolo)
     //------------------------------------------------------------
    //
    //
    //CRIANDO Adubacao
    //
    //
    //------------------------------------------------------------
    let DIVAdubacao = document.createElement("div");
    let Adubacao = document.createElement("h2");
    let textAdubacao = document.createElement("p");
    DIVAdubacao.setAttribute("class", "Adubacao sectionStyle");
    Adubacao.innerText=SOJAdb.Adubacao;
    textAdubacao.innerText=SOJAdb.infoAdubacao
  
    DIVAdubacao.appendChild(Adubacao)
    DIVAdubacao.appendChild(textAdubacao)
    //------------------------------------------------------------
    //
    //
    //CRIANDO DENSIDADE DO PLANTIO
    //
    //
    //------------------------------------------------------------
    let DIVPragas = document.createElement("div");
    let Pragas = document.createElement("h2");
    let textPragas = document.createElement("p");
    DIVPragas.setAttribute("class", "Pragas sectionStyle");
    Pragas.innerText=SOJAdb.Pragas;
    textPragas.innerText=SOJAdb.infoPragas
  
    DIVPragas.appendChild(Pragas)
    DIVPragas.appendChild(textPragas)
  //------------------------------------------------------------
    //
    //
    //CRIANDO ESPAÇAMENTO ENTRE FILEIRAS
    //
    //
    //------------------------------------------------------------
    let DIVdoencas = document.createElement("div");
    let doencas = document.createElement("h2");
    let textdoencas = document.createElement("p");
    DIVdoencas.setAttribute("class", "doencas sectionStyle");
    doencas.innerText=SOJAdb.Doencas;
    textdoencas.innerText=SOJAdb.infoDoencas
  
    DIVdoencas.appendChild(doencas)
    DIVdoencas.appendChild(textdoencas)
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
    sectionSOJA.appendChild(DIVSolo)
    sectionSOJA.appendChild(DIVAdubacao)
    sectionSOJA.appendChild(DIVPragas)
    sectionSOJA.appendChild(DIVdoencas)
    sectionSOJA.appendChild(spanFonte)
    main.appendChild(sectionSOJA);
  }


function criarMILHO() {
    let section = document.getElementById("section-cards");
    section.innerHTML = "";
    sectionMilho.innerHTML="";
  
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
    DIVcondicoes.setAttribute("class", "Clima sectionStyle");
    condicoes.innerText = MILHOdb.Clima;
    textCONDICOES.innerText = MILHOdb.infoClima;
  
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
    //CRIANDO ADUBAÇÃO
    //
    //
    //------------------------------------------------------------
    let DIVAdubacao = document.createElement("div");
    let Adubacao = document.createElement("h2");
    let textAdubacao = document.createElement("p");
    DIVAdubacao.setAttribute("class", "Adubacao sectionStyle");
    Adubacao.innerText=MILHOdb.Adubacao;
    textAdubacao.innerText=MILHOdb.infoAdubacao
  
    DIVAdubacao.appendChild(Adubacao)
    DIVAdubacao.appendChild(textAdubacao)
   
     //------------------------------------------------------------
    //
    //
    //CRIANDO SOLO E PLANTIO
    //
    //
    //------------------------------------------------------------
    let DIVSolo = document.createElement("div");
    let Solo = document.createElement("h2");
    let textSolo = document.createElement("p");
    DIVSolo.setAttribute("class", "Solo sectionStyle");
    Solo.innerText=MILHOdb.Solo;
    textSolo.innerText=MILHOdb.infoSolo
  
    DIVSolo.appendChild(Solo)
    DIVSolo.appendChild(textSolo)
    //------------------------------------------------------------
    //
    //
    //CRIANDO DENSIDADE DO PLANTIO
    //
    //
    //------------------------------------------------------------
    let DIVPragas = document.createElement("div");
    let Pragas = document.createElement("h2");
    let textPragas = document.createElement("p");
    DIVPragas.setAttribute("class", "Pragas sectionStyle");
    Pragas.innerText=MILHOdb.Pragas;
    textPragas.innerText=MILHOdb.infoPragas
  
    DIVPragas.appendChild(Pragas)
    DIVPragas.appendChild(textPragas)
  //------------------------------------------------------------
    //
    //
    //CRIANDO ESPAÇAMENTO ENTRE FILEIRAS
    //
    //
    //------------------------------------------------------------
    let DIVdoencas = document.createElement("div");
    let doencas = document.createElement("h2");
    let textdoencas = document.createElement("p");
    DIVdoencas.setAttribute("class", "doencas sectionStyle");
    doencas.innerText=MILHOdb.Doencas;
    textdoencas.innerText=MILHOdb.infoDoencas
  
    DIVdoencas.appendChild(doencas)
    DIVdoencas.appendChild(textdoencas)
    //------------------------------------------------------------
    //
    //
    //CRIANDO SPAN FONTE
    //
    //
    //------------------------------------------------------------
  let divFonte = document.createElement("div")
  let spanFonte = document.createElement("span");
  let spanFonte1 = document.createElement("span");
  let spanFonte2 = document.createElement("span");
  divFonte.setAttribute("id","divFonte")
  spanFonte.innerText="EMBRAPA. Sistema de Produção, 1 ISSN 1679-012X. 2012.";
  spanFonte1.innerText="EMBRAPA. BORGHI, E.; PEREIRA FILHO, I. A.; RESENDE, A. V. de; SILVA, D. D. da; MENDES, S. M.; SILVA, A. F. da. 2017. Embrapa Milho e Sorgo"
  spanFonte2.innerText="EQUIPE MAIS SOJA. O milho é sensível a fotoperíodo?. 2020."

  divFonte.appendChild(spanFonte)
  divFonte.appendChild(spanFonte1)
  divFonte.appendChild(spanFonte2)
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
    sectionMilho.appendChild(DIVAdubacao)
    sectionMilho.appendChild(DIVSolo)
    sectionMilho.appendChild(DIVPragas)
    sectionMilho.appendChild(DIVdoencas)
    sectionMilho.appendChild(divFonte)
    main.appendChild(sectionMilho);
  }

  function criarMELANCIA() {
    let section = document.getElementById("section-cards");
    section.innerHTML = "";
    sectionMELANCIA.innerHTML="";
  
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
    DIVcondicoes.setAttribute("class", "Clima sectionStyle");
    condicoes.innerText = MELANCIAdb.Clima;
    textCONDICOES.innerText = MELANCIAdb.infoClima;
  
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
    let DIVSolo = document.createElement("div");
    let Solo = document.createElement("h2");
    let textSolo = document.createElement("p");
    DIVSolo.setAttribute("class", "Solo sectionStyle");
    Solo.innerText=MELANCIAdb.Solo;
    textSolo.innerText=MELANCIAdb.infoSolo
  
    DIVSolo.appendChild(Solo)
    DIVSolo.appendChild(textSolo)
     //------------------------------------------------------------
    //
    //
    //CRIANDO Adubacao
    //
    //
    //------------------------------------------------------------
    let DIVAdubacao = document.createElement("div");
    let Adubacao = document.createElement("h2");
    let textAdubacao = document.createElement("p");
    DIVAdubacao.setAttribute("class", "Adubacao sectionStyle");
    Adubacao.innerText=MELANCIAdb.Adubacao;
    textAdubacao.innerText=MELANCIAdb.infoAdubacao
  
    DIVAdubacao.appendChild(Adubacao)
    DIVAdubacao.appendChild(textAdubacao)
    //------------------------------------------------------------
    //
    //
    //CRIANDO DENSIDADE DO PLANTIO
    //
    //
    //------------------------------------------------------------
    let DIVPragas = document.createElement("div");
    let Pragas = document.createElement("h2");
    let textPragas = document.createElement("p");
    DIVPragas.setAttribute("class", "Pragas sectionStyle");
    Pragas.innerText=MELANCIAdb.Pragas;
    textPragas.innerText=MELANCIAdb.infoPragas
  
    DIVPragas.appendChild(Pragas)
    DIVPragas.appendChild(textPragas)
  //------------------------------------------------------------
    //
    //
    //CRIANDO ESPAÇAMENTO ENTRE FILEIRAS
    //
    //
    //------------------------------------------------------------
    let DIVdoencas = document.createElement("div");
    let doencas = document.createElement("h2");
    let textdoencas = document.createElement("p");
    DIVdoencas.setAttribute("class", "doencas sectionStyle");
    doencas.innerText=MELANCIAdb.Doencas;
    textdoencas.innerText=MELANCIAdb.infoDoencas
  
    DIVdoencas.appendChild(doencas)
    DIVdoencas.appendChild(textdoencas)
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
    sectionMELANCIA.appendChild(DIVSolo)
    sectionMELANCIA.appendChild(DIVAdubacao)
    sectionMELANCIA.appendChild(DIVPragas)
    sectionMELANCIA.appendChild(DIVdoencas)
    sectionMELANCIA.appendChild(spanFonte)
    main.appendChild(sectionMELANCIA);
  }

  
  function criarALFACE() {
    let section = document.getElementById("section-cards");
    section.innerHTML = "";
    sectionALFACE.innerHTML="";
  
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
    DIVcondicoes.setAttribute("class", "Clima sectionStyle");
    condicoes.innerText = ALFACEdb.Clima;
    textCONDICOES.innerText = ALFACEdb.infoClima;
  
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
    let DIVSolo = document.createElement("div");
    let Solo = document.createElement("h2");
    let textSolo = document.createElement("p");
    DIVSolo.setAttribute("class", "Solo sectionStyle");
    Solo.innerText=ALFACEdb.Solo;
    textSolo.innerText=ALFACEdb.infoSolo
  
    DIVSolo.appendChild(Solo)
    DIVSolo.appendChild(textSolo)
     //------------------------------------------------------------
    //
    //
    //CRIANDO Adubacao
    //
    //
    //------------------------------------------------------------
    let DIVAdubacao = document.createElement("div");
    let Adubacao = document.createElement("h2");
    let textAdubacao = document.createElement("p");
    DIVAdubacao.setAttribute("class", "Adubacao sectionStyle");
    Adubacao.innerText=ALFACEdb.Adubacao;
    textAdubacao.innerText=ALFACEdb.infoAdubacao
  
    DIVAdubacao.appendChild(Adubacao)
    DIVAdubacao.appendChild(textAdubacao)
    //------------------------------------------------------------
    //
    //
    //CRIANDO DENSIDADE DO PLANTIO
    //
    //
    //------------------------------------------------------------
    let DIVPragas = document.createElement("div");
    let Pragas = document.createElement("h2");
    let textPragas = document.createElement("p");
    DIVPragas.setAttribute("class", "Pragas sectionStyle");
    Pragas.innerText=ALFACEdb.Pragas;
    textPragas.innerText=ALFACEdb.infoPragas
  
    DIVPragas.appendChild(Pragas)
    DIVPragas.appendChild(textPragas)
  //------------------------------------------------------------
    //
    //
    //CRIANDO ESPAÇAMENTO ENTRE FILEIRAS
    //
    //
    //------------------------------------------------------------
    let DIVdoencas = document.createElement("div");
    let doencas = document.createElement("h2");
    let textdoencas = document.createElement("p");
    DIVdoencas.setAttribute("class", "doencas sectionStyle");
    doencas.innerText=ALFACEdb.Doencas;
    textdoencas.innerText=ALFACEdb.infoDoencas
  
    DIVdoencas.appendChild(doencas)
    DIVdoencas.appendChild(textdoencas)
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
    sectionALFACE.appendChild(DIVSolo)
    sectionALFACE.appendChild(DIVAdubacao)
    sectionALFACE.appendChild(DIVPragas)
    sectionALFACE.appendChild(DIVdoencas)
    sectionALFACE.appendChild(spanFonte)
    main.appendChild(sectionALFACE);
  }
