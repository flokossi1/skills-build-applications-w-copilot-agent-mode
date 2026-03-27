import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    console.log('Fetching teams from:', API_URL);
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log('Teams data:', data);
        const results = data.results || data;
        setTeams(Array.isArray(results) ? results : []);
      })
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">Teams</h4>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Members</th>
                </tr>
              </thead>
              <tbody>
                {teams.length === 0 ? (
                  <tr><td colSpan="3" className="text-center text-muted py-3">No teams found.</td></tr>
                ) : (
                  teams.map((team, index) => (
                    <tr key={team._id || index}>
                      <td>{index + 1}</td>
                      <td><strong>{team.name}</strong></td>
                      <td>{Array.isArray(team.members) ? team.members.map((m, i) => (<span key={i} className="badge bg-secondary me-1">{m}</span>)) : team.members}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
