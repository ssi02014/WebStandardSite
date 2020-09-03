
//버튼을 누르면 전체 메뉴가 나오게 하는 방법

$(".tit .btn").click(function(e){
    e.preventDefault();
    // $("#cont_nav").css("display","block");
    // css라면 #cont_nav {display:block}
    // $("#cont_nav").show();
    // $("#cont_nav").fadeIn();
    // $("#cont_nav").slideDown();

    // 위에 것들은 1번씩 밖에 사용을 못함

    // $("#cont_nav").toggle(); //show랑 hidden이랑 합쳐짐
    // $("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on"); //클릭하면 class에 on이 붙고 빼고함
});