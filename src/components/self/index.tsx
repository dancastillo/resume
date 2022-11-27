import React from 'react';
import { profileInformation } from '../../data';

const Self = () => {
  return (
    <>
      <img src="/self.jpeg" className="profile-picture" alt="self" />
      <div className="self-name">{profileInformation.name}</div>
      <div className="self-title">{profileInformation.title}</div>
    </>
  );
};

export default Self;
