function eventPicker(containerId, athleteList, selected, eventDate, onNext, onBack) {

  var container = $(containerId);

  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  var renderContainer = $(`
    <div class="row">
	    <div class="columns small-12 date-title">
	      <div class="row">
		      <div class="columns small-2 date-nav">
            <span>
              <div class="prev"onClick="onBack()"><img src="images/arrow-prev-2x.png" width='16' alt=""></div>
            </span>
          </div>
		      <div class="columns small-8">
			      <h2>${ monthNames[eventDate.getMonth()]} ${eventDate.getDate()},  ${eventDate.getFullYear()} <img class='cal' src="images/cal-2x.png" alt="" width='25'></h2>
		      </div>

		      <div class="columns small-2 date-nav text-right">
            <div class="next" onClick='onNext()'><img src="images/arrow-next-2x.png" width='16' alt=""></div>
          </div>
	      </div>
	    </div><!-- /.large-12 -->
    </div><!-- /.row -->
    `);

  container.html(renderContainer);

  //add the event toogle
  $('.cal').click(function () {
    $('#datepicker').slideToggle('slow');
  });

}
