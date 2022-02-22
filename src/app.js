const yargs = require("yargs")
const { client, connection } = require ('./db/connection.js')
const Movie = require("./utils")

const app = async (yargsObj) => {
    const collection = await connection();
    try {
        
        if (yargsObj.add) {
            const movie = new Movie (yargsObj.title, yargsObj.actor);
            console.log(await movie.add(collection))
            // take movie info, add it to the mogodb database and cosole.log a success message
        } else if (yargsObjs.list) {
            const movie = new Movie (yargsObj.title, yargsObj.actor);
            console.log(await movie.list())
            //list all movies in database
        
    } else {
        console.log("Incorrect command")
    }

    await client.close();
    } catch (error) {
        console.log(error)
        
    }
}
app(yargs.argv);
