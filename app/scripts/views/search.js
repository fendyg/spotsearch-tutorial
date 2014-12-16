/*global SpotsearchTutorial, Backbone, JST*/

SpotsearchTutorial.Views = SpotsearchTutorial.Views || {};

(function () {
    'use strict';

    SpotsearchTutorial.Views.Search = Backbone.View.extend({

        template: JST['app/scripts/templates/search.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click #submit': 'search',
            'submit form': 'search',
            'change input[name=type]': 'selectType'
        },

        initialize: function () {
            this.model = searchModel;
        },

        search: function(ev) {
            ev.preventDefault();
            window.searchModel.query = $('#search-query').val();
            window.searchModel.fetch();
        },

        selectType: function() {
            if($('input[name=type]:checked', '#spotForm').val() == 'albums') {
                window.searchModel.types = 'album';
            } else {
                window.searchModel.types = 'artist';
            }
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
