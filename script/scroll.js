$(document).ready(function(){
	var btn = $('#button');

$("body").scroll(function() {
  if ($("body").scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$(".dropdown-menu").mouseleave(function(){
      $(".dropdown").removeClass("open");
    });
	
	
	
$(".dropdown-toggle").mouseenter(function(){
      $(".dropdown").addClass("open");
    });

	$(".homelink, .aboutuslink").mouseenter(function(){
      $(".dropdown").removeClass("open");
    });	
	

	
});