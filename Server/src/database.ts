//Here is how to connect to the MongoDB database
const DB_CONNECTION_STRING = 'mongodb://localhost/';
const databaseName = 'todolist';
const databaseUri = DB_CONNECTION_STRING.concat(databaseName);

export default databaseUri;