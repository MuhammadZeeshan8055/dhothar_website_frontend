<template>
  <section class="banner-section-three">
    <div class="banner-carousel owl-carousel owl-theme default-navs">
      <!-- Slide Item -->
      <div class="slide-item">
        <div class="bg-image" style="background-image: url(assets/images/main-slider/5.jpg);"></div>
        <div class="auto-container">
          <div class="content-box">
            <span class="sub-title animate-1">Smart Digital Marketing Agency</span>
            <h1 class="title animate-2">Shaping the <br>Perfect Website <br>Solutions.</h1>
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
        <div class="bg-image" style="background-image: url(assets/images/main-slider/4.jpg);"></div>
        <div class="auto-container">
          <div class="content-box">
            <span class="sub-title animate-1">Smart Digital Marketing Agency</span>
            <h1 class="title animate-2">Shaping the <br>Perfect Website <br>Solutions.</h1>
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
