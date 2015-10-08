$(function(){
 
    $('#wrapper').hide()
    $('#wrapper').fadeIn(1500);
     
    $('a').click(function(){
        var url = $(this).attr('href');
 
        if (url != '') {
            $('#wrapper').fadeOut(1000);
            setTimeout(function(){
                location.href = url;
            }, 1000);
        }
        return false;
 
    });
});