import React, { useState, useEffect } from "react";
import Nav from "../components/Nav"; // Ensure correct path
import { Candidate } from "../interface/Candidate.interface"; // Ensure correct path

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error("Error fetching candidates:", error));
  }, []);

  return (
    <div>
      <Nav />
      <h1 className="text-2xl font-bold">Candidate Search</h1>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <img src={candidate.avatar_url} alt={candidate.login} width="50" />
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              {candidate.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;

