$(function() {


    /*Selectize*/

    $('select').selectize({
        create: true,
    });

    /*SLICK*/

    $('.single-item').slick({
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                }
            },
            {
                breakpoint: 480,
                settings: {
                }
            }
        ]
    });

    /*END SLICK*/

    // Fancybox

    $("[data-fancybox]").fancybox();



    // Ajax form

    $('.popup__form').submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                th.trigger("reset");
                $(th).find('.button').addClass('success-active');
                $(".button").fancybox();
            }, 1000);
        });
        return false;
    });






});
