var express = require('express');
var router = express.Router();

router.use(express.json());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Acessando API de vagas!');
});

router.get('/:id', (req,res) => {
    res.send('Acessando API de vagas ria POST: '+ req.params.vagas);
});

router.post('/', (req, res) => {
    const corpo = `Login: ${req.body.login}\n Senha: ${req.body.senha}`
    res.send('Acessando a API de vagas via POST: \n' + corpo)
})

router.patch('/:id', ()=> {
 res.send('Acessando API de vagas via PATCH')
})

router.delete('/:id', () => {
    res.send('Acessando a Administração via DELETE')
})

module.exports = router;
