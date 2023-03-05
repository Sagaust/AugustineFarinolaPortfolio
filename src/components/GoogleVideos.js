import React from 'react';
import GoogleEmbed from 'react-google-embed';

const GoogleVideos = () => {
  return (
    <div>
      <h2>My Videos</h2>
      <GoogleEmbed
        googleId="your-google-id"
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  );
};

export default GoogleVideos;
