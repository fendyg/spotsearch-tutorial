define([
    'jquery',
    'backbone',
    'views/search',
    'views/artistsearch',
    'views/albumsearch'
    ],function($, Backbone, SearchView, ArtistSearchView, AlbumSearchView){
    var Router = Backbone.Router.extend({

        routes: {
            '': 'homeRoute',
            'search/album/:query': 'albumSearchRoute',
            'search/artist/:query': 'artistSearchRoute'
        },

        initialize: function(options){
            this.model = options.searchModel;

            this.searchView = new SearchView({
                el: $('#search-container'),
                model: this.model,
                router: this
            });

            this.albumSearchView = new AlbumSearchView({
                el: $('#album-search-container'),
                model: this.model
            });

            this.artistSearchView = new ArtistSearchView({
                el: $('#artist-search-container'),
                model: this.model
            })
        },

        homeRoute: function() {
            this.clearResults();
        },

        clearResults: function() {
            $('#artist-search-container').empty();
            $('album-search-container').empty();
            this.model.attributes = {};
        },

        albumSearchRoute: function(query) {
            this.clearResults();
            this.model.query = query;
            $('#search-query').val(query);
            this.model.types = 'album';
            this.model.fetch();
        },

        artistSearchRoute: function(query) {
            this.clearResults();
            this.model.query = query;
            $('#search-query').val(query);
            this.model.types = 'artist';
            this.model.fetch();
        }
    });

    return Router;
});