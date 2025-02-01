import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";
import img from "../../assets/heroimg.jpg";
import { useParams } from "react-router-dom";
import Callapi from "../../api";
function AdminDetail() {
  const theimg = img;
  const navigate = useNavigate();
  const api = Callapi(navigate);
  const { projectid } = useParams();
  const [projectDetails, SetDetails] = useState([]);
  useEffect(() => {
    const getdetails = async (id) => {
      try {
        const responce = await api.post("/api/admin/projectdetails", {
          id: id,
        });
        console.log(responce.data);

        SetDetails(responce.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getdetails(projectid);
  }, []);

  return (
    <>
      <main className="main-content-detail">
        <section className="content">
          <img
            src={theimg}
            alt="Project Detail Image"
            className="detail-image"
          />
          <h2>{projectDetails.project_name}</h2>

          <p>
            <b>Team Memebers:</b> {projectDetails.team_members}
          </p>
          <p>
            <b> Year:</b> {projectDetails.year} - <b>Program:</b>{" "}
            {projectDetails.program_name}
          </p>
          <p>
            <b>Project Description:</b> {projectDetails.project_descrp}
          </p>
        </section>
      </main>
    </>
  );
}

export default AdminDetail;
