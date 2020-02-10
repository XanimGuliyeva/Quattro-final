


$('.sliderall').slick({
    dots: false,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  AOS.init();


  function Myfunction(Language){
    var programming = document.getElementsByClassName("opentext");
    for(i=0;i<programming.length;i++){
        programming[i].style.display="none";
    }
    document.getElementById(Language).style.display="block";
}


$(document).ready(function(){
  $("newpart-botton").click(function(){
    $("botton").addClass("active");
  })
})

$('.counter').each(function(){
  var $this=$(this),
  countTo=$this.attr('data-count');
  $({countNum: $this.text()}).animate({
      countNum: countTo
  },

  {
      duration:3000,
      easing: 'linear',
      step: function() {
          $this.text(Math.floor(this.countNum));          
      },
      complete: function() {
          $this.text(this.countNum);          
      },
  });
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$('.carss').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  dots:false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.guaranty').slick({
  slidesToShow: 2,
  autoplaySpeed: 2000,
  dots:true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$(function(){
  $(window).on("scroll",function(){
      if($(window).scrollTop()>50){
          $(".header").addClass("active");
      }
      else{
          $(".header").removeClass("active");
          $(".header").css("padding","10px");
      }
  })
})


$(function(){
  $(".menu").click(function(){
      $(".inside").slideToggle();
  })
})
