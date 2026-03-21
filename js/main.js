/* ============================================
   Riptap — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Mobile Menu Toggle ---
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Carousel ---
  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.carousel-dot');

  if (track && dots.length > 0) {
    var currentSlide = 0;
    var totalSlides = dots.length;
    var autoplayInterval = null;
    var isPaused = false;

    function goToSlide(index) {
      currentSlide = ((index % totalSlides) + totalSlides) % totalSlides;
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(function () {
        if (!isPaused) nextSlide();
      }, 4000);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    // Dot click handlers
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goToSlide(i);
        startAutoplay();
      });
    });

    // Pause on hover
    var carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', function () {
        isPaused = true;
      });
      carousel.addEventListener('mouseleave', function () {
        isPaused = false;
      });
    }

    // Initialize
    goToSlide(0);
    startAutoplay();
  }

  // --- Scroll Reveal ---
  var revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
