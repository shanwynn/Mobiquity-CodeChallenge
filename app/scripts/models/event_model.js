CC.Event = DS.Model.extend({
  eventTitle: DS.attr('string'),
  eventDate:  DS.attr('string'),

  formattedEvent: function() {
    return moment(this.get('eventDate')).format('LLLL');
  }.property('eventDate')
});
