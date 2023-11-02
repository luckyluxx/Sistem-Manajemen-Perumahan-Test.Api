//api routing controllers
const houseController = require('./controllers/houseController')
const paymentController = require('./controllers/paymentController')

const express = require('express')
const mongoose = require('mongoose')
const connectToDb = require('./connection/dbConnection')
const cors = require('cors')
const app = express()

// connect db
connectToDb();
// configure express app
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(
  // {
  // origin: [
  //   'http://localhost:3000',
  // ]}
))

// default routes handling
app.get('/', (req, res) => {
  res.send("services is running, but dou you have access?")
})

// houses controller
app.get("/api/houses", houseController.reads);
app.get("/api/houses/:id", houseController.read);
app.delete("/api/houses/:id", houseController.delete);
app.post("/api/houses", houseController.create);

// payment controller
app.get("/api/payments", paymentController.reads)
app.post("/api/add-payment:id", paymentController.create)

// start the server
app.listen(process.env.PORT || 3001)
// app is running

