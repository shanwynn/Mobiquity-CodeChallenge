CC.IndexRoute = Ember.Route.extend({
  model: function() {
    return {
      events: Ember.A([
      {title: "JS Meetup", start: Date.now()},
        ])
    };
  }
});
