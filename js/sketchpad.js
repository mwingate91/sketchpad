greyscale = true;

$(document).ready(function(){
	
	containerWidth = parseInt($('.container').width(), 10) ;
	createGrid(16);



	highlight = function() {

		if(!$(this).hasClass("hover")) {
			$(this).addClass("hover");
			
		}		
	}

	color = function() {
		opacity = parseFloat($(this).css('opacity'));
		count = opacity * 10;
		if (greyscale) {
			hue = 'black';
		} else {
			hue = 'rgb(' + (Math.floor(Math.random() * 256 )) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		}

		$(this).css("background-color", hue);	
		
		$(this).css('opacity', (opacity + 0.1));
	}

	$('.container').on('mouseover', '.gridBox', highlight);
	$('.container').on('mouseover', '.hover', color);

	function createGrid(size) {
		containerWidth = containerWidth ;
		boxSize = (containerWidth / size) + "px";
		console.log(boxSize);
		for(var i = 0; i < size ; i++) {
			$('.container').append($("<div class='gridRow'></div>"));
			for (var c = 0; c < size; c++) {
				$('.gridRow:eq(' + i + ')').append($("<div class='gridBox'></div>"));
			}
		}

		$('.gridBox').css({'width' : boxSize, 'height' : boxSize});
		$('.gridRow').css({'height' : boxSize});
	}

	$('#new').on('click', function() {
		$('.gridBox').removeClass("hover");
		var size = prompt('How many squares per side for the new grid?');
		if (size > 0) {
			$('.gridRow').remove();
			createGrid(size);
		}
	});

	$('#color').on('click', function() {
		greyscale=false;
	});
	$('#greyscale').on('click', function() {
		greyscale = true;
	});
});

