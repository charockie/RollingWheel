var error = 1;

$( '#activity1' ).click(function() {
    $('#activity').hide();
    $('#buyer').show();
    $('.progress-bar').attr('aria-valuenow', '50').animate({width: '25%'}, 1);
});

$( '#activity2, #activity3' ).click(function() {
    $('#activity').hide();
    $('#distrib_manufact').show();
    $('.progress-bar').attr('aria-valuenow', '50').animate({width: '25%'}, 1);
});


//показ форм для заполнения данных
$( '#role1' ).click(function() {
    $('#buyer, #distrib_manufact').hide();
    $('#input_form_private').show();

    $('#input_form_private_file').show();
    $('.button-submit').show();
    $('.last-step').show();

    $('#input_form_businessman').detach();
    $('#input_form_organization').detach();

    $('.step').html('Шаг 2');
    $('.progress-bar').attr('aria-valuenow', '50').animate({width: '50%'}, 1);
});

$( '#role2, #role4' ).click(function() {
    $('#buyer, #distrib_manufact').hide();
    $('#input_form_businessman').show();

    $('#input_form_organization_businessman_file').show();
    $('.button-submit').show();
    $('.last-step').show();

    $('#input_form_private').detach();
    $('#input_form_private_file').detach();
    $('#input_form_organization').detach();

    $('.step').html('Шаг 2');
    $('.progress-bar').attr('aria-valuenow', '50').animate({width: '50%'}, 1);
});

$( '#role3, #role5' ).click(function() {
    $('#buyer, #distrib_manufact').hide();
    $('#input_form_organization').show();

    $('#input_form_organization_businessman_file').show();
    $('.button-submit').show();
    $('.last-step').show();

    $('#input_form_private').detach();
    $('#input_form_private_file').detach();
    $('#input_form_businessman').detach();

    $('.step').html('Шаг 2');
    $('.progress-bar').attr('aria-valuenow', '50').animate({width: '50%'}, 1);
});


//файл
$( '.private_btn' ).click(function() {
    if (sub = 1) {
        var sub = 0;
        $('.form-horizontal').submit();
    }
    var error = $('.error:visible');
    if (error.length == 0) {
        $('#input_form_private').hide();
        $('#input_form_private_file').show();
        $('.last-step').show();
        $('.button-submit').show();
        $('.step').html('Шаг 3');
        $('.progress-bar').attr('aria-valuenow', '50').animate({width: '75%'}, 1);
    }
});

$( '.organization_businessman_btn' ).click(function() {
    $('#input_form_businessman, #input_form_organization').hide();
    $('#input_form_organization_businessman_file').show();
    $('.step').html('Шаг 3');
    $('.progress-bar').attr('aria-valuenow', '50').animate({width: '75%'}, 1);
});


$(function() {
    $('.form-horizontal').submit(function(e) {
        var error = $('.error:visible');
        if (error.length == 0) {
            console.log('error 0');
            var $form = $(this);
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                dataType: "json",
                success: function(data){
                    console.log(data.dva);
                }
            }).done(function () {
                console.log('success');
                console.log(data);
            }).fail(function () {
                console.log('fail');
            });
        } else {
            console.log('fail_error');
            // console.log('kapcha:');
            // console.log($('#kapcha').val());
            // console.log('input kapcha:');
            // console.log($('#true_kapcha').html());
        }
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault();
    });

});

// $("#myModal").on("show.bs.modal", function (e) {
//     var id = $(e.relatedTarget).data("id");
//     $.ajax({
//         url:"site/student",
//         data: ({ id: id }),
//         type:"POST",
//         dataType: "json",
//         success: function(data){
//             $("#name").html(data.surname+" "+data.name);
//             $("#email").html(data.email);
//             $("#phone").html(data.phone);
//             $("#age").html(data.age);
//             $("#address").html(data.address);
//             $("#gpa").html(data.gpa);
//             $("#visit").html(data.last_visit);
//             $("#group").html(data.title);
//         },
//         error: function(e){
//         }
//     });
//     $("#myInput").focus();
// });

$(document).ready( function() {
    $("#example_all").click( function() {
        $("#" + $(this).attr('rel') + " input:checkbox:enabled").attr('checked', true);
        return false;
    });
});