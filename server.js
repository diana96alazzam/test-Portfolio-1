'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.get('*', (request, response) =>
response.status(404).send('404 page not found')
);
app.listen(PORT, () => console.log(`listening to prot ${PORT}`));