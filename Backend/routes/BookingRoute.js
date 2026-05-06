import express from 'express'
import { flightBooking } from '../controller/BookingController.js'
// import { authUser } from '../middlewares/authentication.js'

const BookingRouter = express.Router()

BookingRouter.post("/booking",flightBooking)

export default BookingRouter