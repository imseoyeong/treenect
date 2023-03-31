$(function() {
  $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 5000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        fade:false,
     });


  //헤더 고정
  $(window).scroll(function(){
      //alert($(document).scrollTop());
      if($(document).scrollTop()>= 70){
          $('#header').css({background:'rgb(255, 255, 255,0.85)'});
          $('#header h1 a').css({'background-image':'url(images/logo02.png)'});
          $('#header .depth1 > li > a').css({color:'#555;'});
          $('#header .m_menu span').css({background:'#555'});
          //로고그림, 네비버튼 색상
      }
      else {
          $('#header').css({background: 'none'})
          $('#header h1 a').css({'background-image':'url(images/logo.png)'});
          $('#header .depth1 > li > a').css({color:'#ffffff'});
          $('#header .m_menu span').css({background:'#ffffff'});
      }
  }) //scroll

  //네비화면
  $(".nav_btn").click(function(){

      $(".RightWrap").animate({right:0},500,"swing")

  });

$(".close1").click(function(){

      $(".RightWrap").animate({right:'-100%'},500,"swing")

      });

  $('#btn1 > li').each(function() {
      var submenu = $(this).find('.sub');
      $(this).click(function(){
          $(submenu).stop().slideToggle();
      })
  });



});
