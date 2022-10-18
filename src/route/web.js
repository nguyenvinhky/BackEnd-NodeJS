import express from 'express';
import homeControllers from '../controllers/homeControllers';

let router = express.Router();

let initWebRouters = (app) =>{
    router.get('/', homeControllers.homeControllers);
    router.get('/crud', homeControllers.getCRUD);
    return app.use("/", router);
}

module.exports = initWebRouters;