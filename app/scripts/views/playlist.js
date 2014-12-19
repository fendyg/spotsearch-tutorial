//Playlist view

define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templates/playlist.hbs',
    ], function($, Backbone, Handlebars, playlistTemplate) {

    var PlaylistView = Backbone.View.extend({

        events: {
            'change .playlist-selector': 'changePlaylist',
            'click .track': 'playTrack'
        },

        initialize: function() {
            this.activePlaylist = '';
        },

        render: function() {
            var template = Handlebars.compile(playlistTemplate);
            if (this.activePlaylist === '') {
                this.currentPlaylistView = {};
                this.currentPlaylistView.playlists = this.collection.toJSON();
                this.$el.html(template(this.currentPlaylistView));
            } else {
                this.currentPlaylistView = this.collection.get(this.activePlaylist);
                this.currentPlaylistView = this.currentPlaylistView.toJSON();
                this.currentPlaylistView.playlists = this.collection.toJSON();
                this.$el.html(template(this.currentPlaylistView));
            }
        },

        changePlaylist: function(ev){
            this.activePlaylist = ev.currentTarget.value;
            this.render();
        },
        playTrack: function(ev) {
            ev.preventDefault();
            var selectedTrack = $(ev.currentTarget).parents('tr').attr('id');
            selectedTrack = Number(selectedTrack.replace('track-', ''));
            var currentPlaylist = this.collection.get(this.activePlaylist);
            $('#player').attr('src', ev.currentTarget.attributes.href.value);
            $('#player').trigger('play');
            $('#current-song-image').attr('src', currentPlaylist.get('tracks')[selectedTrack].imageURL);
            $('#playing-artist').html(currentPlaylist.get('tracks')[selectedTrack].album);
            $('#playing-track').html(currentPlaylist.get('tracks')[selectedTrack].artist);
        }

    });

    return PlaylistView;
});