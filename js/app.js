$(document).foundation();

var events = [ 
    { Athlete: "Drew Windell", Title: "Race1",  Date: new Date("04/13/2017") }, 
    { Athlete: "Drew Windell", Title: "Race2", Date: new Date("04/25/2017") }, 
    { Athlete: "Drew Windell", Title: "Race3", Date: new Date("06/01/2017") },
    //{ Athlete: "Hannah Fields", Title: "Race1",  Date: new Date("04/11/2017") }, 
    //{ Athlete: "Hannah Fields", Title: "Race2", Date: new Date("04/22/2017") }, 
    //{ Athlete: "Hannah Fields", Title: "Race3", Date: new Date("06/13/2017") }
];




 $( function() {

	$(".cal").click(function() {
	  $( "#datepicker" ).slideToggle( "slow");
	 });

    $('.hidden').fadeIn(1000).removeClass('hidden');


	$("#datepicker .ui-datepicker-inline").removeAttr("style");

   $( "#datepicker" ).datepicker({
		defaultDate: $.datepicker.parseDate("d m y", "13 4 17"),
		numberOfMonths: 3,

	 	beforeShowDay: function(date) {


        var result = [true, '', null];
        var matching = $.grep(events, function(event) {
            return event.Date.valueOf() === date.valueOf();
        });
        if (matching.length) {
            result = [true, 'highlight', null];
        }
        return result;
     },
     onSelect: function(dateText) {
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
        if (event) {
				window.location.replace('index.php?var=' + event.Title);
        }
    }
	 });

  } );



