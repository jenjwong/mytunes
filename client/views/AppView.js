// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function() {
    this.$el.html(`
      <div class="container-fluid">
        <div class="row">
          <div id="library" class="col-md-8"></div>
          <div id="queue" class="col-md-4"></div>
        </div>
      </div>
      <footer class="footer">
        <div id="player"></div>
      </footer>
    `);
    this.$el.find('#player').append(this.playerView.render());
    this.$el.find('#library').append(this.libraryView.render());
    this.$el.find('#queue').append(this.queueView.render());

    return this.$el;
  }

});
