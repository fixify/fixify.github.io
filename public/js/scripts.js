var captionLength = 0;
var caption = '';
var cap = ['Annoyed? Get Fixified!','We are the best in town.', '24x7 work hours.', 'Anywhere anytime, just a click away.', 'Easy and reliable.'];
$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    var i = 0;
    caption = cap[i++];
    type();
    setTimeout(function() {
      testErasingEffect();
    }, 5000);
    setInterval(function() {
      caption = cap[i++];
      type();
      setTimeout(function() {
        testErasingEffect();
      }, 5000);
      if(i == 5)
        i = 0;
    }, 7000);
   $("#heroInner").carousel({
       interval : 2000,
       pause: false
   });
   $(window).scroll(function() {
     if($(window).scrollTop() > 300)
        $('#heroWrapper').addClass('hidden');
    else
      $('#heroWrapper').removeClass('hidden');
   });

     /*$('#team .sign').css({
       '-moz-animation': 'sign-anim 3.5s .2s steps(85) forwards',
        '-o-animation': 'sign-anim 3.5s .2s steps(85) forwards',
        '-webkit-animation': 'sign-anim 3.5s .2s steps(85) forwards',
        'animation': 'sign-anim 3.5s .2s steps(85) forwards'
     });*/

});
function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}
function testErasingEffect() {
    caption = captionEl.html();
    captionLength = caption.length;
    if (captionLength>0) {
        erase();
    } else {
        $('#caption').html("You didn't write anything to erase, but ok!");
        setTimeout('testErasingEffect()', 1000);
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}
var about = function() {
  $('html, body').animate({
    scrollTop: $('#about').offset().top - 50
  }, 'slow');
};
var team = function() {
  $('html, body').animate({
    scrollTop: $('#team').offset().top - 50
  }, 'slow');
};
var home = function() {
  $('html, body').animate({
    scrollTop: $('#section1').offset().top
  }, 'slow');
};
