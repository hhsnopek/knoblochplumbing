require.config(
  paths:
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
    Backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min'
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min'
  shim:
    underscore:
      exports: '_'
    Backbone:
      deps: ['underscore', 'jquery']
      exports: 'Backbone'
)

require [
  'jquery',
  'Backbone',
], ($, Backbone) ->

  ###*
   * display page
   * @param  {String} page    div without hash
  ###
  display = (page) ->
    pagenation.set("currentpage", page)
    console.log "Displaying #{page}\n"

    if typeof page is 'undefined' or page is null
      $("#landing").css('display', 'block')
      $("#services").css('display', 'block')
    else
      $("##{page}").css('display', 'block')
      if page is "services"
        $("#landing").css('display', 'block')


  ###*
   * hide page
  ###
  hide = ->
    page = pagenation.get("currentpage")

    if typeof page is 'undefined' or page is null
      console.log "Hiding nothing"
    else
      $("##{page}").css('display', 'none')
      if page is 'services'
        $("#landing").css('display', 'none')
      console.log "Hiding: #{page}"


  class pageModel extends Backbone.Model
    currentpage: ""
    requestedpage: ""


  class indexView extends Backbone.View

    constructor: ->
      @render()

    render: ->
      hide()
      display(pagenation.get("requestedpage"))

  class aboutView extends Backbone.View

    constructor: ->
      @render()

    render: ->
      hide()
      display(pagenation.get("requestedpage"))

  class whyusView extends Backbone.View

    constructor: ->
      @render()

    render: ->
      hide()
      display(pagenation.get("requestedpage"))


  class router extends Backbone.Router
    routes:
      "":         "index"
      "whyus":    "whyus"
      "services": "index"
      "about":    "about"

    index: ->
      pagenation.set("requestedpage", "services")
      new indexView()

    about: ->
      pagenation.set("requestedpage", "about")
      new aboutView()

    whyus: ->
      pagenation.set("requestedpage", "whyus")
      new whyusView()


  pagenation = new pageModel()
  new router()
  Backbone.history.start()
