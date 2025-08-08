<template>
  <section class="banner-section-three">
    <div class="banner-carousel owl-carousel owl-theme default-navs">
      <!-- Slide Item -->
      <div class="slide-item">
        <div class="bg-image" style="background-image: url(assets/images/main-slider/develop.png);"></div>
        <div class="auto-container">
          <div class="content-box">
            <span class="sub-title animate-1">Buildings and Civil Construction</span>
            <h1 class="title animate-2">Buildings   <br> and Civil Construction.</h1>
            <div class="btn-box animate-3">
              <a href="page-about.html" class="theme-btn btn-style-one hover-light">
                <span class="btn-title">Discover more</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide Item -->
      <div class="slide-item">
        <div class="bg-image" style="background-image: url(assets/images/main-slider/oil.png);"></div>
        <div class="auto-container">
          <div class="content-box">
            <span class="sub-title animate-1">Oil & Gas</span>
            <h1 class="title animate-2">Oil & Gas <br> (Petrochemical and Heavy Engineering)</h1>
            <div class="btn-box animate-3">
              <a href="page-about.html" class="theme-btn btn-style-one hover-light">
                <span class="btn-title">Discover more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Slide Item -->
      <div class="slide-item">
        <div class="bg-image" style="background-image: url(assets/images/main-slider/infra.png);"></div>
        <div class="auto-container">
          <div class="content-box">
            <span class="sub-title animate-1">Infrastructure</span>
            <h1 class="title animate-2">Infrastructure.</h1>
            <div class="btn-box animate-3">
              <a href="page-about.html" class="theme-btn btn-style-one hover-light">
                <span class="btn-title">Discover more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Slide Item -->
      <div class="slide-item">
        <div class="bg-image" style="background-image: url(assets/images/main-slider/light.png);"></div>
        <div class="auto-container">
          <div class="content-box">
            <span class="sub-title animate-1">Light Duty Manufacturing</span>
            <h1 class="title animate-2">Light <br> Duty Manufacturing.</h1>
            <div class="btn-box animate-3">
              <a href="page-about.html" class="theme-btn btn-style-one hover-light">
                <span class="btn-title">Discover more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Slide Item -->
      <div class="slide-item">
        <div class="bg-image" style="background-image: url(assets/images/main-slider/agri.png);"></div>
        <div class="auto-container">
          <div class="content-box">
            <span class="sub-title animate-1">Agriculture And Farming</span>
            <h1 class="title animate-2">Agriculture <br> And Farming.</h1>
            <div class="btn-box animate-3">
              <a href="page-about.html" class="theme-btn btn-style-one hover-light">
                <span class="btn-title">Discover more</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerSection',
  mounted() {
    // Ensure jQuery and Owl Carousel are loaded
    if (window.$ && $.fn.owlCarousel) {
      $('.banner-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000
      });
    } else {
      console.warn('jQuery or Owl Carousel is not loaded');
    }
  }
};
</script>
