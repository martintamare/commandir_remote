<!DOCTYPE html> 
<html> 
<head> 
	<title>M&M Remote</title> 
	<link rel="stylesheet" href="jquery.mobile-1.0a3.min.css" />
	<meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1"> 
	<script type="text/javascript" src="js/jquery-1.4.3.min.js"></script>
	<script type="text/javascript" src="js/jquery.mobile-1.0a3.min.js"></script>
	<script type="text/javascript" src="js/my_password.js"></script>

</head> 
<body> 
	<div data-role="page">
		<div data-role="header"> 
			<h1>M&M Domotique</h1> 
			<a href="power.html" data-icon="gear" data-rel="dialog" data-transition="pop" class="ui-btn-right">Power Options</a> 
			<div data-role="navbar">
				<ul> 
					<li><a href="freebox.php" class="switch" id="s_freebox">Freebox</a></li> 
					<li><a href="ampli.php" class="switch" id="">Ampli</a></li> 
					<li><a href="xbmc.php" class="switch" id="s_xbmc">XBMC</a></li>
				</ul> 
			</div><!-- /navbar --> 
		</div><!-- /header -->
