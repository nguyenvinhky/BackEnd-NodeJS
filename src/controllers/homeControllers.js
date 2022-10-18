

import db from '../models/index';
let homeControllers = async (req, res) => {
    try {
        let data = await db.customer.findAll();
        
        return res.render('demo.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
    
}

let getCRUD = async (req, res) => {
    return res.render('crud.ejs');
}

module.exports = {
    homeControllers: homeControllers,
    getCRUD: getCRUD,
}