//$(document).on(click, .mobile-menu, function(){
    // var topMenuBar= document.querySelector(".topMenuBar");
     //if (topMenuBar.className.indexOf(" showMenu") == -1)
      //  {<br>topMenuBar.className += " showMenu";
     //}
     //else
    //{ 
     // topMenuBar.className = topMenuBar.className.replace(" showMenu", "");
    //}
// });

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});