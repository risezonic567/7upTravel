import Booking from "../models/BookingModels.js";


export const initiatePayment = async (req, res) => {
  // console.log("🔥 PAYMENT API HIT");

  try {
    const { bookingId } = req.body;
    console.log("👉 bookingId:", bookingId);

    if (!bookingId) {
      return res.status(400).json({ message: "bookingId required" });
    }

    const booking = await Booking.findById(bookingId);
    console.log("👉 booking:", booking);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // ✅ Payment payload (EDIT according to your gateway)
    const payload = {
      amount: booking.flightData.price,
      currency: "USD",
      order_id: booking._id.toString(),
      customer_email: booking.contact.email,
      success_url: "https://yourdomain.com/success",
      cancel_url: "https://yourdomain.com/cancel"
    };

    console.log("👉 PAYMENT PAYLOAD:", payload);

    // 🔥 CALL PAYMENT GATEWAY
    const response = await fetch("https://your-payment-gateway.com/initiate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
      },
      body: JSON.stringify(payload)
    });

    // 🔥 SAFE RESPONSE HANDLE
    const text = await response.text();
    console.log("RAW RESPONSE:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      return res.status(500).json({
        message: "Invalid gateway response",
        raw: text
      });
    }

    // ✅ Extract payment URL (IMPORTANT)
    const paymentUrl =
      data.payment_url ||
      data.redirect_url ||
      data.url ||
      null;

    if (!paymentUrl) {
      return res.status(500).json({
        message: "Payment URL not found",
        raw: data
      });
    }

    return res.json({
      success: true,
      paymentUrl
    });

  } catch (error) {
    console.log("❌ PAYMENT ERROR:", error);
    return res.status(500).json({
      message: "Payment gateway error",
      error: error.message
    });
  }
};







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