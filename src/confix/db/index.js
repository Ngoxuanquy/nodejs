const mongoose = require('mongoose');

async function conner(){
    try {
        await mongoose.connect('mongodb://localhost:27017/vay_dev',{
            
        });
        console.log('tc');
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {conner};