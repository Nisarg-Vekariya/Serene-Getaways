$(document).ready(function() {
    var lastScrollTop = 0;
    var $navbar = $('.navbar'); 
    $(window).on('scroll', function() {
        var currentScrollTop = $(this).scrollTop(); 
        if (currentScrollTop > lastScrollTop) {
            $navbar.css('top', `-${$navbar.outerHeight()}px`); 
        } else {
            $navbar.css('top', '0'); 
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
    });
});

$(document).ready(function () {
    $('#scroll-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#next-section').offset().top
        }, 1000); 
    });
    $('.image-item').hover(
        function () {
            $(this).css('transform', 'scaleX(-1)').css('transition', '2.5s ease-in-out');
        },
        function () {
            $(this).css('transform', 'scaleX(1)').css('transition', '2.5s ease-in-out');
        }
    );
});

// Payment Form
$(document).ready(function () {
    $("#checkoutForm").validate({
        rules: {
            "full-name": {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            address: {
                required: true
            },
            city: {
                required: true
            },
            state: {
                required: true
            },
            zip: {
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 6
            },
            "payment-method": {
                required: true
            },
            "card-number": {
                required: function () {
                    return $("#credit").is(":checked");
                },
                digits: true,
                minlength: 16,
                maxlength: 16
            },
            "exp-month": {
                required: function () {
                    return $("#credit").is(":checked");
                },
                digits: true,
                range: [1, 12]
            },
            "exp-year": {
                required: function () {
                    return $("#credit").is(":checked");
                },
                digits: true,
                minlength: 4,
                maxlength: 4
            },
            cvv: {
                required: function () {
                    return $("#credit").is(":checked");
                },
                digits: true,
                minlength: 3,
                maxlength: 4
            },
            "save-info": {
                required: true
            }
        },
        messages: {
            "full-name": {
                required: "Full name is required",
                minlength: "Full name must be at least 3 characters"
            },
            email: {
                required: "Email is required",
                email: "Enter a valid email address"
            },
            phone: {
                required: "Phone number is required",
                digits: "Enter a valid phone number",
                minlength: "Phone number must be 10 digits",
                maxlength: "Phone number must be 10 digits"
            },
            address: {
                required: "Address is required"
            },
            city: {
                required: "City is required"
            },
            state: {
                required: "Please select a state"
            },
            zip: {
                required: "Zip code is required",
                digits: "Enter a valid zip code",
                minlength: "Zip code must be at least 5 digits",
                maxlength: "Zip code cannot exceed 6 digits"
            },
            "payment-method": {
                required: "Please select a payment method"
            },
            "card-number": {
                required: "Card number is required",
                digits: "Enter a valid card number",
                minlength: "Card number must be 16 digits",
                maxlength: "Card number must be 16 digits"
            },
            "exp-month": {
                required: "Expiration month is required",
                digits: "Enter a valid month",
                range: "Month must be between 1 and 12"
            },
            "exp-year": {
                required: "Expiration year is required",
                digits: "Enter a valid year",
                minlength: "Year must be 4 digits",
                maxlength: "Year must be 4 digits"
            },
            cvv: {
                required: "CVV is required",
                digits: "Enter a valid CVV",
                minlength: "CVV must be at least 3 digits",
                maxlength: "CVV cannot exceed 4 digits"
            },
            "save-info": {
                required: "You must accept the terms and conditions"
            }
        },
        errorElement: "span",
        errorClass: "error",
        errorPlacement: function (error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                error.appendTo(element.closest(".form-group"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element) {
            $(element).css("border-color", "red");
        },
        unhighlight: function (element) {
            $(element).css("border-color", "");
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                error.appendTo(element.closest(".form-group")); 
            } else {
                error.insertAfter(element); 
            }
        },
        submitHandler: function (form) {
            alert("Form submitted successfully!");
        }
    });
});

// Contact Form 
$(document).ready(function () {
    $("form").on("submit", function (event) {
        let isValid = true;
        $(".error-message").remove();
        $("input, textarea").removeClass("error");
        const firstName = $("#fname").val().trim();
        if (firstName === "") {
            $("#fname").addClass("error").after("<span class='error-message'>First Name is required.</span>");
            isValid = false;
        }
        const email = $("#email").val().trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === "") {
            $("#email").addClass("error").after("<span class='error-message'>Email is required.</span>");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").addClass("error").after("<span class='error-message'>Enter a valid email address.</span>");
            isValid = false;
        }
        const message = $("#message").val().trim();
        if (message === "") {
            $("#message").addClass("error").after("<span class='error-message'>Message is required.</span>");
            isValid = false;
        }
        const isChecked = $(".checkbox-container input[type='checkbox']").is(":checked");
        if (!isChecked) {
            $(".checkbox-container").after("<span class='error-message'>You must accept the Terms and Conditions.</span>");
            isValid = false;
        }
        if (!isValid) {
            event.preventDefault(); 
        }
    });
});