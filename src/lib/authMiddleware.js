const jwt = require('jsonwebtoken');

const secretKey = 'FINUXAPIREST'; // La misma clave con la que se firmó el token

function validarToken(req, res, next) {
  const token = req.query.token || global.token; // Intenta obtener el token de la URL o de la variable global

  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(400).send({ mensaje: 'Token inválido' });
      } else {
        // El token es válido, puedes acceder a la información en decoded
        req.usuario = decoded.usuario; // Agrega la información del usuario al objeto request
        next(); // Continúa con el siguiente middleware o controlador
      }
    });
  } else {
    res.status(401).send({ mensaje: 'Token no proporcionado' });
  }
}

module.exports = validarToken;
