import React, { useState } from 'react';
import TrashIcon from '../icons/TrashIcon';

export default function TrackCard({ track, deleteHandler, editHandler }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...track });
  // eslint-disable-next-line max-len
  const changeHandler = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const dateAgo = new Date(Date.now() - new Date(track.createdAt).valueOf());

  const handleEditState = async () => {
    if (isEditing) {
      await editHandler(track.id, formData);
      return setIsEditing(false);
    }
    setIsEditing(true);
  };

  console.log('render', track.id);

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={track.img} className="img-fluid rounded-start" alt={track.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            {isEditing ? (
              <>
                <input onChange={changeHandler} value={formData.title} name="title" type="text" />
                <input onChange={changeHandler} value={formData.author} name="author" type="text" />
                <input onChange={changeHandler} value={formData.img} name="img" type="text" />
              </>
            ) : (
              <>
                <h5 className="card-title">
                  <a href={`/tracks/${track.id}`}>
                    {track.title}
                  </a>
                </h5>
                <p className="card-text">{track.author}</p>
              </>
            )}
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
            <button onClick={handleEditState} type="button" className="btn btn-info">{isEditing ? 'Save' : 'Edit'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
