import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { authData } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
      {authData && authData.user && (
        <div>
          <p>Welcome, {authData.user.name}</p>
          {authData.user.role === 'student' && (
            <div>
              <h2>Student Dashboard</h2>
              <p>Here you can view and schedule appointments, and view your subjects.</p>
            </div>
          )}
          {authData.user.role === 'teacher' && (
            <div>
              <h2>Teacher Dashboard</h2>
              <p>Here you can manage your appointments and view the subjects you teach.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
