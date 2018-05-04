jQuery(document).ready(function($) {

    $('.close').hide();

    var nav = $('.menu li');

    // $('.menu_link').on("click", function(event) {
    //     $('.menu_link').toggleClass('active')

    // });

    $('.menu_link').on("click", function(event) {
        $('.menu').toggleClass('actives');

    });


    $(nav).on("click", function(event) {
        $('.actives').removeClass('actives');
    });

    // $('h1').mousemove(function(event) {
    //     $(this).css('color', '#d479d4');
    // });





 

   $('h1').click(function(event) {
        $('p').slideToggle(600);

    });


    $('body').dblclick(function(event) {
        $('body').css('background-color', '#e9e9e9')
            .hide(300).delay(100).show('keys p' + $('p').css('font-weight', '300')
                .css('background-color', 'white'))


    });

    $('.top_img img').click(function(event) {
        $('.top_img img').delay(320).fadeOut('slow', function() {
            $(this).delay(320).attr('src', 'img/App-Header1.png')
                .fadeIn('slow', function() {

                    $('.top_img img').delay(320).fadeOut('slow', function() {
                        $(this).delay(320).attr('src', 'img/App-Header3.png')
                            .fadeIn('slow', function() {

                            });
                    });
                });
        });
    });


    $('h1').click(function(event) {
        /* Act on the event */
        $(this).append('</br>', +$(this).text('Graey to Mornnig'));
    });


    // $('.mistrake').click(function(event) {
    //     /* Act on the event */

    //     $('.close').show()
    //     $('.nav').addClass('containerm')
    //     $('.head-pop').addClass('popup')

    // });

        $('.mistrake').click(function(event) {
        /* Act on the event */

        $('.close').show()
        $('.nav').addClass('containerm')
        $('.head-pop').addClass('popup')

    });



    $('.close').click(function(event) {

        $('.containerm').removeClass('containerm')
        location.reload();

    });


$('.blind').click(function(event) {
	/* Act on the event */

	$('.tor_img')
	.attr('src', 'img/intel.png').slideToggle()
	.css({'display':'block', 'margin':'0 auto','box-shadow':'1px 1px 2px gray'})

});


$('.tor_img')
	.attr('src', 'img/intel.png')
	.css({'display':'block', 'margin':'0 auto','box-shadow':'1px 1px 2px gray'});
// $('.main').click(function(event) {
// 	 Act on the event 
// $('.main').slideToggle(300)

// });

$('.second_mistrake , .mistrake ').click(function (params) {
    $('.second_mistrake').css('display','none');
});


});




