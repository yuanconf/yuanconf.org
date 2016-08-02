var place_section = function(){
  $("section").map(function(){
    $(this).css("top",$(window).height()*($(this).index()-1)+"px")
  });  
  $("footer").css("top", $("section").size() * $("section").height() + "px");
  $("nav").css("top", ($(window).height() - $("nav").height()) + "px");
}

var fix_nav = function(){
}


jQuery(function($){
  place_section();
  $(window).scroll(function(){
    if($(document).scrollTop() < ($(window).height() - $("nav").height())){
      $("nav").css("top", ($(window).height() - $("nav").height()) + "px");
      $("nav").css("position", "absolute");
    }else if($(document).scrollTop() >= ($(window).height() - $("nav").height())){
      $("nav").css("position", "fixed");
      $("nav").css("top", 0)
    }  
  })
});
