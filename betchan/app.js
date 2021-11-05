$(function(){

    $("#burger__toggle").click(function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#burger").toggleClass("active");

    });

    $("#accordion__toggle").click(function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#content").toggleClass("active");
    });

    $("#accordion__toggle2").click(function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#content2").toggleClass("active");
    });
        
    $("#accordion__toggle3").click(function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#content3").toggleClass("active");
    });

    $("#accordion__toggle4").click(function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#content4").toggleClass("active");
    });
    
    $("#accordion__toggle5").click(function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#content5").toggleClass("active");
    });
        

});