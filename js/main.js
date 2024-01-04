
$(window).on('load', function() {
  $(".preloader").fadeOut();
});


$(document).ready(function(){

 

  // Ticker News
  
    var $breakingNews = jQuery('.breaking-news');
  
    if ( $breakingNews.length ){
      $breakingNews.each(function(){
        var $this = jQuery(this);
        if( $this.find('li').length ){
          let dir = document.dir;
          $this.ticker({
            speed       : .2,
            pauseOnItems :  2200,
            fadeInSpeed  : 600,
            fadeOutSpeed : 300,
            controls    : ( $this.data('arrows') ) ? true : false,
            direction   : dir ,
            displayType : ( $this.data('type') ) ? $this.data('type') : 'reveal',
          });
        }
      });
    }
 
  




  $(".bookmark").click(function(){
    $(this).toggleClass("active");
  })




// **************************************************************************************************
// show password
$(".eye-icon").click(function(){
  $(this).toggleClass("la-eye-slash");
  var input = $(this).siblings(".form-input")
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
})

// **************************************************************************************************


// OTP 

$(".otp-input").first().focus();

let otpInput = $(".otp-input");
otpInput.on("keyup", function (e) {
    let key = e.keyCode || e.charCode;
    if (key == 8 ) {
      $(this).prev().focus();
    } else if ($(this).val() != "") {
      $(this).next().focus();
    }
  })

  // **************************************************************************************************



  //  urgentNews swiper

const urgentNews = new Swiper(' .urgent-news .swiper', {
  loop: true,
  // autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.urgent-news .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.urgent-news .swiper-button-next ',
    prevEl: '.urgent-news .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 1,
    },
    
  }
});




// **************************************************************************************************


// open search 


$(".open-search-btn").click(function(){
  $(".search").slideToggle(300);
  $("body").toggleClass("padding-118")
  $(this).children().toggleClass("la-times");
})







// **************************************************************************************************


// open and close nav

$(".choosed-country-close").click(function(){
  $(this).parent().hide();
})



$(".bars").click(function(){
  $("nav").addClass("open-nav");  
  $("body").addClass("overflow-hidden") ;
})

$(".closeBtn").click(function(){
  $("nav").removeClass("open-nav");  
  $("body").removeClass("overflow-hidden") ;
})



// $(".bars").click(function(){
//   $("nav").addClass("open-nav");  
//   $("body").addClass("overflow-hidden") ;
// })

// **************************************************************************************************


$(".delete-acc-btn").click(function(){
  $(".delete-overlay").addClass("show-overlay");
  $("body").addClass("overflow-hidden") ;
})

$(".logout-btn").click(function(){
  $(".logout-overlay").addClass("show-overlay");
  $("body").addClass("overflow-hidden") ;

})

$(".cancel").click(function(){
  $(".delete-overlay").removeClass("show-overlay");
  $(".logout-overlay").removeClass("show-overlay");
  $("body").removeClass("overflow-hidden") ;
})

// **************************************************************************************************





// dark mode 

let darkmodeInput = $(".darkmode-input"); 
let logo = $(".header-logo img");


if(localStorage.getItem("dark-mode") == "true"){
  $("body").addClass("dark-mode") ;
  logo.attr("src" , "images/logo-dark.png");
  darkmodeInput.prop("checked" , true)
}


darkmodeInput.change(function(){
  $("body").toggleClass("dark-mode") ;
 if(this.checked){
  localStorage.setItem("dark-mode" , "true") ;
  logo.attr("src" , "images/logo-dark.png");
 }else{
  logo.attr("src" , "images/logo-light.png");
  localStorage.setItem("dark-mode" , "false") ;
 }
})






// **************************************************************************************************

//  pagination
$(".pagination-sec-parent a").click(function(e){
  e.preventDefault();
  $(this).addClass("page-active");
  $(".pagination-sec-parent a").not($(this)).removeClass("page-active");
})


// **************************************************************************************************


$(".unfollow-btn , .follow-btn").click(function(){
  $(this).toggleClass("unfollow-btn");
  $(this).toggleClass("follow-btn");
  $(this).toggleClass("follow-btn-active");
  $(this).children(".follow-btn-icon").toggleClass("la-user-minus").toggleClass("la-bell");

  if($(this).hasClass("follow-btn-active")){
    if($("html").attr("dir") == "rtl"){
      $(this).children(".follow-btn-text").text( "إلغاء المتابعة");
    }else{
      $(this).children(".follow-btn-text").text( "Unfollow");
    }
  }else{
    if($("html").attr("dir") == "rtl"){
      $(this).children(".follow-btn-text").text("متابعة");
    }else{
      $(this).children(".follow-btn-text").text("Follow");
    }
  }
})

// **************************************************************************************************


// profile image




$('.profile-image').on('click', function() {
  $('.profile-image-input').click();
});


$(".profile-image-input").change(function () {
  var file = this.files[0];
  if(file){
  var reader = new FileReader();
  reader.onload = function (e) {
    var imageSrc = e.target.result;
    $('.profile-image').attr('src', imageSrc);
    if (imageSrc !== '') {
      $('.profile-image').addClass('opacity-1');
    }
  }
  reader.readAsDataURL(file);
  }
})
// **************************************************************************************************


if($(".bottom-header").length === 0){
  $(".toTop").toggleClass("setToTop");
}

if($(".continue-btn-div").length !== 0 && $(".home-footer").length !== 0 ){
  $(".toTop").addClass("setToTop-contin");
}else{
  $(".toTop").removeClass("setToTop-contin");
}


// **************************************************************************************************

// fire select2

if($('.myselect').length > 0){
  $('.myselect').select2();
  // select arrow rotate
$(".select2-selection").click(function(){
  $(".select2-selection--single").toggleClass("rotate-select-icon");
 })

 // cancel search 
$('.contact select').select2({
  minimumResultsForSearch: -1
});
}




// **************************************************************************************************


// counters


if($(".timer").length > 0){
  let timerSpan = $(".timer-span");

  let startValue = parseInt(timerSpan.attr("data-timer") );
  let timer = setInterval(function () {
    startValue -= 1 ;
    timerSpan.text(startValue);
    if (startValue == 0) {
      clearInterval(timer);
      $(".timer").text("انتهى الوقت!")
    }
  }, 1000);
}



// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


// **************************************************************************************************


// collapse comments

$(".more-btn").click(function(){
  $(".collapse-comments").toggle(400);
  $(this).text(function(_, currentText) {
    return currentText === "عرض القليل من التعليقات" ? "عرض المزيد من التعليقات" : "عرض القليل من التعليقات";
  });
})

//fixed nav

if($(".form-header").length > 0){
  $(window).on("scroll" , function(){
    $(".form-header").addClass("position-fixed-top")
    if($(window).scrollTop() === 0){
      $(".form-header").removeClass("position-fixed-top")
    }
  })
}


if($(".home-header").length > 0){
  let fixedBar = document.querySelector(".home-header"),
  prevScrollposition = $(window).scrollTop();
  $(window).on("scroll", function () {
    if($(window).width() > 768){
      $(".home-header").addClass("fixedHeader-windows");
    }
     
     if ($(window).scrollTop() > 150) {
         $(".home-header").addClass("fixed");
         
     } else {
      if($(window).width() > 768){
        $(".home-header").removeClass("fixedHeader-windows");
      }
         $(".home-header").removeClass("fixed");
     }

     var scrollTop = $(window).scrollTop();
     prevScrollposition < scrollTop && prevScrollposition > 0 ? fixedBar.classList.add("stayTop") : fixedBar.classList.remove("stayTop"), (prevScrollposition = scrollTop);
   });
}

// **************************************************************************************************



})







