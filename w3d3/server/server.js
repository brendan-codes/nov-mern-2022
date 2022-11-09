const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require("./config/mongoose");
app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());


require('./routes/routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );