import express from 'express';
import homeControllers from '../controllers/homeControllers';

let router = express.Router();

let initWebRouters = (app) =>{
    router.get('/', homeControllers.homeControllers);

    router.get('/vinhky', (req, res)=>{
        return res.send('Hello World vinhky');
    });
    return app.use("/", router);
}

module.exports = initWebRouters;