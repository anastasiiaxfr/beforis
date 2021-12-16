const field_name = document.querySelector("[name=name]");
const field_email = document.querySelector("[name=email]");
Inputmask("*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]", {
    placeholder: "your@mail.com",
}).mask(field_email);
const field_phone = document.querySelectorAll("[name=tel]");


for (let i = 0; i < field_phone.length; i++) {
    Inputmask('(999) 99-99-99-999').mask(field_phone[i]);
}


const token = '1963226235:AAF-MiJXOgxKFxONVW4qhQ4SQLPWlA6q1PE';
const chat_id = '-530590199';

const date = new Date().toLocaleString();

let validateForms = function(selector, rules, callback) {
    new window.JustValidate(selector,{
        rules: rules,
        focusWrongField: true,
        submitHandler: function(form, values, ajax) {
            const msg = callback(values);
            const success = document.createElement('label');
            success.className = "form-label--success";
            success.innerHTML = 'Your data sent!';
            form.append(success);
            form.querySelector('[name=btn_submit]').disabled = true;
            ajax({
                url: 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&parse_mode=html' + '&text=' + encodeURIComponent(msg),
                method: 'POST',
                data: {
                    chat_id: $('-530590199').val(),
                    text: $('input').val()
                },
                success: function() {
                    alert('your message has been sent!');
                },
                async: true,
                callback: (response)=>{
                    console.log(response);
                }
            });
        },
        invalidFormCallback: function(errors) {
            console.log(errors);
        },
    });
};

validateForms('.js-form', {
    tel: {
        required: true,
        minLength: "10"
    },
    name: {
        required: true,
        minLength: "2"
    },
    email: {
        required: true,
        email: true
    },
}, (values)=>{
    return `
   Source: Beforis.com,
  ФИО:  ${values['name']},
  E-mail: ${values['email']},
  Телефон: ${values['tel']},
`;
}
);
