import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <h1>
            Find Your
            <span> Dream Opportunity</span>
          </h1>

          <p>
            Discover jobs and internships that
            match your skills and career goals.
          </p>

          <Link to="/jobs" className="btn">
            Explore Jobs
          </Link>

        </div>

        <div className="hero-card">

          <div className="match-circle">
            85%
          </div>

          <h3>AI Job Match</h3>

          <p>
            Your skills match this opportunity
          </p>

        </div>

      </section>


      {/* Features */}
      <section className="features">

        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Find Opportunities</h3>
          <p>
            Search for jobs and internships
            based on your skills and interests.
          </p>
        </div>


        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI Skill Matching</h3>
          <p>
            Find opportunities that match
            your existing technical skills.
          </p>
        </div>


        <div className="feature-card">
          <div className="feature-icon">📋</div>
          <h3>Track Applications</h3>
          <p>
            Keep track of the opportunities
            you have applied for.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;