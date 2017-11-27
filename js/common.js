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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.slider__feedback').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*END SLICK*/

    // Fancybox

    $("[data-fancybox]").fancybox();


    // zoom docs

    $('.zoom-item').zoom({
        magnify: '1.5',
    });





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




    // FAQ accordeon
    var faqWrap          = $('.js-faq-accordion-wrap')
    var faqTitle         = $('.js-faq-accordion-title')
    var faqContentBlock  = $('.js-faq-accordion-content')

    // toggle FAQ questions blocks, simple accordion
    faqTitle.each(function(index, el){

        $(el).on('click', function () {
            var currentTitle        = $(this);
            var currentWrap         = $(currentTitle).closest(faqWrap);
            var currentContentBlock = currentWrap.find(faqContentBlock);


            if ( !currentWrap.hasClass('is-active') && currentContentBlock.length) {
                faqContentBlock.slideUp(300);
                currentContentBlock.slideDown(300);
                activeElement(currentWrap, faqWrap);
            } else {
                currentContentBlock.slideUp(300);
                activeElement(null, currentWrap);
            }

        });

    });

    // add active class or remove all, if we haven't $active
    function activeElement( $active, $all) {
        $all.removeClass('is-active');
        if ( $active ) {
            $active.addClass('is-active');
        }
    };
    //End FAQ accordeon




});


