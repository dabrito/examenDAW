var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Ropas = require('../models').ropa;
const Colores = require('../models').colores;

router.get('/findAll/json', function (req, res, next) {
  Ropas.findAll({attributes: { exclude: ['id','createdAt','updatedAt'] },
  }).then(ropas => {
    res.json(ropas);
  }).catch(err => res.json({ error: err }));
  // }).catch(err => res.status(400).send(err));
});

router.get('/findAll/view', function (req, res, next) {
  Ropas.findAll({attributes: { exclude: ['createdAt','updatedAt'] }, 
  }).then(ropas => {
    console.log(ropas);
    res.render('ropas', { title: 'Ropas', arrRopas: ropas });
  })
  .catch(error => res.status(400).send(error))
});

router.get('/findAllByRange/json', function (req, res, next) {
  let lower = parseFloat(req.query.lower);
  let higher = parseFloat(req.query.higher);

  Ropas.findAll({
    attributes: { exclude: ['createdAt','updatedAt'] },
    where: { precio: { [Op.between]: [lower, higher] }}
  })
    .then(ropas => {
      res.render('ropas', { title: 'Ropas', arrRopas: ropas });
    })
    .catch(error =>
      res.status(400).send(error))
});

router.get('/findAllById/:id/json', function (req, res, next) {
  let id = parseInt(req.params.id);

  Ropas.findAll({attributes: { exclude: ['createdAt','updatedAt'] },
    where: { [Op.and]: [{id: id}] }
  })
    .then(ropas => {
      res.render('ropas', { title: 'Ropas', arrRopas: ropas });
    })
    .catch(error =>
      res.status(400).send(error))
});

module.exports = router;