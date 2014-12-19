//require js setup
/*global require*/
'use strict'

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/requirejs-text/text'
    }
});

require([
'jquery',
'backbone',
'bootstrap',
'models/search',
'models/album',
'views/search',
'views/albumsearch',
'views/artistsearch',
'router/router'
],
function($,
    Backbone,
    bootstrap,
    SearchModel,
    AlbumModel,
    SearchView,
    AlbumSearchView,
    ArtistSearchView,
    Router
){
    $(document).ready(function(){
        window.SpotsearchTutorial = {
            Models: {},
            Collections: {},
            Views: {},
            Routers: {}
        };

        SpotsearchTutorial.Models.SearchModel = new SearchModel();
        SpotsearchTutorial.Models.AlbumModel = new AlbumModel();
        SpotsearchTutorial.Routers.Router = new Router({
            searchModel: SpotsearchTutorial.Models.SearchModel,
            albumModel: SpotsearchTutorial.Models.AlbumModel
        });

        Backbone.history.start();
    });
});