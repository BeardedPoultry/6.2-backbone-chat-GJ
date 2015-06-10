import IndexView from './views/index';

import {UserCollection} from './models/user';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'chat': 'chat'
  },

  initialize: function() {
    this.cool = true;
    this.users = new UserCollection();
    this.listenTo(this.users, 'add', function(){
      this.navigate('chat', {trigger: true});
    }.bind(this));
  },

  index: function(){
    var view = new IndexView({collection: this.users});
    $('#app').html(view.el);
  },

  chat: function(){
    $('#app').html(JST.chat());
  }
});

var router = new Router();

export default router;

// The Old Ugly Way™

// var Router = function(){
//   Backbone.Router.apply(this, arguments);
//   this.cool = true;
// };

// Router.prototype = Object.create(Backbone.Router.prototype);

// Router.prototype.routes = {
//   '': 'index',
//   'chat': 'chat'
// };

// Router.prototype.index = function(){
//   $('#app').html(JST.index());
// };

// Router.prototype.chat = function(){
//   $('#app').html(JST.chat());
// };
