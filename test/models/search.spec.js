/*global beforeEach, describe, it, assert, expect  */
'use strict';

define([
    'models/search'
    ],function(SearchModel){

        describe('Search Model', function(){

            beforeEach(function(){
                this.searchModel = new SearchModel;
            });

            it('should update the url when query is changed',function(){
                this.searchModel.query = 'jack';
                this.searchModel.types = 'album';
                var url = this.searchModel.url();

                expect(url).to.equal('https://api.spotify.com/v1/search?q=jack&type=album');
            });
        });
});