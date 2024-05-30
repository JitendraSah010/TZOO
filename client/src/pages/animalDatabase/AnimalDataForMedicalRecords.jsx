import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AnimalDash_Navbar from "../../components/animalDashboard/AnimalDash_Navbar";
import Table from "react-bootstrap/Table";

function AnimalDataForMedicalRecords() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const addMedicalRecordHandler = (id) => {
    navigate(`/animal/addMedicalRecord/${id}`);
  };

  const seeAllRecordsHandler = (id) => {
    navigate(`/animal/allMedicalRecords/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/animal/", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const reData = await response.json();
          setData(reData);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCurrentStatus = async () => {
      try {
        data.map(async (id) => {
          const recordId = id._id;
          console.log(recordId)
          const response = await fetch(
            `http://localhost:4000/current/${recordId}`,
            {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.ok) {
            const reData = await response.json();
            //   setData(reData)
            console.log(reData);
          } else {
            console.error(response.status);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // fetchCurrentStatus();
  }, []);

  return (
    <>
      <AnimalDash_Navbar />
      <section style={{ marginTop: "5.8rem" }}>
        <h2 className=" text-center mt-5 mb-3">Animal Medical Records</h2>

        <div style={{ overflowX: "auto" }}>
          <Table bordered hover>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Species</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Habitat</th>
                <th>Add Medical Record</th>
                <th>See All Medical Records</th>
              </tr>
            </thead>
            <tbody>
              {data.map((animal, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{animal.name}</td>
                  <td>{animal.speciesName}</td>
                  <td>{animal.age}</td>
                  <td>{animal.gender}</td>
                  <td>{animal.habitatName}</td>
                  <td>
                    <button
                      className="editBtn px-3"
                      onClick={() => {
                        addMedicalRecordHandler(animal._id);
                      }}
                    >
                      Add Medical Record
                    </button>
                  </td>
                  <td>
                    <button
                      className="deleteBtn px-3"
                      onClick={() => {
                        seeAllRecordsHandler(animal._id);
                      }}
                    >
                      See All Medical Records
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
}

export default AnimalDataForMedicalRecords;
