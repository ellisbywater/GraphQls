const express = require('express')
const expressGrapQL = require('express-graphql')
const PORT = process.env.PORT || 3030


const app = express()

app.use('/graphql', expressGrapQL({
    graphiql: true
}))

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})