$(document).ready(function() {
  // Event handler for form submission 
  $("#paymentForm").submit(function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the selected payment method
    const selectedPayment = $("input[name='paymentMethod']:checked").val();

    // Check if any payment method is selected
    if (selectedPayment) {
      const resultMessage = `Payment Successful! You selected: ${selectedPayment}`;
      $("#paymentResult").text(resultMessage);
      // Display the popup dialog
      showPopup();
    } else {
      $("#paymentResult").text("Please select a payment method.");
    }
  });

  // Function to update placeholders for input fields based on the selected payment method
  function updatePlaceholders() {
    const selectedPayment = $("input[name='paymentMethod']:checked").val();

    // Update placeholders for input fields based on the selected payment method
    $("#cardNumber").attr("placeholder", $(`input[value='${selectedPayment}']`).data("placeholder-cardNumber") || "");
    $("#cardName").attr("placeholder", $(`input[value='${selectedPayment}']`).data("placeholder-cardName") || "");
    $("#cardCVV").attr("placeholder", $(`input[value='${selectedPayment}']`).data("placeholder-cardCVV") || "");
  }

  // Function to display the popup dialog
  function showPopup() {
    $("#popupDialog").css("display", "block");
  }

  // Event handler for radio button change
  $("input[name='paymentMethod']").on('change', function() {
    updatePlaceholders();
  });

  // Event handler for the close button in the popup
  $(".close").on("click", function() {
    $("#popupDialog").css("display", "none");
  });
});