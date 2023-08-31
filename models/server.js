const express = require('express');
const cors = require('cors')

class Server {



    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';



        //Middlewares
        this.middlewares();
        //Rutas app
        this.routes();
    }

    middlewares(){
        //Directorio público
        this.app.use(express.static('public'));
        //CORS
        this.app.use(cors())
        //Lectura y parseo del Body
        this.app.use(express.json());
    }

    routes(){
    
        this.app.use(this.userPath, require('../routes/users'));

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server is up and running in port ${this.port}`)
        });
    }

}


module.exports = Server;