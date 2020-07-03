const hack = () => {
  ADS = [];

  const videoFrame = document.querySelector("#video_episode").contentWindow;

  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 32:
        e.preventDefault();
        videoFrame.document.querySelector(".btnPlay").click();
        break;
      case 37:
        e.preventDefault();
        videoFrame.document.querySelector(".btnPrePlay").click();
        break;
      case 39:
        e.preventDefault();
        videoFrame.document.querySelector(".btnNextPlay").click();
        break;
      case 70:
        e.preventDefault();
        videoFrame.document.querySelector(".btnFS").click();
        break;
    }
  };

  window.onkeydown = handleKeyDown;
  videoFrame.window.onkeydown = handleKeyDown;

  player = document
    .getElementById("video_episode")
    .contentWindow.document.getElementById("player");
  mp = dashjs.MediaPlayer().create();
  mp.initialize(
    document
      .getElementById("video_episode")
      .contentWindow.document.getElementById("player"),
    "https://cdn.yesbit.co.kr/1080p/" + EPISODE_V_ID + ".mp4/manifest.mpd",
    true
  );

  if (typeof player.addEventListener != "undefined") {
    player.addEventListener("loadeddata", hload);
    player.addEventListener("play", hplay);
    player.addEventListener("pause", hpause);
    player.addEventListener("seeked", hseek);
    player.addEventListener("ended", hend);
    player.addEventListener("timeupdate", hupdate);
  } else if (typeof player.attachEvent != "undefined") {
    player.attachEvent("loadeddata", hload);
    player.attachEvent("play", hplay);
    player.attachEvent("pause", hpause);
    player.attachEvent("seeked", hseek);
    player.attachEvent("ended", hend);
    player.attachEvent("timeupdate", hupdate);
  }
};

const script = document.createElement("script");
script.appendChild(document.createTextNode("(" + hack + ")();"));
(document.body || document.head || document.documentElement).appendChild(
  script
);
