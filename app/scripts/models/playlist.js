// playlist model

define([
    'backbone'
], function(Backbone) {

    var Playlist = Backbone.Model.extend({

        initialize: function() {

        },

        validate: function(attrs, options) {

        },

        parse: function(response, options) {
            return response;
        },

        push: function(arg, val) {
            var arr = _.clone(this.get(arg));
            arr.push(val);
            this.set(arg, arr);
        }
    });

    return Playlist;
});