const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const config = require('../config');

const URI = `mongodb://${config.db.url}:${config.db.port}/${config.db.dbName}`;
let _db = null;

class Db {
  async connect() {
    if(!_db) {
      _db = await MongoClient.connect(URI);
      this.todo = _db.collection('todos');
    }
  }
  close() {
    _db.close();
  }
  objectId(val) {
    return ObjectID(val);
  }
}

module.exports = new Db();