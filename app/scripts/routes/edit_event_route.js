CC.EditEventRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('event', params.id);
  }
});
