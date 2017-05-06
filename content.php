
<?php 
if ($_GET['athlete'] == 7 ) { ?>
<h1 class='hero hidden'>
<img src="images/profile-windell-2x.png" alt="Drew Windell" width='110'>
Drew Windell <span>Last Race, April 15, 2017</span></h1>
<?php } else { ?>
<h1 class='hero hidden'>
<img src="images/profile-fields-2x.png" alt="Hannah Fields" width='110'>
Hannah Fields <span>Last Race, April 9, 2017</span></h1>
<?php } ?>




<div class="row">
	<div class="columns large-12 show-for-medium">
		<div id="datepicker"></div>
	</div><!-- /.large-12 -->
</div><!-- /.row -->
<div class="row">
	<div class="columns large-12 date-title">
	<div class="row">
		<div class="columns large-2 date-nav"><span><a class="prev" href=""><img src="images/arrow-prev-2x.png" width='16' alt=""></a></span></div>
		<div class="columns large-8">
			<h2>April 12, 2017 <img class='cal' src="images/cal-2x.png" alt="" width='25'></h2>
		</div>
		<div class="columns large-2 date-nav text-right"><a class="next" href=""><img src="images/arrow-next-2x.png" width='16' alt=""></a></div>
	</div>
	</div><!-- /.large-12 -->
</div><!-- /.row -->

<div class="row mt20">
	<div class="large-12 columns">
		<h3 class='graph-title'>POWER DISTRIBUTION</h3>
		<iframe src="race1.html" frameborder="0"></iframe>

		<h3 class='graph-title'>WORKOUT SUMMARY</h3>
		<iframe src="race2.html" frameborder="0"></iframe>

	</div><!-- /.large-12 columns -->
</div><!-- /.row -->


