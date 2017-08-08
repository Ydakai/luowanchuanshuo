
$(function(){

    $(".more").bind('click', function() {
        $(".hidd").stop(true).slideDown(500);
    });

    $(".less").bind('click', function() {
        $(".hidd").stop(true).slideUp(500);
    });

});
