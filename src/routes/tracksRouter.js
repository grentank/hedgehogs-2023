import express from 'express';
import { Track } from '../../db/models';

const tracksRouter = express.Router();

tracksRouter.get('/', async (req, res) => {
  const allTracks = await Track.findAll();
  const initState = { tracks: allTracks };
  res.render('TracksPage', initState);
});

tracksRouter.post('/', async (req, res) => {
  try {
    await Track.create(req.body);
    res.redirect('/tracks');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

tracksRouter.get('/add', (req, res) => res.render('AddTrackPage'));

tracksRouter.get('/:trackId', async (req, res) => {
  try {
    const { trackId } = req.params;
    const oneTrack = await Track.findOne({ where: { id: trackId } });
    const initState = { oneTrack };
    res.render('OneTrackPage', initState /* oneTrack.get() */);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default tracksRouter;
