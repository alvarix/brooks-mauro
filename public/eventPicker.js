function eventPicker(containerId, athleteList, selected, eventDate) {

  var container = $(containerId);

  // Find the Athlete
 /* var selectedAthete = athleteList.filter(function (item) {
    return item.Athlete === selected;
  })[0];

  var events = selectedAthete.events;
  var event = selectedAthete.events[0];

  console.log('first event', event);*/

  // Return the container //April 12, 2017
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
			      <h2>${eventDate.toDateString('d m, yy').slice(4)} <img class='cal' src="images/cal-2x.png" alt="" width='25'></h2>
		      </div>
		      <div class="columns large-2 date-nav text-right">
            <a class="next" href="" onClick='click()'><img src="images/arrow-next-2x.png" width='16' alt=""></a>
          </div>
	      </div>
	    </div><!-- /.large-12 -->
    </div><!-- /.row -->
    `);

  container.html(renderContainer);

}

/*
$(document).on('click', '.ui-datepicker-next', function () {
  console.log('next');  
})

$(document).on('click', '.ui-datepicker-prev', function () {
  console.log('prev');  
})
*/
