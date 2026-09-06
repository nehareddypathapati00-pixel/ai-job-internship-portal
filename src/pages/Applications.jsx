import { useEffect, useState } from "react";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(savedApplications);
  }, []);

  function removeApplication(id) {
    const updatedApplications = applications.filter(
      (application) => application.id !== id
    );

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    setApplications(updatedApplications);
  }

  return (
    <div className="page">

      <div className="page-title">
        <h1>My Applications</h1>

        <p>
          Track the jobs and internships you have applied for.
        </p>
      </div>

      {applications.length === 0 ? (

        <div className="no-results">
          <h2>No applications yet</h2>

          <p>
            Explore jobs and apply for opportunities
            that match your skills.
          </p>
        </div>

      ) : (

        <div className="application-list">

          {applications.map((application) => (

            <div
              className="application-card"
              key={application.id}
            >

              <div>
                <span className="job-type">
                  {application.type}
                </span>

                <h3>{application.title}</h3>

                <p className="company">
                  {application.company}
                </p>

                <p>
                  📍 {application.location}
                </p>

                <p>
                  💰 {application.salary}
                </p>
              </div>

              <div>
                <span className="status">
                  Applied
                </span>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeApplication(application.id)
                  }
                >
                  Remove
                </button>
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Applications;