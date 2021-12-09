
jQuery(document).ready(function ($) {


  $('body').removeClass('loading');





  //Mega Menu Image
  $("#menu-main-menu > li .mega-menu-inner").wrapInner("<li class='category-menu'></li>");
  $("#menu-main-menu > li .mega-menu-inner").append("<li class='category-image'></li>");



  //Mega Menu Featured Image

  // Explore > Fish Finders
  $("li#menu-item-85939").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/fish-finders.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Explore > Fish Finders > APEX
  $("li#menu-item-86847").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/mega-apex.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Explore > Fish Finders > SOLIX
  $("li#menu-item-86018").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/mega-solix.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Explore > Fish Finders > HELIX
  $("li#menu-item-86017").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/mega-helix.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Explore > Fish Finders > PiranhaMAX
  $("li#menu-item-86016").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/mega-piranhamax.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });





  // Explore > Accessories
  $("li#menu-item-85948").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/accessories.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Explore > Mapping
  $("li#menu-item-85947").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/mapping.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Explore > Apparel
  $("li#menu-item-85946").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/apparel.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Explore > Pro Team
  $("li#menu-item-88156").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/proteam.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });

  // Support > Warranty
  $("li#menu-item-86001").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/warranty.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Support > Software Updates
  $("li#menu-item-86002").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/software-updates.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Support > Contact
  $("li#menu-item-85997").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://humminbird.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/contact.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });

  //Top Menu toggle Johnson Outdoors Family brands images
  $('.top-menu-toggle').on('click', function (e) {
    $(this).toggleClass("opened");
    $('.top-menu .brands-images').toggleClass("expanded"); //you can list several class names 
    e.preventDefault();
  });



  $(".btn").wrapInner("<div class='text'></div>");
  $(".btn").append("<span class='borders'></span>");


  $(".single-product #elex_prod_btn").addClass('find-a-dealer');
  $(".single-product #elex_prod_btn").addClass('btn-default');
  $(".single-product #elex_prod_btn").addClass('btn-link');

  $("button.wooscp-btn").addClass('btn product-compare-btn btn-default btn-link');
  $("button.wooscp-btn-added").addClass('btn product-compare-btn btn-default btn-link');


  //Isotope post/page gallery custom 
  //$( ".t-entry-readmore .btn" ).wrapInner( "<div class='text'></div>");
  //$( ".t-entry-readmore .btn" ).append( "<span class='borders'></span>" );
  $(".t-entry-readmore .btn").addClass('btn-alt');
  $(".t-entry-readmore .btn").removeClass('btn');
  $(".isotope-container .tmb .t-overlay-text .t-entry-title").each(function (i) {
    var $test = $(this).parent().parent().parent();
    $(this).clone().addClass('title-clone').prependTo($test);
  });

  $(".mk-component-page-banner-title-alt .row-background").append("<div class='animated-static'></div>");
  $(".mk-component-page-banner-title-alt .row-background").append("<div class='vignette'></div>");




  //Product page
  $("#elex_prod_btn").removeClass('btn-success');

  $(".reset_variations").addClass('btn-inline');




// Learn Fish Finder series tablet add/remove class
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww > 569) {
      $('.inverted-device-order').removeClass('mobile-row-reverse');
    } else if (ww <= 998) {
      $('.inverted-device-order').addClass('mobile-row-reverse');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();












});

