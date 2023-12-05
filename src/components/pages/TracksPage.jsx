import React from 'react';
import TrackCard from '../ui/TrackCard';

export default function TracksPage({ tracks }) {
  return (
    <div className="container m-2">
      {tracks.map((track) => (
        <div key={track.id} className="row justify-content-center">
          <div className="col-8">
            <TrackCard track={track} />
          </div>
        </div>
      ))}
    </div>
  );
}
