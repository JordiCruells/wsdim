var mongo = require('mongodb').MongoClient;
var host = 'mongodb://localhost:27017/learnyoumongo';
var newDoc = { firstName: process.argv[2], lastName: process.argv[3] };


mongo.connect(host, function(err, db) {
	if (err) return console.log('Error when connecting. ' + err.toString());
	var docs = db.collection('docs');
	docs.insert(
		newDoc, 
		function(err, data) {
			if (err) return console.log('Error when trying to insert document. ' + err.toString());
			docs.findOne(newDoc, {firstName:1, lastName:1, _id:0}, function(err, doc) {
				if (err) return console.log('Error when trying to query inserted document. ' + err.toString());
				console.log(JSON.stringify(doc));
				db.close();
			});
		}
	);
});
