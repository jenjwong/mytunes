// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  initialize: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      method: 'GET',
      success: data => {
        // populate collection with song list
        this.add(data.results);
      }
    });
  },

  model: SongModel

});