import React from 'react';

export default function TrackCard({ track }) {
  const cardStyles = { width: '18rem' };
  return (
    <div className="card" style={cardStyles}>
      <img src={track.img} className="card-img-top" alt={track.title} />
      <div className="card-body">
        <h5 className="card-title">{track.title}</h5>
        <p className="card-text">{track.author}</p>
        <p className="card-text muted">
          {track.duration}
          {' '}
          sec
        </p>
        <form action={`/track/${track.id}`} method="GET">
          <button type="submit" className="btn btn-danger">X</button>
        </form>
      </div>
    </div>
  );
}
