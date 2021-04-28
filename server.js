var mongoose = require('mongoose');
var express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


mongoose.connect('mongodb://localhost:27017/NotQuack', {useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connection Successful! with DB"); 
});

var detailSchema = mongoose.Schema({
    Name: String,
    Email: E,
    Contact: Number,
    Mode: String,
    Message: String
    });

    var User = mongoose.model('users', detailSchema, 'users');

    const user = new User({
        Name: Akash,
        Email: akashyadav24,
        Contact: 8192909306,
        Mode: Video,
        Message: hello
        });
    user.save(function (err, ) {
        if (err) return console.error(err);
        console.log(` saved to collection.`);
    });


app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});


app.listen(5000, function () {
    console.log('Example app listening on port .' + '5000');
});
