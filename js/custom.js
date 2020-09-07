//라이트 겔러리

$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});

//갤러리 

$(".gallery-img").slick({
    arrows: false, //slick의 prev, next 버튼
    fade: true, //페이드 효과주기
    infinite: true, //루프를 무한대로
    pauseOnHover: true, //마우스 오버하면 멈춤
    autoplay: true, //자동 재생
    speed: 300,
    slidesToShow: 1 //슬라이드를 1씩 넘김
});
$(".play").click(function(){
    $(".gallery-img").slick("slickPlay")
});
$(".pause").click(function(){
    $(".gallery-img").slick("slickPause")
});
$(".prev").click(function(){
    $(".gallery-img").slick("slickPrev")
});
$(".next").click(function(){
    $(".gallery-img").slick("slickNext")
});


//메뉴

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

 // 팝업
    //  레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    // $("#layer").css("display", "block");
    // $("#layer").show();
    // $("#layer").fadeIn();
    $("#layer").slideDown();
});

$("#layer .close").click(function(e){
    e.preventDefault();
    // $("#layer").css("display", "none");
    // $("#layer").fadeOut();
    $("#layer").slideUp();
});



    // 윈도우 팝업

$(".window").click(function(e){
    e.preventDefault();
    // window.open("파일명","팝업이름","옵션설정;")
    //옵션: left, top, width, height, status, toolbar, location
    //menubar, scroollbars, fullscreen
    window.open("sample_popup.html","popup01", "width=800, height=590, left=50, top= 50, scrollbars=0, toolbar=0, menubar=0");
});


// 탭 메뉴
var $tab_list = $(".tab-menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").
    find(">ul").hide();
}

$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);


// 배너
//html 마크업 셋팅 -> css 연동 -> 제이쿼리 연동 
// -> 제이쿼리 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000, //3초에 1번씩 autoplay
    dots: true
  });
  