var mongo = require('mongodb').MongoClient;
var host = 'mongodb://localhost:27017/learnyoumongo';
var size = process.argv[2];

mongo.connect(host, function(err, db) {
	if (err) return console.log('Error when connecting. ' + err.toString());
	db.collection('prices')
	.aggregate([
      		{ $match: { size: size }}
	      , { $group: {
		        _id: 'averagePrice' 
		      , averagePrice: {
		          $avg: '$price'
		        }
		      }
		}
    ]).toArray(function(err, results) {
      if (err) throw err;
      if (!results.length) throw new Error('No results found'); 
      console.log(results[0].averagePrice.toFixed(2));
      db.close();
    });
});
