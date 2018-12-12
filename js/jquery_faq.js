"use strict";

$(document).ready(function(){

    $("#toggler").click(function() {
        highlightLastItem();
    });

    $('dt').click(function(){
       $(this).next().toggleClass('invisible');
    });

    function highlightLastItem() {
        $('ul').each(function () {
            $(this).children().last().css('background-color', '#FF0')
        });
    };

    $('h3').click(function (){
        $(this).next().children().css('font-weight', 'bold');
    });

    $('li').click(function (){
        $(this).parent().children().first().css('color', 'blue');
    });


    //     The rules are the following:
    //
    //     The left frame swaps to the right and takes the image from the frame in the center.
    //     The center frame swaps randomly to either the left or right.
    //     The right frame swaps to the left and takes the image from the frame in the center.

});