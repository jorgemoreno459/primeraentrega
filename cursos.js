let cursos = [
	{
		id : 1,
		nombre : 'Matematicas Basicas',
		duracion : '4 meses',
		valor : '$200000'
	},
	{
		id : 2,
		nombre : 'Fisica 1',
		duracion : '4 meses',
		valor : '$350000'	
	},
	{
		id : 3,
		nombre : 'Fisica 2',
		duracion : '4 meses',
		valor : '$520000'	
	}
];


const opciones = {
    id_c: {
        demand: true
    },
    alumno: {
        demand: true
    },
    cedula: {
        demand: true
    }
}

module.exports = {
	cursos,
	opciones
};