// mobile nav
$(function(){
    $(".nav-toggle").on("click", function (e){
        e.preventDefault();
        var menuButton = $(e.currentTarget).children();
        if(menuButton.hasClass("nav-toggle__button")){
            menuButton.removeClass("nav-toggle__button").addClass("nav-toggle__button_close");
            $(".topline__nav").addClass("topline__nav_active");
            $("body").css({"height": "100vh", "overflow": "hidden"});
        }else{
            menuButton.removeClass("nav-toggle__button_close").addClass("nav-toggle__button");
            $(".topline__nav").removeClass("topline__nav_active");
            $("body").css({"height": "auto", "overflow": "scroll"});
        }
    });
});

// menu acco

$(function(){
    $(".menu-list__item").on("click", function(e){
        e.preventDefault();

        var item = $(e.currentTarget),
            itemSiblings = $(e.currentTarget).siblings(),
            activeClass = "menu-list__item_active",
            windowWidth = $(window).width(),
            popup = item.children(".menu-list__popup"),
            popupSiblings = itemSiblings.children(".menu-list__popup"),
            popupWidth = (windowWidth > 768) ? 560 : windowWidth - $(".menu-list__type").width()*3;
            $(".popup-content").width(popupWidth-60);
        
        function closeMenu(){
            item.removeClass(activeClass);
            popup.width(0);  
        }

        function openMenu(){
            item.addClass(activeClass);
            itemSiblings.removeClass(activeClass);
            popup.width(popupWidth);
            popupSiblings.width(0);  
        }
        
        item.hasClass(activeClass) ? closeMenu() : openMenu();
            
    });
});


// team acco
$(function(){
    $(".team-member__item").on("click", function(e){
        e.preventDefault();
        var item = $(e.currentTarget),
            itemSiblings = item.siblings(),
            active = "team-member__item_active",
            wrapper = ".team-member__card-wrapper",
            wrapperEl = item.children(wrapper),
            card = item.find(".team-member__card");
            
        item.hasClass(active) ? 
            (item.removeClass(active), wrapperEl.height(0)) :
                (item.addClass(active), wrapperEl.height($(card).height()),
                    itemSiblings.removeClass(active), itemSiblings.children(wrapper).height(0));
    })
});


// burgers slider
$(function(){
    
    var flag = true;

    function moveSlide(slider, slideNum){

        var list = slider.find(".slider__list"),
            items = list.children(".slider__item"),
            active = items.filter(".slider__item_active"),
            next = items.eq(slideNum);
        
            flag = false;
            list.css({"left":-slideNum*100+"%"});
            active.removeClass("slider__item_active");
            next.addClass("slider__item_active");
            $(list).bind("transitionend", function(){flag = true});
        
    };

    $(".slider__controls").on("click", function(e){
        
        e.preventDefault();

        var button = $(e.currentTarget),
            slider = button.closest(".slider"),
            items = slider.find(".slider__item"),
            active = items.filter(".slider__item_active"),
            nextItem, edgeItem, slideNum;

            
             
        if (button.hasClass("slider__controls_right")){
            nextItem = active.next();
            edgeItem = items.first();
        }

       

        if (button.hasClass("slider__controls_left")){
            nextItem = active.prev();
            edgeItem = items.last();
        }

        slideNum = nextItem.length ? nextItem.index() : edgeItem.index();

        if (flag == true) moveSlide (slider, slideNum);
    });
});