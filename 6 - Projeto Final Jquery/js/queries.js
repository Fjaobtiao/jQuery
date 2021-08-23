$(document).ready(function () {
  // FOCUS: destacar os elementos selecionados
  $("input").focus(function () {
    $(this).css("background-color", "#f7fc8f");
  });

  $("select").focus(function () {
    $(this).css("background-color", "#f7fc8f");
  });

  //ONBLUR: voltar os elementos ao valor padrão após perderem o foco

  $("input").blur(function () {
    $(this).css("background-color", "#fff");
  });

  $("select").blur(function () {
    $(this).css("background-color", "#fff");
  });
  //TOGGLE: esconder as comorbidades caso não haja nenhuma
  var option = $(this).attr("value");
  if (option !== 1) {
    $(".comorbidades").hide();
  }
  $("#comorbidades").change(function () {
    $(this)
      .find("option:selected")
      .each(function () {
        option = $(this).attr("value");
        if (option == 1) {
          $(".comorbidades").show();
        } else {
          $(".comorbidades").hide();
        }
      });
  });
});
