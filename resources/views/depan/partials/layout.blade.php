<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>FA Shop</title>
	<link href='https://fonts.googleapis.com/css?family=Lato:400,100,700' rel='stylesheet' type='text/css'/>
	<link href='https://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css'/>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/font-awesome.min.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap-theme.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/jquery.fancybox.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/jquery-ui.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/owl.carousel.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/owl.transitions.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/owl.theme.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/jquery.mCustomScrollbar.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/theme.css') }}" media="all"/>
	<script type="text/javascript" src="{{ asset('js/jquery-1.10.2.min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/bootstrap.min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/jquery.fancybox.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/jquery-ui.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/owl.carousel.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/jquery.mCustomScrollbar.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/parallax.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/jquery.hoverdir.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/modernizr.custom.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/jquery.jcarousellite.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/theme.js') }}"></script>
</head>
<body>
	<div class="wrap">
		{{-- Header --}}
    @include('depan.partials.nav')
		{{-- End Header --}}

		<!-- Content -->
    @yield('content')
		<!-- End Content -->

		<!-- Footer -->
    @include('depan.partials.footer')
		<!-- End Footer -->
	</div>
</body>
</html>
