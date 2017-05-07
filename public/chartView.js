function chartView(containerId) {
  var container = $(containerId);

  var result = `
    <div class="row mt20">
      <div class="large-12 columns">
        <h3 class='graph-title'>POWER DISTRIBUTION</h3>
        <div id='chart'></div>
      </div>
    </div>`;

  // Render the container
  container.html(result);

  // Load the chart
  $('#chart').load('race1.html', function () {
    console.log('Load was performed.');
  });

}