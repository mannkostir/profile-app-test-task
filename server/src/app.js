import cookieParser from 'cookie-parser';
import jsonServer from 'json-server';
import bodyParser from 'body-parser';
import auth from './api/routes/auth';
import contacts from './api/routes/contacts';

const app = jsonServer.create();

const router = jsonServer.router('db.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(jsonServer.defaults());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origins', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(204).json({});
  }
  next();
});

auth('/auth', app);
contacts('/contacts', app);

app.use(router);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(err.status).send({ message: err.message }).end();
  }
  return next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  return res
    .status(err.status || 500)
    .json({ message: err.message || 'Something went wrong' });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log('Server has been started on port ' + PORT);
});
