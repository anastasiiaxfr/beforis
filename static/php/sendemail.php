<meta charset="UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}
if (isset($_POST['tel'])) {$tel = $_POST['tel']; if ($tel == '') {unset($tel);}}
if(isset($_SERVER['HTTP_REFERER'])) { $url = $_SERVER['HTTP_REFERER']; if ($url  == '') {unset($url);}}

if (isset($name) && isset($email) && isset($tel)){
$address = 'hi@beforis.com';
$from = 'service@tranzzo.com';
$mes = "Имя: $name \n Телефон: $tel \n E-mail: $email \n Client came from: $url";
$send = mail ($address, "New Beforis client", $mes);
if ($send == 'true')
{echo 
    "<div class='thanks-page'>
    <p>Сообщение отправлено успешно!</p>
    <button class='btn-style-one'><a href='/'>Главная</a></button>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    body {
        padding: 0px;
        margin: 0px;
    }
    
    .thanks-page {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        background-color: #f5f3f2;
    }
    
    .thanks-page p {
        width: 100%;
        font-size: 36px;
        color: #494b55;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
    }
    
    .btn-style-one {
        position: relative;
        line-height: 24px;
        color: #f5f3f2;
        font-size: 14px;
        font-weight: 700;
        background: #494b55;
        display: block;
        padding: 10px 26px;
        border: 2px solid #494b55;
        text-transform: uppercase;
        margin-top: 24px;
        width: 250px;
    }
    
    .btn-style-one a {
        text-decoration: none;
        color: #f5f3f2;
    }
    
    .btn-style-one:hover a {
        color: #494b55;
    }
    .btn-style-one:a hover{
        color: #494b55;
    }
    .btn-style-one:hover{
        color: #494b55;
        background: #f5f3f2;
    }
</style>";
}
else {echo 
    "<div class='thanks-page'>
    <p>Ошибка, сообщение не отправлено!</p>
    <button class='btn-style-one'><a href='/'>Главная</a></button>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    body {
        padding: 0px;
        margin: 0px;
    }
    
    .thanks-page {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        background-color: #f5f3f2;
    }
    
    .thanks-page p {
        width: 100%;
        font-size: 36px;
        color: #494b55;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
    }
    
    .btn-style-one {
        position: relative;
        line-height: 24px;
        color: #f5f3f2;
        font-size: 14px;
        font-weight: 700;
        background: #494b55;
        display: block;
        padding: 10px 26px;
        border: 2px solid #494b55;
        text-transform: uppercase;
        margin-top: 24px;
        width: 250px;
    }
    
    .btn-style-one a {
        text-decoration: none;
        color: #f5f3f2;
    }
    
    .btn-style-one:hover a {
        color: #494b55;
    }
    .btn-style-one:a hover{
        color: #494b55;
    }
    .btn-style-one:hover{
        color: #494b55;
    }
</style>";
    }
}
else
{
echo 
"<div class='thanks-page'>
    <p>Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!</p>
    <button class='btn-style-one'><a href='/'>Главная</a></button>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    body {
        padding: 0px;
        margin: 0px;
    }
    
    .thanks-page {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        background-color: #f5f3f2;
    }
    
    .thanks-page p {
        width: 100%;
        font-size: 36px;
        color: #494b55;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
    }
    
    .btn-style-one {
        position: relative;
        line-height: 24px;
        color: #f5f3f2;
        font-size: 14px;
        font-weight: 700;
        background: #494b55;
        display: block;
        padding: 10px 26px;
        border: 2px solid #494b55;
        text-transform: uppercase;
        margin-top: 24px;
        width: 250px;
    }
    
    .btn-style-one a {
        text-decoration: none;
        color: #f5f3f2;
    }
    
    .btn-style-one:hover a {
        color: #494b55;
    }
    .btn-style-one:a hover{
        color: #494b55;
    }
    .btn-style-one:hover{
        color: #494b55;
    }
</style>";
}
?>