$(".nav-toggle__button").on("click", function (e){
    if($(e.target).hasClass("nav-toggle__button")){
        $(e.target).removeClass("nav-toggle__button").addClass("nav-toggle__button_close");
        $(".topline__nav").addClass("topline__nav_active");
        $("body").css({"height": "100vh", "overflow": "hidden"});
    }else{
        $(e.target).removeClass("nav-toggle__button_close").addClass("nav-toggle__button");
        $(".topline__nav").removeClass("topline__nav_active");
        $("body").css({"height": "auto", "overflow": "scroll"});
    }
    
})