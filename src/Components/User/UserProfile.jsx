import React from 'react';
import Feed from '../Feed/Feed';
import { useParams } from 'react-router-dom';
import Head from '../Utils/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
