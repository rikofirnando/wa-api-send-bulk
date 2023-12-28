var express = require('express');
var router = express.Router();
const axios = require('axios');
const { default: ShortUniqueId } = require('short-unique-id');
require('dotenv').config();
const env = process.env;
const uid = new ShortUniqueId({ length: 10})

/* GET home page. */
// router.get('/', function(req, res, next) {
router.post('/send', function(req, res, next) {
  return axios({
    method: 'get',
    // url: `https://www.waboxapp.com/api/send/chat?token=${env.token}&uid=${req.body.my_phone_number}&to=${req.body.phone_number}&custom_uid=${Date()}${req.body.phone_number}&text=${req.body.message}`
    // url: `https://www.waboxapp.com/api/send/chat?token=${env.token}&uid=${req.body.my_phone_number}&to=${req.body.phone_number}&custom_uid=abcde&text=${req.body.message}`
    url: `https://www.waboxapp.com/api/send/chat?token=${env.token}&uid=${req.body.my_phone_number}&to=${req.body.phone_number}&custom_uid=${uid.rnd()}&text=${req.body.message}`
  }).then(response =>{
    res.send(response.data)
  }).catch(error =>{
    res.send(error)
  })
  // res.render('index', { title: 'Express' });
  // res.send({code: 1000, message: 'success'})
});

module.exports = router;
