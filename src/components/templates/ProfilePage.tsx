import React from 'react';
import UserProfile from '../organisms/UserProfile';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
