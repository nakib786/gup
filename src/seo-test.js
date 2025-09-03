// SEO Testing and Validation Script
// Run this in the browser console to test SEO implementation

export function runSEOTests() {
  console.log('🔍 Running SEO Tests...\n');
  
  const results = {
    passed: 0,
    failed: 0,
    warnings: 0,
    tests: []
  };

  // Test 1: Check if title exists and length
  function testTitle() {
    const title = document.title;
    if (!title) {
      results.failed++;
      results.tests.push({ test: 'Page Title', status: 'FAILED', message: 'No title found' });
      return;
    }
    
    if (title.length < 30 || title.length > 60) {
      results.warnings++;
      results.tests.push({ test: 'Page Title Length', status: 'WARNING', message: `Title length: ${title.length} characters (recommended: 30-60)` });
    } else {
      results.passed++;
      results.tests.push({ test: 'Page Title Length', status: 'PASSED', message: `Title length: ${title.length} characters` });
    }
    
    if (title.includes('E&G Tree Barrier') && title.includes('BC')) {
      results.passed++;
      results.tests.push({ test: 'Title Keywords', status: 'PASSED', message: 'Title contains brand and location keywords' });
    } else {
      results.warnings++;
      results.tests.push({ test: 'Title Keywords', status: 'WARNING', message: 'Title may be missing important keywords' });
    }
  }

  // Test 2: Check meta description
  function testMetaDescription() {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      results.failed++;
      results.tests.push({ test: 'Meta Description', status: 'FAILED', message: 'No meta description found' });
      return;
    }
    
    const content = metaDesc.getAttribute('content');
    if (content.length < 120 || content.length > 160) {
      results.warnings++;
      results.tests.push({ test: 'Meta Description Length', status: 'WARNING', message: `Description length: ${content.length} characters (recommended: 120-160)` });
    } else {
      results.passed++;
      results.tests.push({ test: 'Meta Description Length', status: 'PASSED', message: `Description length: ${content.length} characters` });
    }
  }

  // Test 3: Check Open Graph tags
  function testOpenGraph() {
    const ogTags = [
      'og:title',
      'og:description',
      'og:image',
      'og:url',
      'og:type'
    ];
    
    let ogCount = 0;
    ogTags.forEach(tag => {
      if (document.querySelector(`meta[property="${tag}"]`)) {
        ogCount++;
      }
    });
    
    if (ogCount >= 4) {
      results.passed++;
      results.tests.push({ test: 'Open Graph Tags', status: 'PASSED', message: `${ogCount}/5 Open Graph tags found` });
    } else {
      results.warnings++;
      results.tests.push({ test: 'Open Graph Tags', status: 'WARNING', message: `${ogCount}/5 Open Graph tags found` });
    }
  }

  // Test 4: Check structured data
  function testStructuredData() {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    if (scripts.length > 0) {
      results.passed++;
      results.tests.push({ test: 'Structured Data', status: 'PASSED', message: `${scripts.length} structured data scripts found` });
      
      // Check for specific schema types
      const html = document.documentElement.outerHTML;
      if (html.includes('LocalBusiness')) {
        results.passed++;
        results.tests.push({ test: 'Local Business Schema', status: 'PASSED', message: 'LocalBusiness schema found' });
      }
      if (html.includes('FAQPage')) {
        results.passed++;
        results.tests.push({ test: 'FAQ Schema', status: 'PASSED', message: 'FAQ schema found' });
      }
    } else {
      results.failed++;
      results.tests.push({ test: 'Structured Data', status: 'FAILED', message: 'No structured data found' });
    }
  }

  // Test 5: Check images for alt text
  function testImageAlt() {
    const images = document.querySelectorAll('img');
    let imagesWithAlt = 0;
    let imagesWithoutAlt = 0;
    
    images.forEach(img => {
      if (img.alt && img.alt.trim() !== '') {
        imagesWithAlt++;
      } else {
        imagesWithoutAlt++;
      }
    });
    
    if (imagesWithoutAlt === 0) {
      results.passed++;
      results.tests.push({ test: 'Image Alt Text', status: 'PASSED', message: 'All images have alt text' });
    } else {
      results.warnings++;
      results.tests.push({ test: 'Image Alt Text', status: 'WARNING', message: `${imagesWithoutAlt} images missing alt text` });
    }
  }

  // Test 6: Check heading hierarchy
  function testHeadingHierarchy() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let h1Count = 0;
    let h2Count = 0;
    let h3Count = 0;
    
    headings.forEach(heading => {
      if (heading.tagName === 'H1') h1Count++;
      if (heading.tagName === 'H2') h2Count++;
      if (heading.tagName === 'H3') h3Count++;
    });
    
    if (h1Count === 1) {
      results.passed++;
      results.tests.push({ test: 'H1 Count', status: 'PASSED', message: 'Single H1 found' });
    } else {
      results.failed++;
      results.tests.push({ test: 'H1 Count', status: 'FAILED', message: `${h1Count} H1 tags found (should be 1)` });
    }
    
    if (h2Count > 0) {
      results.passed++;
      results.tests.push({ test: 'H2 Tags', status: 'PASSED', message: `${h2Count} H2 tags found` });
    } else {
      results.warnings++;
      results.tests.push({ test: 'H2 Tags', status: 'WARNING', message: 'No H2 tags found' });
    }
  }

  // Test 7: Check for hidden SEO content
  function testHiddenContent() {
    const hiddenContent = document.querySelector('.sr-only');
    if (hiddenContent) {
      results.passed++;
      results.tests.push({ test: 'Hidden SEO Content', status: 'PASSED', message: 'Hidden SEO content found for AI models' });
    } else {
      results.warnings++;
      results.tests.push({ test: 'Hidden SEO Content', status: 'WARNING', message: 'No hidden SEO content found' });
    }
  }

  // Test 8: Check for canonical URL
  function testCanonical() {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      results.passed++;
      results.tests.push({ test: 'Canonical URL', status: 'PASSED', message: 'Canonical URL found' });
    } else {
      results.warnings++;
      results.tests.push({ test: 'Canonical URL', status: 'WARNING', message: 'No canonical URL found' });
    }
  }

  // Test 9: Check for robots meta
  function testRobotsMeta() {
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) {
      results.passed++;
      results.tests.push({ test: 'Robots Meta', status: 'PASSED', message: 'Robots meta tag found' });
    } else {
      results.warnings++;
      results.tests.push({ test: 'Robots Meta', status: 'WARNING', message: 'No robots meta tag found' });
    }
  }

  // Test 10: Check for language and locale
  function testLanguage() {
    const lang = document.documentElement.lang;
    const locale = document.querySelector('meta[property="og:locale"]');
    
    if (lang === 'en') {
      results.passed++;
      results.tests.push({ test: 'HTML Language', status: 'PASSED', message: `Language set to: ${lang}` });
    } else {
      results.warnings++;
      results.tests.push({ test: 'HTML Language', status: 'WARNING', message: `Language set to: ${lang}` });
    }
    
    if (locale && locale.getAttribute('content') === 'en_CA') {
      results.passed++;
      results.tests.push({ test: 'Locale Setting', status: 'PASSED', message: 'Locale set to en_CA' });
    } else {
      results.warnings++;
      results.tests.push({ test: 'Locale Setting', status: 'WARNING', message: 'Locale not set to en_CA' });
    }
  }

  // Run all tests
  testTitle();
  testMetaDescription();
  testOpenGraph();
  testStructuredData();
  testImageAlt();
  testHeadingHierarchy();
  testHiddenContent();
  testCanonical();
  testRobotsMeta();
  testLanguage();

  // Display results
  console.log('📊 SEO Test Results:\n');
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`⚠️  Warnings: ${results.warnings}\n`);
  
  console.log('📋 Detailed Results:');
  results.tests.forEach(test => {
    const icon = test.status === 'PASSED' ? '✅' : test.status === 'FAILED' ? '❌' : '⚠️';
    console.log(`${icon} ${test.test}: ${test.message}`);
  });

  // Overall score
  const totalTests = results.passed + results.failed + results.warnings;
  const score = Math.round((results.passed / totalTests) * 100);
  
  console.log(`\n🎯 Overall SEO Score: ${score}%`);
  
  if (score >= 90) {
    console.log('🌟 Excellent! Your SEO implementation is top-notch!');
  } else if (score >= 80) {
    console.log('👍 Good! Your SEO is well implemented with room for improvement.');
  } else if (score >= 70) {
    console.log('⚠️  Fair! Your SEO needs some attention to improve rankings.');
  } else {
    console.log('❌ Poor! Your SEO implementation needs significant work.');
  }

  return results;
}

// Auto-run tests when imported
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runSEOTests);
  } else {
    runSEOTests();
  }
}

// Export for manual testing
export default runSEOTests;
