function athleteHeader(containerId, athleteList, selected) {

  var container = $(containerId);

  // Find the Athlete
  var selectedAthete = athleteList.filter(function (item) {
    return item.Athlete === selected;
  })[0];

  // Load the image if exist
  var img = (selectedAthete.img) ? `<img src='images/${selectedAthete.img}' alt='Drew Windell' width='110'>` : '';

  // Find the last race if the athlete has events
  var lastRace = (selectedAthete.events.length > 0) ?
    `Last Race, ${selectedAthete.events[selectedAthete.events.length - 1].Date.toDateString('d M, yy')}` :
    '';

  // Return the container
  var result = $(`
    <h1 class='hero hidden'>
      ${img}
      ${selectedAthete.Athlete} <span>${lastRace}</span>
    </h1>`);

  container.html(result);
}

