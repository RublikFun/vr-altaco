/* Article FructCode.com */
$(document).ready(function () {
  $("#btn").click(
    function () {
      sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
      return false;
    }
  );
});

function sendAjaxForm(result_form, ajax_form, url) {
  $.ajax({
    url: url, //url страницы (action_ajax_form.php)
    type: "POST", //метод отправки
    dataType: "html", //формат данных
    data: $("#" + ajax_form).serialize(),  // Сеарилизуем объект
    success: function (response) { //Данные отправлены успешно
      result = $.parseJSON(response);
      $("#result_success")
        .html("Имя: " + result.user_name + "<br>E-mail: " + result.user_email + "<br>Телефон: " + result.user_phone + "<br>Комментарий: " + result.user_massage)
        .fadeIn();
    },
    error: function (response) { // Данные не отправлены
      $('#result_error').fadeIn();
    }
  });
}