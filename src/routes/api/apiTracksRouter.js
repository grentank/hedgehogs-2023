import express from 'express';
import { Op } from 'sequelize';
import { Track } from '../../../db/models';

const apiTracksRouter = express.Router();

apiTracksRouter.route('/:id')
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const { title, author, img } = req.body;
      const targetTrack = await Track.findOne({ where: { id } });

      if (title) targetTrack.title = title;
      if (author)targetTrack.author = author;
      if (img) targetTrack.img = img;

      await targetTrack.save();
      res.json(targetTrack);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Track.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .get(async (req, res) => {
    const { id } = req.params;
    const oneTrack = await Track.findOne({ where: { id } });
    res.json(oneTrack);
  });

apiTracksRouter.route('/')
  .post(async (req, res) => {
    try {
      if (!req.body.title) return res.status(500).json({ message: 'Empty title' });
      const newTrack = await Track.create(req.body);
      res.json(newTrack);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .get(async (req, res) => {
    try {
      const allTracks = await Track.findAll();
      res.json(allTracks);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Failed to load all tracks' });
    }
  })
  .delete(async (req, res) => {
    try {
      await Track.destroy({ where: { id: { [Op.gt]: 0 } } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

export default apiTracksRouter;
