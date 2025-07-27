document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('#carouselExampleIndicators');
  const videos = carousel.querySelectorAll('video');

  
  function pauseAllVideos() {
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
  }

 
  pauseAllVideos();
  if (videos[0]) {
    videos[0].play();
  }

  carousel.addEventListener('slid.bs.carousel', function (event) {
    pauseAllVideos();
    const activeItem = carousel.querySelector('.carousel-item.active video');
    if (activeItem) {
      activeItem.play();
    }
  });
});

