import React from 'react';

export default function AddTrackForm() {
  return (
    <form action="/tracks" method="POST">
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
        <input name="img" type="text" className="form-control" id="trackCoverId" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
