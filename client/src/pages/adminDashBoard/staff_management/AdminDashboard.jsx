import React from "react";
import Admin_Dash_Nav from "../../../components/adminDashboard/Admin_Dash_Nav";
import RoleStrength from "../../../components/adminVisual/RoleStrength";
import RevenueTracking from "../../../components/adminVisual/RevenueTracking";
import UpcomingEvents from "../../../components/adminVisual/UpcomingEvents";
import Footer from "../../../components/Footer";

function AdminDashboard() {
  return (
    <>
      <div className="gridApply">
        <Admin_Dash_Nav />
        <section className="mt-lg-0 mt-5">
          <h1 className="mt-lg-0 mt-4">admin dashboard</h1>
          <div className="d-flex justify-content-around flex-wrap">
            <RoleStrength/>
            <RevenueTracking />
            <UpcomingEvents />
          </div>
        </section>
      </div>

      <footer style={{marginBottom:'-1rem'}} className=" d-none d-sm-block mt-5">
        <Footer/>
      </footer>
    </>
  );
}

export default AdminDashboard;
