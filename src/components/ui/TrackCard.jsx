import React from 'react';
import TrashIcon from '../icons/TrashIcon';

export default function TrackCard({ track, deleteHandler }) {
  const dateAgo = new Date(Date.now() - new Date(track.createdAt).valueOf());
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={track.img} className="img-fluid rounded-start" alt={track.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <a href={`/tracks/${track.id}`}>
                {track.title}
              </a>
            </h5>
            <p className="card-text">{track.author}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Created
                {' '}
                {dateAgo.getMinutes()}
                {' '}
                mins ago
              </small>
            </p>
          </div>
          <div className="card-footer">
            <button onClick={() => deleteHandler(track.id)} type="button" className="btn btn-danger"><TrashIcon /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
