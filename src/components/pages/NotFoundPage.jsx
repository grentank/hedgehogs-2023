import React from 'react';

export default function NotFoundPage({ path }) {
  return (
    <>
      <h1>
        404 PAGE
        {' '}
        {path}
        {' '}
        NOT FOUND
      </h1>
      <a href="/" className="btn btn-primary">Back to main</a>
    </>
  );
}
