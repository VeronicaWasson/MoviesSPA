// MoviesController does not correspond to a route, so we need to define it explicitly.
App.MoviesController = Ember.ArrayController.extend();

App.MovieController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        edit: function () {
            this.set('isEditing', true);
        },
        save: function () {
            this.content.save();
            this.set('isEditing', false);
        },
        cancel: function () {
            this.set('isEditing', false);
            this.content.rollback();
        }
    }
});

App.MovieController.reopenClass({
    ratings: ["G", "PG", "PG-13", "R", "NC-17"]
});