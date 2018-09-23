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
  try {
      const page = new Page ({
        title: req.body.title,
        content: req.body.page_content
      })

      const [user, wasCreated] = await User.findOrCreate({
        where: {
          name: req.body.name,
          email: req.body.email
        }
      });

      await page.save();
      page.setAuthor(user);
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
    if (page === null) {
      res.sendStatus(404);
    } else {
      const author = await page.getAuthor();
      res.send(wikiPage(page, author));
    }
  } catch (error) {
    next(error)
  }
});


module.exports = router;