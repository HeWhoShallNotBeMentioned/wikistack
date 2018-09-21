const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const models = require('./models');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
const { db } = require('./models');

db.authenticate().then(() => {
  console.log('connected to the database');
})

app.get('/', (req, res) => res.send('Hello World!'))

const init = async () => {
  await models.db.sync({force: true});

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}
init();

