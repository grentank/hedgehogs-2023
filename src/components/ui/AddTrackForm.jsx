import React, { useState } from 'react';

export default function AddTrackForm() {
  const [imageInput, setImageInput] = useState('');
  const changeHandler = (e) => setImageInput(e.target.value);
  const isImageUrlValid = imageInput.startsWith('http');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const response = await fetch('/api/tracks', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      const newTrack = await response.json();
      alert(`Трек ${newTrack.title} был успешно добавлен!`);
      setTimeout(() => {
        window.location.href = '/tracks';
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="trackTitleId" className="form-label">Title</label>
        <input name="title" type="text" className="form-control" id="trackTitleId" />
      </div>
      <div className="mb-3">
        <label htmlFor="trackAuthorId" className="form-label">Author</label>
        <input name="author" type="text" className="form-control" id="trackAuthorId" />
      </div>
      <div className="mb-3">
        <label htmlFor="trackDurId" className="form-label">Duration</label>
        <input name="duration" type="number" className="form-control" id="trackDurId" />
      </div>
      <div className="mb-3">
        <label htmlFor="trackCoverId" className="form-label">Cover Image</label>
        <input value={imageInput} onChange={changeHandler} name="img" type="text" className={`form-control${isImageUrlValid ? '' : ' is-invalid'}`} id="trackCoverId" />
        <div className="invalid-feedback">
          Image has to start with http
        </div>
      </div>
      <button disabled={!isImageUrlValid} type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
