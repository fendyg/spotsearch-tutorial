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
'views/search',
'views/albumsearch',
'views/artistsearch'
],
function($,
    Backbone,
    bootstrap,
    SearchModel,
    SearchView,
    AlbumSearchView,
    ArtistSearchView
){
    window.SpotsearchTutorial = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };

    $(document).ready(function(){
        window.searchModel = new SearchModel();
        window.searchModel.fetch();
        window.searchView = new SearchView({
            el: $('#search-container')
        });
        window.albumSearchView = new AlbumSearchView({
            el: $('#album-search-container')
        });
        window.artistSearchView = new ArtistSearchView({
            el: $('#artist-search-container')
        });
    });
});