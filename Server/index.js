const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {graphqlHTTP}=require('express-graphql')
const schema=require('./schema/schema')
const app = express();
const PORT = process.env.PORT || 5000;

//mongodb connection
const connectDB = require("./Config/db");
connectDB();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
app.use(cors());

app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV
}))

//run server
app.listen(PORT, () => console.log("Server running at the PORT " + PORT));