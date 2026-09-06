import { useParams } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/jobs";


function JobDetails() {
  const { id } = useParams();

  const [message, setMessage] = useState("");

  const job = jobs.find(
    (job) => job.id === Number(id)
  );

  if (!job) {
    return (
      <div className="page">
        <h2>Job not found</h2>
      </div>
    );
  }

  function applyForJob() {
    const existingApplications =
      JSON.parse(
        localStorage.getItem("applications")
      ) || [];

    const alreadyApplied =
      existingApplications.some(
        (application) => application.id === job.id
      );

    if (alreadyApplied) {
      setMessage(
        "You have already applied for this job."
      );
      return;
    }

    const updatedApplications = [
      ...existingApplications,
      job
    ];

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    setMessage(
      "Application submitted successfully!"
    );
  }

  return (
    <div className="page">

      <div className="details">

        <div className="details-main">

          <span className="job-type">
            {job.type}
          </span>

          <h1>{job.title}</h1>

          <h3>{job.company}</h3>

          <p>📍 {job.location}</p>

          <p>💰 {job.salary}</p>


          <h2>Description</h2>

          <p className="description">
            {job.description}
          </p>


          <h2>Required Skills</h2>

          <div className="skills">

            {job.skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}

          </div>


          <button
            className="btn"
            onClick={applyForJob}
          >
            Apply Now
          </button>

          {message && (
            <p className="message">
              {message}
            </p>
          )}

        </div>


        <div className="details-side">

          <h3>Job Summary</h3>

          <p>
            <b>Company:</b> {job.company}
          </p>

          <p>
            <b>Location:</b> {job.location}
          </p>

          <p>
            <b>Type:</b> {job.type}
          </p>

          <p>
            <b>Salary:</b> {job.salary}
          </p>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;