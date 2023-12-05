import React from 'react';

export default function OneTrackPage({ oneTrack }) {
  return (
    <div className="card mb-3">
      <img src={oneTrack.img} className="card-img-top" alt={oneTrack.title} />
      <div className="card-body">
        <h5 className="card-title">{oneTrack.title}</h5>
        <p className="card-text">{oneTrack.author}</p>
        <p className="card-text"><small className="text-body-secondary">Hello from one track page</small></p>
      </div>
    </div>
  );
}
