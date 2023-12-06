import express from 'express';
import { Track } from '../../../db/models';

const apiTracksRouter = express.Router();

apiTracksRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Track.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

apiTracksRouter.post('/', async (req, res) => {
  try {
    if (!req.body.title) return res.status(500).json({ message: 'Empty title' });
    const newTrack = await Track.create(req.body);
    res.json(newTrack);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default apiTracksRouter;
