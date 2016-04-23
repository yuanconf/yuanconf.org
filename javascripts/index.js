var place_section = function(){
  $("section").map(function(){
    $(this).css("top",$(window).height()*$(this).index()+"px")
  })  
}

jQuery(function($){
  place_section();
});
