$(function(){
    $('ul').on('click', 'img',function() {

        let $source = $(this).attr('src');
        let $effect = $('#effect').val();
        let $duration = $('#duration').val() * 1000;

        if($effect == 'Fade'){
            $('#mainimg').fadeOut($duration, function() {
                $(this).attr('src', $source).fadeIn($duration)
            })
        } else {
            $('#mainimg').slideUp($duration, function() {
                $(this).attr('src', $source).slideDown($duration)
            })
        }
    })

    let $minus = $('#minus');
    let $plus = $('#plus');

    $($plus).click(function(){
        $('#mainimg').animate({
            width: "+=100px",
            height: "+=100px"
        }, 500 );
    })

    $($minus).click(function(){
        $('#mainimg').animate({
            width: "-=100px",
            height: "-=100px"
        }, 500 );
    })

})