$(document).ready(function () {

    $("#my-form").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            name: {
                required: true,
                minlength: 2,
                digits: false
            },
            number: {
                required: true,
                maxlength: 10,
                minlength: 10,
                digits: true
            },
            email:{
                required: true,
                regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
            },
            details:{
                required: true,
            }
        },

        messages: {
            number: "please enter a valid phone number",
            name: "please enter your name",
            email: "please enter a valid email",
            details: "please add some details"
        }
    });

    $("#send").on('click', function () {
        //This will check validation of form depending on rules
        if($("#my-form").valid())
        {
            return false;
        }
    });
});