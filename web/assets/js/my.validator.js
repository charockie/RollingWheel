$(document).ready(function(){
    $(".form-horizontal").validate({

        rules: {

            // password: {
            //     required: true,
            //     minlength: 4,
            //     maxlength: 16
            // },
            //
            // re_password: {
            //     required: true,
            //     // equalTo: password
            // },

            email: {
                required: true,
                email: true
            },

            fio: {
                required: true,
                minlength: 4,
                maxlength: 16
            },

            tel: {
                required: true,
                digits: true,
                minlength: 7,
                maxlength: 10
            },

            inn: {
                required: true,
                minlength: 5,
                maxlength: 15
            },

            flp: {
                required: true,
                minlength: 5,
                maxlength: 15
            },

            edrpou:  {
                required: true,
                minlength: 5,
                maxlength: 15
            },

            organization:  {
                required: true,
                minlength: 5,
                maxlength: 15
            },

            boss:  {
                required: true,
                minlength: 5,
                maxlength: 15
            },

            accept: {
                required: true
            },

            // kapcha: {
            //     required: true,
            //     equalTo: true_kapcha
            // },

        }
    });
});