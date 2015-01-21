$.Velocity.Redirects.euiPoplistOpenFlyin = (element, options) ->
  component = $(element).find('.eui-component')
  
  $.Velocity.animate component, {
    opacity: [1, 0]
    scaleX: [1, 0.7]
    scaleY: [1, 0.7]
  }, {
    duration: options.duration or 100
  }
