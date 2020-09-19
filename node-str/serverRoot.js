'use strict'

//node packages import from modules
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

//node comunication init
const application = express();
//Calls the port normalizer or assigns the port as 3000
const port = portNormalizer(process.env.PORT || '3000');
application.set('port',port);

//node server REST protocols
const server = http.createServer(application);
const router = express.Router();

//node app routes definition
const route = router.get('/',(req,res,next) =>{
    res.status(200).send({
        title:"Node Store API",
        version: "0.0.1"
    });
});
application.use('/',route);

//node server listener
server.listen(port);
server.on('error',onError);
server.on('listening', onListening);
console.log('Api Running on '+port+' port.');

//function to normalize the port by demand
function portNormalizer(value){
    const port = parseInt(value, 10);
    if(isNaN(port))
    {
        return value;
    }
    if(port >= 0)
    {
        return port;
    }
    else
    {
        return false;
    }
}

//exceptions handler for error treatment
function onError(error){
    if(error.syscall !== 'listen')
    {
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe' + port:
    'Port' + port;
    
    switch(error.code){
        case'EACESS':
        console.error(bind, 'It requires elevated privileges!');
        process.exit(1);
        break;
        case 'EADDRINUSE':
            console.error(bind,'Address is already in use!');
            process.exit(1);
            break;
        default:
            throw error;
            
    }
}

//listening debug function
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ?
    'pipe' + addr :
    'port' + addr.port;
    debug('Listening on ' + bind);
}