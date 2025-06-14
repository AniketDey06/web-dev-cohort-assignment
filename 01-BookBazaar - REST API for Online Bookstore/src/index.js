import { app } from './app.js'
import dotenv from 'dotenv'
import mongoDBconnect from './config/db.js'

dotenv.config()

const PORT = process.env.PORT || 3000


mongoDBconnect()
    .then(() => {
        app.on("error", (error) => {
            console.log("error", error)
            throw error
        })
        app.listen(PORT, () => console.log(`app is listening on - ${PORT} `))
    })
    .catch((error) => {
        console.log(`connection fail error ${error}`)
    })