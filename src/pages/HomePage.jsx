import React from "react";
import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        StackTracker: Discover Tech Stacks Used by Top Companies
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {companies.map((company) => (
          <div
            key={company.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Link to={`/company/${company.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={company.logo}
                alt={company.companyName}
                style={{ maxWidth: "100px", marginBottom: "10px" }}
              />
              <h2>{company.companyName}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
