

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


  AOS.init();