const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');


const app = express();
app.disable("x-powered-by");

let helmet = require("helmet");
app.use(helmet.hidePoweredBy());

const port = process.env.PORT || 8000;

let corsOptions = {
    origin: 'http://localhost:3000' 
  };

app.use(cors(corsOptions));
app.use(express.json());


app.get('/api', function(req, res) {
    var url = 'https://api.themoviedb.org/3/discover/movie?api_key=3d485e84c7ae1856fb134fefd31ed2df&language=en-US&sort_by=popularity.desc&include_video=false&page=1';
    fetch(url)
    .then(result => result.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
});

app.listen(port, () => console.log('The app is running on Port:'+ port));