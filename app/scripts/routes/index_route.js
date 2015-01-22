CC.IndexRoute = Ember.Route.extend({
  model: function() {
    return {
      events: Ember.A([
      {title: "Demo Event", start: Date.now()},
        ])
    };
  }
});
