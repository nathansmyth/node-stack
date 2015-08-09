$(document).ready(function() {
  var stack = stack || {};
  stack.latest_item = '';

  $('#create').focus();

  stack.collect = function(create_item) {
    stack.latest_item = create_item;
  }
  stack.append = function() {
    $('#list').append('<li>' + stack.latest_item + '</li>');
  }

  $('#create').keydown(function(e) {
    if(e.keyCode == 13) { // Enter pressed
      if(this.value === '') { return false; }
      stack.collect(this.value);
      stack.append();
      this.value = '';
    }
  });

  window.stack = stack;
  $(document).on('gp:axis:horizontal', function(event, data) {
    stack.evt = event;
    stack.dta = data;
    if(event.stickId === 'stick-1') { $('#nathan').width( ( $('#nathan').width() + offsetVal ) + 'px' ); }
    if(event.stickId === 'stick-2') {
      console.log('ADA', event.stickId, labelId, 'RAE');
      $('#jill').width( ( $('#jill').width() + offsetVal ) + 'px' );
    }
    // $('#nathan').animate({top: '+90px', left: '200px'}, 'fast', function() { console.log('animated'); })
  });
  $(document).on('gp:axis:vertical', function(event, data) {
    stack.evt = event;
    stack.dta = data;
    if(event.stickId === 'stick-1') { $('#nathan').height( ( $('#nathan').height() + offsetVal ) + 'px' ); }
    if(event.stickId === 'stick-2') { $('#jill').height( ( $('#jill').height() + offsetVal ) + 'px' ); }
  });
});
