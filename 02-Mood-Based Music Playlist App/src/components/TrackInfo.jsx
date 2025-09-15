import React, { useEffect, useState } from 'react';
import fetchTrack from '../utils/fetchTrack'; // adjust path as needed

const TrackInfo = () => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const getTrack = async () => {
      const data = await fetchTrack();
      setTrack(data);
    };

    getTrack();
  }, []);

  return (
    <div>
      <h1>Spotify Track Info</h1>
      {track ? (
        <div>
          <p><strong>Title:</strong> {track?.name}</p>
          <p><strong>Artist:</strong> {track?.artists?.[0]?.name}</p>
          <img src={track?.album?.images?.[0]?.url} alt="Album Art" width={200} />
        </div>
      ) : (
        <p>Loading track info...</p>
      )}
    </div>
  );
};

export default TrackInfo;
