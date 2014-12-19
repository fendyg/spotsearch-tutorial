define([
    'jquery',
    'backbone',
    'views/search',
    'views/artistsearch',
    'views/albumsearch',
    'views/albumdetail',
    'views/playlist'
    ],function($, Backbone, SearchView, ArtistSearchView, AlbumSearchView, AlbumDetailView, PlaylistView){
    var Router = Backbone.Router.extend({

        routes: {
            '': 'homeRoute',
            'search/album/:query': 'albumSearchRoute',
            'search/artist/:query': 'artistSearchRoute',
            'album/:albumID': 'albumViewRoute',
            'playlist' : 'playlistRoute'
        },

        initialize: function(options){
            this.searchModel = options.searchModel;
            this.albumModel = options.albumModel;
            this.playlistCollection = options.playlistCollection;

            this.searchView = new SearchView({
                el: $('#search-container'),
                model: this.searchModel,
                router: this
            });

            this.albumSearchView = new AlbumSearchView({
                el: $('#album-search-container'),
                model: this.searchModel
            });

            this.artistSearchView = new ArtistSearchView({
                el: $('#artist-search-container'),
                model: this.searchModel
            });

            this.albumDetailView = new AlbumDetailView({
                el: $('#album-container'),
                model: this.albumModel,
                collection: this.playlistCollection
            });

            this.playlistView = new PlaylistView({
                el: $('#playlist-container'),
                collection: this.playlistCollection
            })
        },

        homeRoute: function() {
            this.clearResults();
        },

        clearResults: function() {
            $('#artist-search-container').empty();
            $('#album-search-container').empty();
            $('#album-container').empty();
            $('#playlist-container').empty();
            this.searchModel.attributes = {};
            this.albumModel.attributes = {};
        },

        albumSearchRoute: function(query) {
            this.clearResults();
            this.searchModel.query = query;
            $('#search-query').val(query);
            this.searchModel.types = 'album';
            this.searchModel.fetch();
        },

        artistSearchRoute: function(query) {
            this.clearResults();
            this.searchModel.query = query;
            $('#search-query').val(query);
            this.searchModel.types = 'artist';
            this.searchModel.fetch();
        },

        albumViewRoute: function(albumID) {
            this.clearResults();
            this.albumModel.albumID = albumID;
            this.albumModel.fetch({
                reset: true
            });
        },

        playlistRoute: function() {
            this.clearResults();
            this.playlistView.render();
        }
    });

    return Router;
});