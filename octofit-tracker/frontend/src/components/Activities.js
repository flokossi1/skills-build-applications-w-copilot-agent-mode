import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    console.log('Fetching activities from:', API_URL);
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log('Activities data:', data);
        const results = data.results || data;
        setActivities(Array.isArray(results) ? results : []);
      })
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Activities</h4>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Activity Type</th>
                  <th>Duration (min)</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {activities.length === 0 ? (
                  <tr><td colSpan="5" className="text-center text-muted py-3">No activities found.</td></tr>
                ) : (
                  activities.map((activity, index) => (
                    <tr key={activity._id || index}>
                      <td>{index + 1}</td>
                      <td>{activity.user}</td>
                      <td><span className="badge bg-info text-dark">{activity.activity_type}</span></td>
                      <td>{activity.duration}</td>
                      <td>{activity.date}</td>
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

export default Activities;
