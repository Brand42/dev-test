const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const _ = require('lodash');

module.exports = (app) => {
  app.use('/', router);
};



const articles = [
  new Article({
    title: 'Lorem Ipusm dolore',
    img: '/img/7.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae elit vel orci semper consequat. Morbi malesuada sem laoreet aliquet porttitor. Integer dapibus molestie ligula, et tristique dui viverra placerat. Cras a tortor ex. Sed eget felis tincidunt, consectetur nibh ac, finibus erat. Duis porta vulputate arcu eget mattis. Aliquam consectetur quam sit amet fermentum iaculis. Duis accumsan erat sit amet lacinia ultricies.'
  }),
  new Article({
    title: 'Lorem Ipusm dolore',
    img: '/img/7.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae elit vel orci semper consequat. Morbi malesuada sem laoreet aliquet porttitor. Integer dapibus molestie ligula, et tristique dui viverra placerat. Cras a tortor ex. Sed eget felis tincidunt, consectetur nibh ac, finibus erat. Duis porta vulputate arcu eget mattis. Aliquam consectetur quam sit amet fermentum iaculis. Duis accumsan erat sit amet lacinia ultricies.'
  }),
  new Article({
    title: 'Lorem Ipusm dolore',
    img: '/img/7.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae elit vel orci semper consequat. Morbi malesuada sem laoreet aliquet porttitor. Integer dapibus molestie ligula, et tristique dui viverra placerat. Cras a tortor ex. Sed eget felis tincidunt, consectetur nibh ac, finibus erat. Duis porta vulputate arcu eget mattis. Aliquam consectetur quam sit amet fermentum iaculis. Duis accumsan erat sit amet lacinia ultricies.'
  })
];

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Dev test',
    articles: articles
  });
});


router.get('/article/:id', (req, res, next) => {

  let article = _.find(articles, 'articles', req.params.id);

  res.render('article', article);

});
