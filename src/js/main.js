$(document).ready(function () {
    function secondScreenOpen() {
        $('.content__wrap_first').fadeOut();
        $('.content__wrap_second').fadeIn();
        $('.content').removeClass('content_pink');
        $('.content').addClass('content_orange');
        $('.picture').removeClass('picture_pink');
        $('.picture').addClass('picture_orange');
    }

    function thirdScreenOpen() {
        $('.picture__content').fadeOut();
        $('.content__wrap_second').fadeOut();
        $('.content__wrap_third').fadeIn();
        $('.content').removeClass('content_orange');
        $('.content').addClass('content_blue');
        $('.picture').removeClass('picture_orange');
        $('.picture').addClass('picture_blue');
    }
    $('.content__wrap_first .content__btn').click(function () {
        secondScreenOpen();
    });
    $('.content__wrap_second .content__btn').click(function () {
        thirdScreenOpen();
    });
    var checkboxes = $('.content__checkbox');

    $('.content__checkbox').click(function () {
        $('.content__checkbox').removeClass('active');
        $(this).addClass('active');
        $('.picture__content').fadeIn();
        $('.content__btn').css('display', 'inline-block');
        console.log(this)
        if (this == checkboxes[0]) {
            $('.picture__text').text('20%');
            $('.picture__description').text('людей обращают внимание на A.');
        } else if (this == checkboxes[1]) {
            $('.picture__text').text('30%');
            $('.picture__description').text('людей обращают внимание на Б.');
        } else if (this == checkboxes[2]) {
            $('.picture__text').text('45%');
            $('.picture__description').text('людей обращают внимание на В.');
        }
    });
    $('.form__checkbox').click(function () {
        $('.form__checkbox').removeClass('active');
        $(this).addClass('active');
    });

    // Form validation
    $("#submit").click(function () {

        var name = $("input[name='name']").val().trim();
        var email = $("input[name='email']").val().trim();
        var pass = $("input[name='password']").val().trim();

        $('.form input').removeClass('error');

        var pattern = new RegExp(/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i);
        var mailVal = pattern.test(email);


        if (name.length == "") {
            $("input[name='name']").attr("placeholder", "Введите свое имя").toggleClass('error').val('');
        }
        if (!mailVal) {
            $("input[name='email']").attr("placeholder", "Неверный формат email").toggleClass('error').val('');
        }
        if (pass.length < 8) {
            $("input[name='password']").attr("placeholder", "Придумайте новый пароль").toggleClass('error').val('');
            return false;
        } else {
            return true;

        }
    });

});
