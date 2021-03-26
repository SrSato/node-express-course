const express = require('express');
const app = express();

const datosDePega=[
{name:'Sera'},
{name:'Tunante'}
]

app.get('/users',function(req,res){
	res.json({
		success:true,
		message: 'Recogemos correctametne los usuarios. Moooola!',
		users:datosDePega
	})
})

app.listen(8000,function(){
	console.log("Servidor furrulando!")
})