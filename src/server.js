import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import path from 'path';
import jsxRender from './utils/jsxRender';
import tracksRouter from './routes/tracksRouter';
import indexRouter from './routes/indexRouter';
import resLocals from './middlewares/resLocals';

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(resLocals);

app.use('/tracks', tracksRouter);
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
