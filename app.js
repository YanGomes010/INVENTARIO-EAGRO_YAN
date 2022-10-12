function criarSOJA() {
  let section = document.getElementById("section-cards");
  section.innerHTML = "";
  sectionSOJA.innerHTML = "";

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
  temperatura.innerText = SOJAdb.temperatura;
  textTemperatura.innerText = SOJAdb.infoTemperatura;

  DIVtemperatura.appendChild(temperatura);
  DIVtemperatura.appendChild(textTemperatura);
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
  Solo.innerText = SOJAdb.Solo;
  textSolo.innerText = SOJAdb.infoSolo;

  DIVSolo.appendChild(Solo);
  DIVSolo.appendChild(textSolo);
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
  Adubacao.innerText = SOJAdb.Adubacao;
  textAdubacao.innerText = SOJAdb.infoAdubacao;

  DIVAdubacao.appendChild(Adubacao);
  DIVAdubacao.appendChild(textAdubacao);
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
  Pragas.innerText = SOJAdb.Pragas;
  textPragas.innerText = SOJAdb.infoPragas;

  DIVPragas.appendChild(Pragas);
  DIVPragas.appendChild(textPragas);
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
  doencas.innerText = SOJAdb.Doencas;
  textdoencas.innerText = SOJAdb.infoDoencas;

  DIVdoencas.appendChild(doencas);
  DIVdoencas.appendChild(textdoencas);
  //------------------------------------------------------------
  //
  //
  //CRIANDO SPAN FONTE
  //
  //
  //------------------------------------------------------------

  let spanFonte = document.createElement("span");
  spanFonte.innerText = "FONTE: Embrapa";
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
  sectionSOJA.appendChild(DIVtemperatura);
  sectionSOJA.appendChild(DIVSolo);
  sectionSOJA.appendChild(DIVAdubacao);
  sectionSOJA.appendChild(DIVPragas);
  sectionSOJA.appendChild(DIVdoencas);
  sectionSOJA.appendChild(spanFonte);
  main.appendChild(sectionSOJA);
}

function criarMILHO() {
  let section = document.getElementById("section-cards");
  section.innerHTML = "";
  sectionMilho.innerHTML = "";

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
  let divImgClima = document.createElement("div");
  let ImgClima = document.createElement("img");
  divImgClima.setAttribute("class", "divImgILUSTRA");
  ImgClima.src = "./images/clima-milho.png";
  ImgClima.setAttribute("class","ImgILUSTRA")
  DIVcondicoes.setAttribute("class", "Clima sectionStyle");
  condicoes.innerText = MILHOdb.Clima;
  textCONDICOES.innerText = MILHOdb.infoClima;

  divImgClima.appendChild(ImgClima)

  DIVcondicoes.appendChild(condicoes);
  DIVcondicoes.appendChild(textCONDICOES);
  DIVcondicoes.appendChild(divImgClima)

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
  let divImgTemperatura = document.createElement("div");
  let ImgTemperatura = document.createElement("img");
  divImgTemperatura.setAttribute("class", "divImgILUSTRA");
  ImgTemperatura.src = "./images/Temperatura-milho.png";
  ImgTemperatura.setAttribute("class","ImgILUSTRA")
  DIVtemperatura.setAttribute("class", "temperatura sectionStyle");
  temperatura.innerText = MILHOdb.temperatura;
  textTemperatura.innerText = MILHOdb.infoTemperatura;

  divImgTemperatura.appendChild(ImgTemperatura)

  DIVtemperatura.appendChild(temperatura);
  DIVtemperatura.appendChild(textTemperatura);
  DIVtemperatura.appendChild(divImgTemperatura)
  //------------------------------------------------------------
  //
  //
  //CRIANDO ADUBAÇÃO
  //
  //
  //------------------------------------------------------------
  let DIVAdubacao = document.createElement("div");
  let Adubacao = document.createElement("h2");
  let ParagrafoADUBACAO_um = document.createElement("p");
  let ParagrafoADUBACAO_dois = document.createElement("p");
  let ParagrafoADUBACAO_tres = document.createElement("p");
  let ParagrafoADUBACAO_quatro = document.createElement("p");
  let ParagrafoADUBACAO_cinco = document.createElement("p");
  let ParagrafoADUBACAO_seis = document.createElement("p");
  let ParagrafoADUBACAO_sete = document.createElement("p");

  //ADICIONANDO IMAGENS -------------------------------------------------------

  let div_img_adubacao = document.createElement("div");
  let div_img_potassio = document.createElement("div");
  let imagem_adubacao_0 = document.createElement("img");
  let imagem_adubacao_1 = document.createElement("img");
  div_img_adubacao.setAttribute("class", "divImgILUSTRA");
  div_img_potassio.setAttribute("class", "divImgILUSTRA");

  imagem_adubacao_0.setAttribute("class", "ImgILUSTRA");
  imagem_adubacao_1.setAttribute("class", "ImgILUSTRA");
  imagem_adubacao_0.src = "./images/Adubacao_MILHO.png";
  imagem_adubacao_1.src = "./images/IMG_potassio_adubo.png";
  DIVAdubacao.setAttribute("class", "Adubacao sectionStyle");
  Adubacao.innerText = MILHOdb.Adubacao;
  div_img_adubacao.appendChild(imagem_adubacao_0);
  div_img_potassio.appendChild(imagem_adubacao_1);

  //    -------------------------------------------------------
  ParagrafoADUBACAO_um.innerText = MILHOdb.ParagrafoADUBACAO_0;
  ParagrafoADUBACAO_dois.innerText = MILHOdb.ParagrafoADUBACAO_1;
  ParagrafoADUBACAO_tres.innerText = MILHOdb.ParagrafoADUBACAO_2;
  ParagrafoADUBACAO_quatro.innerText = MILHOdb.ParagrafoADUBACAO_3;
  ParagrafoADUBACAO_cinco.innerText = MILHOdb.ParagrafoADUBACAO_4;
  ParagrafoADUBACAO_seis.innerText = MILHOdb.ParagrafoADUBACAO_5;
  ParagrafoADUBACAO_sete.innerText = MILHOdb.ParagrafoADUBACAO_6;

  DIVAdubacao.appendChild(Adubacao);
  DIVAdubacao.appendChild(ParagrafoADUBACAO_um);
  DIVAdubacao.appendChild(ParagrafoADUBACAO_dois);
  DIVAdubacao.appendChild(div_img_adubacao);
  DIVAdubacao.appendChild(ParagrafoADUBACAO_tres);
  DIVAdubacao.appendChild(ParagrafoADUBACAO_quatro);
  DIVAdubacao.appendChild(ParagrafoADUBACAO_cinco);
  DIVAdubacao.appendChild(div_img_potassio);
  DIVAdubacao.appendChild(ParagrafoADUBACAO_seis);
  DIVAdubacao.appendChild(ParagrafoADUBACAO_sete);

  //------------------------------------------------------------
  //
  //
  //CRIANDO SOLO E PLANTIO
  //
  //
  //------------------------------------------------------------
  let DIVSolo = document.createElement("div");
  let Solo = document.createElement("h2");
  let ParagrafoSolo_um = document.createElement("p");
  let ParagrafoSolo_dois = document.createElement("p");
  let ParagrafoSolo_tres = document.createElement("p");
  let ParagrafoSolo_quatro = document.createElement("p");
  let ParagrafoSolo_cinco = document.createElement("p");
  let ParagrafoSolo_seis = document.createElement("p");
  DIVSolo.setAttribute("class", "Solo sectionStyle");
  Solo.innerText = MILHOdb.Solo;

  //ADICIONANDO IMAGENS -----------------------------------
  let div_img_solo_0 = document.createElement("div");
  div_img_solo_0.setAttribute("class", "divImgILUSTRA");
  let img_solo_0 = document.createElement("img");
  img_solo_0.src = "./images/milho_solo_0.png";
  img_solo_0.setAttribute("class", "ImgILUSTRA");
  div_img_solo_0.appendChild(img_solo_0);

  let div_img_solo_1 = document.createElement("div");
  div_img_solo_1.setAttribute("class", "divImgILUSTRA");
  let img_solo_1 = document.createElement("img");
  img_solo_1.src = "./images/milho_solo_1.png";
  img_solo_1.setAttribute("class", "ImgILUSTRA");
  div_img_solo_1.appendChild(img_solo_1);

  //----------------------------------------------------------------------
  ParagrafoSolo_um.innerText = MILHOdb.ParagrafoSOLO_0;
  ParagrafoSolo_dois.innerText = MILHOdb.ParagrafoSOLO_1;
  ParagrafoSolo_tresinnerText = MILHOdb.ParagrafoSOLO_2;
  ParagrafoSolo_quatro.innerText = MILHOdb.ParagrafoSOLO_3;
  ParagrafoSolo_cinco.innerText = MILHOdb.ParagrafoSOLO_4;
  ParagrafoSolo_seis.innerText = MILHOdb.ParagrafoSOLO_5;

  DIVSolo.appendChild(Solo);
  DIVSolo.appendChild(ParagrafoSolo_um);
  DIVSolo.appendChild(ParagrafoSolo_dois);
  DIVSolo.appendChild(div_img_solo_0);
  DIVSolo.appendChild(ParagrafoSolo_tres);
  DIVSolo.appendChild(ParagrafoSolo_quatro);
  DIVSolo.appendChild(ParagrafoSolo_cinco);
  DIVSolo.appendChild(div_img_solo_1);
  DIVSolo.appendChild(ParagrafoSolo_seis);
  //------------------------------------------------------------
  //
  //
  //CRIANDO PRAGAS
  //
  //
  //------------------------------------------------------------
  let DIVPragas = document.createElement("div");
  let Pragas = document.createElement("h2");
  let paragrafoPragas_um = document.createElement("p");
  let paragrafoPragas_dois = document.createElement("p");
  DIVPragas.setAttribute("class", "Pragas sectionStyle");
  Pragas.innerText = MILHOdb.Pragas;
  paragrafoPragas_um.innerText = MILHOdb.ParagrafoPragas_0;
  paragrafoPragas_dois.innerText = MILHOdb.ParagrafoPragas_1;

  //------------------------------------------------------------
  //
  //
  //CRIANDO PRAGAS GERAIS
  //
  //
  //------------------------------------------------------------

  let NomePraga_0 = document.createElement("h4");
  let ParagrafoPragas_0 = document.createElement("p");
  let ParagrafoPragas_0_1 = document.createElement("p");
  let divImgPraga_0 = document.createElement("div");
  let ImgPraga_0 = document.createElement("img");
  NomePraga_0.innerText = MILHOdb.PragasTitulo_0;
  ParagrafoPragas_0.innerText = MILHOdb.ParagrafoPragas_2;
  ParagrafoPragas_0_1.innerText = MILHOdb.ParagrafoPragas_3;
  divImgPraga_0.setAttribute("class", "divImgILUSTRA");
  ImgPraga_0.src = "./images/larva-Alfinete.png";
  ImgPraga_0.setAttribute("class", "ImgILUSTRA");
  divImgPraga_0.appendChild(ImgPraga_0);



  let NomePraga_1 = document.createElement("h4");
  let ParagrafoPragas_1 = document.createElement("p");
  let ParagrafoPragas_1_1 = document.createElement("p");
  let divImgPraga_1 = document.createElement("div");
  let ImgPraga_1 = document.createElement("img");
  NomePraga_1.innerText = MILHOdb.PragasTitulo_1;
  ParagrafoPragas_1.innerText = MILHOdb.ParagrafoPragas_4;
  ParagrafoPragas_1_1.innerText = MILHOdb.ParagrafoPragas_5;
  divImgPraga_1.setAttribute("class", "divImgILUSTRA");
  ImgPraga_1.src = "./images/larva-arame.png";
  ImgPraga_1.setAttribute("class", "ImgILUSTRA");
  divImgPraga_1.appendChild(ImgPraga_1);


  let NomePraga_2 = document.createElement("h4");
  let ParagrafoPragas_2 = document.createElement("p");
  let ParagrafoPragas_2_1 = document.createElement("p");
  let divImgPraga_2 = document.createElement("div");
  let ImgPraga_2 = document.createElement("img");
  NomePraga_2.innerText = MILHOdb.PragasTitulo_2;
  ParagrafoPragas_2.innerText = MILHOdb.ParagrafoPragas_6;
  ParagrafoPragas_2_1.innerText = MILHOdb.ParagrafoPragas_7;
  divImgPraga_2.setAttribute("class", "divImgILUSTRA");
  ImgPraga_2.src = "./images/lagarta-do-cartucho.png";
  ImgPraga_2.setAttribute("class", "ImgILUSTRA");
  divImgPraga_2.appendChild(ImgPraga_2);


  let NomePraga_3 = document.createElement("h4");
  let ParagrafoPragas_3 = document.createElement("p");
  let ParagrafoPragas_3_1 = document.createElement("p");
  let divImgPraga_3 = document.createElement("div");
  let ImgPraga_3 = document.createElement("img");
  NomePraga_3.innerText = MILHOdb.PragasTitulo_3;
  ParagrafoPragas_3.innerText = MILHOdb.ParagrafoPragas_8;
  ParagrafoPragas_3_1.innerText = MILHOdb.ParagrafoPragas_9;
  divImgPraga_3.setAttribute("class", "divImgILUSTRA");
  ImgPraga_3.src = "./images/lagarta-da-espiga.png";
  ImgPraga_3.setAttribute("class", "ImgILUSTRA");
  divImgPraga_3.appendChild(ImgPraga_3);

  

  let NomePraga_4 = document.createElement("h4");
  let ParagrafoPragas_4 = document.createElement("p");
  let ParagrafoPragas_4_1 = document.createElement("p");
  let divImgPraga_4 = document.createElement("div");
  let ImgPraga_4 = document.createElement("img");
  NomePraga_4.innerText = MILHOdb.PragasTitulo_4;
  ParagrafoPragas_4.innerText = MILHOdb.ParagrafoPragas_10;
  ParagrafoPragas_4_1.innerText = MILHOdb.ParagrafoPragas_11;
  divImgPraga_4.setAttribute("class", "divImgILUSTRA");
  ImgPraga_4.src = "./images/cigarrinha-do-milho.png";
  ImgPraga_4.setAttribute("class", "ImgILUSTRA");
  divImgPraga_4.appendChild(ImgPraga_4);





  //ADICIONANDO NA TELA-----------------------------------------
  DIVPragas.appendChild(Pragas);
  DIVPragas.appendChild(paragrafoPragas_um);
  DIVPragas.appendChild(paragrafoPragas_dois);
  DIVPragas.appendChild(NomePraga_0);
  DIVPragas.appendChild(ParagrafoPragas_0);
  DIVPragas.appendChild(divImgPraga_0);
  DIVPragas.appendChild(ParagrafoPragas_0_1);
  DIVPragas.appendChild(NomePraga_1);
  DIVPragas.appendChild(ParagrafoPragas_1);
  DIVPragas.appendChild(divImgPraga_1);
  DIVPragas.appendChild(ParagrafoPragas_1_1);
  DIVPragas.appendChild(NomePraga_2);
  DIVPragas.appendChild(ParagrafoPragas_2);
  DIVPragas.appendChild(divImgPraga_2);
  DIVPragas.appendChild(ParagrafoPragas_2_1);
  DIVPragas.appendChild(NomePraga_3);
  DIVPragas.appendChild(ParagrafoPragas_3);
  DIVPragas.appendChild(divImgPraga_3);
  DIVPragas.appendChild(ParagrafoPragas_3_1);
  DIVPragas.appendChild(NomePraga_4);
  DIVPragas.appendChild(ParagrafoPragas_4);
  DIVPragas.appendChild(divImgPraga_4);
  DIVPragas.appendChild(ParagrafoPragas_4_1);

  //------------------------------------------------------------
  //
  //
  //CRIANDO DOENÇAS
  //
  //
  //------------------------------------------------------------
  let DIVdoencas = document.createElement("div");
  let doencas = document.createElement("h2");
  let ParagrafoDoencas_um = document.createElement("p");
  let ParagrafoDoencas_dois = document.createElement("p");
  let ParagrafoDoencas_tres = document.createElement("p");
  DIVdoencas.setAttribute("class", "doencas sectionStyle");
  doencas.innerText = MILHOdb.Doencas;
  ParagrafoDoencas_um.innerText = MILHOdb.ParagrafoDoencas_0;
  ParagrafoDoencas_dois.innerText = MILHOdb.ParagrafoDoencas_1;
  ParagrafoDoencas_tres.innerText = MILHOdb.ParagrafoDoencas_2;

  //------------------------------------------------------------
  //
  //
  //CRIANDO TODAS DOENÇAS
  //
  //
  //------------------------------------------------------------

  let NomeDoenca_0 = document.createElement("h4");
  let ParagrafoDoencas_0 = document.createElement("p");
  let ParagrafoDoencas_0_1 = document.createElement("p");
  let divImgDoenca_0 = document.createElement("div");
  let ImgDoenca_0 = document.createElement("img");
  NomeDoenca_0.innerText = MILHOdb.DoencasTitulo_0;
  ParagrafoDoencas_0.innerText = MILHOdb.ParagrafoDoencas_3;
  ParagrafoDoencas_0_1.innerText = MILHOdb.ParagrafoDoencas_4;
  divImgDoenca_0.setAttribute("class", "divImgILUSTRA");
  ImgDoenca_0.src = "./images/ferrugem-no-milho.png";
  ImgDoenca_0.setAttribute("class", "ImgILUSTRA");
  divImgDoenca_0.appendChild(ImgDoenca_0);

  
  let NomeDoenca_1 = document.createElement("h4");
  let ParagrafoDoencas_1 = document.createElement("p");
  let ParagrafoDoencas_1_1 = document.createElement("p");
  let divImgDoenca_1 = document.createElement("div");
  let ImgDoenca_1 = document.createElement("img");
  NomeDoenca_1.innerText = MILHOdb.DoencasTitulo_1;
  ParagrafoDoencas_1.innerText = MILHOdb.ParagrafoDoencas_5;
  ParagrafoDoencas_1_1.innerText = MILHOdb.ParagrafoDoencas_6;
  divImgDoenca_1.setAttribute("class", "divImgILUSTRA");
  ImgDoenca_1.src = "./images/ferrugem-comum.png";
  ImgDoenca_1.setAttribute("class", "ImgILUSTRA");
  divImgDoenca_1.appendChild(ImgDoenca_1);


  let NomeDoenca_2 = document.createElement("h4");
  let ParagrafoDoencas_2 = document.createElement("p");
  let ParagrafoDoencas_2_1 = document.createElement("p");
  let divImgDoenca_2 = document.createElement("div");
  let ImgDoenca_2 = document.createElement("img");
  NomeDoenca_2.innerText = MILHOdb.DoencasTitulo_2;
  ParagrafoDoencas_2.innerText = MILHOdb.ParagrafoDoencas_7;
  ParagrafoDoencas_2_1.innerText = MILHOdb.ParagrafoDoencas_8;
  divImgDoenca_2.setAttribute("class", "divImgILUSTRA");
  ImgDoenca_2.src = "./images/helmintosprose.png";
  ImgDoenca_2.setAttribute("class", "ImgILUSTRA");
  divImgDoenca_2.appendChild(ImgDoenca_2);



  //ENFEZAMENTOS-------------------------------------------------------------------------------


  let NomeDoenca_3 = document.createElement("h4");
  let ParagrafoDoencas_3 = document.createElement("p");
  let ParagrafoDoencas_3_1 = document.createElement("p");
  let ParagrafoDoencas_3_2 = document.createElement("p");
  let ParagrafoDoencas_3_3 = document.createElement("p");
  let divImgDoenca_3 = document.createElement("div");
  let ImgDoenca_3 = document.createElement("img");
  let divImgDoenca_3_1 = document.createElement("div");
  let ImgDoenca_3_1 = document.createElement("img");
  let divImgDoenca_3_2 = document.createElement("div");
  let ImgDoenca_3_2 = document.createElement("img");
  NomeDoenca_3.innerText = MILHOdb.DoencasTitulo_3;
  ParagrafoDoencas_3.innerText = MILHOdb.ParagrafoDoencas_9;
  ParagrafoDoencas_3_1.innerText = MILHOdb.ParagrafoDoencas_10;
  ParagrafoDoencas_3_2.innerText = MILHOdb.ParagrafoDoencas_11;
  ParagrafoDoencas_3_3.innerText = MILHOdb.ParagrafoDoencas_12;
  divImgDoenca_3.setAttribute("class", "divImgILUSTRA");
  ImgDoenca_3.src = "./images/enfezamentos.png";
  ImgDoenca_3.setAttribute("class", "ImgILUSTRA");
  divImgDoenca_3_1.setAttribute("class", "divImgILUSTRA");
  ImgDoenca_3_1.src = "./images/enfezamento-vermelho.png";
  ImgDoenca_3_1.setAttribute("class", "ImgILUSTRA");
  divImgDoenca_3_2.setAttribute("class", "divImgILUSTRA");
  ImgDoenca_3_2.src = "./images/enfezamento-palido.png";
  ImgDoenca_3_2.setAttribute("class", "ImgILUSTRA");
  divImgDoenca_3.appendChild(ImgDoenca_3);
  divImgDoenca_3_1.appendChild(ImgDoenca_3_1);
  divImgDoenca_3_2.appendChild(ImgDoenca_3_2);

  //------------------------------------------------------------------------------------------


  let NomeDoenca_4 = document.createElement("h4");
  let ParagrafoDoencas_4 = document.createElement("p");
  let ParagrafoDoencas_4_1 = document.createElement("p");
  let divImgDoenca_4 = document.createElement("div");
  let ImgDoenca_4 = document.createElement("img");
  NomeDoenca_4.innerText = MILHOdb.DoencasTitulo_4;
  ParagrafoDoencas_4.innerText = MILHOdb.ParagrafoDoencas_13;
  ParagrafoDoencas_4_1.innerText = MILHOdb.ParagrafoDoencas_14;
  divImgDoenca_4.setAttribute("class", "divImgILUSTRA");
  ImgDoenca_4.src = "./images/ferrugem-tropical.png";
  ImgDoenca_4.setAttribute("class", "ImgILUSTRA");
  divImgDoenca_4.appendChild(ImgDoenca_4);


  DIVdoencas.appendChild(doencas);
  DIVdoencas.appendChild(ParagrafoDoencas_um);
  DIVdoencas.appendChild(ParagrafoDoencas_dois);
  DIVdoencas.appendChild(ParagrafoDoencas_tres);
  DIVdoencas.appendChild(NomeDoenca_0)
  DIVdoencas.appendChild(ParagrafoDoencas_0)
  DIVdoencas.appendChild(divImgDoenca_0)
  DIVdoencas.appendChild(ParagrafoDoencas_0_1)
  DIVdoencas.appendChild(NomeDoenca_1)
  DIVdoencas.appendChild(ParagrafoDoencas_1)
  DIVdoencas.appendChild(divImgDoenca_1)
  DIVdoencas.appendChild(ParagrafoDoencas_1_1)
  DIVdoencas.appendChild(NomeDoenca_2)
  DIVdoencas.appendChild(ParagrafoDoencas_2)
  DIVdoencas.appendChild(divImgDoenca_2)
  DIVdoencas.appendChild(ParagrafoDoencas_2_1)
  DIVdoencas.appendChild(NomeDoenca_3)
  DIVdoencas.appendChild(ParagrafoDoencas_3)
  DIVdoencas.appendChild(divImgDoenca_3)
  DIVdoencas.appendChild(ParagrafoDoencas_3_1)
  DIVdoencas.appendChild(divImgDoenca_3_1)
  DIVdoencas.appendChild(ParagrafoDoencas_3_2)
  DIVdoencas.appendChild(divImgDoenca_3_2)
  DIVdoencas.appendChild(NomeDoenca_4)
  DIVdoencas.appendChild(ParagrafoDoencas_4)
  DIVdoencas.appendChild(divImgDoenca_4)
  DIVdoencas.appendChild(ParagrafoDoencas_4_1)

  //------------------------------------------------------------
  //
  //
  //CRIANDO COLHEITA
  //
  //
  //------------------------------------------------------------

  let DivColheita = document.createElement("div")
let Colheita = document.createElement("h2")
let paragrafo_colheita = document.createElement("p")
let DivimgColheitaMilho = document.createElement("div")
let imgColheitaMilho = document.createElement("img")
DivColheita.setAttribute("class", "Colheita sectionStyle");
Colheita.innerText=MILHOdb.Colheita
paragrafo_colheita.innerText=MILHOdb.paragrafoColheita_milho

DivimgColheitaMilho.setAttribute("class", "divImgILUSTRA");
imgColheitaMilho.setAttribute("class", "ImgILUSTRA");
imgColheitaMilho.src="./images/colheita-Milho.png"
DivimgColheitaMilho.appendChild(imgColheitaMilho)

  DivColheita.appendChild(Colheita)
  DivColheita.appendChild(paragrafo_colheita)
  DivColheita.appendChild(DivimgColheitaMilho)
  //
  //
  //CRIANDO SPAN FONTE
  //
  //
  //------------------------------------------------------------
  let divFonte = document.createElement("div");
  let spanFonte = document.createElement("span");
  let spanFonte1 = document.createElement("span");
  let spanFonte2 = document.createElement("span");
  let spanFonte3 = document.createElement("span");
  let spanFonte4 = document.createElement("span");
  divFonte.setAttribute("id", "divFonte");
  spanFonte.innerText = "EMBRAPA. Sistema de Produção, 1 ISSN 1679-012X. 2012.";
  spanFonte1.innerText =
    "EMBRAPA.; BORGHI, E.; PEREIRA FILHO, I. A.; RESENDE, A. V. de; SILVA, D. D. da; MENDES, S. M.; SILVA, A. F. da. 2017. Embrapa Milho e Sorgo";
  spanFonte2.innerText =
    "EQUIPE MAIS SOJA.; O milho é sensível a fotoperíodo?. 2020.";
  spanFonte3.innerText =
  "BLOG AEGRO.; blog.aegro.com.br/larva-arame/" 
  spanFonte4.innerText = 
  "AGROLINK.;agrolink.com.br/culturas/"

   

  divFonte.appendChild(spanFonte);
  divFonte.appendChild(spanFonte1);
  divFonte.appendChild(spanFonte2);
  divFonte.appendChild(spanFonte3);
  divFonte.appendChild(spanFonte4);
 
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
  sectionMilho.appendChild(DIVtemperatura);
  sectionMilho.appendChild(DIVAdubacao);
  sectionMilho.appendChild(DIVSolo);
  sectionMilho.appendChild(DIVPragas);
  sectionMilho.appendChild(DIVdoencas);
  sectionMilho.appendChild(DivColheita);
  sectionMilho.appendChild(divFonte);
  main.appendChild(sectionMilho);
}

function criarMELANCIA() {
  let section = document.getElementById("section-cards");
  section.innerHTML = "";
  sectionMELANCIA.innerHTML = "";

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
  let DIVClima = document.createElement("div");
  let clima = document.createElement("h2");
  let divImgClima_melancia_0 = document.createElement("div")
  let divImgClima_melancia_1 = document.createElement("div")
  let img_clima_0 = document.createElement("img")
  let img_clima_1 = document.createElement("img")
  let Paragrafo_melancia_um = document.createElement("p");
  let Paragrafo_melancia_dois = document.createElement("p");
  let Paragrafo_melancia_tres = document.createElement("p");
  let Paragrafo_melancia_quatro = document.createElement("p");
  DIVClima.setAttribute("class", "Clima sectionStyle");
  divImgClima_melancia_0.setAttribute("class", "divImgILUSTRA");
  divImgClima_melancia_1.setAttribute("class", "divImgILUSTRA");
  img_clima_0.src = "./images/melancia_clima.png";
  img_clima_1.src = "./images/melancia_fileiras.png";
  img_clima_0.setAttribute("class","ImgILUSTRA")
  img_clima_1.setAttribute("class","ImgILUSTRA")
  
  clima.innerText = MELANCIAdb.Clima;
  Paragrafo_melancia_um.innerText = MELANCIAdb.Paragrafo_melancia_0;
  Paragrafo_melancia_dois.innerText = MELANCIAdb.Paragrafo_melancia_1;
  Paragrafo_melancia_tres.innerText = MELANCIAdb.Paragrafo_melancia_2;
  Paragrafo_melancia_quatro.innerText = MELANCIAdb.Paragrafo_melancia_3;

  divImgClima_melancia_0.appendChild(img_clima_0)
  divImgClima_melancia_1.appendChild(img_clima_1)

  DIVClima.appendChild(clima);
  DIVClima.appendChild(Paragrafo_melancia_um);
  DIVClima.appendChild(divImgClima_melancia_0)
  DIVClima.appendChild(Paragrafo_melancia_dois);
  DIVClima.appendChild(Paragrafo_melancia_tres);
  DIVClima.appendChild(divImgClima_melancia_1)
  DIVClima.appendChild(Paragrafo_melancia_quatro);

 
  //------------------------------------------------------------
  //
  //
  //CRIANDO UMIDADE DO SOLO
  //
  //
  //------------------------------------------------------------
  let DIVSolo = document.createElement("div");
  let Solo = document.createElement("h2");
  let divImgSolo_melancia = document.createElement("div")
  let Img_melancia = document.createElement("img")
  let Paragrafo_melancia_4 = document.createElement("p");
  let Paragrafo_melancia_5 = document.createElement("p");
  DIVSolo.setAttribute("class", "Solo sectionStyle");
  divImgSolo_melancia.setAttribute("class", "divImgILUSTRA")
  Img_melancia.setAttribute("class","ImgILUSTRA")
  Img_melancia.src="./images/Hectare_melancia.png"
  Solo.innerText = MELANCIAdb.Solo;
  Paragrafo_melancia_4.innerText = MELANCIAdb.Paragrafo_melancia_4;
  Paragrafo_melancia_5.innerText = MELANCIAdb.Paragrafo_melancia_5;

  divImgSolo_melancia.appendChild(Img_melancia)
  DIVSolo.appendChild(Solo);
  DIVSolo.appendChild(Paragrafo_melancia_4);
  DIVSolo.appendChild(divImgSolo_melancia)
  DIVSolo.appendChild(Paragrafo_melancia_5);
  //------------------------------------------------------------
  //
  //
  //CRIANDO Adubacao
  //
  //
  //-----------------------------------------------------------
  let DIVAdubacao = document.createElement("div");
  let Adubacao = document.createElement("h2");
  let paragrafo_adubacao_melancia_um = document.createElement("p");
  let paragrafo_adubacao_melancia_dois = document.createElement("p");
  let paragrafo_adubacao_melancia_tres = document.createElement("p");
  let paragrafo_adubacao_melancia_quatro = document.createElement("p");
  let paragrafo_adubacao_melancia_cinco = document.createElement("p");
  let DivImgAduboMelancia_um = document.createElement("div")
  let DivImgAduboMelancia_dois = document.createElement("div")
  let IMGAduboMelancia_um = document.createElement("img")
  let IMGAduboMelancia_dois = document.createElement("img")
  DivImgAduboMelancia_um.setAttribute("class", "divImgILUSTRA")
  DivImgAduboMelancia_dois.setAttribute("class", "divImgILUSTRA")
  IMGAduboMelancia_um.src="./images/ureia-melancia.png"
  IMGAduboMelancia_dois.src="./images/melancia-imagem.png"
  IMGAduboMelancia_um.setAttribute("class","ImgILUSTRA")
  IMGAduboMelancia_dois.setAttribute("class","ImgILUSTRA")
  DIVAdubacao.setAttribute("class", "Adubacao sectionStyle");
  Adubacao.innerText = MELANCIAdb.Adubacao;
  paragrafo_adubacao_melancia_um.innerText = MELANCIAdb.Paragrafo_melancia_6;
  paragrafo_adubacao_melancia_dois.innerText = MELANCIAdb.Paragrafo_melancia_7;
  paragrafo_adubacao_melancia_tres.innerText = MELANCIAdb.Paragrafo_melancia_8;
  paragrafo_adubacao_melancia_quatro.innerText = MELANCIAdb.Paragrafo_melancia_9;
  paragrafo_adubacao_melancia_cinco.innerText = MELANCIAdb.Paragrafo_melancia_10;

DivImgAduboMelancia_um.appendChild(IMGAduboMelancia_um)
DivImgAduboMelancia_dois.appendChild(IMGAduboMelancia_dois)
  DIVAdubacao.appendChild(Adubacao);
  DIVAdubacao.appendChild(paragrafo_adubacao_melancia_um);
  DIVAdubacao.appendChild(DivImgAduboMelancia_um)
  DIVAdubacao.appendChild(paragrafo_adubacao_melancia_dois);
  DIVAdubacao.appendChild(paragrafo_adubacao_melancia_tres);
  DIVAdubacao.appendChild(DivImgAduboMelancia_dois)
  DIVAdubacao.appendChild(paragrafo_adubacao_melancia_quatro);
  DIVAdubacao.appendChild(paragrafo_adubacao_melancia_cinco);
  //------------------------------------------------------------
  //
  //
  //CRIANDO PRAGAS
  //
  //
  //------------------------------------------------------------
  let DIVPragas = document.createElement("div");
  let Pragas = document.createElement("h2");
  let NomePraga_melancia_0 = document.createElement("h4");
  let NomePraga_melancia_1 = document.createElement("h4");
  let NomePraga_melancia_2 = document.createElement("h4");
  let NomePraga_melancia_3 = document.createElement("h4");
  let NomePraga_melancia_4 = document.createElement("h4");
  let DivImgPragas_melancia_0 = document.createElement("div")
  let DivImgPragas_melancia_1 = document.createElement("div")
  let DivImgPragas_melancia_2 = document.createElement("div")
  let DivImgPragas_melancia_3 = document.createElement("div")
  let DivImgPragas_melancia_4 = document.createElement("div")
DivImgPragas_melancia_0.setAttribute("class", "divImgILUSTRA")
DivImgPragas_melancia_1.setAttribute("class", "divImgILUSTRA")
DivImgPragas_melancia_2.setAttribute("class", "divImgILUSTRA")
DivImgPragas_melancia_3.setAttribute("class", "divImgILUSTRA")
DivImgPragas_melancia_4.setAttribute("class", "divImgILUSTRA")
  let ImgPragas_melancia_0 = document.createElement("img")
  let ImgPragas_melancia_1 = document.createElement("img")
  let ImgPragas_melancia_2 = document.createElement("img")
  let ImgPragas_melancia_3 = document.createElement("img")
  let ImgPragas_melancia_4 = document.createElement("img")
  ImgPragas_melancia_0.setAttribute("class","ImgILUSTRA")
  ImgPragas_melancia_1.setAttribute("class","ImgILUSTRA")
  ImgPragas_melancia_2.setAttribute("class","ImgILUSTRA")
  ImgPragas_melancia_3.setAttribute("class","ImgILUSTRA")
  ImgPragas_melancia_4.setAttribute("class","ImgILUSTRA")
  let Paragrafo_praga_um = document.createElement("p");
  let Paragrafo_praga_dois = document.createElement("p");
  let Paragrafo_praga_tres = document.createElement("p");
  let Paragrafo_praga_quatro = document.createElement("p");
  let Paragrafo_praga_cinco = document.createElement("p");
  let Paragrafo_praga_seis = document.createElement("p");
  let Paragrafo_praga_sete = document.createElement("p");
  let Paragrafo_praga_oito = document.createElement("p");
  let Paragrafo_praga_nove = document.createElement("p");
  let Paragrafo_praga_dez = document.createElement("p");
  let Paragrafo_praga_onze = document.createElement("p");
  DIVPragas.setAttribute("class", "Pragas sectionStyle");
  Pragas.innerText = MELANCIAdb.Pragas;
  Paragrafo_praga_um.innerText = MELANCIAdb.ParagrafoPragas_melancia_0;
  Paragrafo_praga_dois.innerText = MELANCIAdb.ParagrafoPragas_melancia_1;
  Paragrafo_praga_tres.innerText = MELANCIAdb.ParagrafoPragas_melancia_2;
  Paragrafo_praga_quatro.innerText = MELANCIAdb.ParagrafoPragas_melancia_3;
  Paragrafo_praga_cinco.innerText = MELANCIAdb.ParagrafoPragas_melancia_4;
  Paragrafo_praga_seis.innerText = MELANCIAdb.ParagrafoPragas_melancia_5;
  Paragrafo_praga_sete.innerText = MELANCIAdb.ParagrafoPragas_melancia_6;
  Paragrafo_praga_oito.innerText = MELANCIAdb.ParagrafoPragas_melancia_7;
  Paragrafo_praga_nove.innerText = MELANCIAdb.ParagrafoPragas_melancia_8;
  Paragrafo_praga_dez.innerText = MELANCIAdb.ParagrafoPragas_melancia_9;
  Paragrafo_praga_onze.innerText = MELANCIAdb.ParagrafoPragas_melancia_10;





NomePraga_melancia_0.innerText=MELANCIAdb.MelanciaPragas_0
NomePraga_melancia_1.innerText=MELANCIAdb.MelanciaPragas_1
NomePraga_melancia_2.innerText=MELANCIAdb.MelanciaPragas_2
NomePraga_melancia_3.innerText=MELANCIAdb.MelanciaPragas_3
NomePraga_melancia_4.innerText=MELANCIAdb.MelanciaPragas_4

  //Adicionando imagens

  ImgPragas_melancia_0.src="./images/lagarta-rosca.svg"
  ImgPragas_melancia_1.src="./images/vaquinha.svg"
  ImgPragas_melancia_2.src="./images/pulgao.png"
  ImgPragas_melancia_3.src="./images/broca-melancia.png"
  ImgPragas_melancia_4.src="./images/mosca-branca.svg"

  DivImgPragas_melancia_0.appendChild(ImgPragas_melancia_0)
  DivImgPragas_melancia_1.appendChild(ImgPragas_melancia_1)
  DivImgPragas_melancia_2.appendChild(ImgPragas_melancia_2)
  DivImgPragas_melancia_3.appendChild(ImgPragas_melancia_3)
  DivImgPragas_melancia_4.appendChild(ImgPragas_melancia_4)






  DIVPragas.appendChild(Pragas);
  DIVPragas.appendChild(Paragrafo_praga_um);
  DIVPragas.appendChild(NomePraga_melancia_0)
  DIVPragas.appendChild(Paragrafo_praga_dois);
  DIVPragas.appendChild(DivImgPragas_melancia_0)
  DIVPragas.appendChild(Paragrafo_praga_tres);
  DIVPragas.appendChild(NomePraga_melancia_1)
  DIVPragas.appendChild(Paragrafo_praga_quatro);
  DIVPragas.appendChild(DivImgPragas_melancia_1)
  DIVPragas.appendChild(Paragrafo_praga_cinco);
  DIVPragas.appendChild(NomePraga_melancia_2)
  DIVPragas.appendChild(Paragrafo_praga_seis);
  DIVPragas.appendChild(DivImgPragas_melancia_2)
  DIVPragas.appendChild(Paragrafo_praga_sete);
  DIVPragas.appendChild(NomePraga_melancia_3)
  DIVPragas.appendChild(Paragrafo_praga_oito);
  DIVPragas.appendChild(DivImgPragas_melancia_3)
  DIVPragas.appendChild(Paragrafo_praga_nove);
  DIVPragas.appendChild(NomePraga_melancia_4)
  DIVPragas.appendChild(Paragrafo_praga_dez);
  DIVPragas.appendChild(DivImgPragas_melancia_4)
  DIVPragas.appendChild(Paragrafo_praga_onze);
  //------------------------------------------------------------
  //
  //
  //DOENÇAS
  //
  //
  //------------------------------------------------------------
  let DIVDoencas = document.createElement("div");
  let Doencas = document.createElement("h2");
  let NomeDoenca_melancia_0 = document.createElement("h4");
  let NomeDoenca_melancia_1 = document.createElement("h4");
  let NomeDoenca_melancia_2 = document.createElement("h4");
  let NomeDoenca_melancia_3 = document.createElement("h4");
  let NomeDoenca_melancia_4 = document.createElement("h4");
  let DivImgDoencas_melancia_0 = document.createElement("div")
  let DivImgDoencas_melancia_1 = document.createElement("div")
  let DivImgDoencas_melancia_2 = document.createElement("div")
  let DivImgDoencas_melancia_3 = document.createElement("div")
  let DivImgDoencas_melancia_4 = document.createElement("div")
DivImgDoencas_melancia_0.setAttribute("class", "divImgILUSTRA")
DivImgDoencas_melancia_1.setAttribute("class", "divImgILUSTRA")
DivImgDoencas_melancia_2.setAttribute("class", "divImgILUSTRA")
DivImgDoencas_melancia_3.setAttribute("class", "divImgILUSTRA")
DivImgDoencas_melancia_4.setAttribute("class", "divImgILUSTRA")
  let ImgDoencas_melancia_0 = document.createElement("img")
  let ImgDoencas_melancia_1 = document.createElement("img")
  let ImgDoencas_melancia_2 = document.createElement("img")
  let ImgDoencas_melancia_3 = document.createElement("img")
  let ImgDoencas_melancia_4 = document.createElement("img")
  ImgDoencas_melancia_0.setAttribute("class","ImgILUSTRA")
  ImgDoencas_melancia_1.setAttribute("class","ImgILUSTRA")
  ImgDoencas_melancia_2.setAttribute("class","ImgILUSTRA")
  ImgDoencas_melancia_3.setAttribute("class","ImgILUSTRA")
  ImgDoencas_melancia_4.setAttribute("class","ImgILUSTRA")
  let Paragrafo_Doenca_um = document.createElement("p");
  let Paragrafo_Doenca_dois = document.createElement("p");
  let Paragrafo_Doenca_tres = document.createElement("p");
  let Paragrafo_Doenca_quatro = document.createElement("p");
  let Paragrafo_Doenca_cinco = document.createElement("p");
  let Paragrafo_Doenca_seis = document.createElement("p");
  let Paragrafo_Doenca_sete = document.createElement("p");
  let Paragrafo_Doenca_oito = document.createElement("p");
  let Paragrafo_Doenca_nove = document.createElement("p");
  let Paragrafo_Doenca_dez = document.createElement("p");
  let Paragrafo_Doenca_onze = document.createElement("p");
  DIVDoencas.setAttribute("class", "Doencas sectionStyle");
  Doencas.innerText = MELANCIAdb.Doencas;
  Paragrafo_Doenca_um.innerText = MELANCIAdb.ParagrafoDoencas_melancia_0;
  Paragrafo_Doenca_dois.innerText = MELANCIAdb.ParagrafoDoencas_melancia_1;
  Paragrafo_Doenca_tres.innerText = MELANCIAdb.ParagrafoDoencas_melancia_2;
  Paragrafo_Doenca_quatro.innerText = MELANCIAdb.ParagrafoDoencas_melancia_3;
  Paragrafo_Doenca_cinco.innerText = MELANCIAdb.ParagrafoDoencas_melancia_4;
  Paragrafo_Doenca_seis.innerText = MELANCIAdb.ParagrafoDoencas_melancia_5;
  Paragrafo_Doenca_sete.innerText = MELANCIAdb.ParagrafoDoencas_melancia_6;
  Paragrafo_Doenca_oito.innerText = MELANCIAdb.ParagrafoDoencas_melancia_7;
  Paragrafo_Doenca_nove.innerText = MELANCIAdb.ParagrafoDoencas_melancia_8;
  Paragrafo_Doenca_dez.innerText = MELANCIAdb.ParagrafoDoencas_melancia_9;
  Paragrafo_Doenca_onze.innerText = MELANCIAdb.ParagrafoDoencas_melancia_10;





NomeDoenca_melancia_0.innerText=MELANCIAdb.TituloDoencas_melancia_0
NomeDoenca_melancia_1.innerText=MELANCIAdb.TituloDoencas_melancia_1
NomeDoenca_melancia_2.innerText=MELANCIAdb.TituloDoencas_melancia_2
NomeDoenca_melancia_3.innerText=MELANCIAdb.TituloDoencas_melancia_3
NomeDoenca_melancia_4.innerText=MELANCIAdb.TituloDoencas_melancia_4

  //Adicionando imagens

  ImgDoencas_melancia_0.src="./images/tombamento.svg"
  ImgDoencas_melancia_1.src="./images/antracnose.svg"
  ImgDoencas_melancia_2.src="./images/oidio.svg"
  ImgDoencas_melancia_3.src="./images/gomoso-do-caule.svg"
  ImgDoencas_melancia_4.src="./images/mildio.svg"

  DivImgDoencas_melancia_0.appendChild(ImgDoencas_melancia_0)
  DivImgDoencas_melancia_1.appendChild(ImgDoencas_melancia_1)
  DivImgDoencas_melancia_2.appendChild(ImgDoencas_melancia_2)
  DivImgDoencas_melancia_3.appendChild(ImgDoencas_melancia_3)
  DivImgDoencas_melancia_4.appendChild(ImgDoencas_melancia_4)






  DIVDoencas.appendChild(Doencas);
  DIVDoencas.appendChild(NomeDoenca_melancia_0)
  DIVDoencas.appendChild(Paragrafo_Doenca_um);
  DIVDoencas.appendChild(DivImgDoencas_melancia_0)
  DIVDoencas.appendChild(Paragrafo_Doenca_dois);
  DIVDoencas.appendChild(NomeDoenca_melancia_1)
  DIVDoencas.appendChild(Paragrafo_Doenca_tres);
  DIVDoencas.appendChild(DivImgDoencas_melancia_1)
  DIVDoencas.appendChild(Paragrafo_Doenca_quatro);
  DIVDoencas.appendChild(NomeDoenca_melancia_2)
  DIVDoencas.appendChild(Paragrafo_Doenca_cinco);
  DIVDoencas.appendChild(DivImgDoencas_melancia_2)
  DIVDoencas.appendChild(Paragrafo_Doenca_seis);
  DIVDoencas.appendChild(NomeDoenca_melancia_3)
  DIVDoencas.appendChild(Paragrafo_Doenca_sete);
  DIVDoencas.appendChild(DivImgDoencas_melancia_3)
  DIVDoencas.appendChild(Paragrafo_Doenca_oito);
  DIVDoencas.appendChild(NomeDoenca_melancia_4)
  DIVDoencas.appendChild(Paragrafo_Doenca_nove);
  DIVDoencas.appendChild(DivImgDoencas_melancia_4)
  DIVDoencas.appendChild(Paragrafo_Doenca_dez);
 

  //------------------------------------------------------------
  //
  //CRIANDO TRATOS CULTURAIS
  //
  //------------------------------------------------------------

let DivTratos = document.createElement("div")
let Tratos = document.createElement("h2")
let paragrafo_tratos_um = document.createElement("p")
let paragrafo_tratos_dois = document.createElement("p")
let paragrafo_tratos_tres = document.createElement("p")
let paragrafo_tratos_quatro = document.createElement("p")
let paragrafo_tratos_cinco = document.createElement("p")
let paragrafo_tratos_seis = document.createElement("p")
let DivimgTratos_melancia_0 = document.createElement("div")
let DivimgTratos_melancia_1 = document.createElement("div")
let imgTratos_melancia_0 = document.createElement("img")
let imgTratos_melancia_1 = document.createElement("img")
DivTratos.setAttribute("class", "Tratos sectionStyle");
Tratos.innerText = MELANCIAdb.TratosCulturais

paragrafo_tratos_um.innerText=MELANCIAdb.ParagrafoTratos_0
paragrafo_tratos_dois.innerText=MELANCIAdb.ParagrafoTratos_1
paragrafo_tratos_tres.innerText=MELANCIAdb.ParagrafoTratos_2
paragrafo_tratos_quatro.innerText=MELANCIAdb.ParagrafoTratos_3
paragrafo_tratos_cinco.innerText=MELANCIAdb.ParagrafoTratos_4
paragrafo_tratos_seis.innerText=MELANCIAdb.ParagrafoTratos_5
DivimgTratos_melancia_0.setAttribute("class","divImgILUSTRA")
DivimgTratos_melancia_1.setAttribute("class","divImgILUSTRA")
imgTratos_melancia_0.setAttribute("class","ImgILUSTRA")
imgTratos_melancia_1.setAttribute("class","ImgILUSTRA")

imgTratos_melancia_0.src="./images/Tratos-melancia_0.png"
imgTratos_melancia_1.src="./images/Tratos-melancia_1.png"

DivimgTratos_melancia_0.appendChild(imgTratos_melancia_0)
DivimgTratos_melancia_1.appendChild(imgTratos_melancia_1)


DivTratos.appendChild(Tratos)
DivTratos.appendChild(paragrafo_tratos_um)
DivTratos.appendChild(DivimgTratos_melancia_0)
DivTratos.appendChild(paragrafo_tratos_dois)
DivTratos.appendChild(paragrafo_tratos_tres)
DivTratos.appendChild(paragrafo_tratos_quatro)
DivTratos.appendChild(DivimgTratos_melancia_1)
DivTratos.appendChild(paragrafo_tratos_cinco)
DivTratos.appendChild(paragrafo_tratos_seis)

//------------------------------------------------------------
  //
  //
  //CRIANDO COLEHITA
  //
  //
  //------------------------------------------------------------

let DivColheita = document.createElement("div")
let Colheita = document.createElement("h2")
let paragrafo_melancia_colheita = document.createElement("p")
let DivImgColheita = document.createElement("div")
let ImgColheita = document.createElement("img")
DivColheita.setAttribute("class", "Colheita sectionStyle");
Colheita.innerText=MELANCIAdb.Colheita
paragrafo_melancia_colheita.innerText= MELANCIAdb.Paragrafo_colheita

DivImgColheita.setAttribute("class","divImgILUSTRA")
ImgColheita.setAttribute("class","ImgILUSTRA")
ImgColheita.src="./images/Colheita_melancia.png"


DivImgColheita.appendChild(ImgColheita)


DivColheita.appendChild(Colheita)
DivColheita.appendChild(paragrafo_melancia_colheita)
DivColheita.appendChild(DivImgColheita)
  //------------------------------------------------------------
  //
  //
  //CRIANDO SPAN FONTE
  //
  //
  //------------------------------------------------------------

  let spanFonte = document.createElement("span");
  spanFonte.innerText = "FONTE: Embrapa";
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
  sectionMELANCIA.appendChild(DIVClima);
  sectionMELANCIA.appendChild(DIVAdubacao);
  sectionMELANCIA.appendChild(DIVSolo);
  sectionMELANCIA.appendChild(DIVPragas);
  sectionMELANCIA.appendChild(DIVDoencas);
  sectionMELANCIA.appendChild(DivTratos);
  sectionMELANCIA.appendChild(DivColheita);
  sectionMELANCIA.appendChild(spanFonte);
  main.appendChild(sectionMELANCIA);
}

function criarALFACE() {
  let section = document.getElementById("section-cards");
  section.innerHTML = "";
  sectionALFACE.innerHTML = "";

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
  //CRIANDO CLIMA 
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
  temperatura.innerText = ALFACEdb.temperatura;
  textTemperatura.innerText = ALFACEdb.infoTemperatura;

  DIVtemperatura.appendChild(temperatura);
  DIVtemperatura.appendChild(textTemperatura);
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
  Solo.innerText = ALFACEdb.Solo;
  textSolo.innerText = ALFACEdb.infoSolo;

  DIVSolo.appendChild(Solo);
  DIVSolo.appendChild(textSolo);
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
  Adubacao.innerText = ALFACEdb.Adubacao;
  textAdubacao.innerText = ALFACEdb.infoAdubacao;

  DIVAdubacao.appendChild(Adubacao);
  DIVAdubacao.appendChild(textAdubacao);
  //------------------------------------------------------------
  //
  //
  //CRIANDO PRAGAS
  //
  //
  //------------------------------------------------------------
  let DIVPragas = document.createElement("div");
  let Pragas = document.createElement("h2");
  let textPragas = document.createElement("p");
  DIVPragas.setAttribute("class", "Pragas sectionStyle");
  Pragas.innerText = ALFACEdb.Pragas;
  textPragas.innerText = ALFACEdb.infoPragas;

  DIVPragas.appendChild(Pragas);
  DIVPragas.appendChild(textPragas);
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
  doencas.innerText = ALFACEdb.Doencas;
  textdoencas.innerText = ALFACEdb.infoDoencas;

  DIVdoencas.appendChild(doencas);
  DIVdoencas.appendChild(textdoencas);
  //------------------------------------------------------------
  //
  //
  //CRIANDO SPAN FONTE
  //
  //
  //------------------------------------------------------------

  let spanFonte = document.createElement("span");
  spanFonte.innerText = "FONTE: Embrapa";
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
  sectionALFACE.appendChild(DIVClima);
  sectionALFACE.appendChild(DIVtemperatura);
  sectionALFACE.appendChild(DIVSolo);
  sectionALFACE.appendChild(DIVAdubacao);
  sectionALFACE.appendChild(DIVPragas);
  sectionALFACE.appendChild(DIVdoencas);
  sectionALFACE.appendChild(spanFonte);
  main.appendChild(sectionALFACE);
}
