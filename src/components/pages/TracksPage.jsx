import React, { useState } from 'react';
import TrackCard from '../ui/TrackCard';

export default function TracksPage({ tracks: initTracks }) {
  const [tracks, setTracks] = useState(initTracks);

  const deleteHandler = async (trackId) => {
    const response = await fetch(`/api/tracks/${trackId}`, { method: 'DELETE' });
    if (response.status === 200) {
      setTracks((prev) => prev.filter((track) => track.id !== trackId));
    } else if (response.status === 500) {
      const message = await response.json();
      console.log(message);
      alert(message.name);
    }
  };
  return (
    <div className="container m-2">
      {tracks.map((track) => (
        <div key={track.id} className="row justify-content-center">
          <div className="col-8">
            <TrackCard deleteHandler={deleteHandler} track={track} />
          </div>
        </div>
      ))}
    </div>
  );
}
