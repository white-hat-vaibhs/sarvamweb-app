import mongoose from 'mongoose'

const connection = {}

async function connectDb() {
    if (connection.isConnected) {
        //Use existing database connection
        console.log("Using existing connection")
        return;
    }
    //use new db connection
    const db = await mongoose.connect(process.env.MONGO_SRV, {
        //to remove depreciaated warning
        //go to mongoose documentation for more of this
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // for reference
    //!remove in dev phase{Only Console database}
    console.log("DB Connected")
    //Use this for connecting database to serverless app
    connection.isConnected = db.connections[0].readyState;
}

export default connectDb;