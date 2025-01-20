import React from "react";
import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const company = companies.find((c) => c.slug === companySlug);

  if (!company) {
    return <h1 style={{ textAlign: "center" }}>Company not found</h1>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Company Profile</h1>
      <img
        src={company.logo}
        alt={company.companyName}
        style={{ maxWidth: "200px", marginBottom: "20px" }}
      />
      <h2>{company.companyName}</h2>
      <p>
        <strong>About:</strong> {company.description}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`https://${company.website}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          {company.website}
        </a>
      </p>

      <div style={{ marginTop: "40px" }}>
        <h3>Tech Stack</h3>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            gap: "20px",
            padding: "10px",
            maxWidth: "100%",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            boxSizing: "border-box",
          }}
        >
          {company.techStack.map((tech) => (
            <div
              key={tech.slug}
              style={{
                display: "inline-block",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                minWidth: "120px",
                backgroundColor: "#fff",
              }}
            >
              <Link
                to={`/tech/${tech.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  style={{
                    maxWidth: "50px",
                    marginBottom: "10px",
                  }}
                />
                <p>{tech.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;