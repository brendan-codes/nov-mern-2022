const express = require('express');
const app = express();
const port = 8000;
require("./config/mongoose");
require('./routes/routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );