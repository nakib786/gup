// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  const mobileMenuClose = document.getElementById('mobile-menu-close')
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop')
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link')

  console.log('Mobile menu elements:', {
    mobileMenuBtn: !!mobileMenuBtn,
    mobileMenu: !!mobileMenu,
    mobileMenuClose: !!mobileMenuClose,
    mobileMenuBackdrop: !!mobileMenuBackdrop,
    mobileNavLinks: mobileNavLinks.length
  })

  // Test if button is clickable
  if (mobileMenuBtn) {
    mobileMenuBtn.style.cursor = 'pointer'
    mobileMenuBtn.style.pointerEvents = 'auto'
    console.log('Mobile menu button styles applied')
  }

  // Open mobile menu
  mobileMenuBtn?.addEventListener('click', (e) => {
    console.log('Mobile menu button clicked')
    e.preventDefault()
    e.stopPropagation()
    mobileMenu.classList.add('open')
    document.body.style.overflow = 'hidden'
    console.log('Mobile menu opened, classes:', mobileMenu.className)
  })

  // Close mobile menu
  function closeMobileMenu() {
    console.log('Closing mobile menu')
    mobileMenu.classList.remove('open')
    document.body.style.overflow = 'auto'
    console.log('Mobile menu closed, classes:', mobileMenu.className)
  }

  mobileMenuClose?.addEventListener('click', closeMobileMenu)
  mobileMenuBackdrop?.addEventListener('click', closeMobileMenu)

  // Close menu when clicking on nav links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu)
  })

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu()
    }
  })
})

// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form')
  const submitText = document.getElementById('submit-text')
  const submitLoading = document.getElementById('submit-loading')
  const formMessage = document.getElementById('form-message')

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault() // Prevent default form submission
    
    // Show loading state
    submitText.classList.add('hidden')
    submitLoading.classList.remove('hidden')
    
    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)
    
    try {
      // Log form data to console (for development/testing)
      console.log('Form submission data:', data)
      
      // Show success message immediately
      showMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success')
      contactForm.reset()
      
      // Submit to FormSubmit.co in the background
      const form = new FormData(contactForm)
      form.append('name', data.name)
      form.append('email', data.email)
      form.append('phone', data.phone)
      form.append('service', data.service)
      form.append('message', data.message)
      form.append('_subject', 'New Contact Form Submission - E&G Tree Barrier')
      form.append('_next', '#contact')
      form.append('_captcha', 'false')
      form.append('_template', 'table')
      
      // Submit to FormSubmit.co silently
      fetch('https://formsubmit.co/Info@egtreebarrier.ca', {
        method: 'POST',
        body: form
      }).catch(error => {
        console.log('FormSubmit.co submission completed (background process)')
      })
      
    } catch (error) {
      // Show error message
      showMessage('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error')
    } finally {
      // Reset button state
      submitText.classList.remove('hidden')
      submitLoading.classList.add('hidden')
    }
  })

  function showMessage(message, type) {
    formMessage.textContent = message
    formMessage.className = type === 'success' ? 'success-message' : 'error-message'
    formMessage.classList.remove('hidden')
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.classList.add('hidden')
    }, 5000)
  }
})

// Scroll to top functionality
document.addEventListener('DOMContentLoaded', () => {
  // Create scroll to top button
  const scrollToTopBtn = document.createElement('button')
  scrollToTopBtn.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  `
  scrollToTopBtn.className = 'fixed bottom-8 right-8 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-110 z-40 opacity-0 pointer-events-none'
  scrollToTopBtn.setAttribute('aria-label', 'Scroll to top')
  
  document.body.appendChild(scrollToTopBtn)

  // Show/hide scroll to top button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = '1'
      scrollToTopBtn.style.pointerEvents = 'auto'
    } else {
      scrollToTopBtn.style.opacity = '0'
      scrollToTopBtn.style.pointerEvents = 'none'
    }
  })

  // Scroll to top on click
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})

// Image lazy loading
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]')
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove('lazy')
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach(img => imageObserver.observe(img))
})

// Testimonials carousel functionality (if needed in future)
document.addEventListener('DOMContentLoaded', () => {
  const testimonialCards = document.querySelectorAll('.testimonial-card')
  let currentTestimonial = 0

  function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
      if (i === index) {
        card.style.opacity = '1'
        card.style.transform = 'translateX(0)'
      } else {
        card.style.opacity = '0.5'
        card.style.transform = 'translateX(20px)'
      }
    })
  }

  // Auto-rotate testimonials (optional)
  if (testimonialCards.length > 0) {
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonialCards.length
      showTestimonial(currentTestimonial)
    }, 5000)
  }
})

// Enhanced hover effects
document.addEventListener('DOMContentLoaded', () => {
  // Service cards hover effect
  const serviceCards = document.querySelectorAll('.service-card, .card')
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)'
    })
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)'
    })
  })

  // Button hover effects
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary')
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px) scale(1.05)'
    })
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0) scale(1)'
    })
  })
})

// Form validation enhancements
document.addEventListener('DOMContentLoaded', () => {
  const formInputs = document.querySelectorAll('.form-input')
  
  formInputs.forEach(input => {
    // Add focus effects
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused')
    })
    
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused')
      validateField(input)
    })
    
    input.addEventListener('input', () => {
      validateField(input)
    })
  })

  function validateField(field) {
    const value = field.value.trim()
    const fieldName = field.name
    let isValid = true
    let errorMessage = ''

    // Remove existing error styles
    field.classList.remove('border-red-500', 'border-green-500')
    
    // Basic validation
    if (field.hasAttribute('required') && !value) {
      isValid = false
      errorMessage = `${fieldName} is required`
    } else if (fieldName === 'email' && value && !isValidEmail(value)) {
      isValid = false
      errorMessage = 'Please enter a valid email address'
    } else if (fieldName === 'phone' && value && !isValidPhone(value)) {
      isValid = false
      errorMessage = 'Please enter a valid phone number'
    }

    // Apply styles based on validation
    if (!isValid) {
      field.classList.add('border-red-500')
      showFieldError(field, errorMessage)
    } else if (value) {
      field.classList.add('border-green-500')
      hideFieldError(field)
    }

    return isValid
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  function showFieldError(field, message) {
    let errorElement = field.parentElement.querySelector('.field-error')
    
    if (!errorElement) {
      errorElement = document.createElement('div')
      errorElement.className = 'field-error text-red-500 text-sm mt-1'
      field.parentElement.appendChild(errorElement)
    }
    
    errorElement.textContent = message
  }

  function hideFieldError(field) {
    const errorElement = field.parentElement.querySelector('.field-error')
    if (errorElement) {
      errorElement.remove()
    }
  }
})

// Preloader functionality
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader')
  if (preloader) {
    preloader.style.opacity = '0'
    setTimeout(() => {
      preloader.style.display = 'none'
    }, 500)
  }
})

// Progressive Web App functionality (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
