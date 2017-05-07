$(document).foundation();

var state = {
  athleteList: [
    {
      Athlete: 'Hannah Fields', img: 'profile-fields-2x.png', events: [
        { Athlete: 'Hannah Fields', Title: 'Race1', Date: new Date('04/11/2017') },
        { Athlete: 'Hannah Fields', Title: 'Race2', Date: new Date('04/22/2017') },
        { Athlete: 'Hannah Fields', Title: 'Race3', Date: new Date('06/13/2017') }
      ]
    },
    {
      Athlete: 'Drew Windle', img: 'profile-windell-2x.png', events: [
        { Athlete: 'Drew Windell', Title: 'Race1', Date: new Date('04/13/2017') },
        { Athlete: 'Drew Windell', Title: 'Race2', Date: new Date('04/25/2017') },
        { Athlete: 'Drew Windell', Title: 'Race3', Date: new Date('06/01/2017') }
      ]
    },
    { Athlete: 'Garrett Heath', img: null, events: [] },
    { Athlete: 'Katie Mackey', events: [] },
    { Athlete: 'Natalja Piliusina', img: null, events: [] },
    { Athlete: 'Nick Symmonds', img: null, events: [] },
    { Athlete: 'Jess Ton', img: null, events: [] },
    { Athlete: 'Brannon Kidder', img: null, events: [] },
    { Athlete: 'Claudia Saunders', img: null, events: [] },
    { Athlete: 'Baylee Mires', img: null, events: [] },
    { Athlete: 'Izaic Yorks', img: null, events: [] },
    { Athlete: 'Shaquille Walker', img: null, events: [] }
  ],
  selected: 'Hannah Fields'
};

function onSelectAthlete(name) {
  state.selected = name;

  //find the athlete by name
  /*var selectedAthete = state.athleteList.filter(function (item) {
    return item.Athlete === state.selected;
  })[0];

  if(selectedAthete){
    onAthleteSelected(selectedAthete.events);
  }*/

  render();
}


function onAthleteSelected(events) {
  $('#datepicker').datepicker({
    defaultDate: $.datepicker.parseDate('d m y", "13 4 17'),
    numberOfMonths: 3,
    beforeShowDay: function (date) {
      var result = [true, '', null];
      var matching = $.grep(events, function (event) {
        return event.Date.valueOf() === date.valueOf();
      });
      if (matching.length) {
        result = [true, 'highlight', null];
      }
      return result;
    },
    onSelect: function (dateText) {
      var date,
        selectedDate = new Date(dateText),
        i = 0,
        event = null;

      while (i < events.length && !event) {
        date = events[i].Date;

        if (selectedDate.valueOf() === date.valueOf()) {
          event = events[i];
        }
        i++;
      }
    }
  });
}


function animate() {
  // Remove the hidden class for the title;
  $('.hidden').fadeIn(1000).removeClass('hidden');

  // Activate Toggle
  $('.cal').click(function () {
    $('#datepicker').slideToggle('slow');
  });

  //Remove attribute style from date picker
  $('#datepicker .ui-datepicker-inline').removeAttr('style');

}

function render() {
  athletePicker('#athletes-list', state.athleteList, state.selected, onSelectAthlete);
  athleteHeader('#athlete-header', state.athleteList, state.selected, onAthleteSelected);
  eventPicker('#event-picker', state.athleteList, state.selected);
  animate();
}






$(function() {
  render();
});
