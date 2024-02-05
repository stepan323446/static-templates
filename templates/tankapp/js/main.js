$(function()
{
    let signUpText = $('.signUp-error');
    signUpText.slideUp(0);

    $('.SignUp-btn').click(function()
    {
        let formText = $('#input-email').val();
        if(formText == "")
        {
            signUpText.slideDown(800);
            signUpText.text("Ошибка! Не заполнена форма");
        }
    });
});