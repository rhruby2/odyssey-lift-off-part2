// RESTDataSource
// built-in resource caching: sending query second time will load cached results
// node-fetch does not have built-in resource caching

const {RESTDataSource} = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }

    //GET request at 'tracks' endpoint
    getTracksForHome(){
        return this.get(`tracks`);
    }

    //GET request at 'author/:authorId' endpoint
    getAuthor(authorId){
        return this.get(`author/${authorId}`);
    }
}

module.exports = TrackAPI;