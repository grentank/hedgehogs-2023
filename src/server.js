import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import path from 'path';
import jsxRender from './utils/jsxRender';
import tracksRouter from './routes/render/tracksRouter';
import indexRouter from './routes/render/indexRouter';
import resLocals from './middlewares/resLocals';
import apiTracksRouter from './routes/api/apiTracksRouter';

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(resLocals);

app.use('/api/tracks', apiTracksRouter);
app.use('/tracks', tracksRouter);
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
