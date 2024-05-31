import React, { useEffect, useState } from 'react';
import Visitor_Navbar from '../../components/visitor/Visitor_Navbar';
import EventCard from '../../components/visitor/EventCard';
import Footer from '../../components/Footer';

function Events() {

  const [event , setEvent] = useState([])

  useEffect(() => {

    const eventData = async () => {
      try {
        const response = await fetch("/event/", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          setEvent(resData);
          console.log("data:",event);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error( error);
      }
    };

    eventData()
  }, [])

  return (
    <>
        <Visitor_Navbar/>
        <section style={{marginTop:'5.5rem'} } className='mb-5'>

            <h1 className='text-center text-muted mb-3'>Upcoming Events</h1>
            <h4 className='text-center mb-4'>Secure your spot for an unforgettable event experience 🎉.</h4>
            <div className="flex justify-content-evenly gap-5">
                {
                  event.map((event, i) => {
                    return (
                      <EventCard key={i} capacity={event.capacity} date={event.date} description={event.description} location={event.location} name={event.name} registrationEndDate={event.registrationEndDate}  registrationStartDate={event.registrationStartDate} registrationOpen={event.registrationOpen} registrationRequired={event.registrationRequired} />
                    )
                  })
                }
            </div>
        </section>

      <footer style={{marginBottom:'-1rem'}}>
        <Footer/>
      </footer>

    </>
  )
}

export default Events