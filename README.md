# 💻 Blog
### W3C 웹 표준 준수 사이트

<br />

## ⭐Github Page : https://ssi02014.github.io/WebStandardSite/ 

<br />

## 🔖 Main Development Stack
### 👨🏻‍💻 Frontend
1. HTML
2. CSS
3. JavaScript(Jquery)

<br />

## 🎥 index.html 

![1](https://user-images.githubusercontent.com/64779472/92410375-da5e2e00-f17e-11ea-8eb1-c3d9706a29c5.PNG)
![2](https://user-images.githubusercontent.com/64779472/92410378-db8f5b00-f17e-11ea-8c82-dbd915f72eb7.PNG)

<br />

## 🎥 W3C Check

![1](https://user-images.githubusercontent.com/64779472/92410522-53f61c00-f17f-11ea-89e5-e0b42acdd479.PNG)
![2](https://user-images.githubusercontent.com/64779472/92410524-548eb280-f17f-11ea-96f0-15deef31fbd5.PNG)

<br />
<br />

## 📈 CSS 관련 학습 내용 또는 이슈
### 🔍 1. IR 기법: 이미지 대체 텍스트 제공을 위한 CSS 기법
```css  
    /* 1. 의미있는 이미지에 대체 텍스트 제공 */
    .ir_pm{
        display: block;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
        text-indent: -9999px;
    }

    /* 2. 의미있는 이미지에 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때 사용 */
    .ir_wa{
        display: block;
        overflow: hidden;
        position: relative;
        z-index: -1;
        width: 100%;
        height: 100%;
    }

    /* 3. 대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때 사용 */
    .ir_su{
        overflow: hidden;
        position: absolute;
        width: 0;
        height: 0;
        line-height: 0;
        text-indent: -9999px;
    }
```

<br />

### 🔍 2. float
```
  float: left로 인한 영역깨짐(height:0) 방지법
    1. 깨지는 영역에 똑같이 float:left를 사용
    2. float의 성질을 차단하는 clear:both; 를 사용
    3. float을 사용한 상위 박스한테 overflow:hidden을 사용
    4. clearfix를 사용 (O) 가장 좋은 방법

  but❗ display:flex가 가장 좋음!
```

<br />

### 🔍 3. 콘텐츠 요소를 보이지 않게 하는 방법
```
    1. display: none <-> display: block (영역이 사라짐)
    2. visibility : hidden <-> visibility : visible; (영역 유지)
    3. opacity: 0 <-> opacity: 1; (영역 유지)
    4. width: 0, height: 0, overflow:hidden; 
```

<br />

### 🔍 4. 한 줄 효과, 두 줄 효과
```css  
  /* 한 줄효과 */
  li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  

  /* 두 줄효과 */
  li {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
```

<br />
<br />

## 📈 Javascript 라이브러리(Jquery)
### 🔍 1. html에 css, javascript 삽입하기
```html
    <!-- css -->
    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/lightgallery.css">

    <!-- script -->
    <script src="js/jquery_min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/lightgallery.min.js"></script>
    <script src="js/lightgallery-all.min.js"></script>
    <script src="js/custom.js"></script>
```

<br />

### 🔍 2. slick 라이브러리를 통한 Slide 구현하기
```javascript
  $(".gallery-img").slick({
      arrows: false,      //slick의 prev, next 버튼
      fade: true,         //페이드 효과주기
      infinite: true,     //루프를 무한대로
      pauseOnHover: true, //마우스 오버하면 멈춤
      autoplay: true,     //자동 재생
      speed: 300,
      slidesToShow: 1     //슬라이드를 1씩 넘김
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
```

<br />
