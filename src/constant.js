const DatabaseConnectionString = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.MONGO_CLUSTER_STRING}mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

module.exports = { DatabaseConnectionString };
