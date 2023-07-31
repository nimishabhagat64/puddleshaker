$(document).ready(function() {
  // Function to display the cards with fadeIn effect
  function showCardsWithFadeIn() {
    $(".card1").fadeIn(1000); // Adjust the duration (1000ms) to your desired fading speed
  }

  // Call the showCardsWithFadeIn function to apply the effect when the document is ready
  showCardsWithFadeIn();

  // Hover effect for the card
  $(".card1").hover(function() {
    $(this).toggleClass("hovered");
  });
});