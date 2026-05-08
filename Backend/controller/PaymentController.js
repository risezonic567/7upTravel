import Booking from "../models/BookingModels.js";

export const initiatePayment = async (req, res) => {
  try {
    const { bookingId } = req.body

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.send({
        message: "Booking not Found"
      })
    }

    const payload = {
      amount: booking.totalPrice,
      currency: "USD",
      order_id: booking._id.toString(),
      customer_email: booking.contact.email,

      success_url: `${process.env.FRONTEND_URL}/payment-success?bookingId=${booking._id}`,
      failure_url: `${process.env.FRONTEND_URL}/payment-failure`,
      cancel_url: `${process.env.FRONTEND_URL}/payment-cancel`,

      webhook_url: `${process.env.BACKEND_URL}/api/payment/webhook`,
    };

    const response = await fetch("https://api.bridgerpay.com/v1/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BRIDGERPAY_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

   const text = await response.text();

console.log("STATUS:", response.status);
console.log("RAW RESPONSE:", text);

if (!response.ok) {
  return res.status(500).json({
    message: "Payment gateway error",
    status: response.status,
    raw: text
  });
}

    let data;

    try {
      data = JSON.parse(text);
    } catch (e) {
      console.log("Not JSON response:", e);
      return res.status(500).json({
        message:e.message
      });
    }


    res.json({
      paymentUrl: data?.payment_url || data?.url,
    });


  } catch (error) {
    console.log("PAYMENT ERROR FULL:", error);
    res.status(500).json({ message: error.message });
  }
}


export const paymentWebhook = async (req, res) => {
  try {
    const { order_id, status, transaction_id } = req.body;

    const booking = await Booking.findById(order_id);

    if (!booking) return res.sendStatus(404);

    if (status === "approved") {
      booking.paymentStatus = "CONFIRMED";
      booking.status = "CONFIRMED";
      booking.transactionId = transaction_id;

      await booking.save();

      // await sendConfirmationMail(booking);
    }

    if (status === "declined") {
      booking.paymentStatus = "CANCELLED";
      booking.status = "CANCELLED";
      await booking.save();
    }

    res.sendStatus(200)

  } catch (error) {
    console.log(error);
    res.send.Status(500);
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