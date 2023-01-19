const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
});

let _db;

const connectToServer = (callback) => {
client.connect((err, db) => {
if (db) {
_db = db.db("test_example");
console.log("Successfully connected to MongoDB.");
}
return callback(err);
});
};

const getDb = () => _db;

module.exports = {
connectToServer,
getDb
};




