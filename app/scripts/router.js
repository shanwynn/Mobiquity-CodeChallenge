CC.Router.map(function () {

  this.route('events');
  this.route('new_event', {path: 'event/new'});
  this.route('edit_event', {path: 'event/:id/edit'});


});
