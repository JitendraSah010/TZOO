import React, { useEffect, useState } from "react";
import Visitor_Navbar from "../../components/visitor/Visitor_Navbar";
import Announcement from "../../components/visitor/Announcement";
import UpcomingEvents from "../../components/adminVisual/UpcomingEvents";
import Footer from "../../components/Footer";

function Visitor_Landing() {

  const [data, setData] = useState([]);
  const [announcement, setAnnouncement] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/user/byUserId", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          setData(resData);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const shiftData = async () => {
      try {
        const response = await fetch(
          "/staff/shiftByUserId",
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const resData = await response.json();
          setShift(resData);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const announcementData = async () => {
      try {
        const response = await fetch("/announcement/", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          setAnnouncement(resData);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

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
          console.log("data:", event);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // shiftData()
    announcementData();
    eventData();
  }, []);


  // paypal payment
  const handlePayment = async (e) => {
    e.preventDefault();
    console.log("hi pyemnt")
    try {
      const response = await fetch("/payment", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const resData = await response.json();
        setEvent(resData);
        const redirectToPayment = resData.links[1].href
        window.location.href=redirectToPayment
        
      } else {
        console.error(response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Visitor_Navbar />
      <section style={{ marginTop: "5.5rem" }}>
        <div className="">
          <div className="p-2 d-none d-lg-flex justify-content-around">
            <div className="" style={{ width: "400px" }}>
              <h2 className="text-muted fw-bold textShadow ">
                
                <span style={{ color: "black" }}>
                  
                  {data.name}
                </span> <br /> Welcome To Turtle Back Zoo !!
              </h2>
              <p className=" text-muted">
                Welcome to Turtle Back Zoo, where every visit promises an
                unforgettable journey into the wild! Immerse yourself in a realm
                of conservation, adventure, and discovery. Explore with ease
                using our seamless online services, interactive maps, and
                thrilling experiences. Come, join us, and make memories that
                roar!
              </p>
              <button  onClick={handlePayment} className="btnCss px-5 py-2 text-decoration-none my-4">Book Zoo Ticket</button>
            </div>

            <div className="" style={{ width: "520px" }}>
              <UpcomingEvents />

            </div>
          </div>
        </div>
        {/* -----------------------small screens------------------------- */}
        <div className="">
          <div className="p-2 d-lg-none justify-content-around">
            <div className=" text-center">
              <h2 className="text-muted fw-bold textShadow ">
                
                <span style={{ color: "black" }}> Hi John</span> <br /> Welcome
                To Turtle Back Zoo !!
              </h2>
              <p className=" text-muted">
                Experience the wild at Turtle Back Zoo! Dive into conservation,
                adventure, and discovery with seamless online services and
                thrilling experiences. Join us for unforgettable memories!
              </p>
              <button onClick={handlePayment}  className="btnCss px-5 py-2 text-decoration-none my-4">Book Zoo Ticket</button>
            </div>
            <div className="text-center" >
                <UpcomingEvents/>
            </div>
          </div>
        </div>
        {/* -------------------------Announcement-------------------------- */}
        <h3 className="text-muted text-center my-4">Annuoncements !!</h3>
        <div className="  container w-100 overflow-scroll d-flex mb-5">
          <div className="announcements">
            {announcement.map((announcement) => {
              return (
              
                  <Announcement
                    key={announcement._id}
                    dept={announcement.dept}
                    topic={announcement.topic}
                    date={announcement.date}
                    desc={announcement.description}
                  />
              );
            })}
          </div>
        </div>
      </section>

      <footer style={{marginBottom:'-1rem'}}>
        <Footer/>
      </footer>

    </>
  );
}

export default Visitor_Landing;
