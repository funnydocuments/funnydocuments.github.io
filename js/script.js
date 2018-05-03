$(document).ready(function() {
    $(".list-modules > ul > li").mouseover(function() {
        $(".list-modules > ul > li").removeClass("active");
        $(this).addClass("active");

        $(".description-modules .des-md").removeClass("show");
        var des_module = $(this).attr("data-description");
        $("#" + des_module).addClass("show");

        $(".heading-top-description > b").text($(this).attr("data-name"));
        $(".heading-top-description > #btn-detail").attr("href", $(this).attr("data-detail"));
        $(".heading-top-description > #btn-buy").attr("href", $(this).attr("data-buy"));
    });
});
