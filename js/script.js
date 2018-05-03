$(document).ready(function() {
    $(".list-modules > ul > li").mouseover(function() {
        $(".description-modules .des-md").removeClass("show");
        var des_module = $(this).attr("data-description");
        $("#" + des_module).addClass("show");

        $(".heading-top-description > b").text($(this).attr("data-name"));
        $(".heading-top-description > #btn-detail").text($(this).attr("data-detail"));
        $(".heading-top-description > #btn-buy").text($(this).attr("data-buy"));
    });
});
