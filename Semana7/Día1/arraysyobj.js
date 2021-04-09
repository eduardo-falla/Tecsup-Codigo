

let arrayDeUsuarios = [
  { nombre: "Paul", edad: 21, colorFav: "verde" },
  { nombre: "Marie", edad: 31, colorFav: "azul" },
  { nombre: "Jhon", edad: 16, colorFav: "rojo" },
  { nombre: "Carla", edad: 51, colorFav: "dorado" },
  { nombre: "Paula", edad: 11, colorFav: "verde" },
  { nombre: "Mario", edad: 41, colorFav: "azul" },
  { nombre: "Jhoana", edad: 9, colorFav: "rojo" },
  { nombre: "Carlos", edad: 41, colorFav: "dorado" },
  { nombre: "Paulina", edad: 2, colorFav: "verde" },
  { nombre: "Marcos", edad: 65, colorFav: "azul" },
  { nombre: "Jhonatan", edad: 11, colorFav: "rojo" },
  { nombre: "Jimena", edad: 71, colorFav: "dorado" },
];

/* ///////////////////////////////////////////////////////////////////////

var datosMapeados = arrayDeUsuarios.map(function (arrayDeUsuarios) {
  return arrayDeUsuarios.nombre;
// return [arrayDeUsuarios.nombre, arrayDeUsuarios.colorFav]; 
});

var datosFiltrados = arrayDeUsuarios.filter((el) => { return el.edad > 18; })
console.log(datosFiltrados);

/////////////////////////////////////////////////////////////////////// */

let nuevo=arrayDeUsuarios.map(function(oe) {
  return (({edad})=>({edad}))(oe);
});
console.log(nuevo)