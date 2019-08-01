const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect('mongodb://movie_user:123456a@ds013559.mlab.com:13559/heroku_cmgv2hrf',{ useNewUrlParser: true })
        .then(() => console.log("MongoDB: Connected"))
        .catch((err) => console.log("MongoDB:",err));

    mongoose.set('useCreateIndex', true);


    mongoose.Promise = global.Promise;
};