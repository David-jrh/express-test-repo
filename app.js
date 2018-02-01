const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

app.get('/api/droner', (req, res) => {
    res.json({

        "drone": [
            {
                'effective': "mavic pro plat",
                'profeesionel': "Inspire",
                'semi pro': "Phantom",
            }
        ]
    });
});

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('app list on http://localhost:3000')
});