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

 
  $.post("https://postmail.invotes.com/send", $("#contact-form").serialize(), function (result) {
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

//update this with your js_form selector
var form_id_js = "javascript_form";

var data_js = {
  access_token: "y1dtj7i8jlc7ypm8pho5rn4v",
};

function js_onSuccess() {
  // remove this to avoid redirect
  window.location =
    window.location.pathname +
    "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
  // remove this to avoid redirect
  window.location =
    window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var sendButton = document.getElementById("js_send");


//update this with your $form selector
var form_id = "jquery_form";

var data = {
  "access_token": "{{ .Site.Params.form_access_token }}"
};

function onSuccess() {
  // remove this to avoid redirect
  window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function onError(error) {
  // remove this to avoid redirect
  window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var sendButton = $("[name='btn_submit']");

function send() {
  sendButton.val('Sending…');
  sendButton.prop('disabled',true);

  var name = $("[name='name']").val();
  var tel = $("[name='tel']").val();
  var email = $("[name='email']").val();
  data['name'] = name;
  data['tel'] = tel;
  data['email'] = email;

  $.post('{{ .Site.Params.form_action }}',
      data,
      onSuccess
  ).fail(onError);

  return false;
}


$('[name="btn_submit"]').click(function(e) {
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
  if (email.length == 0 || email.indexOf("@") == "-1") {
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
      disabled: "false",
      value: "Sending...",
    });

send();

var $form = $("#" + form_id);
$form.submit(function( event ) {
  event.preventDefault();
});
  }
});