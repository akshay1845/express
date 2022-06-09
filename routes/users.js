const express = require("express");

const router = express.Router();
router.use(logger)

router.get("/", (req, res) => {
  res.send("from user page");
});
router.get("/new,", (req, res) => {
    res.render("users/new"), {fName:"Virat Kohli"};
  });  

router.post("/", (req, res) => {
//   res.send("using post");
console.log(req.body.firstName);
});

// router
//   .route("/:id")
//   .get((req, res) => {
//     res.send(`this is dynamic Id ${req.params.id} added by Users in URL`);
//   })
//   .put((req, res) => {
//     res.send(
//       `Update = : = this is dynamic Id ${req.params.id} added by Users in URL`
//     );
//   })
//   .delete((req, res) => {
//     res.send(
//         `Delete  = : = this is dynamic Id ${req.params.id} added by Users in URL`
//         );
//     });
    
//     const users = [{name:'virat'}, {name:'Rohit'}]
//   router.param("id", (req, res, next, id)=>{
//     // console.log(id)  

//     req.user = users[id];
//   next()
//   })
// router.get("/:id", (req, res) => {
//   res.send(`this is dynamic Id ${req.params.id} added by Users in URL`);
// });
      
// router.put("/:id", (req, res) => {
//   res.send(
//     `Update = : = this is dynamic Id ${req.params.id} added by Users in URL`
//   );
// });

// router.delete("/:id", (req, res) => {
//   res.send(
//     `Delete  = : =this is dynamic Id ${req.params.id} added by Users in URL`

//   );
// });

//middleware

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
} 




//this will not execuate ae we have passed dynamic id (:id) above ===> id = new
router.get("/first", (req, res) => {
  res.send("from user first page");
});      
module.exports = router;
