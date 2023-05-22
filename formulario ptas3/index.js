const express = require('express');
const path = require('path');
const { usuario, pessoa,Pessoa } = require('./models');

const app = express();

// view engine setup b 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async function(req, res){
  var usuarios = await usuario.findAll();
  res.render('index', { usuarios });
})

app.get('/pessoas/criar', async function(req, res){
  var pessoas = await pessoa.findAll();
  res.render('pessoas/criar', { pessoas});
})

app.post('/pessoas/criar', async function (req, res) {
  try {
    await Usuario.create(req.body);
    res.redirect('/pessoas');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ocorreu um erro ao criar o usuário.' });
  }
});

app.post('/pessoas/delete', async function(req, res){
  try {
      await Pessoa.destroy({ where: { id: req.body.id } });
      res.redirect('/pessoas')
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Ocorreu um erro ao criar o usuário.' });
  }
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});
