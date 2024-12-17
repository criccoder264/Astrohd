// tg.js - Handles JWPlayer setup and logic

// Get the 'id' parameter from the URL (default to '1' if not found)
const urlParams = new URLSearchParams(window.location.search);
const streamId = urlParams.get('id') || '1';  // Default to '1' if 'id' is not found in URL

// Load video config from ccapi.js
const videoConfig = getVideoConfig(streamId);

// Initialize JW Player with the selected stream URL if a valid config is found
if (videoConfig && videoConfig.url) {
  const playerInstance = jwplayer("player").setup({
    file: videoConfig.url,  // Use the video URL from ccapi.js
    controls: true,
    displaytitle: true,
    autoplay: true,
    displaydescription: true,
    abouttext: "",
    aboutlink: "https://telegram.me/Criccoder",  // Updated Telegram channel link
    skin: {
      name: "netflix"
    },
    logo: {
      file: "",
      link: "https://telegram.me/Criccoder"  // Updated Telegram channel link
    },
    captions: {
      color: "#FFF",
      fontSize: 14,
      backgroundOpacity: 0,
      edgeStyle: "raised"
    },
    playlist: [
      {
        image: "",
        sources: [
          {
            file: videoConfig.url,  // Use the video URL from ccapi.js
            label: "1080p",
            default: true
          }
        ],
      }
    ],
    advertising: {
      client: "vast",
      schedule: [
        {
          offset: "pre",
          tag: ""
        }
      ]
    }
  });

  // Additional functionality for the player
  playerInstance.on("ready", function () {
    const playerContainer = playerInstance.getContainer();
    const buttonContainer = playerContainer.querySelector(".jw-button-container");

    // Rewind button functionality
    const rewindContainer = playerContainer.querySelector(".jw-display-icon-rewind");
    const rewindButton = rewindContainer.cloneNode(true);
    const rewindIcon = rewindButton.querySelector(".jw-icon-rewind");
    rewindIcon.style.transform = "scaleX(1)";
    rewindIcon.ariaLabel = "Rewind 5 Seconds";

    const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
    nextContainer.parentNode.insertBefore(rewindButton, nextContainer);

    // Rewind functionality for the control bar
    const rewindControlBarButton = buttonContainer.querySelector(".jw-icon-rewind");
    const rewindControlBarClone = rewindControlBarButton.cloneNode(true);
    rewindControlBarClone.style.transform = "scaleX(1)";
    rewindControlBarClone.ariaLabel = "Rewind 5 Seconds";
    buttonContainer.insertBefore(rewindControlBarClone, buttonContainer.firstChild);

    // On click of rewind button, seek backward by 5 seconds
    [rewindButton, rewindControlBarClone].forEach((button) => {
      button.onclick = () => {
        const currentPosition = playerInstance.getPosition();
        const newPosition = Math.max(currentPosition - 5, 0); // Prevent going below 0
        playerInstance.seek(newPosition);
      };
    });

    // Detect adblock
    playerInstance.on("adBlock", () => {
      const modal = document.querySelector("div.modal");
      modal.style.display = "flex";
      document
        .getElementById("close")
        .addEventListener("click", () => location.reload());
    });
  });
} else {
  console.error("Video configuration not found or invalid.");
}
