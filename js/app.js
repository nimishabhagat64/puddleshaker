// My code starts from here
$(document).ready(function() {
  const targetValue = 10000; // The target progress value
  const maxValue = 40000; // The maximum value
  const duration = 1000; // Animation duration in milliseconds (5 seconds)
  const frameRate = 50; // Time interval between frame updates in milliseconds

  const progressBar = document.getElementById('fundingProgress');
  const currentValue = parseInt(progressBar.value, 10);

  // Calculated the number of frames based on frameRate and duration
  const totalFrames = duration / frameRate;
  const progressStep = targetValue / totalFrames;

  let currentFrame = 0;
  const intervalId = setInterval(function() {
    currentFrame++;

    // Calculated the progress value for the current frame
    const progressValue = progressStep * currentFrame;

    // Displayed  progress with "K" for thousands and a special "k" for 10k (without decimal point)
    progressBar.value = progressValue;
    progressBar.nextElementSibling.textContent = `${formatNumber(progressValue)}/${formatNumber(maxValue)}`;

    if (currentFrame >= totalFrames) {
      clearInterval(intervalId);
    }
  }, frameRate);

  // Function to format numbers with "K" for thousands and a special "k" for 10k (without decimal point)
  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num;
  }

  // Add the Fade In effect to the "Start-up Details Progress" card
  $('.card2').fadeIn('slow');

      // Show the popup when the "Start a Project" button is clicked- Interaction 2
      $('.button').on('click', function() {
        e.preventDefault();
        $('#myPopup').fadeIn(500);
      });
    
      // Close the popup when the close button is clicked-Interaction 3
      $('.close-button').on('click', function() {
        $('#myPopup').fadeOut(500);
        $('body').removeClass('popup-open'); // Remove the class to revert opacity
      });
  
  
      // Add the Fade In effect to the "Start-up Details Progress" card
      $('.card1').fadeIn('slow');
          $('#overlay').fadeOut(1000);


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

    $(document).addEventListener("DOMContentLoaded"), function() {
    const agreeCheckbox = document.getElementById("agree-checkbox");
    const submitButton = document.getElementById("submit-button");

    // Initially disable the submit button
    submitButton.disabled = true;

    // Add event listener to the checkbox
    agreeCheckbox.addEventListener("change", function() {
      submitButton.disabled = !agreeCheckbox.checked
    });
      });
