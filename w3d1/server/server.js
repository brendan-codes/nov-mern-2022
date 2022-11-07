const express = require('express');
const cors = require('cors');
const app = express();

require("./config/config.mongoose");

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());

const router = require('./routes/song.routes');
router(app);

app.listen(9001, () => console.log("running on port 9001"));