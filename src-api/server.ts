import {config} from "./config";
import {routes} from './routes';
import {NextFunction,Response,Request} from "express";

const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const logger = require('morgan');
const http = require('http');
const path = require('path');
const ejs = require('ejs');
const io = require('socket.io')(http);


//SERVER CONFIGURATION
const app = express();
app.use(bodyParser.json());
app.use(logger('[:date[clf]] - :remote-addr - :method - :url - :status - :response-time ms'))


//HEADERS
app.use((req:Request, res:Response, next:NextFunction)=> {
    //res.setHeader('content-type', 'application/json');
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Access-Control-Allow-Origin', "http://localhost:8100");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Access-Control-Allow-Credentials,Authorization');
    if (req.method === "OPTIONS"){
         res.sendStatus(200);
    } else {
        next();
    }
});


//WEBSITE
app.use(express.static('./www'));
app.use(express.static('./node_modules'));
app.set('views', './www');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.get('/', (req:any, res:any, next:any) => {
  res.set('Content-Type', 'text/html');
  //could be res.send('<p>some html</p>');
  res.sendFile(path.join(__dirname + '/www/index.html'));
});


//API

app.get('/api/login', routes.getLogin);

app.get('/api/user', routes.getUser);
app.get('/api/users', routes.getUsers);
app.post('/api/user', routes.setUser, routes.getUser);

app.get('/api/driver', routes.getDriver);
app.get('/api/drivers', routes.getDrivers);
app.post('/api/driver', routes.setDriver, routes.getDriver);

app.get('/api/request', routes.getRequest);
app.get('/api/requests', routes.getRequests);
app.post('/api/request', routes.setRequest, routes.getRequest);

app.get('/api/ride', routes.getRide);
app.get('/api/rides', routes.getRides);
app.post('/api/ride', routes.setRide,routes.getRide);

app.get('/api/car', routes.getCar);
app.get('/api/cars', routes.getCars);
app.put('/api/car', routes.updateCar,routes.getCar);
app.post('/api/car', routes.setCar,routes.getCar);

//socket:
// io.on('connection', socket => {
//     console.log('a user connected to socket');
//     setTimeout(()=>{
//         io.sockets.emit('newRequest',{msg:'new request'});
//     },2000);
// });


//SERVER START
const server = http.createServer(app).listen(config.port);
console.log(('\n\n\n%s Node server start at http://localhost:%s' as any).green, Date(), server.address().port);

