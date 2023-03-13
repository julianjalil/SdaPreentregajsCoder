let productos = [];
let total = 0;

const botonAgregar = document.getElementById("btnAgregar");
botonAgregar.addEventListener("click",agregarProducto)

  function agregarProducto() {
  let nombre = document.getElementById("nombre").value;
  let precio = document.getElementById("precio").value;

  if (nombre.trim() === "" || precio.trim() === "") {
    alert("Por favor, ingrese un nombre y precio");
    return;
  }

  let producto = { nombre: nombre, precio: parseFloat(precio) };
  productos.push(producto);

  let lista = document.getElementById("listaProductos");
  let item = document.createElement("li");
  item.innerHTML = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
  lista.appendChild(item);

  total += producto.precio;
  document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
}

const botonProcesar = document.getElementById("btnProcesarPedido");
botonProcesar.addEventListener("click", procesarPedido);

function procesarPedido() {
  if (productos.length === 0) {
    alert("Error. Seleccione al menos un producto");
    return;
  }

  alert(`Total de la compra: $${total.toFixed(2)}`);
  productos = [];
  total = 0;
  document.getElementById("listaProductos").innerHTML = "";
  document.getElementById("total").innerHTML = "$0.00";
}
