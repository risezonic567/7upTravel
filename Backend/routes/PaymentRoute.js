import express from 'express'
import { initiatePayment, paymentSuccess, paymentWebhook } from '../controller/PaymentController.js'

const PaymentRouter = express.Router()

PaymentRouter.post("/initiate",initiatePayment)
PaymentRouter.post("/success",paymentSuccess)
PaymentRouter.post("/webhbook",paymentWebhook)

export default PaymentRouter