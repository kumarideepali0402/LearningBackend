const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dips:v9!_eGWimBJE8LU@cluster0.cfdktkv.mongodb.net/to");
const todoSchema = mongoose.Schema({
    title : String,
    description: String,
    completed : Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}

