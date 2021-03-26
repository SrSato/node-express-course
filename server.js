const express = require('express');
const app = express();

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

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success:true,
		message: 'Pescamos un usuario!',
		usr: req.params.id
	})
})

//Levantamos el server
app.listen(8000,function(){
	console.log("Servidor furrulando!")
})