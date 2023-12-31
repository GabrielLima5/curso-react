const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const conn = async () => {
    try{
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.tptuhyu.mongodb.net/?retryWrites=true&w=majority`)
        console.log('Conectou ao banco!')
        return dbConn
    } catch(e) {
        console.error(e)
    }
}

module.exports = conn