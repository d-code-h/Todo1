// after the page has been properly loaded
$(document).ready(function(){
    // toggling the input button
    $(".fa-plus").on("click", function(){
        $("input").fadeToggle();
    });

    // on click input 
    $("input").on({
        // when focused on
        "focus": function(){
            $(this).css({
                "outline": 0,
                "border": "3px solid rgb(43, 192, 228)"
            });
        },
        // when blur
        "blur": function(){
            $(this).css("border", "0");  
        }
    });

    // on submit input
    $("input").on("keypress", function(e){
        if (e.which === 13){
            $("ul").append("<div><i></i></div>");
            $("div:last").attr("class", "full");
            $("i:last").attr("class", "fa fa-trash-alt");
            $(".full:last").append("<li>" + $(this).val() + "</li>");
            $(this).val("");
        }
    });

    // about to delete a Todo: hovering 
    $("ul").on("mouseenter","li", function(){
        $(this).addClass("delete");
        $(this).prev("i").fadeIn();
    });

    // about to delete a Todo: mouseleave 
    $("ul").on("mouseleave","li", function(){
        $(this).removeClass("delete");
        $(this).prev("i").fadeOut();
    });

    // deleting a Todo
    $("ul").on("click", "i.fa-trash-alt", function(){
        // delete the list
        $(this).parent().fadeOut(function(){
            $(this).remove();
        });
    });
});