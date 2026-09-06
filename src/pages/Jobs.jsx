import { useState } from "react";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";

function Jobs() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText) ||
      job.location.toLowerCase().includes(searchText) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchText)
      );

    const matchesType =
      type === "All" || job.type === type;

    return matchesSearch && matchesType;
  });

  return (
    <div className="page">

      <div className="page-title">
        <h1>Jobs & Internships</h1>

        <p>
          Find your next career opportunity.
        </p>
      </div>

      {/* Search and Filter */}

      <div className="filters">

        <input
          type="text"
          placeholder="Search jobs, companies, skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="All">
            All Opportunities
          </option>

          <option value="Job">
            Jobs
          </option>

          <option value="Internship">
            Internships
          </option>
        </select>

      </div>

      {/* Job Cards */}

      <div className="job-grid">

        {filteredJobs.length > 0 ? (

          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))

        ) : (

          <div className="no-results">

            <h2>No opportunities found</h2>

            <p>
              Try searching for a different job,
              company, or skill.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Jobs;