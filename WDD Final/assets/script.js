$(document).ready(function(){

	var clicked = false;

	$(".year").click(function(){
		if (clicked == false) {
			clicked = true;
			console.log("clicked");
			$(this).parent().find('.year').css("width", "110px");
			$(this).parent().find('.year').css("height", "110px");
			$(this).parent().find('.year').css("line-height", "110px");

			$(this).parent().find('.event').show();
			$(this).parent().find('.event2').show();
			$(this).parent().find('.event3').show();
			$(this).parent().find('.event4').show();
		} else {
			clicked = false;
			$(this).parent().find('.year').css("width", "100px");
			$(this).parent().find('.year').css("height", "100px");
			$(this).parent().find('.year').css("line-height", "100px");

			$(this).parent().find('.event').hide();
			$(this).parent().find('.event2').hide();
			$(this).parent().find('.event3').hide();
			$(this).parent().find('.event4').hide();
		}
	});


	$(".year").hover(function(){

		clicked = false;
		$(this).parent().find('.year').css("width", "110px");
		$(this).parent().find('.year').css("height", "110px");
		$(this).parent().find('.year').css("line-height", "110px");

		$(this).parent().find('.event').show();
		$(this).parent().find('.event2').show();
		$(this).parent().find('.event3').show();
		$(this).parent().find('.event4').show();

	}, function() {
		if (!clicked) {
			$(this).parent().find('.year').css("width", "100px");
			$(this).parent().find('.year').css("height", "100px");
			$(this).parent().find('.year').css("line-height", "100px");

			$(this).parent().find('.event').hide();
			$(this).parent().find('.event2').hide();
			$(this).parent().find('.event3').hide();
			$(this).parent().find('.event4').hide();
		}

	});

//from HW8

  $("#carousel-next").click(function(){
    var current = parseInt($("#carousel").css("margin-left").replace("px", ""));
    if (current == -1920 ){ //at the end
      return false;
    } else {
     $("#carousel").css("margin-left", current-960+"px"); //update the margin-left of the carousel to be current - 960
    }
  });


  //Implement the "slide to right" when the user clicks on #carousel-prev
  $("#carousel-prev").click(function(){
    var current = parseInt($("#carousel").css("margin-left").replace("px", ""));
    if (current == 0){ //at the beginning
      return false;
    } else {
     $("#carousel").css("margin-left", current+960+"px"); //update the margin-left of the carousel to be current + 960
    }
  });

});
