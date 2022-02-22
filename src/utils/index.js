class Movie {
    constructor ( title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }
    async add (collection) {
        //add this to the database
        await collection.insertOne(this);
        return "Success";
    }

        async list (collection){
            return await  collection.find().toArray();
            // list all movies in the db
        }
}

module.exports = Movie;