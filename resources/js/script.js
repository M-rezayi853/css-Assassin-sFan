
$(document).ready(function() {


    // sticky scroll
    $(".js--section-feature").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: '50px;'
    });



    // animation on scroll
    $(".js--wp--1").waypoint(function(direction) {
        $(".js--wp--1").addClass("animated fadeIn");
    },{
        offset: '50%'
    });

    $(".js--wp--2").waypoint(function(direction) {
        $(".js--wp--2").addClass("animated fadeInUpBig");
    }, {
        offset: '50%'
    });

    $(".js--wp--3").waypoint(function(direction) {
        $(".js--wp--3").addClass("animated swing");
    },{
        offset: '50%'
    });



    // mobalie nav
    $(".js--nav-icon").click(function() {
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i");
        
        nav.slideToggle(200);

        if (icon.hasClass("ion-navicon-round")) {

            icon.addClass("ion-android-close");
            icon.removeClass("ion-navicon-round");

        } else {
            icon.removeClass("ion-android-close");
            icon.addClass("ion-navicon-round");
        }
    });





});