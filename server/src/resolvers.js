//functions fetch data from any amount of sources and transforms them into required shape
const resolvers = {
    Query: {
        // returns array of Tracks used to populate homepage grid of the web client
        //matches 'tracksForHome' field in server/src/schema.js
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        },
    },
    Track: {
        //parent contains raw track from tracks list returned by RESTDataSource
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
};


module.exports = resolvers;