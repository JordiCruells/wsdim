var mongo = require('mongodb').MongoClient;
var host = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(host, function(err, db) {
	if (err) return console.log('Error when connecting. ' + err.toString());
	var users = db.collection('users');
	users.update(
		{ username: 'tinatime' },{ $set: {age: 40} }, 
		function(err, records) {
			if (err) return console.log('Error when trying to update user. ' + err.toString());
			db.close();
		}
	);
});
