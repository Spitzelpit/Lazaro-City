async function loadVideos() {
  const container = document.getElementById('video-container');
  try {
    const response = await fetch('get_videos.php');
    const videos = await response.json();
    console.log(videos)
    videos.forEach(video => {
      const videoElement = document.createElement('video');
      const videoContainer = document.createElement('div')
      const videoTitle = document.createElement('p');
      videoTitle.classList.add('video_subheading')
      videoContainer.classList.add('my-art-container-small');
      videoElement.classList.add('my-art-video')
      videoTitle.innerText = video.slice(0, -4);
      videoElement.src = `media/videos/${video}`;
      videoElement.controls = false;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.autoplay = true;
      videoContainer.appendChild(videoElement);
      videoContainer.appendChild(videoTitle)
      container.appendChild(videoContainer)
    });
  } catch (error) {
    console.error('Error with loading videos::', error);
  }
}
loadVideos();