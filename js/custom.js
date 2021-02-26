const $tab_list = $(".tab-menu");

//banner
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000, //3초에 1번씩 autoplay
    dots: true
});

//banner menu
$(".tit .btn").click(function(e){
    e.preventDefault();

    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on"); //클릭하면 class에 on이 붙고 빼고함
});

//tab menu

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

function tabMenu(e) {
    let $this = $(this);

    e.preventDefault();

    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").
    find(">ul").hide();
}


//light gallery
$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});

//gallery 
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


//popup
$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").slideDown();
});

$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").slideUp();
});

//window popup
$(".window").click(function(e){
    e.preventDefault();
    window.open("sample_popup.html","popup01", "width=800, height=590, left=50, top= 50, scrollbars=0, toolbar=0, menubar=0");
});


  