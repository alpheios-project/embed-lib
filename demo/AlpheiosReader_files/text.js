$(document).ready(function(){
  $("[data-toggle=popover]").each(function(i, obj) {
    $(this).popover({
      html: true,
      content: function() {
        return $(this).next('.popover-content').html();
      }
    });
  });
});
