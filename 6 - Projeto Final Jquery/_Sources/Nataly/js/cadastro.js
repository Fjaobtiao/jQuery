// #region Validações
let progresso = document.querySelector(".barra");
let aux_Barra = 0;
function valida_nome(x) {
  //validação nome
  let nome = x.value;

  if (isNaN(nome)) {
    aux_Barra += 10;
    progresso.setAttribute("value", aux_Barra);
    x.style.border = "2px solid lightgreen";
    return true;
  } else {
    x.style.border = "2px solid lightcoral";
    return false;
  }
}

function valida_cpf(x) {
  //validação CPF

  let cpf_valor = x.value;

  if (cpf_valor.length == 11) {
    aux_Barra += 10;
    progresso.setAttribute("value", aux_Barra);
    x.style.border = "2px solid lightgreen";
    return true;
  } else {
    x.style.border = "2px solid lightcoral";
    return false;
  }
}
function valida_sus(x) {
  //Validaçao SUS

  let sus_valor = x.value;

  if (sus_valor.length == 15) {
    aux_Barra += 10;
    progresso.setAttribute("value", aux_Barra);

    x.style.border = "2px solid lightgreen";
    return true;
  } else {
    x.style.border = "2px solid lightcoral";
    return false;
  }
}

function valida_idade(x) {
  //Validação idade
  let idade = calculaIdade(x.value);
  if (idade > 130 || idade == " " || idade <= 0) {
    x.style.border = "2px solid lightcoral";
    return false;
  } else {
    aux_Barra += 10;
    progresso.setAttribute("value", aux_Barra);
    x.style.border = "2px solid lightgreen";
    return true;
  }
}

function valida_sexo(x) {
  if (x.value == "") {
    x.style.border = "2px solid lightcoral";
    return false;
  } else {
    x.style.border = "2px solid lightgreen";
    return true;
  }
}
function valida_gestante(x) {
  if (x.value == "") {
    x.style.border = "2px solid lightcoral";
    return false;
  } else {
    aux_Barra += 10;
    progresso.setAttribute("value", aux_Barra);
    x.style.border = "2px solid lightgreen";
    return true;
  }
}
function valida_etnia(x) {
  //Validação de etnia
  if (x.value == "") {
    x.style.border = "2px solid lightcoral";
    return false;
  } else {
    aux_Barra += 10;
    progresso.setAttribute("value", aux_Barra);
    x.style.border = "2px solid lightgreen";
    return true;
  }
}
function valida_profissao(x) {
  //Validção de profissão
  if (x.value == "") {
    x.style.border = "2px solid lightcoral";
    return false;
  } else {
    aux_Barra += 10;
    progresso.setAttribute("value", aux_Barra);
    x.style.border = "2px solid lightgreen";
    return true;
  }
}
function valida_comorbidades(x) {
  //Validação de comorbidades
  if (x.value == 0) {
    x.style.border = "2px solid lightcoral";
    return false;
  } else {
    aux_Barra += 10;
    progresso.setAttribute("value", aux_Barra);
    x.style.border = "2px solid lightgreen";
    return true;
  }
}
function valida_peso(x) {
  //Validaçao peso
  let peso_valor = x.value;

  if (peso_valor > 0 && peso_valor <= 400 && peso_valor != " ") {
    x.style.border = "2px solid lightgreen";

    return true;
  } else {
    x.style.border = "2px solid lightcoral";
    return false;
  }
}
function valida_altura(x) {
  //Validaçao altura
  let altura_valor = x.value;

  if (altura_valor > 0 && altura_valor <= 3.0 && altura_valor != " ") {
    x.style.border = "2px solid lightgreen";
    return true;
  } else {
    x.style.border = "2px solid lightcoral";
    return false;
  }
}

// #region Máscaras e Cálculos

function fMasc(objeto, mascara) {
  obj = objeto;
  masc = mascara;
  setTimeout("fMascEx()", 1);
}

function fMascEx() {
  obj.value = masc(obj.value);
}

function calculaIdade(dataNasc) {
  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let anoNascParts = dataNasc.split("-");
  let anoNasc = anoNascParts[0];
  let mesNasc = anoNascParts[1];
  let diaNasc = anoNascParts[2];
  let idade = anoAtual - anoNasc;
  let mesAtual = dataAtual.getMonth() + 1;
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
  if (mesAtual < mesNasc) {
    idade--;
  } else {
    //Se estiver no mes do nascimento, verificar o dia
    if (mesAtual == mesNasc) {
      if (new Date().getDate() < diaNasc) {
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        idade--;
      }
    }
  }
  return idade;
}
console.log(calculo_imc);
function calculo_imc(p, a) {
  let quadrado = peso * peso;
  let imc = altura / quadrado;
  console.log(imc);
  if (imc > 30) {
    console.log(imc);
    document.querySelector("#comorbidades").options[1].selected = true;
    console.log($("#comorbidades"));
  } else if (imc > 25 && imc <= 30) {
    document.write("Acima do peso.");
    document.querySelector("#comorbidades").options[1].selected = true;
  } else if (imc >= 18.5 && imc <= 25) {
    document.write("Peso normal.");
  } else if (imc < 18.5) {
    document.write("Abaixo do peso.");
  }
}

// #endregion

// #endregion

class Pessoa {
  //classe pessoa, todos os objetos pessoa seguirão esse modelo

  constructor(
    nome_construtor,
    data_nascimento_construtor,
    cpf_construtor,
    sexo_construtor,
    idade_construtor,
    gestante_construtor,
    sus_construtor,
    etnia_construtor,
    profissao_construtor,
    comorbidades_construtor,
    peso_construtor,
    altura_construtor
  ) {
    this.nome = nome_construtor; //no objeto pessoa(i) todos os this.variável vão receber o parametro na ordem do construtor
    this.data_nascimento = data_nascimento_construtor;
    this.cpf = cpf_construtor;
    this.sexo = sexo_construtor;
    this.idade = idade_construtor;
    this.gestante = gestante_construtor;
    this.sus = sus_construtor;
    this.etnia = etnia_construtor;
    this.profissao = profissao_construtor;
    this.comorbidades = comorbidades_construtor;
    this.peso = peso_construtor;
    this.altura = altura_construtor;
  }
}

function enviar_dados() {
  let nome_input = document.getElementById("nome"); //está recebendo dados do input
  let cpf_input = document.getElementById("cpf");
  let data_nascimento_input = document.getElementById("data_nascimento");
  let sexo_input = document.getElementById("sexo");
  let gestante_input = document.getElementById("gestante");
  let sus_input = document.getElementById("sus");
  let etnia_input = document.getElementById("etnia");
  let profissao_input = document.getElementById("profissao");
  let comorbidades_input = document.getElementById("comorbidades");
  let peso_input = document.getElementById("peso");
  let altura_input = document.getElementById("altura");
  let formValido = true;

  //validando todos os dados do input segundo as funções valida
  calculo_imc(peso_input, altura_input);
  if (!valida_nome(nome_input)) {
    formValido = false;
  }

  if (!valida_cpf(cpf_input)) {
    formValido = false;
  }

  if (!valida_idade(data_nascimento_input)) {
    formValido = false;
  }

  if (!valida_sexo(sexo_input)) {
    formValido = false;
  }
  if (!valida_gestante(gestante_input)) {
    formValido = false;
  }
  if (!valida_sus(sus_input)) {
    formValido = false;
  }
  if (!valida_etnia(etnia_input)) {
    formValido = false;
  }
  if (!valida_profissao(profissao_input)) {
    formValido = false;
  }
  if (!valida_comorbidades(comorbidades_input)) {
    formValido = false;
  }
  if (!valida_peso(peso_input)) {
    formValido = false;
  }
  if (!valida_altura(altura_input)) {
    formValido = false;
  }

  //se qualquer erro retorna falso e não envia o form

  if (!formValido) {
    document.getElementById("print").innerHTML = alert(
      "Dados Inválidos!Por favor, verifique os campos em vermelho e tente novamente."
    );
    return formValido;
  } else {
    //mostrar div  do form válido em verde com os dados da pessoa
    let nome = nome_input.value.toUpperCase();
    let cpf = cpf_input.value;
    let dataNascimento = data_nascimento_input.value;
    let idade = calculaIdade(data_nascimento_input.value);
    let sexo = sexo_input.value;
    let gestacao = gestante_input.value;
    let sus = sus_input.value;
    let etnia = etnia_input.value;
    let profissao = profissao_input.value;
    let comorbidades = comorbidades_input.value;
    let peso = peso_input.value;
    let altura = altura_input.value;

    //variavél novo objeto - pessoa_1 está recebendo uma instância da classe pessoa tornando-se um objeto  (pessoa_1.nome, pessoa_1.email, etcccc)
    let pessoa_1 = new Pessoa(
      nome,
      dataNascimento,
      cpf,
      sexo,
      idade,
      gestante,
      etnia,
      SUS,
      profissao,
      comorbidades,
      peso,
      altura
    );

    document.getElementById("center").innerHTML = pessoa_1.mostrar_dados(); //imprimindo os dados se tudo estiver correto
    document.getElementById("print").innerHTML = ""; //limpando a mensagem de erro quando dados corretos
    return true;
  }
}
