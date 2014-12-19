/*global SpotsearchTutorial, Backbone, JST*/

define([
    'jquery',
    'backbone',
    'handlebars',
    'models/playlist',
    'text!templates/albumdetail.hbs',
    'text!templates/loading.hbs'
    ],function($, Backbone, Handlebars, PlaylistModel, albumdetailTemplate, loadingTemplate){

    var AlbumdetailView = Backbone.View.extend({

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .add-track': 'addToPlaylist',
            'click #submit-name': 'createPlaylist'
        },

        initialize: function () {
            this.listenTo(this.model, 'all', function(){
                console.log(arguments);
            });
            this.listenTo(this.model, 'request', this.loading)
            this.listenTo(this.model, 'change', this.render)
        },

        render: function () {
            var model = this.model.toJSON();
            model.playlists = this.collection.toJSON();
            var template = Handlebars.compile(albumdetailTemplate);
            this.$el.html(template(model));
        },

        loading: function () {
            var template = Handlebars.compile(loadingTemplate);
            this.$el.html(template({}));
        },

        addTrack: function(){

            var trackToAdd = {
                'artist' : this.model.get('artists')[0].name,
                'album' : this.model.get('name'),
                'name' : this.model.get('tracks').items[this.trackIndex].name,
                'trackURL' : this.model.get('tracks').items[this.trackIndex].preview_url,
                'imageURL' : this.model.get('images')[0].url
            }
            this.currentPlaylist.push('tracks', trackToAdd);
            console.log(this.currentPlaylist);
            this.collection.add(this.currentPlaylist);
            this.currentPlaylist.save();
        },

        addToPlaylist: function(ev){
            ev.preventDefault();

            this.playlistID = $('#playlist-select').val();
            this.trackNumber = $(ev.currentTarget).data('trackid');
            this.trackIndex = this.trackNumber - 1;

            if(this.playlistID === 'new-playlist') {
                $('#name-new-playlist').modal();
                this.currentPlaylist = new PlaylistModel();
            } else {
                this.currentPlaylist = this.collection.get(this.playlistID);
                this.addTrack();
            }
            this.playlistID = $(ev.currentTarget).replaceWith('added');
        },

        createPlaylist: function(ev) {
            var newPlaylistName = $('#name-playlist').val();
            this.currentPlaylist.set('name', newPlaylistName);
            this.currentPlaylist.set('tracks', []);
            $('#name-new-playlist').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            this.addTrack();
        }

    });

    return AlbumdetailView;
})