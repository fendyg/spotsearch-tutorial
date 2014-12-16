/*global SpotsearchTutorial, $*/


window.SpotsearchTutorial = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
};

$(document).ready(function () {
    'use strict';
    window.searchModel = new window.SpotsearchTutorial.Models.Search();
    window.searchModel.fetch();
    window.searchView = new window.SpotsearchTutorial.Views.Search({
        el: $('#search-container')
    });
    window.albumSearchView = new window.SpotsearchTutorial.Views.Albumsearch({
        el: $('#album-search-container')
    });
    window.artistSearchView = new window.SpotsearchTutorial.Views.Artistsearch({
        el: $('#artist-search-container')
    });
});
