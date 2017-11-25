    //Main menu script
    $(document).ready(function(){
        $('.nav-list__item').children('ul').hide();
    });
    
    $(document).on('mouseover', '.nav-list__item', function(){
        $(this).children('ul').show();
    });
    $(document).on('mouseout', '.nav-list__item', function(){
        $(this).children('ul').hide();
    });
