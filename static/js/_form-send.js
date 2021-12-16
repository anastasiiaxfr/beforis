// FORM send
function checkSendModal(send) {
    if (send) {
        window.localStorage.setItem('send', true);
    }
    return send;
}

$(function () {
    $('.main-form').parsley().on('field:validated', function () {
        let ok = $('.parsley-error').length === 0;
        $('.bs-callout-info').toggleClass('hidden', !ok);
        $('.bs-callout-warning').toggleClass('hidden', ok);

    }).on('form:submit', function () {
        send = true;

        if (send) {
            success.classList.toggle('active');
            checkSendModal(send);
            //window.location.replace("https://slotmancasino.com");
            submit.setAttribute("disabled", "disabled");
        }
        // alert(email.value);
        // alert(name.value);



        setCookie("name", name.value, 30);
        setCookie("email", email.value, 30);
        setCookie("tel", tel.value, 30);

        setCookie("utm_source", utm_source);
        setCookie("utm_medium", utm_medium);
        setCookie("utm_campaign", utm_campaign);


        return false;
    });
});


if (send) {
    submit.setAttribute("disabled", "disabled");
}
