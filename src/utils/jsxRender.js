/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import App from '../components/App';

export default async function jsxRender(pathToFile, initState, cb) {
  try {
    const { default: Component } = await import(pathToFile);
    const layout = <Layout><App><Component {...initState} /></App></Layout>;
    const html = renderToString(layout);
    cb(null, `<!DOCTYPE html>${html}`);
  } catch (error) {
    cb(error);
  }
}
