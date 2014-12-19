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
      if(this.value == '') { return false; }
      stack.collect(this.value);
      stack.append();
      this.value = '';
    }
  });
});
