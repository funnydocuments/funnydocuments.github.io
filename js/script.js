$(document).ready(function() {
    $(".list-modules > ul > li").mouseover(function() {
        /*$(".list-modules > ul > li").removeClass("show");
        $(this).addClass("show");*/

        $(".des-md").removeClass("show");
        $("#" + this.attr("data-description")).addClass("show");

    });
});