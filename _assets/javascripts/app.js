$(function() {

  // Track events with GoSquared.
  $('[data-event]').on('click', function() {
    // track the data-event text
    _gs('event', $(this).data('event'));
    ga('send', 'event', 'Button', 'Click', $(this).data('event'));
  });

});
