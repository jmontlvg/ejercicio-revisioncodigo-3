// alert('Ejercicio 3 de Revisión de código'); Se agregó esta alerta para comprobar la correcta comunicación entre los archivos HTML y JS

// Tenemos un li de productos

/**
 * Puntos IMPORTANTES a considerar para este ejercicio:
 * 
 * - La aplicación muestra una lista de productos, en este caso zapatos. 
 * - La información proviene de un arreglo de objetos.
 * - El usuario puede realizar búsquedas, escribiendo en el input y presionando filtrar.
 * - En ese momento se aplica un filtro al arreglo y se muestran los elementos que coinciden con la búsqueda.
 */


//Este es el arreglo de objetos (productos)
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos");//Se cambia .getElementsByName por .getElementsById ya que div no tiene atributo 'name'
const $i = document.querySelector('.input');//Se identifica la clase '.input' y se coloca en el elemento 'input'

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  li.appendChild(d);
  
}//for

// Se elimina la línea "displayProductos(productos)"
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {

  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }//for
}//botonDeFiltro

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  