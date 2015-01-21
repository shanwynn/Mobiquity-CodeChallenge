var CC = window.CC = Ember.Application.create({
	LOG_TRANSITIONS: true
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/authentication');

$(document).ready(function() {

	// page is now ready, initialize the calendar...

	$('#calendar').fullCalendar({
		// put your options and callbacks here
	})

});
