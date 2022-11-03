const express = require('express');
const app = express();
const  { faker }  = require('@faker-js/faker'); // fixed with curlies

app.get("/", (req, res) => {
    console.log("This is the server talking!")
    res.json({
        name: faker.name.firstName()
    });
})

app.listen(8008, () => {
    console.log("Running on port 8008");
});