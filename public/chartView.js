function chartView(containerId, athleteList, selected, selectedDate) {
  var container = $(containerId);
  var chartDate;

  // Find the Athlete
  var selectedAthete = athleteList.filter(function (item) {
    return item.Athlete === selected;
  })[0];


  if (!selectedDate) {
    // Init the first event if not date has been selected.
    chartDate = selectedAthete.events[0].Date;
  } else {
    chartDate = selectedDate;
  }


  var result = '';

  // Find the event
  var selectedEvent = selectAtlhete.events.filter(function (item) {
    return item.Date === chartDate;
  })[0];


  console.log('chartView', selectedEvent);


  selectedEvent.charts.forEach(function (event) {
    result += `
    <div class="row mt20">
      <div class="large-12 columns">
        <h3 class='graph-title'>${event.Title}</h3>
        <div id='chart'></div>
        <iframe src="charts/${event.Html}" frameborder="0"></iframe>
      </div>
    </div>`;
  });

  // Render the container
  container.html(result);

}