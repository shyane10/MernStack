
// alternative way 
const{connectDatabase} = require("./database/database");
const Blog = require("./Model/BlogModel")
const express = require("express")
const app = express()
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

    console.log("Mangodb sanga connect vayo hai!");

app.get("/",(req,res)=>{
    res.json({
        message:"yo home page hai",
    })
})

app.get("/contact",(haha,huhu)=>{
    huhu.send("This is Contact Page Hai");
})


app.get("/",(req,res)=>{
    res.send("Hello I am From Home Page")
})

app.listen(3000,(req,res)=>{
    console.log("Node js started at port 3000")
});


//CREATE BLOG API

app.post("/createBlog",async(req,res)=>{

    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const description = req.body.description;

//Alternative (object destructuring)
// const {title,subtitle,description} = req.body
console.log(req.body)


// Insert to database logic goes here

await Blog.create({
    title,
    subtitle,
    description,
});



    res.json({

        status: 201,
        message: "Blog created successfully",
    });
});

// mongodb+srv://username:password@123@cluster0.ens7aae.mongodb.net/?appName=Cluster0

// mongodb+srv://username:ishan@cluster0.fnmeotc.mongodb.net/?appName=Cluster0


// // const app = require("express")()

// // alternative way 

// const express = require("express")
// const app = express()

// app.get("/about",(req,res)=>{
// res.send("This is About Page Hai")
// })

// app.get("/contact",(req,res)=>{
// res.send("This is Contact Page Hai")
// })


// app.get("/",(req,res)=>{
// res.send("Hello I am From Home Page")
// })

// app.listen(3000,(req,res)=>{
//     console.log("Node js started at port 3000")
// });




// const app = require("express")()
