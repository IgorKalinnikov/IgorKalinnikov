$(document).ready(function(){
    $("#btn-1").click(function(){
      $("#ajaxtext").load("ajax1.html");
         $("#ajaxtext").fade("slow");
    });
  });


$(document).ready(function(){
$('#btn2').click(function () {
   /* $( this ).toggleClass('hover')*/
    $('#json').toggleClass('visible');
   
   $(function(){
           $.getJSON('users.json', function(data) {
            for(var i=0;i<data.users.length;i++){
                              $('#json').append('<tr><td>' + data.users[i].id + '</td><td>' + data.users[i].name + 
                '</td><td>' + data.users[i].age + '</td><tr>');
            }
    });
  })
})
});

$(document).ready(function(){
    $("#btn-2").click(function(){
      $("#ajaxtext").load("sql.php");
         $( this ).fadeIn("slow");
            });
  });

$(document).ready(function(){
    $("#btn-3").click(function(){
      $("#ajaxtext").load("ajax2.txt");
                });
  });

$(document).ready(function(){
    $("#btn-4").click(function(){
      $("#ajaxtext").load("ajax4.txt");
                });
  });


  $(document).ready(function(){
$("#link1").on("click", function() {

  $("#ajaxtext").load("ajax2.txt");

                   });
  });
        
 $(document).ready(function(){
$("#link2").on("click", function() {
  $("#ajaxtext").load("ajax3.txt");
  
                  });
  });