const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/songs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
