$(document).foundation();

var state = {
  athleteList: [
    {
      Athlete: 'Hannah Fields', img: 'profile-fields-2x.png', events: [
        {
          Athlete: 'Hannah Fields',
          charts: [
            { Title: 'Effort', Html: 'hannah-fields-effort-3-27-2017.html' },
            { Title: 'Watt Age', Html: 'hannah-fields-wattage-3-27-2017.html' },
          ], Date: new Date('03/27/2017')
        },
        {
          Athlete: 'Hannah Fields', charts: [
            { Title: 'Effort', Html: 'hannah-fields-effort-4-10-2017.html' },
            { Title: 'Watt Age', Html: 'hannah-fields-wattage-4-10-2017.html' },
          ], Date: new Date('04/10/2017')
        },
      ]
    },
    {
      Athlete: 'Drew Windle', img: 'profile-windell-2x.png', events: [
        {
          Athlete: 'Drew Windell',
          charts: [
            { Title: 'Effort', Html: 'drew-windel-effort-3-18-2017' },
            { Title: 'Watt Age', Html: 'hannah-fields-wattage-4-10-2017.html' },
          ], Date: new Date('03/18/2017')
        },
        {
          Athlete: 'Drew Windell',
          charts: [
            { Title: 'Effort', Html: 'drew-windel-effort-4-2-2017' },
            { Title: 'Watt Age', Html: 'drew-windel-wattage-4-2-2017l' },
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
  selected: 'Hannah Fields',
  eventDate: null;
};

function onSelectAthlete(name) {
  state.selected = name;
  state.eventDate = null;
  render();
}

function onSelectedEvent(date){
  state.eventDate = date;
}

function animate() {
  // Remove the hidden class for the title;
  $('.hidden').fadeIn(1000).removeClass('hidden');

  // Activate Toggle
  $('.cal').click(function () {
    $('#datepicker').slideToggle('slow');
  });

  //Remove attribute style from date picker
  //$('#datepicker .ui-datepicker-inline').removeAttr('style');

}

function render() {
  athletePicker('#athletes-list', state.athleteList, state.selected, onSelectAthlete);
  athleteHeader('#athlete-header', state.athleteList, state.selected);
  datePicker('#datepicker', state.athleteList, state.selected);
  eventPicker('#event-picker', state.athleteList, state.selected);
  if()
  animate();
}


$(function () {
  render();
});
