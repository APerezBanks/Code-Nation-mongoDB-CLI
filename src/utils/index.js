const { MongoDBNamespace } = require("mongodb");
  class Movie {
        constructor(title, actor, info = "Not specified") {
          this.title = title;
          this.actor = actor;
          this.info = info;
        }
       // Create (CRUD)  
        async add(collection) {
          await collection.insertOne(this);
          return "Success";
          //add this to the database
        }
       //READ (CRUD)
        async list(collection) {
          return await collection.find().toArray();
          //list all movies in the db
        }
        // UPDATE (CRUD)
        async update(collection) {
                return await collection.updateOne(
                    
                    { title : this.title} , {
                    $set: {
                            title: this.title,
                            actor: this.actor,
                            info:  this.info
                          },})};
      //Delete (CRUD)
      async delete (collection){
          return await collection.deleteOne({title : this.title});
         
      }
      

      }
      
      module.exports = Movie;




//       const { MongoDBNamespace } = require("mongodb");

// class Movie {
//     constructor ( title, actor, year = "Not specified" ) {
//         this.title = title;
//         this.actor = actor;
//     // added for task ///
//         this.year = year;
//     }
//  // Create (CRUD)  add this to the database

//     async add (collection) {
//         await collection.insertOne(this);
//         return "Success";
//     }

//     //READ (CRUD) list all movies in the db

//     async list (collection){
//             return await  collection.find().toArray();
           
          
//     }


 // attemp numbert 1 to update

//  set async update(collection) {
//     this.title = collection.updateOne()
//     this.actor = collection.updateOne()
//     this.year = collection.updateOne();}

// attemp number 2 to update
    
    // collection(movies).updateOne({_id; new MongoDBNamespace.objectid("")},{$set;{title: Jhon}})



// attemp number 3 

    // async updateOne(collection, var1, var2, var3) {
    //     console.log("var1 is: ", var1 );
    //     console.log("var2 is: ", var2 );
    //     return await collection.updateOne(this, {
           
    //       $set: {
            
    //         title: var1,
    //         actor: var2,
    //         year: var3
            
    //       },
    //     });
    // };

  //Update (CRUD) attemp 4

//     async update (collection) {
//         console.log(update)
//         await collection.updateOne( 
//             { title : this.title }, 
//             { $set : {"actor" : this.actor} },
//             { $set : {"year" : this.year} }
//             );
//             return "success with update"
//    }

// attemp to delete 01

            // async query = { title: "Annie Hall" };
            // async result = await movies.deleteOne(query);
            //     if (result.deletedCount === 1) {
            //                     console.log("Successfully deleted one document.");
            //             } else {
            //                      console.log("No documents matched the query. Deleted 0 documents.");
            //                     }


//Delete (CRUD)



    






    // module.exports = Movie;

                                 