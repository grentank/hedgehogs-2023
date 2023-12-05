import React from 'react';
import AddTrackForm from '../ui/AddTrackForm';

export default function AddTrackPage() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-xs-12">
          <h1>Add Track</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xs-4">
          <AddTrackForm />
        </div>
      </div>
    </div>
  );
}
