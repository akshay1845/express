const express = require('express')
const ejs  = require('ejs')
const app = express()

app.set("view engine", 'ejs')
app.use(logger) // always on top - for globally use <== MIDDLEWARE

app.use(express.static('public'))

// app.get('/', logger , (req, res)=>{ //middleware in speific function && can be use mulitple times
//     // res.send("hello world")

//     // res.status(200).send("hiiiii")

//     res.render('index', { name: "akshay"})
// })

//routes
const userRouter = require('./routes/users')
app.use('/users', userRouter)

//middlewares
function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}  

app.listen(3000)