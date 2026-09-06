import { useState } from "react";
import { Link } from "react-router-dom";
import jobs from "../data/jobs";

function ResumeMatch() {
  const [skills, setSkills] = useState("");
  const [results, setResults] = useState([]);

  function findMatches() {
    // Convert user's input into clean lowercase skills
    const userSkills = [
      ...new Set(
        skills
          .split(",")
          .map((skill) => skill.trim().toLowerCase())
          .filter((skill) => skill !== "")
      ),
    ];

    // If no skills are entered
    if (userSkills.length === 0) {
      setResults([]);
      return;
    }

    // Calculate match percentage for every job
    const matchedJobs = jobs.map((job) => {
      const jobSkills = job.skills.map((skill) =>
        skill.trim().toLowerCase()
      );

      // Find skills that exist in both user skills and job skills
      const matchedSkills = jobSkills.filter((skill) =>
        userSkills.includes(skill)
      );

      // Match percentage
      const matchPercentage = Math.round(
        (matchedSkills.length / jobSkills.length) * 100
      );

      return {
        ...job,
        matchedSkills,
        matchPercentage,
      };
    });

    // Show only jobs having at least one matching skill
    // and sort from highest match to lowest
    const sortedResults = matchedJobs
      .filter((job) => job.matchPercentage > 0)
      .sort(
        (a, b) => b.matchPercentage - a.matchPercentage
      );

    setResults(sortedResults);
  }

  return (
    <div className="page">

      {/* Header */}

      <div className="match-header">
        <h1>AI Job Match</h1>

        <p>
          Enter your skills and find jobs that match
          your profile.
        </p>
      </div>


      {/* Skill Input */}

      <div className="match-box">

        <h2>Enter Your Skills</h2>

        <p>
          Enter your skills separated by commas.
        </p>

        <textarea
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Example: React, JavaScript, HTML, CSS"
        />

        <button
          className="btn"
          onClick={findMatches}
        >
          Find Matching Jobs
        </button>

      </div>


      {/* Results */}

      {results.length > 0 && (

        <div className="match-results">

          <h2>Matching Opportunities</h2>

          <div className="job-grid">

            {results.map((job) => (

              <div
                className="job-card"
                key={job.id}
              >

                {/* Match Percentage */}

                <div className="match-percentage">
                  {job.matchPercentage}% Match
                </div>


                {/* Job Type */}

                <span className="job-type">
                  {job.type}
                </span>


                {/* Job Information */}

                <h3>{job.title}</h3>

                <p className="company">
                  {job.company}
                </p>

                <p>
                  📍 {job.location}
                </p>

                <p>
                  💰 {job.salary}
                </p>


                {/* Required Skills */}

                <div className="skills">

                  {job.skills.map((skill) => (

                    <span key={skill}>
                      {skill}
                    </span>

                  ))}

                </div>


                {/* Matched Skills */}

                <p>
                  <strong>
                    Matched Skills:
                  </strong>{" "}
                  {job.matchedSkills.length > 0
                    ? job.matchedSkills.join(", ")
                    : "None"}
                </p>


                {/* Details */}

                <Link
                  to={`/jobs/${job.id}`}
                  className="btn"
                >
                  View Details
                </Link>

              </div>

            ))}

          </div>

        </div>

      )}


      {/* No Results */}

      {skills.trim() !== "" &&
        results.length === 0 && (

          <div className="no-results">

            <h2>
              No matching jobs found
            </h2>

            <p>
              Try skills such as React,
              JavaScript, HTML, CSS or Git.
            </p>

          </div>

        )}

    </div>
  );
}

export default ResumeMatch;