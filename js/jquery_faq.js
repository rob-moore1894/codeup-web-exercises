"use strict";

$(document).ready(function(){

    // Button highlights the last item in each ul
    $("#toggler").click(function() {
        highlightLastItem();
    });

    function highlightLastItem() {
        $('ul').each(function () {
            $(this).children().last().css('background-color', '#FF0')
        });
    }

    //Shows the dd from each dt
    $('dt').click(function(){
       $(this).next().toggleClass('invisible');
    });

    // The uls next to each h3 that contain facts about each park should start out hidden, and when the corresponding h3 is clicked, the display of the ul should be toggled with a sliding effect.
    $('h3').click(function (){
        $(this).next().slideToggle().css('font-weight', 'bold');
    });

    // Clicking on any li will change the font color of the first li within the selected ul to blue
    $('li').click(function (){
        $(this).parent().children().first().css('color', 'blue');
    });

    // Hides the div that contains the Newsletter
    $('span').click(function(){
       $(this).parent().hide();
    });

    // After the user has been on the page for 8 seconds, an h2 should fade in that asks the user to register for the site.
    setInterval(function(){
        $('h2').fadeIn();
    }, 7000);


    //     The Bonus' rules are the following:
    //
    //     The left frame swaps to the right and takes the image from the frame in the center.
    $('#pic1').dblclick(function(){
        $(this).slideToggle();
    });

    //     The center frame swaps randomly to either the left or right.


    //     The right frame swaps to the left and takes the image from the frame in the center.


});