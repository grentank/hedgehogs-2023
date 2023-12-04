import React from 'react';
import AddTrackForm from './AddTrackForm';
import TrackCard from './TrackCard';

export default function App({ tracks }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          <AddTrackForm />
        </div>
      </div>
      <div className="row">
        {tracks.map((track) => (
          <div key={track.id} className="col">
            <TrackCard track={track} />
          </div>
        ))}
      </div>
    </div>

  );
}
