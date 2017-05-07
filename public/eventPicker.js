function eventPicker(containerId, athleteList, selected) {

  var container = $(containerId);

  // Find the Athlete
  var selectedAthete = athleteList.filter(function (item) {
    return item.Athlete === selected;
  })[0];


  // Return the container
  var renderContainer = $(`
    <div class="row">
	    <div class="columns large-12 date-title">
	      <div class="row">
		      <div class="columns large-2 date-nav">
            <span>
              <a class="prev" href=""><img src="images/arrow-prev-2x.png" width='16' alt=""></a>
            </span>
          </div>
		      <div class="columns large-8">
			      <h2>April 12, 2017 <img class='cal' src="images/cal-2x.png" alt="" width='25'></h2>
		      </div>
		      <div class="columns large-2 date-nav text-right">
            <a class="next" href=""><img src="images/arrow-next-2x.png" width='16' alt=""></a>
          </div>
	      </div>
	    </div><!-- /.large-12 -->
    </div><!-- /.row -->
    `);

  container.html(renderContainer);

  //console.log('events', selectedAthete.events);

  // Init the datePicker
  //var events = selectedAthete.events;


  //console.log('datepicker', $('#datepicker'));


}
