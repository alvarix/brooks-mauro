$(document).foundation();

var events = [ 
    { Title: "Race1", Date: new Date("04/13/2017") }, 
    { Title: "Race2", Date: new Date("05/25/2017") }, 
    { Title: "Race3", Date: new Date("06/01/2017") }
];


$("#datepicker .ui-datepicker-inline").removeAttr("style");
 $( function() {
    $( "#datepicker" ).datepicker({
		numberOfMonths: 3,
		defaultDate: "-1m", 

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
            //alert(event.Title);
				window.location.replace('index.php?var=' + event.Title);
        }
    }
	 });
  } );



