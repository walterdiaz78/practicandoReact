
const string = 'esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boolean = true
const funcion = () => 1+1
const objeto = { nombre: 'Juan', edad: 25, ocupacion: 'Programador'}
const fecha = new Date()


export const PrimerComponente = () => {
  return (
    
    <h1>{string}, esto un numero{number}, esto una funcion que suma 1+1 y nos da el resultado que es {funcion()} en este caso y esto es un array *{array}* <br />
    no podemos pasar objetos directamente aunque si es posible haciendo 
    JSON.stringify parentesis objeto cierroParentesis dentro de llaves, aca lo hago: {JSON.stringify(objeto)} 
    <br />
    muestro fecha {JSON.stringify(fecha)}</h1>
  )
}
