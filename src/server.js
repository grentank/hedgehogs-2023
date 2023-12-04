import express from 'express';
import { renderToString } from 'react-dom/server';
import morgan from 'morgan';
import React, { createElement } from 'react';
import Layout from './components/Layout';
import App from './components/App';
import { Track } from '../db/models';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const allTracks = await Track.findAll();
  const initState = { tracks: allTracks };
  const layout = createElement(Layout, {}, <App {...initState} />);
  const html = renderToString(layout);
  res.send(`<!DOCTYPE html>${html}`);
});

app.post('/newtrack', async (req, res) => {
  const {
    title, author, duration, image,
  } = req.body;
  await Track.create({
    title, author, duration, img: image,
  });
  res.redirect('/');
});

app.get('/track/:id', async (req, res) => {
  const { id } = req.params;
  await Track.destroy({ where: { id } });
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
