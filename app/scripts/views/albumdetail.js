/*global SpotsearchTutorial, Backbone, JST*/

define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templates/albumdetail.hbs',
    'text!templates/loading.hbs'
    ],function($, Backbone, Handlebars, albumdetailTemplate, loadingTemplate){

    var AlbumdetailView = Backbone.View.extend({

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
            var template = Handlebars.compile(albumdetailTemplate);
            this.$el.html(template(this.model.toJSON()));
        },

        loading: function () {
            var template = Handlebars.compile(loadingTemplate);
            this.$el.html(template({}));
        }

    });

    return AlbumdetailView;
})