const {mongoose } = require("mongoose");
exports.connectDatabase = ()=> {


    mongoose.connect("mongodb+srv://username:ishan@cluster0.fnmeotc.mongodb.net/?appName=Cluster0")

};

console.log("Database connect vayo hai!");
