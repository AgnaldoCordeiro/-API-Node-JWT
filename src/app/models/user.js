const mongoose = require('../../database');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const UserShema = new Schema({
    name: {
        type: String,
        require: true,
    },
    login: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    passwordResetToken: {
        type: String,
        select: false,
    },
    passwordResetExpires: {
        type: Date,
        select: false,
    },
    cpf: {
        type: String,
        unique: true,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});

UserShema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', UserShema);

module.exports = User;
