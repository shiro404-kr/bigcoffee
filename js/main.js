

$(function() {
    $('.btn_toggle').on('click', function() {
        $('#gnb').show();
    });

    $('.btn_close').on('click', function() {
        $('#gnb').hide();
    });


    let num = 1;
    let slider = setInterval(function(){
        if(num > 2) { num = 0; }
        
        $('.slider > img').removeClass('show');

        $('.slider > img').eq(num).addClass('show'); 

        console.log(num)
        num++;
    }, 5000);








});








