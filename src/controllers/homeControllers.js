

import db from '../models/index';
let homeControllers = async (req, res) => {
    try {
        let data = await db.User.findAll();
        
        return res.render('demo.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
    
}

module.exports = {
    homeControllers: homeControllers,
}