CC.EditEventController = Ember.ObjectController.extend({
actions: {
  update: function () {
    this.model.save();
    this.transitionToRoute('events');
   },
  destroy: function () {
    if (confirm('Are you sure you want to delete this event?')) {
    this.get('model').deleteRecord();
    this.get('model').save();
    this.transitionToRoute('events');
      }
    }
  }
});
