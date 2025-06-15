// Smooth Scroll for anchor links (if you plan to use any links within the page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Lazy load certificates' images as you scroll down the page (improves page load speed)
const lazyImages = document.querySelectorAll('img.lazy');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const lazyLoad = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove('lazy');
      observer.unobserve(lazyImage);
    }
  });
};

const observer = new IntersectionObserver(lazyLoad, options);

lazyImages.forEach(image => {
  observer.observe(image);
});

// Example of adding hover animation to certificates for interactivity
const certificates = document.querySelectorAll('.certificate-item');

certificates.forEach(cert => {
  cert.addEventListener('mouseenter', () => {
    cert.style.transform = 'scale(1.05)';
    cert.style.transition = 'all 0.3s ease-in-out';
  });

  cert.addEventListener('mouseleave', () => {
    cert.style.transform = 'scale(1)';
  });
});
