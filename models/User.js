const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String,
        maxlength:20,
        minlength:3,
        required: true,
        unique: [true, '`{PATH}` alanı benzersiz olmalıdır']
    },
    password: {
        type: String,
        maxlength:100,
        minlength:5,
    },
});

module.exports = mongoose.model('user',UserSchema);
