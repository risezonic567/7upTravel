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

    if (!contact?.email || !contact?.phone) {
      return res.status(400).json({
        result: "Fail",
        message: "Contact details required",
      });
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

//  mailer.sendMail(
//   {
//     from: process.env.MAILER,
//     to: booking.contact.email,
//     subject: `✈️ Booking Confirmed | PNR: ${booking.pnr} | ${process.env.SITE_NAME}`,
//     html: `
//     <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 20px;">
//       <div style="max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        
//         <!-- HEADER -->
//         <div style="background-color: #002e6d; padding: 25px; color: white; display: flex; align-items: center; justify-content: space-between;">
//           <div style="text-align: left;">
//             <h2 style="margin: 0; font-size: 22px; letter-spacing: 1px;">Booking Confirmation</h2>
//             <p style="margin: 5px 0 0; font-size: 13px; opacity: 0.8;">Thank you for choosing ${process.env.SITE_NAME}</p>
//           </div>
//           <img src="${booking.flightData.logo || 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/IndiGo_logo.svg/1200px-IndiGo_logo.svg.png'}" 
//                style="height: 35px; background: white; padding: 5px; border-radius: 4px;" />
//         </div>

//         <!-- PNR BAR -->
//         <div style="background: #f9f9f9; padding: 15px 25px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
//           <div style="font-size: 14px; color: #666;">PNR / Booking Reference</div>
//           <div style="color: #002e6d; font-weight: bold; font-size: 20px; letter-spacing: 1px;">${booking.pnr}</div>
//         </div>

//         <div style="padding: 30px;">
//           <p style="margin-top: 0; color: #333;">Hi <b>Passenger</b>, your flight is confirmed!</p>

//           <!-- FLIGHT ITINERARY -->
//           <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin: 20px 0; background: #fafafa;">
//             <div style="display: flex; justify-content: space-between; align-items: center;">
              
//               <!-- FROM -->
//               <div style="text-align: left; flex: 1;">
//                 <h1 style="margin: 0; color: #002e6d; font-size: 28px;">${booking.flightData.from}</h1>
//                 <p style="margin: 5px 0; font-size: 14px; color: #333; font-weight: bold;">${booking.flightData.departureTime}</p>
//               </div>

//               <!-- ICON -->
//               <div style="text-align: center; flex: 1; position: relative;">
//                 <div style="color: #002e6d; font-size: 20px;">✈</div>
//                 <div style="border-top: 2px dashed #ccc; width: 100%; position: absolute; top: 50%; z-index: 0;"></div>
//                 <p style="font-size: 11px; color: #888; margin-top: 15px; position: relative; z-index: 1; background: #fafafa; display: inline-block; padding: 0 10px;">Non-Stop</p>
//               </div>

//               <!-- TO -->
//               <div style="text-align: right; flex: 1;">
//                 <h1 style="margin: 0; color: #002e6d; font-size: 28px;">${booking.flightData.to}</h1>
//                 <p style="margin: 5px 0; font-size: 14px; color: #333; font-weight: bold;">${booking.flightData.arrivalTime}</p>
//               </div>
//             </div>
            
//             <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; font-size: 13px; color: #555;">
//               Airline: <b>${booking.flightData.airline} (6E)</b> | Duration: 2h 15m
//             </div>
//           </div>

//           <!-- PASSENGER LIST -->
//           <h4 style="color: #002e6d; text-transform: uppercase; border-bottom: 2px solid #002e6d; display: inline-block; margin-bottom: 10px; font-size: 14px;">Passenger Details</h4>
//           <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
//             <tr style="text-align: left; background: #f4f4f4;">
//               <th style="padding: 10px; font-size: 12px; color: #666;">NAME</th>
//               <th style="padding: 10px; font-size: 12px; color: #666;">DETAILS</th>
//               <th style="padding: 10px; font-size: 12px; color: #666; text-align: right;">STATUS</th>
//             </tr>
//             ${booking.passengers.map((p, i) => `
//               <tr>
//                 <td style="padding: 12px 10px; border-bottom: 1px solid #eee; font-weight: bold; font-size: 14px; color: #333;">${p.name.toUpperCase()}</td>
//                 <td style="padding: 12px 10px; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">${p.gender} / ${p.age} Yrs</td>
//                 <td style="padding: 12px 10px; border-bottom: 1px solid #eee; font-size: 13px; color: green; text-align: right; font-weight: bold;">Confirmed</td>
//               </tr>
//             `).join("")}
//           </table>

//           <!-- PAYMENT SUMMARY -->
//           <div style="background: #eef2f7; padding: 15px; border-radius: 6px; text-align: right;">
//             <span style="font-size: 14px; color: #555;">Total Paid:</span>
//             <span style="font-size: 20px; font-weight: bold; color: #002e6d; margin-left: 10px;">${booking.totalPrice} ${booking.flightData.currency || "INR"}</span>
//           </div>

//           <div style="text-align: center; margin-top: 30px;">
//              <a href="#" style="background: #ff6b00; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px;">MANAGE BOOKING</a>
//           </div>
//         </div>

//         <!-- FOOTER -->
//         <div style="background: #f4f4f4; padding: 20px; text-align: center; font-size: 11px; color: #888; line-height: 1.6;">
//           This is an automated confirmation email. Please do not reply to this mail. <br>
//           © 2026 <b>${process.env.SITE_NAME}</b>. All rights reserved.
//         </div>
//       </div>
//     </div>
//     `,
//   },
//   (err) => {
//     if (err) console.log("MAIL ERROR:", err);
//   }
// );

  } catch (error) {
    console.log(error);
    res.status(500).json({
      result: "Fail",
      message: error.message,
    });
  }
};