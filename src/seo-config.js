// SEO Configuration for E&G Tree Barrier Installation
// This file contains all SEO-related configurations and can be easily updated

export const SEO_CONFIG = {
  // Basic Site Information
  site: {
    name: 'E&G Tree Barrier Installation',
    url: 'https://egtreebarrier.ca',
    title: 'E&G Tree Barrier Installation | Professional Tree Protection Services in BC',
    description: 'Expert tree barrier installation services in British Columbia. Protect your investment with professional tree protection solutions for residential and commercial properties. Free quotes available.',
    keywords: [
      'tree barrier installation',
      'tree protection',
      'wildlife protection',
      'residential tree barriers',
      'commercial tree barriers',
      'BC tree services',
      'Surrey tree protection',
      'Vancouver tree barriers',
      'tree protection services',
      'British Columbia tree care',
      'Greater Vancouver tree services',
      'tree barrier installation Surrey',
      'tree barrier installation Vancouver',
      'tree barrier installation Richmond',
      'tree barrier installation Burnaby'
    ],
    language: 'en-CA',
    locale: 'en_CA',
    timezone: 'America/Vancouver'
  },

  // Business Information
  business: {
    name: 'E&G Tree Barrier Installation',
    type: 'LocalBusiness',
    description: 'Professional tree barrier installation services in British Columbia, specializing in residential and commercial tree protection solutions.',
    telephone: '+1-604-362-3493',
    email: 'Info@egtreebarrier.ca',
    address: {
      streetAddress: '16076 102 A Ave',
      addressLocality: 'Surrey',
      addressRegion: 'BC',
      postalCode: 'V4N 2J7',
      addressCountry: 'CA'
    },
    geo: {
      latitude: 49.1913,
      longitude: -122.8490
    },
    openingHours: [
      'Mo-Fr 09:30-17:30',
      'Sa 10:00-16:00',
      'Su 11:00-16:00'
    ],
    priceRange: '$$',
    serviceArea: {
      radius: 50000, // 50km radius
      cities: [
        'Surrey',
        'Vancouver',
        'Richmond',
        'Burnaby',
        'Coquitlam',
        'Langley',
        'Delta',
        'White Rock',
        'New Westminster',
        'Port Coquitlam',
        'Port Moody',
        'Maple Ridge'
      ]
    }
  },

  // Services Information
  services: [
    {
      name: 'Residential Tree Barrier Installation',
      description: 'Professional installation of tree barriers for residential properties to protect against wildlife damage and environmental threats.',
      keywords: ['residential tree barriers', 'home tree protection', 'wildlife protection', 'residential tree care'],
      image: '/resdencial.jpeg',
      alt: 'Residential Tree Barrier Installation'
    },
    {
      name: 'Commercial Tree Barrier Installation',
      description: 'Tree protection solutions for commercial properties and public spaces using durable materials designed for high-traffic areas.',
      keywords: ['commercial tree barriers', 'business tree protection', 'public space tree care', 'commercial landscaping'],
      image: '/commercial.jpeg',
      alt: 'Commercial Tree Barrier Installation'
    },
    {
      name: 'Park and Public Space Protection',
      description: 'Specialized tree protection solutions for parks, recreational areas, and public spaces, ensuring community trees remain healthy and beautiful.',
      keywords: ['park tree protection', 'public space tree care', 'community tree maintenance', 'recreational area tree care'],
      image: '/park.jpeg',
      alt: 'Park and Public Space Tree Protection'
    }
  ],

  // Social Media Configuration
  social: {
    facebook: {
      appId: '', // Add if you have a Facebook app
      pageUrl: '' // Add your Facebook page URL
    },
    twitter: {
      handle: '', // Add your Twitter handle
      creator: '' // Add your Twitter creator handle
    },
    instagram: {
      handle: '' // Add your Instagram handle
    },
    linkedin: {
      companyUrl: '' // Add your LinkedIn company page URL
    }
  },

  // Content Strategy
  content: {
    // FAQ Questions and Answers
    faqs: [
      {
        question: 'What services does E&G Tree Barrier Installation provide?',
        answer: 'E&G Tree Barrier Installation provides professional tree barrier installation services for residential and commercial properties, including wildlife protection, weather protection, and comprehensive tree care solutions across British Columbia.'
      },
      {
        question: 'What areas do you serve in British Columbia?',
        answer: 'We serve the entire Greater Vancouver area including Surrey, Vancouver, Richmond, Burnaby, Coquitlam, Langley, Delta, White Rock, New Westminster, Port Coquitlam, Port Moody, Maple Ridge, and surrounding communities.'
      },
      {
        question: 'Do you offer free quotes?',
        answer: 'Yes, we offer free quotes and consultations for all tree barrier installation projects. Contact us today to schedule your free assessment.'
      },
      {
        question: 'How long does tree barrier installation take?',
        answer: 'Completion time varies depending on the project size and complexity. Most residential installations can be completed within 1-2 days, while larger commercial projects may take several days to a week.'
      },
      {
        question: 'What materials do you use for tree barriers?',
        answer: 'We use high-quality, durable materials specifically designed for tree protection, including weather-resistant barriers, sturdy supports, and environmentally-friendly materials that ensure long-lasting protection for your trees.'
      },
      {
        question: 'Are your tree barriers environmentally friendly?',
        answer: 'Yes, we prioritize environmentally-friendly materials and practices. Our tree barriers are designed to protect trees while minimizing environmental impact and promoting sustainable tree care.'
      },
      {
        question: 'Do you provide maintenance services for installed barriers?',
        answer: 'Yes, we offer maintenance and inspection services to ensure your tree barriers continue to provide optimal protection. Regular maintenance helps extend the lifespan of your barriers.'
      },
      {
        question: 'What makes E&G Tree Barrier Installation different from competitors?',
        answer: 'Our years of experience, commitment to quality, use of premium materials, and dedication to customer satisfaction set us apart. We also offer comprehensive service coverage across British Columbia with personalized solutions for each project.'
      }
    ],

    // Blog Topics for Content Marketing
    blogTopics: [
      'Tree Protection Tips for British Columbia Winters',
      'Wildlife Damage Prevention: Complete Guide',
      'Choosing the Right Tree Barrier for Your Property',
      'Seasonal Tree Care in the Greater Vancouver Area',
      'Commercial Property Tree Protection Strategies',
      'Environmental Benefits of Professional Tree Barriers',
      'Tree Barrier Maintenance: Best Practices',
      'Cost-Effective Tree Protection Solutions'
    ],

    // Local SEO Content
    localContent: {
      surrey: {
        title: 'Tree Barrier Installation in Surrey, BC',
        description: 'Professional tree barrier installation services in Surrey, British Columbia. Protect your trees with expert installation and quality materials.',
        keywords: ['tree barrier installation Surrey', 'Surrey tree protection', 'Surrey tree care', 'BC tree barriers Surrey']
      },
      vancouver: {
        title: 'Tree Barrier Installation in Vancouver, BC',
        description: 'Expert tree barrier installation services in Vancouver, British Columbia. Comprehensive tree protection solutions for residential and commercial properties.',
        keywords: ['tree barrier installation Vancouver', 'Vancouver tree protection', 'Vancouver tree care', 'BC tree barriers Vancouver']
      },
      richmond: {
        title: 'Tree Barrier Installation in Richmond, BC',
        description: 'Professional tree barrier installation services in Richmond, British Columbia. Quality tree protection for your property investment.',
        keywords: ['tree barrier installation Richmond', 'Richmond tree protection', 'Richmond tree care', 'BC tree barriers Richmond']
      }
    }
  },

  // Technical SEO
  technical: {
    // Performance
    performance: {
      imageOptimization: true,
      lazyLoading: true,
      minification: true,
      compression: true,
      caching: true
    },

    // Security
    security: {
      https: true,
      hsts: true,
      csp: true,
      xssProtection: true
    },

    // Mobile
    mobile: {
      responsive: true,
      amp: false, // Consider implementing AMP for better mobile performance
      pwa: false // Consider implementing PWA for better mobile experience
    }
  },

  // Analytics and Tracking
  analytics: {
    googleAnalytics: {
      trackingId: '', // Add your Google Analytics tracking ID
      enhancedEcommerce: true,
      conversionTracking: true
    },
    googleSearchConsole: {
      verificationCode: '', // Add your Google Search Console verification code
      sitemapUrl: 'https://egtreebarrier.ca/sitemap.xml'
    },
    bingWebmasterTools: {
      verificationCode: '' // Add your Bing Webmaster Tools verification code
    }
  },

  // Local Business Listings
  localListings: [
    {
      platform: 'Google My Business',
      url: '', // Add your Google My Business URL
      status: 'active'
    },
    {
      platform: 'Yelp',
      url: '', // Add your Yelp business page URL
      status: 'active'
    },
    {
      platform: 'Yellow Pages',
      url: '', // Add your Yellow Pages listing URL
      status: 'active'
    },
    {
      platform: 'HomeStars',
      url: '', // Add your HomeStars profile URL
      status: 'active'
    }
  ],

  // Competitor Analysis Keywords
  competitorKeywords: [
    'tree protection services BC',
    'wildlife barrier installation',
    'deer protection for trees',
    'tree guard installation',
    'landscape protection services',
    'tree care professionals BC',
    'arborist services Vancouver',
    'tree maintenance Surrey'
  ],

  // Seasonal Content Strategy
  seasonalContent: {
    spring: [
      'Spring Tree Care and Protection',
      'Preparing Trees for Growing Season',
      'Wildlife Activity and Tree Protection'
    ],
    summer: [
      'Summer Tree Maintenance',
      'Drought Protection for Trees',
      'Summer Wildlife Management'
    ],
    fall: [
      'Fall Tree Protection Preparation',
      'Winterizing Your Tree Barriers',
      'Fall Tree Care Checklist'
    ],
    winter: {
      'Winter Tree Protection',
      'Snow and Ice Damage Prevention',
      'Cold Weather Tree Care'
    }
  }
};

// Export individual configurations for specific use cases
export const getBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SEO_CONFIG.business.name,
  "description": SEO_CONFIG.business.description,
  "url": SEO_CONFIG.site.url,
  "telephone": SEO_CONFIG.business.telephone,
  "email": SEO_CONFIG.business.email,
  "address": SEO_CONFIG.business.address,
  "geo": SEO_CONFIG.business.geo,
  "openingHours": SEO_CONFIG.business.openingHours,
  "priceRange": SEO_CONFIG.business.priceRange,
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": SEO_CONFIG.business.geo,
    "geoRadius": SEO_CONFIG.business.serviceArea.radius
  }
});

export const getServicesSchema = () => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Tree Protection Services",
  "itemListElement": SEO_CONFIG.services.map(service => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": service.name,
      "description": service.description
    }
  }))
});

export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": SEO_CONFIG.content.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
