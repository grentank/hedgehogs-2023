import React from 'react';
import TrackCard from '../ui/TrackCard';
import useTracks from '../customHooks/useTracks';

export default function TracksPage({ tracks: initTracks }) {
  const { tracks, editHandler, deleteHandler } = useTracks(initTracks);

  return (
    <div className="container m-2">
      {tracks.map((track) => (
        <div key={track.id} className="row justify-content-center">
          <div className="col-8">
            <TrackCard editHandler={editHandler} deleteHandler={deleteHandler} track={track} />
          </div>
        </div>
      ))}
    </div>
  );
}
