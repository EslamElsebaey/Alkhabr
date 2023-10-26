
// $(window).load(function(){
//   $(".preloader").fadeOut();
// })




$(document).ready(function(){

  $(".preloader").fadeOut();



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
  autoplay : true , 
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
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    } , 
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  }
});


// **************************************************************************************************


// open search 


$(".open-search-btn").click(function(){
  $(".search").slideToggle(300);
  $(this).children().toggleClass("la-times");
})







// **************************************************************************************************


// open and close nav

$(".choosed-country-close").click(function(){
  $(this).parent().hide();
})

// $(".closeBtn").click(function(){
//   $("nav").removeClass("open-nav");
//   $("body").removeClass("overflow-hidden") ;

// })


$(".bars").click(function(){
  $(this).children("i").toggleClass("la-times")
  $("nav").toggleClass("open-nav");  
  $("body").toggleClass("overflow-hidden") ;
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
// let darkmodeInput = $(".darkmode-input"); 
// let logo = $(".header-logo img");


// if(localStorage.getItem("dark-mode") == "true"){
//   $("body").addClass("dark-mode") ;
//   logo.attr("src" , "images/logo-dark.png");
//   darkmodeInput.prop("checked" , true)
// }


// $(darkmodeInput).change(function(){
//   $("body").toggleClass("dark-mode") ;
//  if(this.checked){
//   localStorage.setItem("dark-mode" , "true") ;
//   if($("body").hasClass("dark-mode")){
//     logo.attr("src" , "images/logo-dark.png");
//   }
//  }else{
//   if(!$("body").hasClass("dark-mode")){
//     logo.attr("src" , "images/logo-light.png");
//   }
//   localStorage.setItem("dark-mode" , "false") ;
//  }
// })


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

if(!$(".bottom-header")){
  console.log(10)
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


//fixed nav


if($(".home-header").length > 0){
  let fixedBar = document.querySelector(".home-header"),
  prevScrollposition = $(window).scrollTop();
  $(window).on("scroll", function () {
    if($(window).width() < 768){
     
     if($(document).scrollTop() == 0){
       $(".search").show()
     }else{
       $(".search").hide()
     }
     if ($(window).scrollTop() > 150) {
         $(".home-header").addClass("fixed");
         $(".search").addClass("display-none");
         if($(window).width() < 768){
           $(".open-search-btn").addClass("display-block") ;
         } 
         $(".open-search-btn i").removeClass("la-times") ;
         
     } else {
         $(".home-header").removeClass("fixed");
         $(".search").removeClass("display-none");
         $(".open-search-btn").removeClass("display-block") ;
        
     }


     var scrollTop = $(window).scrollTop();
     prevScrollposition < scrollTop && prevScrollposition > 0 ? fixedBar.classList.add("stayTop") : fixedBar.classList.remove("stayTop"), (prevScrollposition = scrollTop);

    }


    
   });
}

// **************************************************************************************************



})







