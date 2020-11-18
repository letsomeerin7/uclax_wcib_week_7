jQuery(function() {

  let my_switch = false;

	$('#my_button').click(function () {

		if (my_switch == false) {
			my_switch = true;

			$(this).html('Surprise!');

			$('#my_image').attr('src', 'images/samson-puppy.jpg');
		} else {
			my_switch = false;

			$(this).html("What's Coming?");

			$('#my_image').attr('src', 'images/balloons.png');
		}

	});

	$('#alt_button').mouseenter(function(){
  alert("IT'S A PUPPY! (So much better than a baby, amiright?)");
});

});
