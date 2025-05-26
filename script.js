const searchBtn = document.querySelector(".s-box-df");
searchBtn.addEventListener("click", () => {
  searchBtn.classList.add("border");
});


const supreme = document.querySelector("#supreme");

supreme.addEventListener("click", function () {
  window.location.href = "sec.html";
});


const afsos = document.querySelector("#afsos");
afsos.addEventListener("click", () => {
  window.location.href = "afsos.html";
})


  function playToggle(btnId, audioId) {
    const button = document.getElementById(btnId);
    const audio = document.getElementById(audioId);

    if (audio.paused) {
      // Stop all other audios
      document.querySelectorAll('audio').forEach(a => {
        if (a !== audio) {
          a.pause();
          a.currentTime = 0;
        }
      });

      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

  }

  const moosaTape = document.querySelector("#moosaTape");
  moosaTape.addEventListener("click", () => {
    window.location.href = "moosatape.html";
  });