<script>
$(document).ready(function() {
  // Function to enlarge the input box and label on hover
  function enlargeInputFieldOnHover(input) {
    input.addClass('input-field-enlarged');
    input.prev('label').addClass('input-field-enlarged');
  }

  // Function to reset the input box and label to normal size on hover out
  function resetInputFieldOnHoverOut(input) {
    input.removeClass('input-field-enlarged');
    input.prev('label').removeClass('input-field-enlarged');
  }

  // Colour change when the label is hovered
  $('input').hover(function() {
    enlargeInputFieldOnHover($(this));
  }, function() {
    resetInputFieldOnHoverOut($(this));
  });

  // Colour change when the label is hovered
  $('.form-row label').hover(function() {
    enlargeInputFieldOnHover($(this).next('input'));
  }, function() {
    resetInputFieldOnHoverOut($(this).next('input'));
  });

  // Colour change when the label is hovered
  $('select').hover(function() {
    enlargeInputFieldOnHover($(this));
  }, function() {
    resetInputFieldOnHoverOut($(this));
  });
});
</script>

// script.js

// Function to handle the "industry" select change event
function handleIndustrySelectChange() {
    // Get the selected value of the "industry" select element
    const selectedIndustry = document.getElementById("industry").value;
  
    // Perform calculations or actions based on the selected industry
    if (selectedIndustry === "Art") {
      var x = 5;
      var y = 6;
      var z = x + y;
  
      // You can use the variables x, y, and z here as needed for the "Art" industry
      console.log("x:", x);
      console.log("y:", y);
      console.log("z:", z);
    } else if (selectedIndustry === "Technology") {
      // Perform specific actions for the "Technology" industry
      // ...
    } else if (selectedIndustry === "Music") {
      // Perform specific actions for the "Music" industry
      // ...
    }
    // Add more conditions for other industries as needed
  }
  
  // Add an event listener to the "industry" select element
  const industrySelect = document.getElementById("industry");
  industrySelect.addEventListener("change", handleIndustrySelectChange);
  
  <script>
    // Function to update the selected options display
    function updateSelectedOptionsDisplay() {
      const selectedIndustry = document.getElementById("industry").value;
      const selectedStartupStage = document.getElementById("startup-stage").value;
      const selectedInvestorPreference = document.getElementById("investor-preferences").value;

      // Update the display with the selected options
      document.getElementById("selected-industry").textContent = selectedIndustry;
      document.getElementById("selected-startup-stage").textContent = selectedStartupStage;
      document.getElementById("selected-investor-preference").textContent = selectedInvestorPreference;
    }

    // Add an event listener to each dropdown to update the display when options are selected
    document.getElementById("industry").addEventListener("change", updateSelectedOptionsDisplay);
    document.getElementById("startup-stage").addEventListener("change", updateSelectedOptionsDisplay);
    document.getElementById("investor-preferences").addEventListener("change", updateSelectedOptionsDisplay);
  </script>

