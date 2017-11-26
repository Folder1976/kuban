$(function() {


    //Main menu script
    $('.nav-list__item').children('ul').hide();

    $(document).on('mouseover', '.nav-list__item', function(){
        $(this).children('ul').show();
    });
    $(document).on('mouseout', '.nav-list__item', function(){
        $(this).children('ul').hide();
    });



    /*Selectize*/

    $('#header_select').selectize({
        create: true,
    });

    $('#select-beast').selectize({
        create: true,
        sortField: 'text'
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

    $('.slider__partners').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
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
