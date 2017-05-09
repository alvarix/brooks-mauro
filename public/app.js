$(document).foundation();

var state = {
 athleteList: [
    {
      Athlete: 'Hannah Fields', img: 'profile-fields-2x.png', events: [
        {
          Athlete: 'Hannah Fields',
          charts: [
            { Title: 'Efficiency Analysis', Html: 'hannah-03-27-2017-efficency-analysis.html' },
            { Title: 'Wattage', Html: 'hannah-03-27-2017-wattage.html' },
          ], Date: new Date('03/27/2017')
        },
        {
          Athlete: 'Hannah Fields', charts: [
            { Title: 'Efficiency Analysis', Html: 'hannah-04-10-2017-efficency-analysis.html' },
            { Title: 'Wattage', Html: 'hannah-04-10-2017-wattage.html' },
          ], Date: new Date('04/10/2017')
        },
      ]
    },
    {
      Athlete: 'Drew Windle', img: 'profile-windell-2x.png', events: [
        {
          Athlete: 'Drew Windell',
          charts: [
            { Title: 'Efficiency Analysis', Html: 'drew-03-18-2017-efficency-analysis.html' },
            { Title: 'Wattage', Html: 'drew-03-18-2017-wattage.html' },
          ], Date: new Date('03/18/2017')
        },
        {
          Athlete: 'Drew Windell',
          charts: [
            { Title: 'Efficiency Analysis', Html: 'drew-04-02-2017-efficency-analysis.html' },
            { Title: 'Wattage', Html: 'drew-04-02-2017-wattage.html' },
          ], Date: new Date('04/02/2017')
        },
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
  selected: '',
  eventDate: null,
  selectedAthlete: {}
};

function onSelectAthlete(name) {
  state.selected = name;

  // Find the Athlete Object
  var selectedAthete = state.athleteList.filter(function (item) {
    return item.Athlete === state.selected;
  })[0];

  // Set the seleted athlete
  state.selectedAthlete = selectedAthete;

  // Set the selected state.
  state.eventDate = selectedAthete.events[0].Date;

  render();
}

function onEventChange(date) {
  console.log('onEventChange', date);
  state.eventDate = date;
  renderChart();
}

function onNext() {
  var events = state.selectedAthlete.events;
  for (var i = 0; i < events.length; i++) {
    if (events[i].Date === state.eventDate) {
      if ((i + 1) < events.length) {
        onEventChange(events[i + 1].Date); // this is the next event
      } else {
        onEventChange(events[0].Date); // select the first   
      }
      return;
    }
  }
}

function onBack() {
  var events = state.selectedAthlete.events;
  for (var i = 0; i < events.length; i++) {
    if (events[i].Date === state.eventDate) {
      if ((i - 1) >= 0) {
        onEventChange(events[i - 1].Date); // this is the previous event
      } else {
        onEventChange(events[events.length - 1].Date); // select the left   
      }
      return;
    }
  }
}


function animate() {
  // Remove the hidden class for the title;
  $('.hidden').fadeIn(1000).removeClass('hidden');
}

function render() {
  athletePicker('#athletes-list', state.athleteList, state.selected, onSelectAthlete);
  athleteHeader('#athlete-header', state.athleteList, state.selected);
  datePicker('#datepicker', state.athleteList, state.selected, state.eventDate, onEventChange);
  eventPicker('#event-picker', state.athleteList, state.selected, state.eventDate, onNext, onBack);
  chartView('#chart-view', state.selectedAthlete, state.eventDate);
  animate();
}

function renderChart() {
  datePicker('#datepicker', state.athleteList, state.selected, state.eventDate, onEventChange);
  eventPicker('#event-picker', state.athleteList, state.selected, state.eventDate);
  chartView('#chart-view', state.selectedAthlete, state.eventDate);
}


$(function () {
  onSelectAthlete('Hannah Fields');
  render();
});
