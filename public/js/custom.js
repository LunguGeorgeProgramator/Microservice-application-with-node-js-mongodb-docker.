$(function(){
    function center(element) {
        element.css("position","absolute");
        element.css("display","block");
        element.css("z-index","1");
        element.css("top", Math.max(0, (($(window).height() - $(element).outerHeight()) / 6) +  $(window).scrollTop()) + "px");
        element.css("left", Math.max(0, (($(window).width() - $(element).outerWidth()) / 2) +  $(window).scrollLeft()) + "px");
        return element;
    }

    $('#submit').click(function() {
        center($("#customForm"));
    });

    $('#closeForm').click(function() {
        $("#customForm").css("display","none");
    });

});