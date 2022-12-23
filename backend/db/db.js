const { MongoClient } = require("mongodb");

let dbConnection;
let uri = 'mongodb+srv://root1:pass123@cluster0.nfckp1n.mongodb.net/geeksOnMission?retryWrites=true&w=majority/'

exports.connectToDb = async (cb) => {
    try {
        const client = await MongoClient.connect(uri);
        dbConnection = client.db();
        return cb();
    } catch (error) {
        console.log(error);
        return cb(error);
    }
};
exports.getDb = () => dbConnection;

