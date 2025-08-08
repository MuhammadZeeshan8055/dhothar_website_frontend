<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dhothar International</title>

    <!-- Stylesheets -->
    <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">

    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.png') }}" type="image/x-icon">
    <link rel="icon" href="{{ asset('assets/images/favicon.png') }}" type="image/x-icon">

    <!-- Responsive -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="description" content="Dhothar International Recruitment Agency: Your gateway to global career opportunities. Explore overseas employment in Romania, Qatar, Saudi Arabia, the UAE, Oman, Bahrain, and Albania. Our expert team connects skilled professionals with top-tier positions in dynamic markets. Unlock your potential with Dhothar – Where Careers Know No Boundaries.">
    <meta name="keywords" content="Dhothar International Recruitment Agency, Dhothar International, Overseas Employment, Work Permit Visa in Romania, Qatar, Saudi Arabia, the UAE, Oman, Bahrain, and Albania.">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://dhotharinternational.com/">

    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    <style>
        banner-section-three {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background: #131313;
            opacity: 0.6;
            content: "";
        }
        .slide-item {
            position: relative;
        }
        .bg-image::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
        }
        .auto-container {
            position: relative;
            z-index: 2;
        }
    </style>

    <!-- Laravel Vite -->
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @endif
</head>
<body>
    <div id="app"></div>

    <!-- Scroll To Top -->
    <div class="scroll-to-top scroll-to-target" data-target="html">
        <span class="fa fa-angle-up"></span>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('assets/js/jquery.js') }}"></script>
    <script src="{{ asset('assets/js/popper.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/jquery.fancybox.js') }}"></script>
    <script src="{{ asset('assets/js/wow.js') }}"></script>
    <script src="{{ asset('assets/js/appear.js') }}"></script>
    <script src="{{ asset('assets/js/isotope.js') }}"></script>
    <script src="{{ asset('assets/js/select2.min.js') }}"></script>
    <script src="{{ asset('assets/js/owl.js') }}"></script>
    <script src="{{ asset('assets/js/script.js') }}"></script>
</body>
</html>
