let name = document.querySelector("[name=name]").value;
let tel = document.querySelector("[name=tel]").value;
let email = document.querySelector("[name=email]").value;
let form = document.querySelector(".default-form > form");

$('[name="btn_submit"]').click(function (e) {
e.preventDefault();
var error = false;
var name = $('[name="name"]').val();
var email = $('[name="email"]').val();
var tel = $('[name="tel"]').val();

if (name.length == 0) {
  var error = true;
  $('[name="name"]').css("border-color", "#D8000C");
} else {
  $('[name="name"]').css("border-color", "#666");
}
if (email.length == 0 || email.indexOf('@') == '-1') {
  var error = true;
  $('[name="email"]').css("border-color", "#D8000C");
} else {
  $('[name="email"]').css("border-color", "#666");
}
if (tel.length == 0) {
  var error = true;
  $('[name="tel"]').css("border-color", "#D8000C");
} else {
  $('[name="tel"]').css("border-color", "#666");
}


if (error == false) {
  
  $('[name="btn_submit"]').attr({
    'disabled': 'false',
    'value': 'Sending...'
  });

 
  $.post("{{ .Site.Params.form.action }}", $("#contact-form").serialize(), function (result) {
    if (result == 'sent') {
      // $('#cf-submit').remove();
      // $('#form-success').fadeIn(500);
    } else {
      // $('#form-fail').fadeIn(500);
      $('[name="btn_submit"]').removeAttr('disabled').attr('value', 'Send The Message');
    }
  });
}
});
