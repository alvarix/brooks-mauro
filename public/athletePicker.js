function athletePicker(containerId, athleteList, selected, onSelectAthlete) {
  var container = $(containerId);

  var lis = athleteList.map(function (item) {
    if (item.Athlete === selected) {
      return `<li class='athlete current'>${item.Athlete}</li>`;
    } else {
      return `<li class='athlete'>${item.Athlete}</li>`;
    }
  }).join('');

  var ul = $(`<ul class='athletes no-bullet'>${lis}</ul>`);

  ul.on('click', 'li', function () {
    var name = $(this).text();
    onSelectAthlete(name);
  });

  container.html(ul);
}
