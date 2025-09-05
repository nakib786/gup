// Gallery data with all the recent work pictures
const galleryData = [
  {
    id: 1,
    src: "/pic/image01.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 2,
    src: "/pic/image02.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 3,
    src: "/pic/image03.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 4,
    src: "/pic/image04.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 5,
    src: "/pic/image05.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 6,
    src: "/pic/image06.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 7,
    src: "/pic/image07.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 8,
    src: "/pic/image08.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 9,
    src: "/pic/image09.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 10,
    src: "/pic/image10.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 11,
    src: "/pic/image11.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 12,
    src: "/pic/image12.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 13,
    src: "/pic/image13.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 14,
    src: "/pic/image14.jpeg",
    alt: "Tree barrier installation project"
  },
  {
    id: 15,
    src: "/pic/image15.jpeg",
    alt: "Tree barrier installation project"
  }
];

// Gallery functionality
export function initializeGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');

  // Create gallery items
  function createGalleryItems(items) {
    return items.map(item => `
      <div class="gallery-item group cursor-pointer animate-on-scroll">
        <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gray-100">
          <div class="relative w-full h-full" style="aspect-ratio: 1/1; min-height: 200px;">
            <img src="${item.src}" 
                 alt="${item.alt}" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 style="display: block; background-color: #f3f4f6;"
                 onload="console.log('Image loaded:', this.src); this.style.backgroundColor='transparent';"
                 onerror="console.error('Image failed to load:', this.src); this.style.border='2px solid red'; this.alt='Failed to load image';">
            <div class="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Initialize gallery with all items
  if (galleryGrid) {
    galleryGrid.innerHTML = createGalleryItems(galleryData);
    
    // Debug: Log gallery initialization
    console.log('Gallery initialized with', galleryData.length, 'items');
    console.log('Gallery grid element:', galleryGrid);
    
    // Debug: Check if images are in DOM
    setTimeout(() => {
      const images = galleryGrid.querySelectorAll('img');
      console.log('Found', images.length, 'images in gallery');
      images.forEach((img, index) => {
        console.log(`Image ${index + 1}:`, img.src, 'loaded:', img.complete, 'naturalWidth:', img.naturalWidth);
      });
    }, 1000);
  }

  // Add click handlers for gallery items (for future lightbox functionality)
  document.addEventListener('click', (e) => {
    const galleryItem = e.target.closest('.gallery-item');
    if (galleryItem) {
      // Future: Open lightbox or modal
      console.log('Gallery item clicked');
    }
  });
}

// Initialize scroll animations for gallery items
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all gallery items
  document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
  });
}
