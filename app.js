import express from "express";
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import indexRouter from './routes/index';


const app = express();
export const routes = express.Router();
const port = process.env.NODE_ENV || 1409;
app.use(logger('app express'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '/views/dist')));
indexRouter.appRoute(app);


// start our server on port 4201
app.listen(port, function() {
    console.log("Server now listening on 4201");
});
export default app;