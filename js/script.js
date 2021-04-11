var myCarousel = document.querySelector("#carrossel")
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3500,
    pause: "null",
    wrap: true
});


            
$(function(e){
    $("#b_logo").click(function(e){
        $("html, main").animate({scrollTop:$("#apresentacao").offset().top}, 800);
    });
    $("#b_apresentacao").click(function(e){
        $("html, main").animate({scrollTop:$("#apresentacao").offset().top}, 800);
    });
    $("#b_portfolio").click(function(e){
        $("html, main").animate({scrollTop:$("#portfolio").offset().top}, 800);
    });
    $("#b_sobre").click(function(e){
        $("html, main").animate({scrollTop:$("#sobre").offset().top}, 800);
    });
    $("#b_contato").click(function(e){
        $("html, main").animate({scrollTop:$("#contato").offset().top}, 800);
    });
    
    function tamanhoTela(){
            $("#apresentacao, #portfolio, #sobre, #contato").css("height",$(window).height());
        }
    
    
    
    $(window).resize(function(e){
        tamanhoTela();
    });

    tamanhoTela();
    
});