$(document).ready(function() {
        doIntro();
        playGame();
});

var hadoukenSound = false
function playHadouken () {
  hadoukenSound = !hadoukenSound;
  if (hadoukenSound) {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
}

var coolSound = false
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    $('#theme-song')[0].pause;
    $('#cool')[0].play();
  }
}

function playGame() {
    $('.ryu').mouseenter(function() {
 		$('.ryu-still').hide();
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
		$('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.ryu-cool').hide();
    $('.ryu-still').hide();
  	$('.hadouken').finish().show().animate(
  		{'left': '1020px'},
  		500,
  		function() {
        $(this).hide();
        $(this).css('left', '520px');
      })
  })
  .mouseup(function() {
   	$('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  });

$(document).keydown(function(e) {
  if (e.which == 88) {
    playCool();
    $('#theme-song')[0].pause();
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.ryu-cool').show();
    }
  
}).keyup( function(e) {
  if (e.which == 88) {
    $('#cool')[0].pause();
    $('#cool')[0].load();
    $('.ryu-cool').hide();
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    $('.ryu-throwing').hide();
    }
  });
}

function doIntro() {
  $('#theme-song')[0].volume = 0.3;
  $('#theme-song')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}