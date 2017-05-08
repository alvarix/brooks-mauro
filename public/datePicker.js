function datePicker(containerId, athleteList, selected) {

  var container = $(containerId);

  // Find the Athlete
  var selectedAthete = athleteList.filter(function (item) {
    return item.Athlete === selected;
  })[0];


  // Init the datePicker
  var events = selectedAthete.events;
  var firstEvent = selectedAthete.events[0].Date;


  console.log('first->', firstEvent);

  container.html();

  d = document.createElement('div');

  $(d).datepicker({
    defaultDate: $.datepicker.parseDate('d m y', '13 4 17'),
    numberOfMonths: 3,
    beforeShowDay: function (date) {
      var result = [false, '', null];
      var matching = $.grep(events, function (event) {
        return event.Date.valueOf() === date.valueOf();
      });
      if (matching.length) {
        result = [true, 'highlight', null];
      }
      return result;
    },
    onSelect: function (dateText) {
      var date, selectedDate = new Date(dateText);
      var i = 0, event = null;

      while (i < events.length && !event) {
        date = events[i].Date;

        if (selectedDate.valueOf() === date.valueOf()) {
          event = events[i];
          chartView('#chart-view', event.Title, event.Html);
        }
        i++;
      }
    }
  });

  container.html(d);

}

