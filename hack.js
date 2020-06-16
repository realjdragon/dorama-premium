const hack = () => {
  ADS = [];

  const videoFrame = document.querySelector("#video_episode").contentWindow;

  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 32:
        e.preventDefault();
        videoFrame.document.querySelector('.btnPlay').click();
        break;
      case 37:
        e.preventDefault();
        videoFrame.document.querySelector('.btnPrePlay').click();
        break;
      case 39:
        e.preventDefault();
        videoFrame.document.querySelector('.btnNextPlay').click();
        break;
      case 70:
        e.preventDefault();
        videoFrame.document.querySelector('.btnFS').click();
        break;
    }
  };

  window.onkeydown = handleKeyDown;
  videoFrame.window.onkeydown = handleKeyDown;
}

const script = document.createElement("script");
script.appendChild(document.createTextNode("(" + hack + ")();"));
(document.body || document.head || document.documentElement).appendChild(script);
