import React from "react";
import Employee_Navbar from "../../components/employeeAccount/Employee_Navbar";
import AttendanceForm from "../../components/AttendanceForm";


function AttendancePage() {


  return (
    <>
      <Employee_Navbar />
      <section style={{ marginTop: "5rem" }}>
        <div className="container mt-4 ">
          <div className="row justify-content-center p-4">
            <div className=" col-md-6 p-3 shadow mt-4">
              <h3 className="fw-bold">Attendance Form </h3>
              <AttendanceForm />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default AttendancePage;
