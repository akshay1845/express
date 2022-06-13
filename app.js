const express = require('express')
const ejs  = require('ejs')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.set("view engine", 'ejs')

// app.set('views','views')
// app.use(logger) // always on top - for globally use <== MIDDLEWARE


// app.get('/', logger , (req, res)=>{ //middleware in speific function && can be use mulitple times
//     // res.send("hello world")

//     // res.status(200).send("hiiiii")

//     res.render('index', { name: "akshay"})
// })

//routes
const userRouter = require('./routes/users')
app.use('/users', userRouter)

//middlewares
// function logger(req,res,next){
//     console.log(req.originalUrl)
//     next()
// }  

app.listen(3000)