CC.NewEventController = Ember.Controller.extend({
    actions: {
        save: function() {
            if(!this.get('eventTitle')) {
              this.set('errors', 'Title can not be blank.');
              return;
            }

            var eventRecord = this.store.createRecord('event', {
              eventTitle:    this.get('eventTitle'),
              eventDate:     this.get('eventDate')
            });
            eventRecord.save();
            this.transitionToRoute('events');
        }
    }
});
