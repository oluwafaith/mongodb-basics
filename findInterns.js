var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    //to fetch the first object
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });

    //rating of 7
    var query = { rating: 7 };
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });

    //projecting movie titles
    dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, movie: 1 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});