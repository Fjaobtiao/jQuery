// document.addEventListener("DOMContentLoaded", function () {
function valida_email(field) {
  var usuario = field.value.substring(0, field.value.indexOf("@"));
  var dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );
  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    field.style.border = "2px solid lightgreen";
    return true;
  } else {
    field.style.border = "2px solid lightcoral";
    return false;
  }
}

function valida_nome(x) {
  var nome = x.value;

  if (isNaN(nome)) {
    x.style.border = "2px solid lightgreen";
    return true;
  } else {
    x.style.border = "2px solid lightcoral";
    return false;
  }
}
function valida_telefone(x) {
  //Validaçao telefone
  var telefone_valor = x.value;

  if (telefone_valor.length == 11) {
    x.style.border = "2px solid lightgreen";
    return true;
  } else {
    x.style.border = "2px solid lightcoral";
    return false;
  }
}

function valida_contato(x) {
  if (x.value == "") {
    x.style.border = "2px solid lightcoral";
    return false;
  } else {
    x.style.border = "2px solid lightgreen";
    return true;
  }
}
function valida_mensagem(x) {
  var mensagem = x.value;

  if (x.value != "") {
    x.style.border = "2px solid lightgreen";
    return true;
  } else {
    x.style.border = "2px solid lightcoral";
    return false;
  }
}

class Publico {
  //classe pessoa, todos os objetos pessoa seguirão esse modelo

  constructor(
    nome_construtor,
    email_construtor,
    telefone_construtor,
    contato_construtor,
    mensagem_construtor
  ) {
    this.email = email_construtor; //no objeto pessoa(i) todos os this.variável vão receber o parametro na ordem do construtor
    this.nome = nome_construtor;
    this.telefone = telefone_construtor;
    this.contato = contato_construtor;
    this.mensagem = mensagem_construtor;
  }
}
//enviar dados
function enviar() {
  let email_input = document.getElementById("email"); //está recebendo dados do input
  let nome_input = document.getElementById("nome");
  let telefone_input = document.getElementById("telefone");
  let contato_input = document.getElementById("contato");
  let mensagem_input = document.getElementById("mensagem");
  let formValido = true;

  //validando todos os dados do input segundo as funções valida

  if (!valida_email(email_input)) {
    formValido = false;
  }

  if (!valida_nome(nome_input)) {
    formValido = false;
  }

  if (!valida_telefone(telefone_input)) {
    formValido = false;
  }

  if (!valida_contato(contato_input)) {
    formValido = false;
  }
  if (!valida_mensagem(mensagem_input)) {
    formValido = false;
  }

  //se qualquer erro retorna falso e não envia o form

  if (!formValido) {
    document.getElementById("print").innerHTML = alert(
      "Dados Inválidos!Por favor, verifique os campos em vermelho e tente novamente."
    );
    return formValido;
  } else {
  }
  //mostrar div  do form válido em verde com os dados da pessoa
  let email = email_input.value;
  let nome = nome_input.value;
  let telefone = telefone_input.value;
  let contato = contato_input.value;
  let mensagem = mensagem_input.value;

  //variavél novo objeto - pessoa_1 está recebendo uma instância da classe pessoa tornando-se um objeto  (pessoa_1.nome, pessoa_1.email, etcccc)
  let publico_1 = new Publico(email, nome, telefone, contato, mensagem);

  document.getElementById("center").innerHTML = publico_1.mostrar_dados(); //imprimindo os dados se tudo estiver correto
  document.getElementById("print").innerHTML = ""; //limpando a mensagem de erro quando dados corretos
  return true;
}
// });
