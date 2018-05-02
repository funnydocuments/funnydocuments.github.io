$(document).ready(function() {
    function stickyBlock(){
        $("#left-container, #left-container").stick_in_parent();
    }

    stickyBlock();

    $(".list-modules > ul > li").mouseover(function() {
        $(".description-modules .des-md").removeClass("show");
        var des_module = $(this).attr("data-description");
        console.log(des_module);
        $("#" + des_module).addClass("show");
        //stickyBlock();
    });




});
