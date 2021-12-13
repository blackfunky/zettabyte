$(function(){

    $('.card-link a').click(function (e) { 
        e.preventDefault();
        
        let popId = $(this).attr('data-tab');
    
        $('#' + popId).fadeIn();
    });

    $('.popup-close').click(function () { 
        
        $('.popup-container').fadeOut();
    });
});




