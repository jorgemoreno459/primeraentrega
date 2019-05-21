const {cursos, opciones} = require ('./cursos');
const fs = require('fs');
const argv = require('yargs')
			.command('inscribir','inscribir a un curso',opciones)
			.argv

let {id_course, alumno, cedula} = opciones;
let buscar = cursos.find( resultado => resultado.id ==  argv.id_course);
let lCursos = () =>{
	cursos.forEach(function (elemento, index) {
		setTimeout(function(){
			texto = 'Los datos del curso ' + elemento.nombre +' son :'+'\n'+ 
					'ID '+ elemento.id +'\n'+ 
					'Duracion ' + elemento.duracion+'\n'+
					'Valor '+ elemento.valor
	    	console.log(texto);
		},index*2000);
	});
}

if(argv.id_c == null){
	lCursos();
}else if(buscar == null){	
	lCursos();
	console.log('id curso incorrecto');
}else{
    let inform_alumno = (opciones) => {
        let texto = 'Aspirante ' + argv.alumno + '\n' +
		            'número de identificacion ' + argv.cedula + '\n' +
		            'curso seleccionado ' + buscar.nombre + '\n' +
		            'el cual tiene una duracion de ' + buscar.duracion + '\n' +
		            ', con un valor de ' + buscar.valor ;
		            fs.writeFile('aspirant.txt', texto, (err) => {
		                if (err) throw err;
		                console.log('se ha creado el archivo');
		            });
    }
    inform_alumno(opciones);	
}			