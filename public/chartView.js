function chartView(containerId, selectedAthlete, eventDate) {
  var container = $(containerId);

  var result = '';

  // Find the event
  var selectedEvent = selectedAthlete.events.filter(function (item) {
    return item.Date === eventDate;
  })[0];


  selectedEvent.charts.forEach(function (event) {
    result += `
    <div class="row mt20">
      <div class="large-12 columns">
        <h3 class='graph-title'>${event.Title}</h3>
        <div id='chart'></div>
        <iframe src="public/charts/${event.Html}" frameborder="0"></iframe>
      </div>
    </div>`;
  });


  //add the event toogle
  // $(container).hide();

  // Render the container
  container.html(result);

  //$(container).fadeIn('slow');
}

