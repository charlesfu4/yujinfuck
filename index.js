$(document).ready(function(){
    $('.icon-menu').click(function(){
        $('.menu').animate({left:'0px'},200);
        $('body').animate({left:'285px'},850);
        })
    $('.icon-close').click(function(){
        $('.menu').animate({left:'-285px'},850);
        $('body').animate({left:'0px'},200);
        })        
    $('.icon-menu').hover(
        function(){
        $(this).addClass('menu-color')},
        function(){
        $(this).removeClass('menu-color')    
        });
     $('menuc').hover(
        function(){
        $(this).addClass('menuli-color')},
        function(){
        $(this).removeClass('menuli-color')    
        });    
    
    
});
    



