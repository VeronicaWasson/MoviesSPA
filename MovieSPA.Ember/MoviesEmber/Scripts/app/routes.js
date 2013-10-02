// Routes
App.Router.map(function () {
    this.route('about');
    this.resource('genres', function () {
        this.route('movies', { path: '/:genre_name' });
    });
});

// Use the application route to pre-load the list of genres.
App.ApplicationRoute = Ember.Route.extend({
    model: function () {
        var store = this.get('store');
        var genres = ['Action', 'Drama', 'Fantasy', 'Horror', 'RomCom'].map(function (item) {
            return { name: item };
        });
        store.pushMany('genre', genres);
    }
});

App.GenresRoute = Ember.Route.extend({
    model: function () {
        return this.store.all('genre');
    },
});

// The genres.movies route gets a genre as a model, but it uses the movies controller.
// The route initializes the movies controller with a list of movies.

App.GenresMoviesRoute = Ember.Route.extend({
    serialize: function (model) {
        return { genre_name: model.get('name') };
    },
    renderTemplate: function () {
        this.render({ controller: 'movies' });
    },
    afterModel: function (genre) {
        // Use the genre to get a list of movies, and set the list on the controller.
        var controller = this.controllerFor('movies');
        var store = controller.store;
        return store.findQuery('movie', { genre: genre.get('name') })
            .then(function (data) {
                controller.set('model', data);
            });
    }
});