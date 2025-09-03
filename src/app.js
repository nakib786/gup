export function setupApp() {
  return `
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div class="container-custom">
                 <div class="flex items-center justify-between h-28">
                     <!-- Logo -->
                       <a href="#home" class="flex items-center space-x-4 logo-hover sm:justify-start justify-center flex-1">
              <img src="/logo.svg" alt="E&G Tree Barrier Logo" class="h-24 w-24 sm:h-28 sm:w-28">
              <div class="hidden sm:block">
                <h1 class="text-xl font-bold text-gray-900">E&G Tree Barrier</h1>
              </div>
            </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-8">
            <a href="#home" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Home</a>
            <a href="#about" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">About</a>
            <a href="#services" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Services</a>

            <a href="#testimonials" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Testimonials</a>
            <a href="#contact" class="btn-primary">Get a Quote</a>
          </nav>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="fixed inset-0 z-[9999] lg:hidden mobile-menu">
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" id="mobile-menu-backdrop"></div>
      <div class="fixed right-0 top-0 bottom-0 w-80 max-w-sm bg-white shadow-2xl">
                 <div class="flex items-center justify-between p-6 border-b">
           <div class="flex items-center space-x-3">
             <img src="/logo.svg" alt="E&G Tree Barrier Logo" class="h-20 w-20">
             <div>
               <h2 class="text-lg font-bold text-gray-900">E&G Tree Barrier</h2>
             </div>
           </div>
          <button id="mobile-menu-close" class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
                 <nav class="p-6 space-y-4">
           <a href="#home" class="mobile-nav-link block py-3 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors">Home</a>
           <a href="#about" class="mobile-nav-link block py-3 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors">About</a>
           <a href="#services" class="mobile-nav-link block py-3 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors">Services</a>

           <a href="#testimonials" class="mobile-nav-link block py-3 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors">Testimonials</a>
           <a href="#contact" class="mobile-nav-link block py-3 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
           <div class="pt-4">
             <a href="#contact" class="btn-primary w-full text-center block">Get a Quote</a>
           </div>
         </nav>
         
                   <!-- Big Logo at Bottom -->
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-50 to-transparent">
            <div class="flex justify-center items-center">
              <img src="/logo.svg" alt="E&G Tree Barrier Logo" class="h-48 w-48 opacity-80">
            </div>
          </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <!-- Modern Background Pattern -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div class="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-pink-500/20 rounded-full blur-xl animate-float-slow"></div>
        <div class="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-float-delayed-2"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <!-- Left Content -->
          <div class="space-y-8 animate-on-scroll">
            <div class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
              <div class="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span class="text-sm font-medium text-gray-700">Serving British Columbia</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Protect Your 
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                Trees Today
              </span>
              <span class="text-4xl md:text-5xl lg:text-6xl text-gray-700 font-light">
                Secure Tomorrow
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Professional tree barrier installation that safeguards your landscape investment with cutting-edge protection solutions.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" class="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span class="relative z-10 flex items-center">
                  Get Free Quote
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a href="#services" class="group inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md hover:bg-white transform hover:-translate-y-1 transition-all duration-300">
                <span class="flex items-center">
                  Explore Services
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </a>
            </div>
            
            <!-- Trust Indicators -->
            <div class="flex items-center space-x-6 pt-6">
              <div class="flex items-center space-x-2">
                <div class="flex -space-x-1">
                  <div class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
                <span class="text-sm text-gray-600">Satisfied Clients</span>
              </div>
              
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-2 border-white flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-sm text-gray-600">Years of Experience</span>
              </div>
            </div>
          </div>
          
          <!-- Right Content - Hero Image/Visual -->
          <div class="relative animate-on-scroll stagger-1">
            <div class="relative">
              <!-- Main Image Container with Slideshow -->
              <div class="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <!-- Image 1 -->
                <img src="/hero-pic.jpeg" 
                     alt="Professional tree barrier installation" 
                     class="hero-slide w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-100">
                <!-- Image 2 -->
                <img src="/about-us.jpeg" 
                     alt="Tree protection services" 
                     class="hero-slide w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0">
                <!-- Image 3 -->
                <img src="/residential.jpeg" 
                     alt="Residential tree barrier installation" 
                     class="hero-slide w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0">
                <!-- Image 4 -->
                <img src="/commercial.jpeg" 
                     alt="Commercial tree barrier installation" 
                     class="hero-slide w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0">
                <!-- Image 5 -->
                <img src="/park.jpeg" 
                     alt="Park and public space tree protection" 
                     class="hero-slide w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0">
                
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                <!-- Slideshow Navigation Dots -->
                <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <button class="hero-dot w-3 h-3 rounded-full bg-white/60 hover:bg-white transition-colors duration-300" data-slide="0"></button>
                  <button class="hero-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white transition-colors duration-300" data-slide="1"></button>
                  <button class="hero-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white transition-colors duration-300" data-slide="2"></button>
                  <button class="hero-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white transition-colors duration-300" data-slide="3"></button>
                  <button class="hero-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white transition-colors duration-300" data-slide="4"></button>
                </div>
                
                <!-- Previous/Next Buttons -->
                <button class="hero-nav absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300" data-direction="prev">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button class="hero-nav absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300" data-direction="next">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
              
              <!-- Floating Stats Card -->
              <div class="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-gray-900">Proven</div>
                    <div class="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Service Card -->
              <div class="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200/50">
                <div class="text-center">
                  <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="text-sm font-semibold text-gray-900">Free Quote</div>
                  <div class="text-xs text-gray-600">No Obligation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="flex flex-col items-center space-y-2">
          <span class="text-sm text-gray-500 font-medium">Scroll to explore</span>
          <div class="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-gradient-to-b from-white to-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span class="text-gradient">E&G Tree Barrier Installation</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="animate-on-scroll stagger-1">
            <div class="relative">
              <img src="/about-us.jpeg" 
                   alt="Tree protection services" 
                   class="rounded-2xl shadow-2xl w-full h-96 object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div class="animate-on-scroll stagger-2">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Years of Excellence in Tree Protection
            </h3>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              At E&G Tree Barrier Installation, we are committed to delivering exceptional tree protection services tailored to the unique needs of our clients. With years of experience in the industry, our skilled professionals use the latest techniques and high-quality materials to ensure the longevity and health of your trees.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              We pride ourselves on our reliability, efficiency, and dedication to customer satisfaction. Every project is approached with meticulous attention to detail and a commitment to environmental stewardship.
            </p>
            
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="text-center p-4 bg-white rounded-xl shadow-lg">
                <div class="text-3xl font-bold text-primary-600 mb-2">Expert</div>
                <div class="text-gray-600 font-medium">Tree Protection</div>
              </div>
              <div class="text-center p-4 bg-white rounded-xl shadow-lg">
                <div class="text-3xl font-bold text-primary-600 mb-2">Quality</div>
                <div class="text-gray-600 font-medium">Materials Used</div>
              </div>
            </div>
            
            <a href="#contact" class="btn-primary">Learn More About Us</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span class="text-gradient">Services</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tree protection solutions designed to safeguard your valuable trees and landscape investments.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="card p-8 animate-on-scroll stagger-1 group">
            <div class="w-full h-48 mb-6 rounded-xl overflow-hidden">
              <img src="/residential.jpeg" alt="Residential Tree Barrier Installation" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Residential Tree Barrier Installation</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Professional installation of tree barriers to protect against wildlife, weather, and other environmental threats using industry-leading materials and techniques.
            </p>
            <a href="#contact" class="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Learn More →
            </a>
          </div>

          <!-- Service 2 -->
          <div class="card p-8 animate-on-scroll stagger-2 group">
            <div class="w-full h-48 mb-6 rounded-xl overflow-hidden">
              <img src="/commercial.jpeg" alt="Commercial Tree Barrier Installation" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Commercial Tree Barrier Installation</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Professional installation of tree barriers for commercial properties, parks, and public spaces using durable materials designed for high-traffic areas.
            </p>
            <a href="#contact" class="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Learn More →
            </a>
          </div>

          <!-- Service 3 -->
          <div class="card p-8 animate-on-scroll stagger-3 group">
            <div class="w-full h-48 mb-6 rounded-xl overflow-hidden">
              <img src="/park.jpeg" alt="Park and Public Space Tree Protection" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Park and Public Space Protection</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Specialized tree protection solutions for parks, recreational areas, and public spaces, ensuring community trees remain healthy and beautiful for everyone to enjoy.
            </p>
            <a href="#contact" class="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>



    <!-- Testimonials Section -->
    <section id="testimonials" class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client <span class="text-gradient">Testimonials</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="card p-8 animate-on-scroll stagger-1">
            <div class="flex items-center mb-6">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                   alt="Sophia Carter" 
                   class="w-16 h-16 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-bold text-gray-900">Sophia Carter</h4>
                <p class="text-gray-600 text-sm">Homeowner, Vancouver</p>
              </div>
            </div>
            <div class="flex mb-4">
              ${Array(5).fill().map(() => `
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              `).join('')}
            </div>
            <p class="text-gray-600 leading-relaxed">
              "E&G did an amazing job protecting the trees on our property. Their team was professional, efficient, and the barriers look great! Our trees have been safe from deer damage ever since."
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div class="card p-8 animate-on-scroll stagger-2">
            <div class="flex items-center mb-6">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                   alt="Liam Bennett" 
                   class="w-16 h-16 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-bold text-gray-900">Liam Bennett</h4>
                <p class="text-gray-600 text-sm">Business Owner, Richmond</p>
              </div>
            </div>
            <div class="flex mb-4">
              ${Array(5).fill().map(() => `
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              `).join('')}
            </div>
            <p class="text-gray-600 leading-relaxed">
              "We hired E&G for our commercial property, and we couldn't be happier. Their attention to detail and quality workmanship exceeded our expectations. Highly recommend their services."
            </p>
          </div>

          <!-- Testimonial 3 -->
          <div class="card p-8 animate-on-scroll stagger-3">
            <div class="flex items-center mb-6">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                   alt="Olivia Hayes" 
                   class="w-16 h-16 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-bold text-gray-900">Olivia Hayes</h4>
                <p class="text-gray-600 text-sm">Property Manager, Burnaby</p>
              </div>
            </div>
            <div class="flex mb-4">
              ${Array(5).fill().map(() => `
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              `).join('')}
            </div>
            <p class="text-gray-600 leading-relaxed">
              "Excellent service and sturdy barriers that give us peace of mind. The installation was quick and clean, and the barriers have held up perfectly through multiple seasons."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span class="text-gradient">Touch</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to protect your trees? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Information -->
          <div class="animate-on-scroll stagger-1">
            <h3 class="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div class="space-y-6">
                             <div class="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                   <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                   </svg>
                 </div>
                 <div>
                   <h4 class="font-semibold text-gray-900">Address</h4>
                   <a href="https://maps.google.com/?q=16076+102+A+Ave,+Surrey,+BC+V4N+2J7" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-primary-600 transition-colors">16076 102 A Ave, Surrey, BC V4N 2J7</a>
                 </div>
               </div>

                             <div class="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                   <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.836l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                   </svg>
                 </div>
                 <div>
                   <h4 class="font-semibold text-gray-900">Phone</h4>
                   <a href="tel:+16043623493" class="text-gray-600 hover:text-primary-600 transition-colors">(604) 362-3493</a>
                 </div>
               </div>

                             <div class="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                   <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                   </svg>
                 </div>
                 <div>
                   <h4 class="font-semibold text-gray-900">Email</h4>
                   <a href="mailto:Info@egtreebarrier.ca" class="text-gray-600 hover:text-primary-600 transition-colors">Info@egtreebarrier.ca</a>
                 </div>
               </div>

                             <div class="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                   <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                   </svg>
                 </div>
                 <div>
                   <h4 class="font-semibold text-gray-900">Business Hours</h4>
                   <p class="text-gray-600">Mon-Fri: 9:30AM-5:30PM<br>Sat: 10AM-4PM, Sun: 11AM-4PM</p>
                 </div>
               </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="animate-on-scroll stagger-2">
            <form id="contact-form" action="https://formsubmit.co/Info@egtreebarrier.ca" method="POST" class="card p-8 space-y-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <!-- FormSubmit Configuration -->
              <input type="hidden" name="_subject" value="New Contact Form Submission - E&G Tree Barrier">
              <input type="hidden" name="_next" value="#contact">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_template" value="table">
              
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required 
                         class="form-input" 
                         placeholder="Your full name">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required 
                         class="form-input" 
                         placeholder="your@email.com">
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" 
                         class="form-input" 
                         placeholder="(123) 456-7890">
                </div>
                <div>
                  <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select id="service" name="service" class="form-input">
                    <option value="">Select a service</option>
                    <option value="residential">Residential Tree Barrier Installation</option>
                    <option value="commercial">Commercial Tree Barrier Installation</option>
                    <option value="park">Park and Public Space Protection</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" name="message" rows="5" required 
                          class="form-input resize-none" 
                          placeholder="Tell us about your project and any specific requirements..."></textarea>
              </div>

              <button type="submit" class="btn-primary w-full text-lg py-4">
                <span id="submit-text">Send Message</span>
                <div id="submit-loading" class="loading-spinner hidden"></div>
              </button>

              <div id="form-message" class="hidden"></div>
            </form>
          </div>
        </div>
      </div>
    </section>

         <!-- Footer -->
     <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
       <!-- Background Pattern -->
       <div class="absolute inset-0 opacity-10">
         <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 25% 25%, #30b814 0%, transparent 50%), radial-gradient(circle at 75% 75%, #30b814 0%, transparent 50%);"></div>
       </div>
       
       <div class="container-custom relative z-10">
         <!-- Main Footer Content -->
         <div class="py-16">
           <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
             <!-- Company Info -->
             <div class="lg:col-span-2">
                                                               <div class="flex items-center space-x-4 mb-6">
                   <div class="relative">
                     <img src="/logo.svg" alt="E&G Tree Barrier Logo" class="h-28 w-28 brightness-0 invert">
                     <div class="absolute inset-0 bg-primary-500/20 rounded-full blur-xl"></div>
                   </div>
                                   <div>
                    <h3 class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">E&G Tree Barrier</h3>
                  </div>
               </div>
               <p class="text-gray-300 text-lg leading-relaxed max-w-md mb-8">
                 Protecting your investment with expert tree barrier installation across British Columbia. Quality, reliability, and environmental stewardship.
               </p>
               
               
             </div>

             <!-- Quick Links -->
             <div>
               <h4 class="text-xl font-bold mb-6 text-white relative">
                 Quick Links
                 <div class="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"></div>
               </h4>
               <ul class="space-y-4">
                 <li>
                   <a href="#home" class="group flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300">
                     <span class="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                     <span class="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                   </a>
                 </li>
                 <li>
                   <a href="#about" class="group flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300">
                     <span class="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                     <span class="group-hover:translate-x-1 transition-transform duration-300">About</span>
                   </a>
                 </li>
                 <li>
                   <a href="#services" class="group flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300">
                     <span class="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                     <span class="group-hover:translate-x-1 transition-transform duration-300">Services</span>
                   </a>
                 </li>

                 <li>
                   <a href="#testimonials" class="group flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300">
                     <span class="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                     <span class="group-hover:translate-x-1 transition-transform duration-300">Testimonials</span>
                   </a>
                 </li>
               </ul>
             </div>

             <!-- Contact Info -->
             <div>
               <h4 class="text-xl font-bold mb-6 text-white relative">
                 Contact Info
                 <div class="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"></div>
               </h4>
               <div class="space-y-4">
                                                      <div class="flex items-start space-x-3 group">
                     <div class="w-5 h-5 mt-1 text-primary-400 group-hover:text-primary-300 transition-colors">
                       <svg fill="currentColor" viewBox="0 0 20 20">
                         <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                       </svg>
                     </div>
                     <div>
                       <a href="https://maps.google.com/?q=16076+102+A+Ave,+Surrey,+BC+V4N+2J7" target="_blank" rel="noopener noreferrer" class="text-gray-300 group-hover:text-white transition-colors">16076 102 A Ave<br>Surrey, BC V4N 2J7</a>
                     </div>
                   </div>
                 
                                   <div class="flex items-start space-x-3 group">
                    <div class="w-5 h-5 mt-1 text-primary-400 group-hover:text-primary-300 transition-colors">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.948.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.949V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <a href="tel:+16043623493" class="text-gray-300 group-hover:text-white transition-colors">(604) 362-3493</a>
                    </div>
                  </div>
                 
                                   <div class="flex items-start space-x-3 group">
                    <div class="w-5 h-5 mt-1 text-primary-400 group-hover:text-primary-300 transition-colors">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <a href="mailto:Info@egtreebarrier.ca" class="text-gray-300 group-hover:text-white transition-colors">Info@egtreebarrier.ca</a>
                    </div>
                  </div>
                 
                 <div class="flex items-start space-x-3 group">
                   <div class="w-5 h-5 mt-1 text-primary-400 group-hover:text-primary-300 transition-colors">
                     <svg fill="currentColor" viewBox="0 0 20 20">
                       <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                     </svg>
                   </div>
                   <div>
                     <p class="text-gray-300 group-hover:text-white transition-colors">Mon-Fri: 8AM-6PM<br>Sat: 9AM-4PM</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- Bottom Bar -->
         <div class="border-t border-gray-700/50 py-8">
           <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
             <div class="flex items-center space-x-2 text-gray-400">
               <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
               <span>&copy; ${new Date().getFullYear()} E&G Tree Barrier Installation. All rights reserved.</span>
             </div>
             <div class="flex items-center space-x-6 text-sm text-gray-400">
               <span>Developed by <a href="https://aurorabusiness.ca" target="_blank" rel="noopener noreferrer" class="hover:text-primary-400 transition-colors">Aurora N&N Business Solution Inc.</a></span>
             </div>
           </div>
         </div>
       </div>
     </footer>
  `
}
