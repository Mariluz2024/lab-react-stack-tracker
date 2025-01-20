import React from "react";
import { useParams } from "react-router-dom";
import technologiesData from "../technologies.json";

function TechnologyPage() {
  const { slug } = useParams();
  const technology = technologiesData.find((tech) => tech.slug === slug);

  if (!technology) {
    return <h1 style={{ textAlign: "center" }}>Technology not found</h1>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Technology Details</h1>
      <img
        src={technology.image}
        alt={technology.name}
        style={{ maxWidth: "200px", marginBottom: "20px" }}
      />
      <h2>{technology.name}</h2>
      <p>{technology.description}</p>
    </div>
  );
}

export default TechnologyPage;
