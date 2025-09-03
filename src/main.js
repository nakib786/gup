import './style.css'
import './seo.css'
import { setupApp } from './app.js'

document.querySelector('#root').innerHTML = setupApp()

// Update copyright year dynamically
const currentYearElement = document.getElementById('current-year')
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear()
}

// Initialize animations and interactions
import './animations.js'
import './interactions.js'

// Hero Slideshow Functionality
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide')
  const dots = document.querySelectorAll('.hero-dot')
  const prevBtn = document.querySelector('[data-direction="prev"]')
  const nextBtn = document.querySelector('[data-direction="next"]')
  
  let currentSlide = 0
  let slideInterval

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0'
    })
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-white/60', i === index)
      dot.classList.toggle('bg-white/40', i !== index)
    })
    
    currentSlide = index
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length
    showSlide(next)
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length
    showSlide(prev)
  }

  function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
  }

  function stopAutoPlay() {
    clearInterval(slideInterval)
  }

  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide()
    stopAutoPlay()
    startAutoPlay()
  })
  
  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide()
    stopAutoPlay()
    startAutoPlay()
  })

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index)
      stopAutoPlay()
      startAutoPlay()
    })
  })

  // Pause auto-play on hover
  const slideshowContainer = document.querySelector('.hero-slide').parentElement
  if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', stopAutoPlay)
    slideshowContainer.addEventListener('mouseleave', startAutoPlay)
  }

  // Start auto-play
  startAutoPlay()
}

// Initialize slideshow after DOM is loaded
document.addEventListener('DOMContentLoaded', initHeroSlideshow)
