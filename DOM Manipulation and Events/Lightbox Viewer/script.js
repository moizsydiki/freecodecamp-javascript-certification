const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

// Open lightbox and swap out the image src
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const fullSizeSrc = item.src.replace('-thumbnail', '');
    lightboxImage.src = fullSizeSrc;
    lightbox.style.display = 'flex';
  });
});

// Close lightbox when clicking the close button
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking the lightbox container itself
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});