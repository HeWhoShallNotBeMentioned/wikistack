const express = require('express');
const router = express.Router();
const { Page, User } = require("../models");
const { addPage, editPage, main, wikiPage  } = require('../views');

router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.send(main(pages));
  } catch (error) { next(error) }
})

router.post('/', async (req, res, next) => {
  //console.log(res.json(req.body));
  //res.send('got to POST /WIKI/');

  const page = new Page ({
    title: req.body.title,
    content: req.body.page_content
  })
  console.log("page ", page);
  try {
    await page.save();
  
      res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error)
  }
})

router.get('/add', async (req, res, next) => {
  res.send(addPage());
})

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.send(wikiPage(page));
  } catch (error) {
    next(error)
  }
});


module.exports = router;