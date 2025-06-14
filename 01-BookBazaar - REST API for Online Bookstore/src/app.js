import cookieParser from "cookie-parser"
import express from "express"

const app = express()

// import routes
import authRouter from "./routes/auth.route.js"

// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
// }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// routes
app.get('/', (req, res) => {
    console.log("home");
})

app.use('/auth', authRouter);

export { app }