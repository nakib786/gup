// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
      // Optional: unobserve after animation to improve performance
      // observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach(el => observer.observe(el))
})

// Parallax effect for hero section
let ticking = false

function updateParallax() {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll('.parallax')
  
  parallaxElements.forEach(element => {
    const speed = element.dataset.speed || 0.5
    const yPos = -(scrolled * speed)
    element.style.transform = `translateY(${yPos}px)`
  })
  
  ticking = false
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateParallax)
    ticking = true
  }
}

window.addEventListener('scroll', requestTick)

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]')
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      
      const targetId = link.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })
})

// Header scroll effect
let lastScrollTop = 0
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.style.transform = 'translateY(-100%)'
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)'
  }
  
  // Add/remove background blur based on scroll position
  if (scrollTop > 50) {
    header.classList.add('bg-white/95', 'backdrop-blur-md')
  } else {
    header.classList.remove('bg-white/95', 'backdrop-blur-md')
  }
  
  lastScrollTop = scrollTop
})

// Typing animation for hero text
function typeWriter(element, text, speed = 50) {
  let i = 0
  element.innerHTML = ''
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }
  
  type()
}

// Initialize typing animation when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const heroTitle = entry.target.querySelector('h1')
      if (heroTitle && !heroTitle.classList.contains('typed')) {
        heroTitle.classList.add('typed')
        // Optional: Add typing effect
        // typeWriter(heroTitle, heroTitle.textContent)
      }
    }
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('#home')
  if (heroSection) {
    heroObserver.observe(heroSection)
  }
})

// Stagger animation delays
document.addEventListener('DOMContentLoaded', () => {
  const staggerElements = document.querySelectorAll('[class*="stagger-"]')
  
  staggerElements.forEach((element, index) => {
    const delay = (index % 5 + 1) * 0.1 // 0.1s, 0.2s, 0.3s, etc.
    element.style.animationDelay = `${delay}s`
  })
})

// Mouse cursor effect (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div')
  cursor.className = 'fixed w-4 h-4 bg-primary-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out'
  cursor.style.transform = 'translate(-50%, -50%)'
  document.body.appendChild(cursor)
  
  let mouseX = 0
  let mouseY = 0
  let cursorX = 0
  let cursorY = 0
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1
    cursorY += (mouseY - cursorY) * 0.1
    
    cursor.style.left = cursorX + 'px'
    cursor.style.top = cursorY + 'px'
    
    requestAnimationFrame(animateCursor)
  }
  
  // Only show custom cursor on desktop
  if (window.innerWidth > 768) {
    animateCursor()
  } else {
    cursor.style.display = 'none'
  }
})

// Floating animation for background elements
document.addEventListener('DOMContentLoaded', () => {
  const floatingElements = document.querySelectorAll('.float')
  
  floatingElements.forEach((element, index) => {
    const delay = Math.random() * 2 // Random delay between 0-2s
    const duration = 4 + Math.random() * 4 // Random duration between 4-8s
    
    element.style.animationDelay = `${delay}s`
    element.style.animationDuration = `${duration}s`
  })
})

// Loading animation for page transitions
window.addEventListener('load', () => {
  document.body.classList.add('loaded')
  
  // Fade in main content
  const mainContent = document.querySelector('main')
  if (mainContent) {
    mainContent.style.opacity = '0'
    mainContent.style.transform = 'translateY(20px)'
    
    setTimeout(() => {
      mainContent.style.transition = 'all 0.6s ease-out'
      mainContent.style.opacity = '1'
      mainContent.style.transform = 'translateY(0)'
    }, 100)
  }
})
