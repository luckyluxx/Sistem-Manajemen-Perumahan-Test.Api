const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("services is running, but dou you have access?")
})

app.listen(3001, ()=> {
  console.log('backend-services running on port 3001')
})