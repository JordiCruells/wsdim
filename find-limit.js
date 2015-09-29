var mongo = require('mongodb').MongoClient;
var host = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2]);

mongo.connect(host, function(err, db) {

	if (err) return console.log('Error when connecting. ' + err.toString());
	db.collection('parrots')
	  .find(
		{'age': {$gt: age}},
		{ 'name': 1, 'age': 1, '_id': 0}
	   )
	  .toArray( 
		function(err, documents) {
			if (err) return console.log('Error when trying to read documents. ' + err.toString());
			console.log(documents);
			db.close();
		}
	  );
});
