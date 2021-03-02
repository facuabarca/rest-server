const  { response, request } = require('express')


const userGet = (req = request, res = response) => {

  const { q, nombre } = req.query;

  res.json({
    ok: true,
    msg: 'get desde controlador',
    q,
    nombre
  });
}

const userPut = (req, res) => {

  const id = req.params.id;

  res.json({
    msg: 'put desde api - controlador',
    id
  });
}

const userPost = (req, res) => {

  const { nombre, edad } = req.body; 
  res.json({
    ok: true,
    msg: 'post desde api - controlador',
    nombre,
    edad
  });
}

const userDelete = (req, res) => {
  res.json({
    ok: true,
    msg: 'delete desde api - controller'
  });
}

module.exports = {
  userGet,
  userPut,
  userPost,
  userDelete
}

