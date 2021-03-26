//Necesidades iniciales
const express = require('express'); //lo necesitamos para que funcione express
const app = express();
const bodyParser = require('body-parser'); //Lo necesitamos para las rutas post -incrusta en el body del req-

app.use(bodyParser.json()); //Habilitamos el uso de body parser para nuestra app. Pa las rutas POST ;)

//Nuestras mandangas. Esto ya no son necesidades iniciales.
const datosDePega=[
{name:'Sera'},
{name:'Tunante'}
]

// Ruta GET para devolver todos los usuarios de pega
app.get('/users',function(req,res){
	res.json({
		success:true,
		message: 'Recogemos correctametne los usuarios. Moooola!',
		users:datosDePega
	})
})

//Ruta GET dinámica para pillar datos de cada usuario
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success:true,
		message: 'Pescamos un usuario!',
		usr: req.params.id
	})
})

//Ruta POST para fingir un login
app.post('/login',function(req,res){
	const username=req.body.username;
	const password=req.body.password;

	const nickDePega="BichoMalo";
	const pwdDePega="noTeLoDigo";

	if(username===nickDePega && password===pwdDePega){
		res.json({
			success:true,
			message: 'Bienvenido y padentro!',
			token: 'Aquí iría un token encriptadito'
		})
	} else {
		res.json({
			success:false,
			message: 'Pasa algo con ese password o ese usuario... Pa mi que no son buenos'
		})
	}
})

//Levantamos el server
app.listen(8000,function(){
	console.log("Servidor furrulando!")
})