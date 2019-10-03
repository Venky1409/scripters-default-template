import express from "express";
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import indexRouter from './routes/index';

const app = express();
export const routes = express.Router();
app.use(logger('app express'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '/views/dist')));

app.use('/', indexRouter);

// start our server on port 4201
app.listen(4201, '127.0.0.1', function () {
    console.log("Server now listening on 4201");
});
export default app;