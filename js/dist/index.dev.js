"use strict";

$(function () {
  var slider = $(".slider");
  var pageTop = $(".movetop");
  var hoverslide = $(".hoverbutton");
  var MenuBtn = $("#MenuBtn");
  var headerLogo = $(".header__logo");
  var headermButton = $(".header__menu-btn");
  var headermenu = $(".header__menu");
  var bgfade = $('.background');
  headerLogo.hide();
  headermButton.hide();
  bgfade.hide(); //フェードイン＆フェードアウト用

  $(window).scroll(function () {
    if (window.innerWidth > $('h1').offset().top) {
      if ($(this).scrollTop() < $('#gallery').offset().top + $('#gallery').innerHeight() && $(this).scrollTop() > $('h1').offset().top) {
        slider.addClass('fadeLeft');
      } else {
        slider.removeClass('fadeLeft');
      }
    } else {
      slider.removeClass('fadeLeft');
    }
  }); //フェードイン＆フェードアウト用

  $(window).scroll(function () {
    if ($(this).scrollTop() > $('h1').offset().top) {
      headerLogo.fadeIn();
      headermButton.fadeIn();
    } else {
      headerLogo.fadeOut();
      headermButton.fadeOut();
    }
  }); //フェードイン＆フェードアウト用

  $(window).scroll(function () {
    if ($(this).scrollTop() < $('#access').offset().top + $('#access').innerHeight() - window.innerHeight / 2 && $(this).scrollTop() > $('#access').offset().top - window.innerHeight / 2) {
      bgfade.fadeIn();
    } else {
      bgfade.fadeOut();
    }
  }); //トップページ移動用

  pageTop.click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 500);
    return false;
  }); //各セクションへの移動用

  $('.menu__link').click(function () {
    var temp = $(this).attr('href');
    var temppos = $(temp).offset().top - window.innerHeight / 2;
    $("body,html").animate({
      scrollTop: temppos
    }, 500);
    return false;
  }); //section＋αフェードイン用

  $(window).scroll(function () {
    $('h1, #information, #access, #contact, .galleryfade').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > pos - windowHeight + 300) {
        $(this).addClass('fadeBottom');
      }
    });
  }); //mv大きさ変更

  $(window).scroll(function () {
    var mvscroll = $(window).scrollTop();

    if (window.innerWidth > $('h1').offset().top) {
      $('.mv').css({
        width: 33 + mvscroll / 30 + "vw",
        height: 100 + mvscroll / 10 + "vh"
      });
    } else {
      $('.mv').css({
        width: 100 - mvscroll / 30 + "vw",
        height: 100 + mvscroll / 10 + "vh"
      });
    }
  });
  hoverslide.hover(function () {
    hoverslide.addClass('active');
    hoverslide.not($(this)).removeClass('active');
  }, function () {
    hoverslide.removeClass('active');
  }); //ハンバーガーメニュー

  MenuBtn.click(function () {
    headermButton.toggleClass('active');
    headermenu.toggleClass('active');
  });
});