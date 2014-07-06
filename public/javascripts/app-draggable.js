

$(document).ready(function() {
  if ('undefined' == typeof page) { page = {}; window.page = page; }
  page.dom = {};
  TweenLite.set($('#comment'), {autoAlpha:0});
  page.dom.focusMarkdown = function() {
    $('#markdown').focus();
  }
  page.dom.handleCommentButton = function (e) {
    e.preventDefault();
    var stringDom = $('#markdown').val().replace('\n', '<br/>');
    $('ul#list').append('<li>'+stringDom+'</li>');
    $('#markdown').val('');
    TweenLite.to($('#comment'), 0.1, {autoAlpha:0});
  }
  page.dom.handleDocumentClick = function (e) {
    var comment = $('#comment');
    if (e.target.className.indexOf('box') > -1) {
      $(e.target).append(comment);
      TweenLite.set(comment,
        { autoAlpha: 0,
          top: (e.target.clientTop+10)+'px',
          left: (e.target.clientLeft+10)+'px',
          width: (e.target.clientWidth-20)+'px',
          height: (e.target.clientHeight-20)+'px'}
      );
      TweenLite.to(comment, 0.1,
        { autoAlpha:1,
          onComplete: page.dom.focusMarkdown}
      );
    }
    console.log(e);
    console.log(e.target);
  };
  $('body').click(page.dom.handleDocumentClick);
  $('#submit').click(page.dom.handleCommentButton);
  page.draggable = function () {
    Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:"#container", throwProps:true});
  };
  page.slideshow = {};
  page.slideshow.timeline = new TimelineMax({repeat:-1});
  page.slideshow.load = function () {
    page.slideshow.timeline.append(
      TweenLite
    );
  };
  page.slideshow.advance = function () {
    var $slides = $(".slide");
    var currentSlide = 0;
    var stayTime = 3;
    var slideTime = 1.3;
    TweenLite.set($slides.filter(":gt(0)"), {autoAlpha:0});
    TweenLite.delayedCall(stayTime, nextSlide);

    function nextSlide(){
      TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );
      currentSlide = ++currentSlide % $slides.length;
      TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );
      TweenLite.delayedCall(stayTime, nextSlide);
    }
  };
  page.slideshow.get_current_slide = function () {};
  page.slideshow.get_next_slide = function () {};

  // now run it
  page.draggable();
});
/*
See http://www.greensock.com/draggable/ for details.
This demo uses ThrowPropsPlugin which is a membership benefit of Club GreenSock, http://www.greensock.com/club/
*/

var $snap = $("#snap"),
  $liveSnap = $("#liveSnap"),
	$container = $("#container"),
	gridWidth = 196,
	gridHeight = 100,
	gridRows = 6,
	gridColumns = 5,
	i, x, y;

//loop through and create the grid (a div for each cell). Feel free to tweak the variables above
for (i = 0; i < gridRows * gridColumns; i++) {
	y = Math.floor(i / gridColumns) * gridHeight;
	x = (i * gridWidth) % (gridColumns * gridWidth);
	$("<div/>").css({position:"absolute", border:"1px solid #454545", width:gridWidth-1, height:gridHeight-1, top:y, left:x}).prependTo($container);
}

//set the container's size to match the grid, and ensure that the box widths/heights reflect the variables above
TweenLite.set($container, {height: gridRows * gridHeight + 1, width: gridColumns * gridWidth + 1});
TweenLite.set(".box", {width:gridWidth, height:gridHeight, lineHeight:gridHeight + "px"});

//the update() function is what creates the Draggable according to the options selected (snapping).
function update() {
  var snap = $snap.prop("checked"),
      liveSnap = $liveSnap.prop("checked");
	Draggable.create(".box", {
		bounds:$container,
		edgeResistance:0.65,
		type:"x,y",
		throwProps:true,
		liveSnap:liveSnap,
		snap:{
			x: function(endValue) {
				return (snap || liveSnap) ? Math.round(endValue / gridWidth) * gridWidth : endValue;
			},
			y: function(endValue) {
				return (snap || liveSnap) ? Math.round(endValue / gridHeight) * gridHeight : endValue;
			}
		}
	});
}

//when the user toggles one of the "snap" modes, make the necessary updates...
$snap.on("change", applySnap);
$liveSnap.on("change", applySnap);

function applySnap() {
	if ($snap.prop("checked") || $liveSnap.prop("checked")) {
		$(".box").each(function(index, element) {
			TweenLite.to(element, 0.5, {
				x:Math.round(element._gsTransform.x / gridWidth) * gridWidth,
				y:Math.round(element._gsTransform.y / gridHeight) * gridHeight,
				delay:0.1,
				ease:Power2.easeInOut
			});
		});
	}
	update();
}

update();
