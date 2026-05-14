import Booking from "../models/BookingModels.js";
import mailer from "../mailer/index.js";

const generatePNR = async () => {
  let pnr;
  let exists = true;

  while (exists) {
    pnr = Math.random().toString(36).substring(2, 8).toUpperCase();
    exists = await Booking.findOne({ pnr });
  }

  return pnr;
};

export const flightBooking = async (req, res) => {
  try {
    const { offerId, passengers, contact, flightData, guestId } = req.body;

    const userId = req.user?._id || guestId || null;


    if (!offerId || !passengers?.length || !flightData) {
      return res.status(400).json({
        result: "Fail",
        message: "Missing required data",
      });
    }

    for (let p of passengers) {
      if (!p.name || !p.age || !p.gender) {
        return res.status(400).json({
          result: "Fail",
          message: "Invalid passenger data",
        });
      }
    }

    if (!contact?.email) {
      return res.status(400).json({
        result: "Fail",
        message: "Email is Required",
      });
    }

    if(!contact?.phone){
      return res.send(400).json({
        result:"Fail",
        message:"Phone Number Is Mendatory"
      })
    }



    if (
      !flightData.airline ||
      !flightData.from ||
      !flightData.to ||
      !flightData.departureTime ||
      !flightData.arrivalTime ||
      !flightData.price
    ) {
      return res.status(400).json({
        result: "Fail",
        message: "Invalid flight data",
      });
    }

    const existingBooking = await Booking.findOne({
      user: userId,
      offerId,
      status: "PENDING",
    });

    if (existingBooking) {
      return res.status(400).json({
        result: "Fail",
        message: "Booking already in process",
      });
    }

    const totalPrice = passengers.length * flightData.price;

    const booking = await Booking.create({
      user: userId,
      offerId,
      flightData,
      passengers,
      contact,
      totalPrice,
      pnr: await generatePNR(),
      status: "PENDING",
      paymentStatus: "PENDING",
    });

    res.status(201).json({
      result: "Success",
      message: "Booking initiated",
      booking,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      result: "Fail",
      message: error.message,
    });
  }
};