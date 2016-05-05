// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('enqueue', this.add, this);
    this.on('dequeue', this.remove, this);
    this.on('ended', this.remove, this);

    this.on('add', this.added, this);
    this.on('remove', this.removed, this);
  },

  added: function() {
    if (this.length === 1) { // only one song in the queue
      this.playFirst();
    }
  },

  removed: function() {
    if (this.length > 0) { // at least one song in the queue
      this.playFirst();
    }
  },

  playFirst: function() {
    var firstSong = this.at(0);
    if (firstSong) {
      firstSong.play();
    }
  }

});