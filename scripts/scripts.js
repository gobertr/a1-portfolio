const bg = document.querySelector(".bg-layer");
const loop_duration = 10;

if (sessionStorage.getItem("bgStart") === null &&
    sessionStorage.getItem("bgPausedAt") === null) {
        sessionStorage.setItem("bgStart", Date.now())
    }

function currentOffset() {

    if (sessionStorage.getItem("bgPausedAt") !== null) return Number(pausedAt);

    return (Date.now() - Number(sessionStorage.getItem("bgStart")) / 1000) % loop_duration;
}

bg.style.animationDelay = -currentOffset() + "s";

if (sessionStorage.getItem("bgPausedAt") !== null)








document.getElementById("background-toggle").addEventListener("click", function(event) {
      event.preventDefault();
      document.querySelector(".bg-layer").classList.toggle("paused");
    });

  function replayGifs() {
    document.querySelectorAll(".replaying").forEach(function (img) {
      const base = img.getAttribute("src").split("?")[0];
      img.src = base + "?t=" + Date.now();
    });
  }