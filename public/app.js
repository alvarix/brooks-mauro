$(document).foundation();

var state = {
  athleteList: [
    {
      Athlete: 'Hannah Fields', img: 'profile-fields-2x.png', events: [
        { Athlete: 'Hannah Fields', Title: 'Race1', Html:'race1.html', Date: new Date('04/11/2017') },
        { Athlete: 'Hannah Fields', Title: 'Race2', Html:'race2.html', Date: new Date('04/22/2017') },
        { Athlete: 'Hannah Fields', Title: 'Race3', Html:'race1.html', Date: new Date('06/13/2017') }
      ]
    },
    {
      Athlete: 'Drew Windle', img: 'profile-windell-2x.png', events: [
        { Athlete: 'Drew Windell', Title: 'D Race1',  Html:'race1.html', Date: new Date('04/13/2017') },
        { Athlete: 'Drew Windell', Title: 'D Race2',  Html:'race2.html', Date: new Date('04/25/2017') },
        { Athlete: 'Drew Windell', Title: 'D Race3',  Html:'race1.html', Date: new Date('06/01/2017') }
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
  render();
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
  datePicker('#datepicker',  state.athleteList,  state.selected);
  eventPicker('#event-picker', state.athleteList, state.selected);
  //chartView('#chart-view', 'POWER DISTRIBUTION', 'race1.html');
  animate();
}


$(function () {
  render();
});
