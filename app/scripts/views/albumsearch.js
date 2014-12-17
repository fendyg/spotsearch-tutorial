/*global SpotsearchTutorial, Backbone, JST*/

define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templates/albumsearch.hbs',
    'text!templates/loading.hbs'
    ],function($, Backbone, Handlebars, albumsearchTemplate, loadingTemplate){

    var AlbumsearchView = Backbone.View.extend({

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'all', function(){
                console.log(arguments);
            });
            this.listenTo(this.model, 'request', this.loading)
            this.listenTo(this.model, 'change', this.render)
        },

        render: function () {
            if(this.model.types === 'album') {
                var template = Handlebars.compile(albumsearchTemplate);
                this.$el.html(template(this.model.toJSON()));
            }
        },

        loading: function () {
            if(this.model.types === 'album') {
                var template = Handlebars.compile(loadingTemplate);
                this.$el.html(template({}));
            }
        }

    });

    return AlbumsearchView;
})
