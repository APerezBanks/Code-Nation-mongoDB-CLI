const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const Movie = require("./utils");

const app = async (yargsObj) => {
  const collection = await connection();
  try {
    if (yargsObj.add) {
      const movie = new Movie(yargsObj.title, yargsObj.actor);
      console.log(await movie.add(collection));
      //take movie info, add it to the mongodb database and console.log a success message
    } else if (yargsObj.list) {
      const movie = new Movie(yargsObj.title, yargsObj.actor);
      console.log(await movie.list(collection));
      //list all movies in database

    } else if (yargsObj.update) {
        const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.year);
        console.log(await movie.update(collection));

    } else if (yargsObj.delete) {
        const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.year);
        console.log(await movie.delete(collection));

        
      
    } else {
      console.log("Incorrect command");
    }
    await client.close();
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);


// added to do  challenge bellow

        // } else if (yargsObj.updateOne) {
        //     const movie = new Movie (yargsObj.title, yargsObj.actor, yargsObj.year);
        //     console.log(await movie.update(collection))

    // update on object in the list