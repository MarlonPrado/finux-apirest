const express = require('express');
const router = express.Router();
const pool = require('../../db');
const bcrypt = require('bcryptjs');
const schemasUsuario = require('../../schema/schemasUsuario');
const { compare } = require('bcryptjs');
const SwaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const jwt = require('jsonwebtoken');
const validarLogin  = require('../../lib/authMiddleware.js');


//Acceso de la Pagina Principal
router.get('/finux', async (req, res) => {
  res.status(200).send({ estado: "OK", message: "Vista Renderizada Inicio" })
});


//Acceso de la Pagina DashBoard (debe loguearse primero)
router.get('/dashboard',validarLogin, async (req, res) => {
  res.status(200).send({ estado: "OK", message: "Vista Renderizada DashBoard" })
});


//Direccion a Registro
router.get('/registro', async (req, res) => {
  res.status(200).send({ estado: "OK", message: "Vista Renderizada Registro" })
});

//Direccion a inicio de sesion
router.get('/login', async (req, res) => {
  res.status(200).send({ estado: "OK", message: "Vista Renderizada Login" })
});


//Registro de Usuario POST FORMULARIO
router.post('/registro', async (req, res) => {
  try {
   console.log(req.body);
    // Validar el esquema de usuario (schemasUsuario)
    const { error } = schemasUsuario.validate(req.body);

    if (error) {
      // Manejar errores de validación
      console.log(error.details[0].message);
      req.flash('error', error.details[0].message);
      return res.status(400).send({ estado: "ERROR", message: error.details[0].message });
    } else {
      // Verificar si el correo ya existe
      const busqueda = await pool.query('SELECT * FROM Persona WHERE correo_electronico  = ?', [req.body.correo]);

      if (busqueda.length !== 0) {
        req.flash('error', 'Correo Ya Existe');
        return res.status(400).send({ estado: "ERROR", message: "Correo Ya Existe" });
      } else {
        const hashContraseña = bcrypt.hashSync(req.body.password, 10);
        const { nombre, apellido, correo, telefono } = req.body;

        const usuario = {
          nombre,
          apellidos: apellido,
          correo_electronico: correo,
          numero_telefono: telefono,
          contrasena: hashContraseña,
        }

        const result = await pool.query('INSERT INTO Persona SET ?', [usuario]);
        const nuevoID = result.insertId;


        if (req.body.rol == 0) {
          console.log('Docente');
          const doc = {
            ID_docente: nuevoID,
            facultad: req.body.facultad
          }
          console.log(doc);
          await pool.query('INSERT INTO Docente set ?', [doc])
          
          req.flash('success', 'Usuario registrado correctamente');
          res.status(200).send({ estado: "OK", message: "Docente registrado correctamente" })
        } 
        
        
        else if (req.body.rol == 1) {
          console.log('Facultad');
          const doc = {
            ID_personaFacultad: nuevoID,
            nombreFacultad: req.body.nombreFacultad
          }
          console.log(doc);
          await pool.query('INSERT INTO dirfacultad set ?', [doc])
          
          req.flash('success', 'Usuario registrado correctamente');
          res.status(200).send({ estado: "OK", message: "Director de Facultad registrado correctamente" })

        } else if (req.body.rol == 2) {
          console.log('Director de Grupo de Investigacion');
          const doc = {
            ID_personaGrupoInv: nuevoID,
            nombreGrupoInv: req.body.nombreGrupoInv
          }
          console.log(doc);
          await pool.query('INSERT INTO dirGrupoInv set ?', [doc])
          
        req.flash('success', 'Usuario registrado correctamente');
          res.status(200).send({ estado: "OK", message: "Director de Grupo de Investigacion registrado correctamente" })

        } else if (req.body.rol == 3) {
          console.log('Director de Programa');
          const doc = {
            ID_personaPrograma: nuevoID,
            nombreDirPrograma: req.body.nombreDirPrograma
          }
          console.log(doc);
          await pool.query('INSERT INTO dirPrograma set ?', [doc])
          
        req.flash('success', 'Usuario registrado correctamente');
          res.status(200).send({ estado: "OK", message: "Director de Programa registrado correctamente" })

        }
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ estado: "ERROR", message: "Error interno del servidor" });
  }
});


router.post('/login', async (req,res) =>{

 
  const busqueda = await pool.query('SELECT * FROM Persona  WhERE correo_electronico  = ?', [req.body.correo_electronico])
  
  if (busqueda.length!==0) {
    console.log(busqueda)
    // Comparar la contraseña proporcionada con la contraseña encriptada almacenada en la base de datos
    if (bcrypt.compareSync(req.body.password, busqueda[0].contrasena)) {
      
      console.log("Bien Todo");
      const payload = {
        usuario: busqueda[0].nombre,
        correo: busqueda[0].correo_electronico
      };
      const token = jwt.sign(payload, "FINUXAPIREST", { expiresIn: '30s' })
      global.token = token
      res.status(200).send({ estado: "OK", message: "Inicio exitoso: Bienvenido " + busqueda[0].nombre + " " + busqueda[0].apellidos })
    } else {
      console.log("Mal Clave")
      res.status(400).send({ estado: "ERROR", message: "Contraseña Incorrecta"});
    }
  } else {
    console.log("Mal Correo")
      res.status(400).send({ estado: "ERROR", message: "Correo Electronico Incorrecto"});
  }
  }) 


module.exports = router;