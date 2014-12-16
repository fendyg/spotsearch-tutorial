/*global SpotsearchTutorial, Backbone, JST*/

SpotsearchTutorial.Views = SpotsearchTutorial.Views || {};

(function () {
    'use strict';

    SpotsearchTutorial.Views.Albumsearch = Backbone.View.extend({

        template: JST['app/scripts/templates/albumsearch.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(window.searchModel, 'all', function(){
                console.log(arguments);
            });
            this.listenTo(window.searchModel, 'request', this.loading)
            this.listenTo(window.searchModel, 'change', this.render)
        },

        render: function () {
            if(window.searchModel.types === 'album') {
                var albumSearchTemplate = $('#album-search-template').html();
                var template = Handlebars.compile(albumSearchTemplate);
                this.$el.html(template(searchModel.toJSON()));
            }
        },

        loading: function () {
            if(window.searchModel.types === 'album') {
                var loadingTemplate = $('#loading-template').html();
                var template = Handlebars.compile(loadingTemplate);
                this.$el.html(template({}));
            }
        }

    });

})();
