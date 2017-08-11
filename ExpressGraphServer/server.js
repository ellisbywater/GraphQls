const express = require('express')
const graph = require('express-graphql')

const schema = require('./schema')

const app = express()

app.use('/graphql', graph({
    schema:schema,
    graphiql:true
}))

app.listen(4000, ()=>{
    console.log("Server is listening on port 4000")
})