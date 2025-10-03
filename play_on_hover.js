const containers = document.querySelectorAll('.art-on-chain-link-div');

containers.forEach(container => {
  video = container.querySelector("video");
  container.addEventListener('mouseenter', () => {
    video.play();
  });
  
  container.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});