import React, { useEffect, useState } from 'react';
import { Plane, User, CreditCard, ShieldCheck, Delete, Trash } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function CheckoutPage() {
  const location = useLocation();
  const searchPassengers = location.state?.passengers
  const storedFlight = localStorage.getItem("selectedFlight")

  const [flight, setFlight] = useState(
    location.state?.flight || (storedFlight ? JSON.parse(storedFlight) : null)
  )
  const [loading, setLoading] = useState(false)

  const [contactus, setContactUs] = useState({
    email: "",
    phone: ""
  })


  const [passengers, setPassengers] = useState(() => {
    const list = []

    if (searchPassengers) {
      for (let i = 0; i < searchPassengers.adults; i++) {
        list.push({
          firstName: "",
          lastName: "",
          gender: "",
          dob: "",
          type: "adult",
          passport: "",
          passportName: "",
          nationality: ""
        })
      }

      for (let i = 0; i < searchPassengers.children; i++) {
        list.push({
          firstName: "",
          lastName: "",
          gender: "",
          dob: "",
          type: "child",
          passport: "",
          passportName: "",
          nationality: ""
        })
      }

      for (let i = 0; i < searchPassengers.infants; i++) {
        list.push({
          firstName: "",
          lastName: "",
          gender: "",
          dob: "",
          type: "infant",
          passport: "",
          passportName: "",
          nationality: ""
        })
      }
    }

    return list
  })

  const handleChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  if (!flight)
    return (
      <p className='text-center mt-20'>
        No Flight Selected <br />
        <Link to="/" className='text-blue-600 hover:underline'>
          Please Search Flight
        </Link>
      </p>
    );

  const {
    originCity,
    destinationCity,
    departure,
    arrival,
    duration,
    price,
    airline,
    flightNumber,
    departureDate,
    logo,
  } = flight;



  const totalPrice = Number(price)

  const fetchFlight = async (id) => {
    try {
      setLoading(true)

      const response = await fetch(`http://localhost:3200/api/flight/flight/${id}`)

      const data = await response.json()
      setFlight(data.flight)

      localStorage.setItem("selectedFlight", JSON.stringify(data.flight))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search)

    const flightId = params.get("flightId")

    if (!flight && flightId) {
      fetchFlight(flightId)
    }
  }, [])

  if (loading) {
    return <p className="text-center mt-20">Loading flight...</p>
  }

  // const handlePayment = async () => {
  //   try {
  //     const offerId = flight?.id || flight?.offer_id;

  //     if (!offerId) {
  //       console.log("Flight object:", flight);
  //       alert("Flight ID missing");
  //       return;
  //     }


  //     for (let p of passengers) {
  //       if (!p.firstName || !p.lastName || !p.dob || !p.gender) {
  //         alert("Please fill all Passengers Details");
  //         return;
  //       }
  //     }

  //     const payload = {
  //       offerId: flight?.id,
  //       passengers: passengers.map(p => ({
  //         name: `${p.firstName} ${p.lastName}`,
  //         age: Number(p.dob),
  //         gender: p.gender
  //       })),
  //       contact: {
  //         email: contactus.email,
  //         phone: contactus.phone
  //       },
  //       flightData: {
  //         airline: flight.airline,
  //         from: flight.originCity,
  //         to: flight.destinationCity,
  //         departureTime: flight.departure,
  //         arrivalTime: flight.arrival,
  //         price: Number(flight.price),
  //         currency: "USD"
  //       },
  //       guestId: localStorage.getItem("guestId") || null
  //     };
  //     console.log("PAYLOAD:", payload);

  //     const res = await fetch("http://localhost:3200/api/checkout/booking", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(payload)
  //     });

  //     const data = await res.json();

  //     if (data.result === "Fail") {
  //       alert(data.message);
  //       return;
  //     }

  //     alert("Booking Successful 🎉 PNR: " + data.booking.pnr);

  //   } catch (error) {
  //     console.log(error);
  //     alert("Booking failed");
  //   }
  // };


const handlePayment = async () => {
  try {
    const offerId = flight?.id || flight?.offer_id;

    if (!offerId) {
      alert("Flight ID missing");
      return;
    }

    for (let p of passengers) {
      if (!p.firstName || !p.lastName || !p.dob || !p.gender) {
        alert("Please fill all Passengers Details");
        return;
      }
    }

    const bookingRes = await fetch("http://localhost:3200/api/checkout/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        offerId: flight?.id,
        passengers: passengers.map(p => ({
          name: `${p.firstName} ${p.lastName}`,
          age: Number(p.dob),
          gender: p.gender
        })),
        contact: {
          email: contactus.email,
          phone: contactus.phone
        },
        flightData: {
          airline: flight.airline,
          from: flight.originCity,
          to: flight.destinationCity,
          departureTime: flight.departure,
          arrivalTime: flight.arrival,
          price: Number(flight.price),
          currency: "USD"
        },
        guestId: localStorage.getItem("guestId") || null
      })
    });

    const bookingData = await bookingRes.json();

    if (bookingData.result === "Fail") {
      alert(bookingData.message);
      return;
    }

    const bookingId = bookingData.booking._id;

    const paymentRes = await fetch("http://localhost:3200/api/payment/initiate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ bookingId })
    });

    const paymentData = await paymentRes.json();

    if (!paymentData.paymentUrl) {
      alert("Payment failed to initiate");
      return;
    }

    window.location.href = paymentData.paymentUrl;

    console.log("BOOKING DATA:", bookingData);
console.log("PAYMENT DATA:", paymentData);

  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">Review & Pay</h1>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white rounded-xl shadow border overflow-hidden">
              <div className="bg-blue-600 px-6 py-3 flex items-center gap-2 text-white">
                <Plane size={20} />
                Flight Information
              </div>

              <div className="p-6 flex  justify-between items-center">
                <div>
                  <p className="text-xl font-bold">{originCity}</p>
                  <hr />
                  <p className="text-sm text-gray-500">{departure}</p>
                </div>

                <div className="text-center space-y-2 font-semibold text-md text-gray-600">
                  <p>

                    {departureDate}
                  </p>
                  <hr />
                  <p>
                    {duration}

                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">{destinationCity}</p>
                  <hr />
                  <p className="text-sm text-gray-500">{arrival}</p>
                </div>
              </div>

              <div className="flex px-4 pb-4 text-md text-gray-500">
                <img src={logo} alt="" className='w-10 h-10 rounded-full' />
                {airline} • {flightNumber}


              </div>
            </div>

            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex items-center gap-2 mb-4 font-bold border-b pb-3">
                <User size={20} className="text-blue-600" />
                <h2>
                  Travellers: {searchPassengers.adults} Adult • {searchPassengers.children} Child
                </h2>
              </div>


              {passengers.map((p, i) => (
                <div key={i} className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 border p-4 rounded-xl">

                  <input
                    type="text"
                    placeholder="First Name"
                    value={p.firstName}
                    onChange={(e) => handleChange(i, "firstName", e.target.value)}
                    className="border p-2 rounded-xl"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={p.lastName}
                    onChange={(e) => handleChange(i, "lastName", e.target.value)}
                    className="border p-2 rounded-xl"
                  />

                  <select
                    value={p.gender}
                    onChange={(e) => handleChange(i, "gender", e.target.value)}
                    className="border p-2 rounded-xl"
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  <input
                    type="text"
                    value={p.dob}
                    placeholder='Age'
                    onChange={(e) => handleChange(i, "dob", e.target.value)}
                    className="border p-2 rounded-xl"
                  />

                  <select
                    value={p.type}
                    disabled
                    className="border p-2 rounded-xl"
                  >
                    <option value="adult">Adult</option>
                    <option value="child">Child</option>
                    <option value="infant">Infant</option>
                  </select>
                
                    <input
                      type="email"
                      placeholder="Email"
                      value={contactus.email}
                      onChange={(e) =>
                        setContactUs({ ...contactus, email: e.target.value })
                      }
                      className="border p-2 rounded-xl w-full mb-2"
                    />

                    <input
                      type="text"
                      placeholder="Phone"
                      value={contactus.phone}
                      onChange={(e) =>
                        setContactUs({ ...contactus, phone: e.target.value })
                      }
                      className="border p-2 rounded-xl w-full"
                    />
              

                  <input
                    type="text"
                    placeholder="Passport No"
                    value={p.passport}
                    onChange={(e) => handleChange(i, "passport", e.target.value)}
                    className="border p-2 rounded-xl"
                  />

                  <input
                    type="text"
                    placeholder="Passport Name"
                    value={p.passportName}
                    onChange={(e) => handleChange(i, "passportName", e.target.value)}
                    className="border p-2 rounded-xl"
                  />


                  <input
                    type="text"
                    placeholder="Nationality"
                    value={p.nationality}
                    onChange={(e) => handleChange(i, "nationality", e.target.value)}
                    className="border p-2 rounded-xl"
                  />

                </div>
              ))}

            </div>

            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex items-center gap-2 mb-6 font-bold border-b pb-3">
                <CreditCard size={20} className="text-blue-600" />
                Secure Payment
              </div>

              <button onClick={handlePayment} className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
                Pay ${totalPrice}
              </button>

              <div className="mt-4 flex justify-center gap-2 text-green-600 text-xs">
                <ShieldCheck size={14} />
                Secure Payment
              </div>
            </div>

          </div>

          <div>
            <div className="bg-white rounded-xl shadow border p-6 sticky top-6">

              <h2 className="text-lg font-bold mb-4 border-b pb-3">
                Price Summary
              </h2>

              <div className="flex justify-between">
                <span>Base Fare</span>
                <span>${price}</span>
              </div>

              <div className="mt-4 border-t pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>${price}</span>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded text-xs">
                Final price based on passengers.
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}