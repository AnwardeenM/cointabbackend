const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connection =mongoose.connect("mongodb+srv://Anwardeen:Anwar1997@cluster0.mnqdo.mongodb.net/cointab?retryWrites=true&w=majority")



module.exports=connection;