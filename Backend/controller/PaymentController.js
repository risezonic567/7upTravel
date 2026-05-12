import Booking from "../models/BookingModels.js";

// const getAccessToken = async () => {
//   const response = await fetch("https://api.bridgerpay.com/v2/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       username: process.env.BRIDGERPAY_USERNAME,
//       password: process.env.BRIDGERPAY_PASSWORD
//     })
//   });

//   if (!response.ok) {
//     const text = await response.text();
//     throw new Error("Auth failed: " + text);
//   }

//   const data = await response.json();

//   if (!data?.access_token) {
//     throw new Error("No access token received");
//   }

//   return data.access_token;
// };

export const initiatePayment = async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await Booking.findById(bookingId);

    if (!booking) return res.status(404).json({ message: "Booking not found" });

    // BridgerPay v2 Session Create API (As per your Screenshot 497)
    const response = await fetch(
      `https://api.bridgerpay.com/v2/cashier/session/create/${process.env.BRIDGERPAY_API_KEY}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.BRIDGERPAY_ACCESS_KEY}`, // Login API se mila hua token
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cashier_key: process.env.BRIDGERPAY_CASHIER_KEY,
          order_id: booking._id.toString(),
          currency: "USD",
          amount: parseFloat(booking.flightData.price) || 10,
          first_name: booking.passengers[0].name.split(" ")[0] || "Guest",
          last_name: booking.passengers[0].name.split(" ")[1] || "User",
          email: booking.contact.email,
          phone: booking.contact.phone,
          country: "US",
      city: "New York",
      zip_code: "10001",
      address: "Test Address",
        }),
      }
    );

    const data = await response.json();

    // BridgerPay v2 hume 'cashier_token' return karta hai
    if (!data?.cashier_token) {
      console.log("BridgerPay Error:", data);
      return res.status(500).json({ message: "Token failed", error: data });
    }

    return res.json({
      cashier_token: data.cashier_token,
      // Frontend ko launcher ke liye key chahiye hoti hai
      cashier_key: process.env.BRIDGERPAY_CASHIER_KEY 
    });
  } catch (err) {
    console.error("🔥 FULL ERROR:", err);
  console.error("🔥 RESPONSE:", err?.response);
  console.error("🔥 DATA:", err?.response?.data);

  res.status(500).json({
    message: "Internal Server Error",
    error: err?.message,
    details: err?.response?.data || null,
  });
  }
};

// export const initiatePayment = async (req, res) => {
//   try {
//     const { bookingId } = req.body;

//     if (!bookingId) {
//       return res.status(400).json({ message: "bookingId is required" });
//     }

//     const booking = await Booking.findById(bookingId);

//     if (!booking) {
//       return res.status(404).json({ message: "Booking not found" });
//     }

//     if (!booking?.contact?.email || !booking?.contact?.phone) {
//       return res.status(400).json({
//         message: "Missing booking contact details"
//       });
//     }

//     if (!booking?.flightData?.price) {
//       return res.status(400).json({
//         message: "Invalid booking amount"
//       });
//     }

//     const token = await getAccessToken();
//     console.log(token)

//     const payload = {
//       cashier_key: process.env.BRIDGERPAY_CASHIER_KEY,
//       order_id: booking._id.toString(),
//       currency: "USD",
//       country: "IN",
//       first_name: booking.contact.name || "User",
//       last_name: "Test",
//       email: booking.contact.email,
//       language: "en",
//       address: "India",
//       city: "Delhi",
//       zip_code: "110001",
//       amount: Number(booking.flightData.price),
//       phone: booking.contact.phone
//     };

//     const response = await fetch(
//       `https://api.bridgerpay.com/v2/cashier/session/create/${process.env.BRIDGERPAY_API_KEY}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.BRIDGERPAY_ACCESS_KEY}`
//         },
//         body: JSON.stringify(payload)
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("❌ Payment Error:", errorText);

//       return res.status(response.status).json({
//         message: "BridgerPay API error",
//         error: errorText
//       });
//     }

//     const data = await response.json();

//     if (!data?.cashier_token) {
//       return res.status(500).json({
//         message: "cashier_token not found",
//         response: data
//       });
//     }

//    return res.status(200).json({
//   success: true,
//   cashier_token: data.cashier_token,
//   cashier_key: process.env.BRIDGERPAY_CASHIER_KEY
// });

//   } catch (error) {
//     console.error("❌ FINAL ERROR:", error);

//     return res.status(500).json({
//       message: "Payment failed",
//       error: error.message
//     });
//   }
// };



export const paymentWebhook = async (req, res) => {
  try {
    const { order_id, status, transaction_id } = req.body;

    const booking = await Booking.findById(order_id);

    if (!booking) return res.sendStatus(404);

    if (status === "approved") {
      booking.paymentStatus = "CONFIRMED";
      booking.status = "CONFIRMED";
      booking.transactionId = transaction_id;
    }

    if (status === "declined") {
      booking.paymentStatus = "CANCELLED";
      booking.status = "CANCELLED";
    }

    await booking.save();

    res.sendStatus(200);

  } catch (error) {
    console.log(error);
    res.sendStatus(500); // ❗ fix here
  }
};


export const paymentSuccess = async (req, res) => {
  try {
    const { bookingId } = req.body;

    if (!bookingId) {
      return res.status(400).json({
        success: false,
        message: "Booking ID required",
      });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      {
        paymentStatus: "SUCCESS",
        status: "CONFIRMED",
        transactionId: "TXN_" + Date.now()
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Payment success, booking confirmed",
      booking: updatedBooking,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};