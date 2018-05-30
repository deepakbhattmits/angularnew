<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Deepak Bhatt</title>
	<link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon.png">
	<link rel="icon" type="image/png" href="img/favicons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="img/favicons/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="img/favicons/manifest.json">
	<link rel="mask-icon" href="img/favicons/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="theme-color" content="#ffffff">
	<link rel="stylesheet" href="css/app.css"/>
	<link rel="stylesheet" href="css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/font-awesome.min.css" />
	<link rel="stylesheet" href="css/angular-range-slider.css">
	<link rel="stylesheet" href="css/animate.min.css"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body class='MainPageBody'>
	<div ng-app='myApp'>
		<header class='page_header'>
			<?php include "header.phtml";	?>
		</header>

		<!--this is the view for all pages-->
		<div ng-view class='main_page container-fluid'>
		</div>
		<!--this is the view for all pages-->

		<footer class='page_footer footer-fixed'>
			<?php include 'footer.phtml';?>
		</footer>
	</div>
</body>
 <!--javascripts files-->
  <script src="lib/jquery-2.1.1.min.js"></script> 
    <script src="lib/angular.js"></script>

  <script src="lib/angular-route.js"></script>

   <script src="lib/ui-bootstrap-tpls.min.js"></script>
  <script src="lib/bootstrap.min.js"></script>
  <script src="lib/angular-animate.min.js"></script>
  <script src="js/app.js"></script>
  <script src="js/controllers.js"></script>
  <script src="js/my_javascript.js"></script>
  <script src="lib/angular-range-slider.js"></script>
	<!-- <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script> -->
    <!-- <script src="js/owl.carousel.min.js"></script> -->
</html>
