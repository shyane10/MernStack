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



// alternative way 
const { connectDatabase } = require("./database/database");
const Blog = require("./Model/BlogModel")
const express = require("express")

const app = express();

// Connect Database
connectDatabase();
console.log("Mongodb sanga connect vayo hai!");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES --------------------------------------

// HOME ROUTE
app.get("/", (req, res) => {
    res.send("Hello I am From Home Page");
});

// CONTACT ROUTE
app.get("/contact", (req, res) => {
    res.send("This is Contact Page Hai");
});

// CREATE BLOG API
app.post("/createBlog", async (req, res) => {
    const { title, subtitle, description } = req.body;

    try {
        await Blog.create({ title, subtitle, description });

        res.json({
            status: 201,
            message: "Blog created successfully",
        });
    } catch (err) {
        res.json({
            status: 500,
            message: "Error creating blog",
            error: err.message
        });
    }
});

// GET ALL BLOGS
app.get("/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find();

        if (blogs.length === 0) {
            return res.json({
                status: 404,
                message: "Empty Blog",
                data: [z]
            });
        }

        res.json({
            status: 200,
            message: "Blogs fetched successfully",
            data: blogs
        });

    } catch (err) {
        res.json({
            status: 500,
            message: "Error fetching blogs",
            error: err.message
        });
    }
});

// SERVER --------------------------------------
app.listen(3000, () => {
    console.log("Node js started at port 3000");
});
