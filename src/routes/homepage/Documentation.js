const SwaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
/**
 * @swagger
 * tags:
 *   - name: 'Inicio,Registro y Login'
 *     description: 'Endpoints de acceso a usuario en Finux'
 * /registro:
 *   get:
 *     summary: Acceso a la Página de Registro
 *     description: Renderiza la vista de registro.
 *     tags:
 *       - 'Inicio,Registro y Login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Vista Renderizada Registro
 */


/**
 * @swagger
 * tags:
 *   - name: 'Inicio,Registro y Login'
 *     description: 'Endpoints de acceso a usuario en Finux'
 * /dashboard:
 *   get:
 *     summary: Acceso a la Página de dashboard
 *     description: Renderiza la vista de dashboard.
 *     tags:
 *       - 'Inicio,Registro y Login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Vista Renderizada Dahboard
 *       400:
 *         description: ERROR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Inicie sesion para validar entrada y/o Usuario no Permitido en esta pagina
 */
/**
 * @swagger
 * tags:
 *   - name: 'Inicio,Registro y Login'
 *     description: 'Endpoints de acceso a usuario en Finux'
 * /finux:
 *   get:
 *     summary: Acceso a la Página de Principal
 *     description: Renderiza la vista Principal del Aplicativo
 *     tags:
 *       - 'Inicio,Registro y Login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Vista Renderizada Pagina Inicial
 */



/**
 * @swagger
 * tags:
 *   - name: 'Inicio,Registro y Login'
 *     description: 'Endpoints de acceso a usuario en Finux'
 * /login:
 *   get:
 *     summary: Acceso a la Página de Inicio de Sesión
 *     description: Renderiza la vista de inicio de sesión.
 *     tags:
 *       - 'Inicio,Registro y Login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Vista Renderizada Login
 */

/**
 * @swagger
 * tags:
 *   - name: 'Inicio,Registro y Login'
 *     description: 'Endpoints de acceso a usuario en Finux'
 * /login:
 *   get:
 *     summary: Acceso a la Página de Inicio de Sesión
 *     description: Renderiza la vista de inicio de sesión.
 *     tags:
 *       - 'Inicio,Registro y Login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Vista Renderizada Login
 */



/**
 * @swagger
 * tags:
 *   - name: 'Inicio,Registro y Login'
 *     description: 'Endpoints de acceso a usuario en Finux'
 * /registro:
 *   post:
 *     summary: Registrar Usuario
 *     description: Registra un nuevo usuario en la base de datos.
 *     tags:
 *       - 'Inicio,Registro y Login'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nombre: "Juan"
 *             apellido: "Pérez"
 *             correo: "juan@example.com"
 *             password: "123455gkd"
 *             ppassword: "123455gkd"
 *             telefono: "+573123456789"
 *             rol: 0
 *             facultad: "Ciencias Basicas SOLO SI ES DOCENTE OSEA ROL 0"
 *             nombreFacultad: "Director de Ciencias Basicas SOLO SI ES DIRECTOR FACULTAD OSEA ROL 1"
 *             nombreGrupoInv: "Director de GIDI Grupo Inv SOLO SI ES DIRECTOR GRUPO INV OSEA ROL 2"
 *             nombreDirPrograma: "Director de ING Agronomica  SOLO SI ES DIRECTOR PROGRAMA  OSEA ROL 3"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Usuario registrado correctamente
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: Error de validación en el formulario
 *       409:
 *         description: Conflict
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: Correo Ya Existe
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: Error interno del servidor
 */
/**
 * @swagger
 * tags:
 *   - name: 'Inicio,Registro y Login'
 *     description: 'Endpoints de acceso a usuario en Finux'
 * /login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     description: Verifica las credenciales del usuario y permite iniciar sesión.
 *     tags:
 *       - 'Inicio,Registro y Login'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               correo_electronico:
 *                 type: string
 *                 example: marlontest@gmail.com
 *               password:
 *                 type: string
 *                 example: test1234
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Bienvenido usuario 
 *       400:
 *         description: Error en las credenciales
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: La contraseña es incorrecta, ¿olvidaste tu contraseña?
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estado:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: No se encontró ningún usuario con el correo electrónico
 */