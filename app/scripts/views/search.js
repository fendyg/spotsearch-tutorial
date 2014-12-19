/*global SpotsearchTutorial, Backbone, JST*/

define([
    'jquery',
    'backbone',
    ],function($,Backbone){

    var SearchView = Backbone.View.extend({

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click #submit': 'search',
            'submit form': 'search',
            'change input[name=type]': 'selectType'
        },

        initialize: function (options) {
            this.router = options.router;
        },

        search: function(ev) {
            ev.preventDefault();
            if($('#search-query').val() !== "") {
                this.model.query = $('#search-query').val();
                this.router.navigate('search' + '/' + this.model.types + '/' +
                    this.model.query, {trigger: true});
                this.model.fetch();
            }
        },

        selectType: function() {
            if($('input[name=type]:checked', '#spotForm').val() == 'albums') {
                this.model.types = 'album';
            } else {
                this.model.types = 'artist';
            }
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });
    return SearchView;
})
