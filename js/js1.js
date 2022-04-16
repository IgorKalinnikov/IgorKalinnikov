$(document).ready(function(){
    $(".name").click(function(){
        $(".name").hide();
     });
   });
   $(window).keypress(function(e) {
     if (e.keyCode == 0 || e.keyCode == 32) {
       console.log('Space pressed');
       $(".name").fadeOut("slow");
     }
   });
   $(window).keypress(function(e) {
    if (e.keyCode == 0 || e.keyCode == 32) {
      console.log('Space pressed');
      $(".name").fadeIn("slow");
    }
  });