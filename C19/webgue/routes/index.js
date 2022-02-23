var express = require('express');
var router = express.Router();
const fs = require('fs')
var path = require('path');

let data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data.json'), 'utf-8'))

router.get('/', function (req, res) {
  res.render('list', { data })
})

router.get('/add', function (req, res) {
  res.render('add')
})

router.post('/add', function (req, res) {
  let task = req.body.task

  let todo = {
      task: task,
      complete: false
  }

  data.push(todo)
  fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
  res.redirect('/')
})

router.get('/delete/:id', function (req, res) {
  const id = req.params.id
  data.splice(id, 1)
  res.redirect('/')
})
router.get('/edit/:id', function(req, res) {
  const id = req.params.id
  res.render('edit', {data: data[id]})
})

router.post('/edit/:id', function (req, res) {
  console.log(req.body)
  const id = req.params.id
  data[id].task = req.body.task
  data[id].complete = JSON.parse(req.body.complete)
  fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
  res.redirect('/')
})

module.exports = router;
