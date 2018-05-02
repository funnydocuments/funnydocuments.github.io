$(document).ready(function() {
    $(".list-modules > ul > li").mouseover(function() {
        $(".description-modules .des-md").removeClass("show");
        var des_module = $(this).attr("data-description");
        $("#" + des_module).addClass("show");
    });
});