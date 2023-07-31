$(document).foundation()

// Function to enlarge the input box and label on hover
  function enlargeInputFieldOnHover(input) {
    input.addClass('input-field-enlarged');
    input.prev('label').addClass('input-field-enlarged');
  }
  <script>
    $(document).ready function() {
      // Function to enlarge the input field and label on hover
      function enlargeInputFieldOnHover(input) {
        input.addClass('input-field-enlarged');
        input.prev('label').addClass('input-field-enlarged');
      }
    }

      $(document).ready(function() {
      // Function to reset the input box and label to normal size on hover out
      function resetInputFieldOnHoverOut(input) {
        input.removeClass('input-field-enlarged');
        input.prev('label').removeClass('input-field-enlarged');
      }
    }
  
      $('input').hover(
        function() {
          enlargeInputFieldOnHover($(this))
        },
        function() {
          resetInputFieldOnHoverOut($(this))
        }
      );
  
      $('.form-row label').hover(
        function() {
          enlargeInputFieldonmouseover($(this).next('input'))
        },
        function() {
          resetInputFieldOnmouseover($(this).next('input'))
        }
      );
  
      $('select').hover(
        function() {
          enlargeInputFieldOnmouseover($(this))
        },
        function() {
          resetInputFieldOnmouseover($(this))
        }
      );
    );
  
  </script>
