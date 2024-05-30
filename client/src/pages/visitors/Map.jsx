import React from "react";
import Visitor_Navbar from "../../components/visitor/Visitor_Navbar";
import Footer from "../../components/Footer";

function Map() {
  return (
    <>
      <Visitor_Navbar />
      <section style={{ marginTop: "5.5rem" }}>
        <h2 className="text-center">Use Map to reach the Zoo...</h2>
        <h6 className="text-center text-muted">
          "Navigate seamlessly through our world with our <br /> Google Map
          feature - your trusted guide to exploring our location effortlessly."
        </h6>

        <div className="text-center mt-4 mb-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d802.4319928085778!2d75.62685820645832!3d28.60804328486124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913074cf2a6c5e5%3A0xb3d94d7dd176c769!2sBRCM%20College%20Of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1717071492931!5m2!1sen!2sin"
            width="100%"
            height="600"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer style={{marginBottom:'-1rem'}} className='mt-5'>
        <Footer/>
      </footer>
    </>
  );
}

export default Map;
