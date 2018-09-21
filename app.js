const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
const { db } = require('./models');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

//console.log("{ db } ", { db });
db.authenticate().then(() => {
  console.log('connected to the database');
})

app.get('/', (req, res, next) => res.redirect('/wiki'));;

const init = async () => {
  await models.db.sync({force: true});

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}
init();

