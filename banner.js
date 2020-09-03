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
