var mongo = require('mongodb').MongoClient;
var host = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2]);

mongo.connect(host, function(err, db) {

	if (err) return console.log('Error when connecting. ' + err.toString());
	db.collection('parrots').count(
		{'age': {$gt: age}}, 
		function(err, count) {
			if (err) return console.log(err.toString());
			console.log(count);
			db.close();
		}
	);
});
