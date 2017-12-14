const express = require('express');
const app = express();

require('./Routes/AuthRoutes')(app);

app.get('/', (req, res) => {
    res.send({hello: 'world'});
});

//Dynamic port binding
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server listen on port: ' + PORT);
});
