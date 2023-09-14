import React from 'react';
import Feed from '../Feed/Feed';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
