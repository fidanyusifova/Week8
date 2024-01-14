$(document).ready(function() {
  let isVisible = true;

  $('#toggleButton').on('click', function() {
      $('.visible').toggle();
      $('.hidden').toggle();

      if (isVisible) {
          $('#toggleButton').text('Click again!');
      } else {
          $('#toggleButton').text('Click me!');
      }

      isVisible = !isVisible;
  });
});
