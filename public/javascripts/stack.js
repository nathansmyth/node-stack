$(document).ready(function() {
  var stack = stack || {},
      list_item = '';
  function stack.append(create_item) {
    list_item = create_item;
  }
  $('#create').keydown(function(e) {
    if(e.keyCode == 13) { // Enter pressed
      append(this.value);
    }
  });
});
