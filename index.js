const express = require('express');

const app = express();
const port = 80;

app.set('view engine', 'ejs');

const pokeneaRoutes = require('./routes/pokenea');
app.use('/pokenea', pokeneaRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
