/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });


  //music player functional

  document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const audioPlayer2 = document.getElementById("audioPlayer2");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const progress = document.getElementById("progress");

    playPauseBtn.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.src = "img/PauseCircle.png"; // Change to Pause icon
        } else {
            audioPlayer.pause();
            playPauseBtn.src = "img/PauseCircle.png"; // Change to Play icon
        }
    });

    audioPlayer.addEventListener("timeupdate", function () {
      // Update the progress bar
        const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.style.width = progressPercentage + "%";

      // Calculate and update the countdown timer
      const timeLeft = audioPlayer.duration - audioPlayer.currentTime;
      timeRemaining.textContent = formatTime(timeLeft) + " sec";
    });


    playPauseBtn2.addEventListener("click", function () {
      if (audioPlayer2.paused) {
        audioPlayer2.play();
        playPauseBtn2.src = "img/PlayButton.png"; // Change to Pause icon
      } else {
        audioPlayer2.pause();
        playPauseBtn2.src = "img/PlayButton.png"; // Change to Play icon
      }
  });

    audioPlayer2.addEventListener("timeupdate", function () {
      // Update the progress bar
        const progressPercentage = (audioPlayer2.currentTime / audioPlayer2.duration) * 100;
        progress.style.width = progressPercentage + "%";

      // Calculate and update the countdown timer
      const timeLeft = audioPlayer2.duration - audioPlayer2.currentTime;
      timeRemaining.textContent = formatTime(timeLeft) + " sec";
    });

    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      if (minutes > 0) {
          return minutes + ":" + (secs < 10 ? "0" : "") + secs;
      } else {
          return secs.toFixed(2); // Show seconds with two decimals if less than 1 minute
      }
  }
});





