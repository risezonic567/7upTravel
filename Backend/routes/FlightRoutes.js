import express from 'express'
import { fetchFlights, getFlightById } from '../controller/FlightController.js'
const FlightRouter= express.Router()

FlightRouter.post("/flight-search",fetchFlights)
FlightRouter.get("/flight/:id",getFlightById)


export default FlightRouter