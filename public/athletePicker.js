function athletePicker(containerId, athleteList, selected, onSelectAthlete) {
  var container = $(containerId);

  var lis = athleteList.map(function (item) {
    if (item.Athlete === selected) {
      return `<li class='athlete active current'>${item.Athlete}</li>`;
    } else {
      if (item.events.length > 0) {
        return `<li class='athlete active'>${item.Athlete}</li>`;
      } else {
        return `<li class='athlete inactive'>${item.Athlete}</li>`;
      }
    }
  }).join('');

  var ul = $(`<ul class='athletes no-bullet'>${lis}</ul>`);

  ul.on('click', 'li', function () {
    // if active click on it, otherwise ignore

    console.log('class->',$(this).attr('class'));
    if ($(this).attr('class') === 'athlete active') {
      onSelectAthlete($(this).text());
    }

  });

  container.html(ul);
}
