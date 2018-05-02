$(document).ready(function() {
    $(".list-modules > ul > li").mouseover(function() {
        /*$(".list-modules > ul > li").removeClass("show");
        $(this).addClass("show");*/

        $(".des-md").removeClass("show");
        var des = $(this).attr("data-description");
        $("#" + $des).addClass("show");

    });
});