<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M2T Dashboard</title>
	 <!-- <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"> -->
	 <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/app.css">

	 <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700|Teko:500,600,700" rel="stylesheet">
  </head>
  <body>

 <div class="row expanded collapse">
	<div class="large-12 columns">
	  
		<div class="top-bar">

		  <div class="top-bar-left">
			 <section class="left-small">

				  <a class="menu-icon" data-toggle="offCanvasLeftSPlit1">
						<span>
						</span>
				  </a>
				 <h2>Coach Dashboard 1.0</h2>
				 <img src="images/logos-2x.png" width='243' alt="Logos">
					

			 </section>
		  </div>
		  <div class="top-bar-right">
		  		<div class="login">John Doe</div>
		  </div>
		</div>

	</div>
 </div>

<div class="row collapse expanded">
	<div class="columns large-12">
	

    <div class="off-canvas-wrapper">
      <div class="off-canvas-absolute  off-canvas-wrapper-inner position-left reveal-for-large" id="offCanvasLeftSPlit1" data-off-canvas>
			<h5 class="athlete-toggle">ATHLETES</h5>
        <ul class="athletes no-bullet">
        	<li <?php if ($_GET['athlete'] != 7 ) { ?>class='current' <?php } ?>><a class="athlete1" href="/?athlete=1">Hannah Fields</a></li>
        	<li <?php if ($_GET['athlete'] == 7 ) { ?>class='current' <?php } ?>><a class="athlete7" href="/?athlete=7">Drew Windle</a></li>
        	<li><a class="athlete2" href="">Garrett Heath</a></li>
        	<li><a class="athlete3" href="">Katie Mackey</a></li>
        	<li><a class="athlete4" href="">Natalja Piliusina</a></li>
        	<li><a class="athlete5" href="">Nick Symmonds</a></li>
        	<li><a class="athlete6" href="">Jess Ton</a></li>
        	<li><a class="athlete8" href="">Brannon Kidder</a></li>
        	<li><a class="athlete9" href="">Claudia Saunders</a></li>
        	<li><a class="athlete10" href="">Baylee Mires</a></li>
        	<li><a class="athlete11" href="">Izaic Yorks</a></li>
        	<li><a class="athlete12" href="">Shaquille Walker</a></li>
        </ul>
      </div>
		
      <div class="off-canvas-content" style="min-height: 300px;" data-off-canvas-content>
				<div class="row expanded">
					<div class="columns large-12">



						<?php	include('content.php') ?>




					</div><!-- /.columns large-12 -->
				</div><!-- /.row -->
      </div>



  </div>
</div>


  	</div><!-- /.columns large-12 -->
</div><!-- /.row -->

	 <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/what-input/dist/what-input.js"></script>
    <script src="bower_components/foundation-sites/dist/js/foundation.js"></script>
 	 <!-- <script src="https://code.jquery.com/ui/2.12.1/jquery-ui.js"></script> -->
 	 <script src="js/jquery-ui.js"></script>

    <script src="js/app.js"></script>
  </body>
</html>
