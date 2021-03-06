const PORT = process.env.PORT || 5000
PORT, () => console.log(`Listening on ${ PORT }`);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//połączenie z mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://patraspan:123456789@ds237620.mlab.com:37620/users');


//Schemat danych uzytkownika
const userSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: Boolean,
    created_at: Date,
    updated_at: Date
});


//Mongoose schema method
userSchema.methods.manify = function(next) {
    this.name = this.name + '-boy';

    return next(null, this.name);
};

userSchema.pre('save', function (next) {
    //pobieranie aktualnego czasu
    const currentDate = new Date();
    //zmaiana pola na aktualny czas
    this.updated_at = currentDate;

    if (!this.created_at) {
        this.created_at = currentDate;
    }
    // next() jest funkcją która przechodzi do następnego hooka do
    // wykonania przed lub po requeście
    next();
});

//model
const User = mongoose.model('User', userSchema);
//kenny
const kenny = new User({
    name: 'Kenny',
    username: 'Kenny_the_boy',
    password: 'password'
});
kenny.manify(function (err, name) {
    if (err) throw err;
    console.log('Twoje nowe imię to: ' + name);
});
//Benny
const benny = new User({
    name: 'Benny',
    username: 'Benny_the_boy',
    password: 'password'
});

benny.manify(function (err, name) {
    if (err) throw err;
    console.log('Twoje nowe imię to: ' + name);
});


//Mark
const mark = new User({
    name: 'Mark',
    username: 'Mark_the_boy',
    password: 'password'
});

mark.manify(function (err, name) {
    if (err) throw err;
    console.log('Twoje nowe imię to: ' + name);
});


const findAllUsers = function() {
    // find all users
    return User.find({}, function(err, res) {
        if (err) throw err;
        console.log('Actual database records are ' + res);
    });
}

const findSpecificRecord = function() {
    // find specific record
    return User.find({ username: 'Kenny_the_boy' }, function(err, res) {
        if (err) throw err;
        console.log('Record you are looking for is ' + res);
    })
}

const updadeUserPassword = function() {
    // update user password
    return User.findOne({ username: 'Kenny_the_boy' })
        .then(function(user) {
            console.log('Old password is ' + user.password);
            console.log('Name ' + user.name);
            user.password = 'newPassword';
            console.log('New password is ' + user.password);
            return user.save(function(err) {
                if (err) throw err;
                console.log('Uzytkownik ' + user.name + ' zostal pomyslnie zaktualizowany');
            })
        })
}

const updateUsername = function() {
    // update username
    return User.findOneAndUpdate({ username: 'Benny_the_boy' }, { username: 'Benny_the_man2' }, { new: true }, function(err, user) {
        if (err) throw err;

        console.log('Nazwa uzytkownika po aktualizacji to ' + user.username);
    })
}

const findMarkAndDelete = function() {
    // find specific user and delete
    return User.findOne({ username: 'Mark_the_boy' })
        .then(function(user) {
            return user.remove(function() {
                console.log('User successfully deleted');
            });
        })
}

const findKennyAndDelete = function() {
    // find specific user and delete
    return User.findOne({ username: 'Kenny_the_boy' })
        .then(function(user) {
            return user.remove(function() {
                console.log('User successfully deleted');
            });
        });
}

const findBennyAndRemove = function() {
    // find specific user and delete
    return User.findOneAndRemove({ username: 'Benny_the_man2' })
        .then(function(user) {
            return user.remove(function() {
                console.log('User successfully deleted');
            });
        });
}

Promise.all([kenny.save(), mark.save(), benny.save()])
    .then(findAllUsers)
    .then(findSpecificRecord)
    .then(updadeUserPassword)
    .then(updateUsername)
    .then(findMarkAndDelete)
    .then(findKennyAndDelete)
    .then(findBennyAndRemove)
    .catch(console.log.bind(console));

    const express = require('express');
    const app = express();
    
    app.get('/', (req, res) => res.send('Hello World!'))
    
    app.listen(PORT, () => console.log('Example app listening on port 3000!'))

