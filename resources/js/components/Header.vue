<template>
    <header class="main-header header-style-four">
        <!-- Main box -->
        <div class="main-box">
            <div class="logo-box">
                <div class="logo">
                    <router-link to="/">
                        <img src="/assets/images/dhothar_logo.png" alt="" title="Tronis" />
                    </router-link>
                </div>
            </div>

            <!--Nav Box-->
            <div class="nav-outer">
                <nav class="nav main-menu">
                    <ul class="navigation">
                        <li class="current"><a href="/">Home</a></li>

                        <li class="dropdown">
                            <router-link to="#">About</router-link>
                            <ul>
                                <li><router-link to="/introduction">Introduction</router-link></li>
                                <li><router-link to="/industries_details">Industries Details</router-link></li>
                                <li><router-link to="/our_services">Our Services</router-link></li>
                                <li><router-link to="/mission">Mission</router-link></li>
                                <li><router-link to="/vision">Vision</router-link></li>
                                <li><router-link to="/values">Values</router-link></li>
                            </ul>
                        </li>

                        <li class="dropdown">
                            <router-link to="/introduction">Introduction</router-link>
                            <ul>
                                <li><router-link to="/why_dhothar">Why Dhothar</router-link></li>
                                <li><router-link to="/company_organizational_chart">Company Organizational Chart</router-link></li>
                                <li><router-link to="/company_offices">Company Offices</router-link></li>
                            </ul>
                        </li>

                        <li class="dropdown">
                            <router-link to="#">Recruitment Chart</router-link>
                            <ul>
                                <li><router-link to="/europe_process">Europe</router-link></li>
                                <li><router-link to="/kingdom_saudi">Kingdom of Saudi Arabia</router-link></li>
                                <li><router-link to="/uae_qatar_etc">U.A.E, QATAR, KUWAIT, OMAN & BAHRAIN</router-link></li>
                                <li><router-link to="/sourcing_matrix">Our Sourcing Matrix</router-link></li>
                            </ul>
                        </li>

                        <li class="dropdown">
                            <router-link to="/terms_conditions">Terms</router-link>
                            <ul>
                                <li><router-link to="/terms_conditions">Terms and Conditions</router-link></li>
                                <li><router-link to="/orientation">Orientation</router-link></li>
                            </ul>
                        </li>

                        <li class="dropdown">
                            <router-link to="/japan_introduction">
                                <img src="/assets/images/dhothar_images/jp-flag.jpg" width="35"
                                    style="vertical-align: middle;" />
                                &nbsp;&nbsp; JAPAN
                            </router-link>
                            <ul>
                                <li><router-link to="/japan_introduction">Introduction</router-link></li>
                                <li><router-link to="/titp_japan">TITP</router-link></li>
                                <li><router-link to="/sswp">Specified Skilled Worker</router-link></li>
                            </ul>
                        </li>

                        <li><router-link to="#">New Jobs</router-link></li>
                        <li><router-link to="#">Gallery</router-link></li>
                    </ul>
                </nav>
            </div>


        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <nav class="menu-box">
                <div class="upper-box">
                    <div class="nav-logo">
                        <router-link to="/">
                            <img src="/assets/images/dhothar_logo.png" alt="" title="" />
                        </router-link>
                    </div>
                    <div class="close-btn"><i class="icon fa fa-times"></i></div>
                </div>
                <ul class="navigation clearfix"></ul>
                <ul class="contact-list-one">
                    <li>
                        <div class="contact-info-box">
                            <i class="icon lnr-icon-phone-handset"></i>
                            <span class="title">Call Now</span>
                            <router-link to="tel:+92880098670">Pak +92514848692<br />Romanian +40739916997<br />UAE
                                +971501005758</router-link>
                        </div>
                    </li>
                    <li>
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-envelope1"></span>
                            <span class="title">Send Email</span>
                            <router-link to="mailto:info@dhotharinternational.com">info@dhotharinternational.com</router-link>
                        </div>
                    </li>
                    <li>
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-clock"></span>
                            <span class="title">Opening Hours</span>
                            Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                        </div>
                    </li>
                </ul>
                <ul class="social-links">
                    <li><router-link to="#"><i class="fab fa-twitter"></i></router-link></li>
                    <li><router-link to="#"><i class="fab fa-facebook-f"></i></router-link></li>
                    <li><router-link to="#"><i class="fab fa-pinterest"></i></router-link></li>
                    <li><router-link to="#"><i class="fab fa-instagram"></i></router-link></li>
                </ul>
            </nav>
        </div>

        <!-- Sticky Header -->
        <div class="sticky-header">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="logo">
                        <router-link to="/" title="">
                            <img src="/assets/images/dhothar_logo.png" alt="" title="" />
                        </router-link>
                    </div>
                    <div class="nav-outer">
                        <nav class="main-menu">
                            <div class="navbar-collapse show collapse clearfix">
                                <ul class="navigation clearfix">
                                    <li class="current"><a href="/">Home</a></li>

                                    <li class="dropdown">
                                        <router-link to="#">About</router-link>
                                        <ul>
                                            <li><router-link to="/introduction">Introduction</router-link></li>
                                            <li><router-link to="/industries_details">Industries Details</router-link></li>
                                            <li><router-link to="/our_services">Our Services</router-link></li>
                                            <li><router-link to="/mission">Mission</router-link></li>
                                            <li><router-link to="/vision">Vision</router-link></li>
                                            <li><router-link to="/values">Values</router-link></li>
                                        </ul>
                                    </li>

                                    <li class="dropdown">
                                        <router-link to="/introduction">Introduction</router-link>
                                        <ul>
                                            <li><router-link to="/why_dhothar">Why Dhothar</router-link></li>
                                            <li><router-link to="/company_organizational_chart">Company Organizational Chart</router-link>
                                            </li>
                                            <li><router-link to="/company_offices">Company Offices</router-link></li>
                                        </ul>
                                    </li>

                                    <li class="dropdown">
                                        <router-link to="#">Recruitment Chart</router-link>
                                        <ul>
                                            <li><router-link to="/europe_process">Europe</router-link></li>
                                            <li><router-link to="/kingdom_saudi">Kingdom of Saudi Arabia</router-link></li>
                                            <li><router-link to="/uae_qatar_etc">U.A.E, QATAR, KUWAIT, OMAN & BAHRAIN</router-link></li>
                                            <li><router-link to="/sourcing_matrix">Our Sourcing Matrix</router-link></li>
                                        </ul>
                                    </li>

                                    <li class="dropdown">
                                        <router-link to="/terms_conditions">Terms</router-link>
                                        <ul>
                                            <li><router-link to="/terms_conditions">Terms and Conditions</router-link></li>
                                            <li><router-link to="/orientation">Orientation</router-link></li>
                                        </ul>
                                    </li>

                                    <li class="dropdown">
                                        <router-link to="/japan_introduction">
                                            <img src="/assets/images/dhothar_images/jp-flag.jpg" width="35"
                                                style="vertical-align: middle;" />
                                            &nbsp;&nbsp; JAPAN
                                        </router-link>
                                        <ul>
                                            <li><router-link to="/japan_introduction">Introduction</router-link></li>
                                            <li><router-link to="/titp_japan">TITP</router-link></li>
                                            <li><router-link to="/sswp">Specified Skilled Worker</router-link></li>
                                        </ul>
                                    </li>

                                    <li><router-link to="#">New Jobs</router-link></li>
                                    <li><router-link to="#  ">Gallery</router-link></li>
                                </ul>
                            </div>
                        </nav>
                        <div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<script>
export default {
    name: "Header",
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
