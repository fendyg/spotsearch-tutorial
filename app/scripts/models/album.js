/*global SpotsearchTutorial, Backbone*/

define([
    'jquery',
    'backbone'
    ],function($, Backbone){

    var AlbumModel = Backbone.Model.extend({

        url: function(){
            return 'https://api.spotify.com/v1/albums/' + this.albumID;
        },

        initialize: function() {
            this.albumID = '5dN7F9DV0Qg1XRdIgW8rke';
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });
    return AlbumModel;
})