$(document).ready(function () {
  firstLoad();

  slidersGo();

  otherCode();

  videoIframeYoutubePlay();
});

function firstLoad() {
  setTimeout(function () {
    $("body").addClass("loaded");
  }, 500);
}

function otherCode() {
  $(".burger_menu_g").on("click", function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".right_head_go").addClass("visible");
      disableScroll();
    } else {
      $(".right_head_go").removeClass("visible");
      enableScroll();
    }
  });
  $("[data-show-toggle-lang]").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".this_is_lang_switc").on("click", function () {
    $(this).toggleClass("active");
  });
  $(".in_to_drop_switch li a").on("click", function () {
    $(".this_is_lang_switc").removeClass("active");
  });

  function animateStep1() {
    var tl = new TimelineLite();
    tl.staggerFrom(
      ".chose_company,.select_type,.foot_cont_frm",
      0.5,
      { y: 20, autoAlpha: 0, ease: Power2.easeOut },
      0.05
    );
  }
  function animateStep2() {
    var tl = new TimelineLite();
    tl.staggerFrom(
      ".col_imputs_g,.selected_tourists",
      0.5,
      { y: 20, autoAlpha: 0, ease: Power2.easeOut },
      0.05
    );
  }
  function animateStep3() {
    var tl = new TimelineLite();
    tl.staggerFrom(
      ".col_item_sifg,.blk_last_ifng",
      0.5,
      { y: 20, autoAlpha: 0, ease: Power2.easeOut },
      0.05
    );
  }

  $("[data-next-step]").on("click", function (e) {
    e.preventDefault();
    if ($("[data-step-1]").hasClass("current")) {
      $(".item_step_go").removeClass("current");
      $("[data-step-2]").addClass("current");
      $(".current_step").html("02");
      animateStep2();

      return false;
    }
    if ($("[data-step-2]").hasClass("current")) {
      $(".item_step_go").removeClass("current");
      $("[data-step-3]").addClass("current");
      $(".current_step").html("03");
      animateStep3();

      return false;
    }
    if ($("[data-step-3]").hasClass("current")) {
      window.location.replace("/");
    }
  });
  $("[data-prev-step]").on("click", function (e) {
    e.preventDefault();
    if ($("[data-step-3]").hasClass("current")) {
      $(".item_step_go").removeClass("current");
      $("[data-step-2]").addClass("current");
      $(".current_step").html("02");
      animateStep2();
      return false;
    }
    if ($("[data-step-2]").hasClass("current")) {
      $(".current_step").html("01");
      $(".item_step_go").removeClass("current");
      $("[data-step-1]").addClass("current");
      animateStep1();
      return false;
    }
    if ($("[data-step-1]").hasClass("current")) {
      // return false;
    }
  });

  $("[data-next-step],[data-prev-step]").on("click", function (e) {
    var stepCurenG = parseInt($(".current_step").html());
    if (stepCurenG == 02) {
      $(".pregress_percent").css("width", "66.6666666%");
    } else if (stepCurenG == 03) {
      $(".pregress_percent").css("width", "100%");
    } else {
      $(".pregress_percent").css("width", "33.33333333%");
    }
  });

  if ($(".birthday_calendar").length) {
    $(".birthday_calendar").datepicker({
      dateFormat: "mm.dd.yy",
      yearRange: "-100:+0",
      changeYear: true,
      changeMonth: true,
      ignoreReadonly: true,
      allowInputToggle: true,
    });
  }
  if ($(".date_of_entry").length) {
    $(".date_of_entry").datepicker({
      dateFormat: "mm.dd.yy",
      ignoreReadonly: true,
      allowInputToggle: true,
    });
    $(".date_of_departure").datepicker({
      dateFormat: "mm.dd.yy",
      ignoreReadonly: true,
      allowInputToggle: true,
    });

    $(".date_of_entry").on("change", function () {
      var value = $(this).val();
      console.log(value);
      TweenMax.to("[date-selected-entry],.top_date_selg", 0.4, {
        autoAlpha: 1,
      });
      $("[date-selected-entry]").html(value);
    });
    $(".date_of_departure").on("change", function () {
      var value = $(this).val();
      TweenLite.to("[date-selected-departure],.top_date_selg", 0.4, {
        autoAlpha: 1,
      });
      $("[date-selected-departure]").html(value);
    });
  }

  $("select.input_gorg").on("change", function () {
    $(this).addClass("color_black");
  });

  $("[data-show-tab]").on("click", function () {
    $(this).toggleClass("active");
    $(this).next("[data-tab-content]").slideToggle().toggleClass("active");
  });

  $("[data-butt-select]").on("click", function () {
    var selectorPlan = $(".plan_selector");
    if (selectorPlan.prop("checked")) {
      $("[data-plans]").addClass("plan_2").removeClass("plan_1");
    } else {
      $("[data-plans]").addClass("plan_1").removeClass("plan_2");
    }
  });

  // $('.price_item_plan label').on("click", function () {
  // 	var selectorPlan = $('#plan_2');
  // 	if(selectorPlan.prop('checked')) {
  // 		$('[data-plans]').addClass('plan_2').removeClass('plan_1');
  // 	}else {
  // 		$('[data-plans]').addClass('plan_1').removeClass('plan_2');
  // 	}
  // });
  $(".insurance_plan_item").on("click", function () {
    $(".insurance_plan_item").removeClass("active");
    $(this).addClass("active");
    if ($(".insurance_plan_2").hasClass("active")) {
      $("[data-plans]").addClass("plan_2").removeClass("plan_1");
    } else {
      $("[data-plans]").addClass("plan_1").removeClass("plan_2");
    }
  });

  $("[data-show-insurance]").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("[data-form-insurance]").slideToggle();
  });

  $(".in_to_company_slide").on("click", function () {
    $(".in_to_company_slide").removeClass("active");
    $(this).toggleClass("active");
  });

  // Modal popup
  $("[data-show-modal]").on("click", function (e) {
    e.preventDefault();
    var getAttr = $(this).attr("data-show");
    $("body").find(getAttr).fadeIn().addClass("visible");
    disableScroll();
    $(".in_to_modal").scrollTop(0);
  });
  $("[data-close-modal]").on("click", function () {
    enableScroll();
    $(".modal_site").fadeOut().removeClass("visible");
  });

  jQuery(document).on("keyup", function (evt) {
    if (evt.keyCode == 27) {
      $("[data-close-modal]").trigger("click");
    }
  });

  var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (iOS) {
    $("body").addClass("ios_device");
  }

  $(".go_to_form_insuran").on("click", function (e) {
    e.preventDefault();
    $(".form_insurance").show();
    $("[data-show-insurance]").addClass("active");
    $("html, body").animate(
      {
        scrollTop: $("#form_insurance").offset().top,
      },
      600
    );
  });

  // $('a[href="#"]').on("click", function (e) {
  // 	e.preventDefault();
  // });
}

function disableScroll() {
  $("html").addClass("disable_scroll");
}
function enableScroll() {
  $("html").removeClass("disable_scroll");
}

function slidersGo() {
  if ($("#slider_company").length) {
    const swiper = new Swiper("#slider_company", {
      spaceBetween: 30,
      slidesPerView: 5,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      navigation: {
        nextEl: ".chose_arr_right",
        prevEl: ".chose_arr_left",
      },
      breakpoints: {
        320: {
          spaceBetween: 13,
          slidesPerView: 3,
        },
        640: {
          spaceBetween: 15,
          slidesPerView: 3,
        },
        1200: {
          speed: 600,
          spaceBetween: 30,
          slidesPerView: 5,
        },
      },
    });
  }

  if ($("#mobile_app_sld").length) {
    const mobile_app_sld = new Swiper("#mobile_app_sld", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      pagination: {
        el: ".pagination_app",
        type: "bullets",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
      },
    });
  }

  if ($("#slider_insurance").length) {
    const swiper = new Swiper("#slider_insurance", {
      slidesPerView: "auto",
      spaceBetween: 15,
      loop: true,
      loopFillGroupWithBlank: false,

      navigation: {
        nextEl: ".chose_arr_right_insurance",
        prevEl: ".chose_arr_left_insurance",
      },
    });
  }
}

function videoIframeYoutubePlay() {
  var v = document.getElementsByClassName("youtube_player");
  for (var n = 0; n < v.length; n++) {
    var p = document.createElement("div");
    p.className = "in_to_iframe_g";
    var id = v[n].getAttribute("data-id");

    v[n].appendChild(p);
    p.addEventListener("click", function () {
      $(".youtube_player").addClass("loading");
      var parent = this.parentNode;
      createIframe(parent, parent.getAttribute("data-id"));
    });
  }
}
function createCustomThumbail(url) {
  return (
    '<img class="youtube-thumbnail" src="' +
    url +
    '" alt="Youtube Preview" /><div class="youtube-play-btn"></div>'
  );
}
function createIframe(v, id) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "//www.youtube.com/embed/" +
      id +
      "?autoplay=1&color=white&autohide=2&modestbranding=1&border=0&wmode=opaque&enablejsapi=1&showinfo=0&rel=0"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("class", "youtube-iframe");
  v.firstChild.replaceWith(iframe);
}
