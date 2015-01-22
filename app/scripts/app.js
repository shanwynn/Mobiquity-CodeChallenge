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



//Full Calendar//

$(document).ready(function() {

	// page is now ready, initialize the calendar...
	// put your options and callbacks here

	$('#calendar').fullCalendar({
		dayClick: function() {
		}
	})
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
		save: function() {
			var newEvent = {eventTitle: this.eventTitle, start: this.newEvent, allDay: false};
			this.theEvents.pushObject(newEvent);
			this.$("#calendar").fullCalendar("renderEvent", newEvent, true);
		}
	}

});


//Google API//

var clientId = '843611023197-r481mat64v912rtkaivvdsof14vbkuu3.apps.googleusercontent.com';

var apiKey = 'AIzaSyDTmMKsjhVezeZoILy2n15dGZ1hsJ1Reko';

var scopes = 'https://www.googleapis.com/auth/calendar';

function handleClientLoad() {
	gapi.client.setApiKey(apiKey);
	window.setTimeout(checkAuth,1);
}

function checkAuth() {
	gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}

function handleAuthResult(authResult) {
	var authorizeButton = document.getElementById('authorize-button');
	if (authResult && !authResult.error) {
		authorizeButton.style.visibility = 'hidden';
		makeApiCall();
	} else {
		authorizeButton.style.visibility = '';
		authorizeButton.onclick = handleAuthClick;
	}
}

function handleAuthClick(event) {
	gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
	return false;
}

function makeApiCall() {
	gapi.client.load('calendar', 'v3').then(function() {
		var request = gapi.client.calendar.events.list({
			'userId': 'me'
		});

		request.then(function(resp) {
			var heading = document.createElement('h4');
			var image = document.createElement('img');
			image.src = resp.result.image.url;
			heading.appendChild(image);
			heading.appendChild(document.createTextNode(resp.result.displayName));

			document.getElementById('content').appendChild(heading);
		}, function(reason) {
			console.log('Error: ' + reason.result.error.message);
		});
	});
}
