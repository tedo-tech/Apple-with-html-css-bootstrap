


// $(document).ready(function(){

//   if   ($( window ).width()<= 768){

// $(".footer-links-wrapper h3").on("click",function(){
//     // $("ul").slideToggle();
//     // $(".footer-links-wrapper h3").next("ul").slideToggle();
//     $(this).next("ul").slideToggle();

// })
//   } 
//   if (( window ).width() > 768) {
//  $("ul").stop()
//   }
// })
// $(document).on("resize",function(){
//     const mq = window.matchMedia( "(max-width: 768px)" );

//     if (mq.matches) {
//         //   alert("window width >= 960px");
//                 var link4 = $(".b");
//                  $("h3").click(function(){    
//                      link4.slideToggle();
//           });
//     } else {
//     //  alert("window width < 960px");
//          $("h3").addClass("size");
//     }
    
// })


// $(window).on("resize", function () {

//     if (screen.width <= 768) {
  
//       $(".footer-links-wrapper h3").on("click", function() {
//         $(this).next("ul").slideToggle();
//       });
  
//     } else {
  
//       $("ul").show();
  
//     }
  
//   });
if ($(window).width() <= 768){	
    $('.footer-links-wrapper').addClass("someClass");
}else{
    $('.footer-links-wrapper').removeClass("someClass");
}
$(window).on('resize', function(event){
    if ($(window).width() <= 768){	
        $('.footer-links-wrapper').addClass("someClass");
    }else{
        $('.footer-links-wrapper').removeClass("someClass");
        $('.footer-links-wrapper ul').show();
    }	
});
// Footer collapse functionality 
$(document).on("click", ".someClass h3", function(){
    $(this).next('ul').slideToggle();
    $(this).toggleClass("expanded");
});