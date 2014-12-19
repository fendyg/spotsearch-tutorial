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
        text: '../bower_components/requirejs-text/text',
        localStorage: '../bower_components/Backbone.localStorage/backbone.localStorage'
    }
});

require([
'jquery',
'backbone',
'bootstrap',
'localStorage',
'models/search',
'models/album',
'views/search',
'views/albumsearch',
'views/artistsearch',
'collections/playlist',
'router/router'
],
function($,
    Backbone,
    bootstrap,
    localStorage,
    SearchModel,
    AlbumModel,
    SearchView,
    AlbumSearchView,
    ArtistSearchView,
    PlaylistCollection,
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
        SpotsearchTutorial.Collections.PlaylistCollection = new PlaylistCollection();
        SpotsearchTutorial.Collections.PlaylistCollection.fetch();

        SpotsearchTutorial.Routers.Router = new Router({
            searchModel: SpotsearchTutorial.Models.SearchModel,
            albumModel: SpotsearchTutorial.Models.AlbumModel,
            playlistCollection: SpotsearchTutorial.Collections.PlaylistCollection
        });

        Backbone.history.start();
    });
});