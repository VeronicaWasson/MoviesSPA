App.Movie = DS.Model.extend({
    Title: DS.attr(),
    Genre: DS.attr(),
    Year: DS.attr(),
    Rating: DS.attr(),
});

// Ember Data expects a particular JSON payload format.
// This custom serializer convertss the data from Web API into the
// format that Ember Data expects.

App.MovieSerializer = DS.RESTSerializer.extend({
    // TODO: extractSingle: function (store, type, payload, id, requestType) {

    extractArray: function (store, type, payload, id, requestType) {
        var movies = payload;
        payload = { movies: movies };
        return this._super(store, type, payload, id, requestType);
    },
    normalizeHash: {
        movies: function (hash) {
            hash.id = hash.ID;
            delete hash.ID;
            return hash;
        }
    },
    serialize: function (post, options) {
        var json = {
            ID: post.get('id'),
            Title: post.get('Title'),
            Year: post.get('Year'),
            Genre: post.get('Genre'),
            Rating: post.get('Rating')
        };
        return json;
    }
});

App.MovieAdapter = DS.RESTAdapter.extend({
    // Override how the REST adapter creates the JSON payload for PUT requests.
    updateRecord: function (store, type, record) {
        var data = store.serializerFor(type.typeKey).serialize(record);
        return this.ajax(this.buildURL(type.typeKey, data.ID), "PUT", { data: data });
    },
    namespace: 'api'
});

App.Genre = DS.Model.extend({
    name: DS.attr()
});