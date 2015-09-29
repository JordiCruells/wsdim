var mongo = require('mongodb').MongoClient;
var host = 'mongodb://localhost:27017/' + process.argv[2];
var collectionName = process.argv[3];
var id = process.argv[4];

mongo.connect(host, function(err, db) {
	if (err) return console.log('Error when connecting. ' + err.toString());
	db.collection(collectionName).remove( { _id: id }, 
		function(err, result) {
			if (err) return console.log('Error when trying to delete document. ' + err.toString());
			db.close();
		}
	);
});
