window.app = window.todoApp || {};

window.app.service = (function () {
    var baseUri = '/api/movies/';
    var serviceUrls = {
        movies: function () { return baseUri; },
        byGenre: function (genre) { return baseUri + '?genre=' + genre; },
        byId: function (id) { return baseUri + id; }
    }

    function ajaxRequest(type, url, data) {
        var options = {
            url: url,
            headers: {
                Accept: "application/json"
            },
            contentType: "application/json",
            cache: false,
            type: type,
            data: data ? ko.toJSON(data) : null
        };
        return $.ajax(options);
    }

    return {
        allMovies: function () {
            return ajaxRequest('get', serviceUrls.movies());
        },
        byGenre: function (genre) {
            return ajaxRequest('get', serviceUrls.byGenre(genre));
        },
        update: function (item) {
            return ajaxRequest('put', serviceUrls.byId(item.ID), item);
        }
    };
})();
