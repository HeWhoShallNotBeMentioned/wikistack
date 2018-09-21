const express = require('express');
const router = express.Router();
const { Page } = require("../models");
const { addPage } = require('../views');

router.get('/', (req, res, next) => {
  res.send('got to GET /WIKI/');
})

router.post('/', async (req, res, next) => {
  console.log(res.json(req.body));
  //res.send('got to POST /WIKI/');

  const page = new Page ({
    title: req.body.title,
    content: req.body.page_content
  })

  try{
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error)
  }
})

router.get('/add', async (req, res, next) => {
  res.send(addPage());
})


module.exports = router;