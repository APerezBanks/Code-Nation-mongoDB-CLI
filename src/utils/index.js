class Movie {
    constructor ( title, actor, year = "Not specified" ) {
        this.title = title;
        this.actor = actor;
        // added for task
        this.year = year;
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