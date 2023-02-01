const express = require('express');
const cors = require('cors');
const colors = require('colors');
const { dbConnect } = require('./utils/dbConnects');
const orderRouter = require('./routes/Ordrers.route');
const paymentRouter = require('./routes/payment.route');
const successRoute = require('./routes/PaymentSuccess.route');
const userRouter = require('./routes/Users.route');
const port = process.env.PORT || 5000
const jwt = require('jsonwebtoken');
require('dotenv').config()
const app = express()

// middleware
app.use(express.json());
app.use(cors());

dbConnect()

// Authentication routes
app.use("/auth/manage", userRouter)



// Products routes
app.use("/api/order", orderRouter)

// payment routes
app.use("/api/payment", successRoute)
app.use("/payment/success", paymentRouter)







app.get('/', (req, res) => { res.send(`<h1>Hello from  server </h1>`); })
// my application
app.listen(port, () => { console.log(` server is running on port: `.red.bold, port); })