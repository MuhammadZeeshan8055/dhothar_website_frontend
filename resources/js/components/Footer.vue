<template>
  <footer class="main-footer">
    <div class="bg bg-pattern-6"></div>

    <!-- Footer Upper -->
    <div class="footer-upper">
      <div class="auto-container">
        <div class="row">
          <!-- Contact Info Block -->
          <div class="contact-info-block col-lg-4 col-md-6">
            <div class="inner">
              <i class="icon lnr-icon-map"></i>
              <div class="text">
                Head Office : Pakistan <br>
                Branch Office : Romania <br>
                Branch Office : United Arab Emirates <br>
              </div>
            </div>
          </div>

          <div class="contact-info-block col-lg-4 col-md-6">
            <div class="inner">
              <i class="icon lnr-icon-envelope1"></i>
              <div class="text">
                <a href="#">Info@dhotharinternational.com</a>
                <a href="tel:+92(8800)48720">
                  Pak +92514848692<br>
                  Romanian +40739916997<br>
                  UAE +971501005758
                </a>
              </div>
            </div>
          </div>

          <div class="contact-info-block col-lg-4 col-md-6">
            <div class="inner">
              <i class="icon lnr-icon-clock"></i>
              <div class="text">Mon - Sat: 8:00 am to 6:00 pm <br>Sunday: CLOSED</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Widgets Section -->
    <div class="widgets-section">
      <div class="auto-container">
        <div class="row">
          <div class="footer-column col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="footer-widget about-widget">
              <h5 class="widget-title">About</h5>
              <div class="widget-content">
                <div class="text">
                  "Ready to elevate your workforce performance? Let us handle the hiring hassle while you focus on success. Let's Connect!"
                </div>
                <ul class="social-icon-two">
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-column col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="widget links-widget">
              <h6 class="widget-title">Explore</h6>
              <div class="widget-content">
                <ul class="user-links">
                  <li><a href="why_dhothar.php">Why Dhothar</a></li>
                  <li><a href="company_organizational_chart.php">Company Organizational Chart</a></li>
                  <li><a href="company_offices.php">Company Offices</a></li>
                  <li><a href="introduction.php">About Us</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div class="widget newsletter-widget">
              <h6 class="widget-title">Newsletter</h6>
              <div class="widget-content">
                <div class="text">Subscribe our newsletter to get our latest update & news</div>
                <div class="subscribe-form">
                  <form method="post" action="#">
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        class="email"
                        placeholder="Email Address"
                        required
                      />
                      <button type="button" class="theme-btn">
                        <i class="fa fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="row">
          <div class="logo-column col-lg-4 col-md-4 order-2">
            <div class="footer-logo">
              <img src="assets/images/logo.png" alt="Logo" />
            </div>
          </div>

          <div class="col-lg-4 col-md-4">
            <p class="copyright-text">
              © Copyright dhotharinternational.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
