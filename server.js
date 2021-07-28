const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/api', function (req, res) {
    var url = 'https://api.themoviedb.org/3/discover/movie?api_key=3d485e84c7ae1856fb134fefd31ed2df&language=en-US&sort_by=popularity.desc&include_video=false&page=1';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
});

app.listen(port, () => console.log('The app is running on Port:'+ port));