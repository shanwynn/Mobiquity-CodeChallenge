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
	// put your options and callbacks here

	$('#calendar').fullCalendar({
				dayClick: function() {
				alert('a day has been clicked!');
			}
	})
});

CC.IndexRoute = Ember.Route.extend({
	model: function() {
		return {
			events: Ember.A([
			{title: "JS Meetup", start: Date.now()},
			])
		};
	}
});

CC.FullCalendarComponent = Ember.Component.extend({

	newEvent: "",
	eventTitle: "",

	_initializeCalendar: (function() {
		return $("#calendar").fullCalendar({
			events: this.theEvents
		});
	}).on("didInsertElement"),

	actions: {
		addEvent: function() {
			var newEvent = {title: this.eventTitle, start: this.newEvent, allDay: false};
			this.theEvents.pushObject(newEvent);
			this.$("#calendar").fullCalendar('renderEvent', newEvent, true);
		}
	}

});
