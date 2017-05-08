function chartView(containerId, chartName, chartURL) {
  var container = $(containerId);

  console.log('chartView', chartURL);

  var result = `
    <div class="row mt20">
      <div class="large-12 columns">
        <h3 class='graph-title'>${chartName}</h3>
        <div id='chart'></div>
        <iframe src="public/charts/${chartURL}" frameborder="0"></iframe>
      </div>
    </div>`;

  // Render the container
  container.html(result);

}