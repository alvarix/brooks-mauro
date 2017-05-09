function datePicker(containerId, athleteList, selected, eventDate, onEventChange) {

  var container = $(containerId);

  // Find the Athlete
  var selectedAthete = athleteList.filter(function (item) {
    return item.Athlete === selected;
  })[0];


  // Init the datePicker
  var events = selectedAthete.events;
  var firstEvent = selectedAthete.events[0].Date;

  container.html();

  var today = new Date();
  var d = document.createElement('div');

  $(d).datepicker({
    defaultDate: $.datepicker.parseDate('dd m yy', convertDate(eventDate)),
    numberOfMonths: 3,
    beforeShowDay: function (date) {
      var result = [false, '', null];

      // find the matching dates and add style highlight
      var matching = $.grep(events, function (event) {
        return event.Date.valueOf() === date.valueOf();
      });
      if (matching.length) {
        result = [true, 'highlight', null];
      }
      // find the today date and add style current-day
      if (today.toDateString('d m, yy') === date.toDateString('d m, yy')) {
        result = [false, 'current-day', null];
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
          onEventChange(date);
        }
        i++;
      }
    }
  });

  container.html(d);

}

function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(' ');
  }


