//Load Foundations library
$(document).foundation()


// My code starts from here
$(document).ready(function() {
  const targetValue = 10000; // The target progress value
  const maxValue = 40000; // The maximum value
  const duration = 2000; // Animation duration in milliseconds (2 seconds)
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

});

