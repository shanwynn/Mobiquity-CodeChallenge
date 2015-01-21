CC.EventsController = Ember.ArrayController.extend({
  sortProperties: ['eventDate'],
  sortAscending: true,
  actions: {
      destroy: function () {
              this.get('model').deleteRecord();
              this.get('model').save();
              this.transitionToRoute('events');
    }
  }
});
