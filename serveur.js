const express = require("express");

const app = express();

app.get('/ping', (_quest, reponse) => {
    reponse.json('pong');
});

app.listen(3000);

