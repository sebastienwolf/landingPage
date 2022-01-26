$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) 
      $("#drop").addClass("active");
    else if (scroll < 80) 
      $("#drop").removeClass("active");
  });
  
  $("#drop, nav ~ ul li").click(function() {
    $("nav, #drop span").toggleClass("open");
    $("body").toggleClass("hidden");
    $(window).scrollTop(0); //cheating
  });


  // animation caroussel
  var angle = 0;
  function galleryspin(sign) { 
  spinner = document.querySelector("#spinner");
  if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
  spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
  }