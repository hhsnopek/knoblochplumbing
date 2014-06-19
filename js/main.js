(function() {
  require.config({
    paths: {
      underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
      Backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      Backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  require(['jquery', 'Backbone'], function($, Backbone) {
    return console.log('hello');
  });

}).call(this);
