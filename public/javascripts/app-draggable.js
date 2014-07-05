$(document).ready(function() {
  if ('undefined' == typeof page) { page = {}; window.page = page; }
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
