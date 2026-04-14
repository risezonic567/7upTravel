import React from 'react'

export default function Faq() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">

      <h6 className="text-blue-600 font-bold text-center text-lg sm:text-xl">
        Faqs
      </h6>

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        Frequently Asked Questions
      </h2>

      {[{
        title: "Booking",
        data: [
          {
            q: "Can I move my booking to a future date?",
            a: "Yes—you can reschedule your reservation up to 48 hours before departure..."
          },
          {
            q: "Can I give my reservation to someone else?",
            a: "Absolutely—name transfers are allowed up to 24 hours before travel..."
          },
          {
            q: "How can I get help with an existing reservation?",
            a: "Our 24/7 support team is ready to assist via support@7uptravel.com"
          }
        ]
      },
      {
        title: "Cancellation",
        data: [
          {
            q: "How can I cancel my taxi booking?",
            a: "You can cancel your taxi reservation up to 2 hours before the scheduled pickup..."
          },
          {
            q: "How do I cancel my booking in this situation?",
            a: "If you need to cancel due to unexpected circumstances..."
          },
          {
            q: "How can I cancel or postpone a reservation I made through BOOKING?",
            a: "For trips booked via Booking.com, all changes must be made on their platform..."
          }
        ]
      },
      {
        title: "Payment",
        data: [
          {
            q: "Bought Full Protection Insurance?",
            a: "You can add Full Protection Insurance to any booking at checkout..."
          },
          {
            q: "How do I get my refund?",
            a: "Once your cancellation is confirmed, refunds are issued..."
          }
        ]
      }].map((section, i) => (

        <div key={i} className="border p-5 sm:p-6 md:p-8 rounded-2xl mb-6 shadow-sm hover:shadow-md transition">

          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            {section.title}
          </h3>

          <hr />

          {section.data.map((item, index) => (
            <div key={index}>
              <h4 className="font-semibold text-base sm:text-lg md:text-xl mt-6 mb-2">
                {item.q}
              </h4>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}

        </div>
      ))}

    </div>
  )
}