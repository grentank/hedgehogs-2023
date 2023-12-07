import { useState } from 'react';

export default function useTracks(initTracks) {
  const [tracks, setTracks] = useState(initTracks);

  const deleteHandler = async (trackId) => {
    const response = await fetch(`/api/tracks/${trackId}`, { method: 'DELETE' });
    if (response.status === 200) {
      setTracks((prev) => prev.filter((track) => track.id !== trackId));
    } else if (response.status === 500) {
      const message = await response.json();
      console.log(message);
      alert(message.name);
    }
  };

  const editHandler = async (trackId, formData) => {
    const response = await fetch(
      `/api/tracks/${trackId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      },
    );
    if (response.status === 200) {
      const updatedTrack = await response.json();
      setTracks((prev) => prev.map((track) => (track.id === trackId ? updatedTrack : track)));
    }
  };

  return {
    tracks, editHandler, deleteHandler,
  };
}
