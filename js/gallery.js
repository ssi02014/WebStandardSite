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