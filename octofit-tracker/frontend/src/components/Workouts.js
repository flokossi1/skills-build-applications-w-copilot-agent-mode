import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    console.log('Fetching workouts from:', API_URL);
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log('Workouts data:', data);
        const results = data.results || data;
        setWorkouts(Array.isArray(results) ? results : []);
      })
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-danger text-white">
          <h4 className="mb-0">Workouts</h4>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Workout Type</th>
                  <th>Duration (min)</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {workouts.length === 0 ? (
                  <tr><td colSpan="5" className="text-center text-muted py-3">No workouts found.</td></tr>
                ) : (
                  workouts.map((workout, index) => (
                    <tr key={workout._id || index}>
                      <td>{index + 1}</td>
                      <td>{workout.user}</td>
                      <td><span className="badge bg-info text-dark">{workout.workout_type}</span></td>
                      <td>{workout.duration}</td>
                      <td>{workout.date}</td>
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

export default Workouts;
