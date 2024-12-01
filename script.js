const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalElement = document.getElementById("total");

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;
    carrito.forEach((item, index) => {
        total += item.precio;
        const li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio} CLP`;
        listaCarrito.appendChild(li);
    });
    totalElement.textContent = total;
}

function finalizarCompra() {
    alert("Gracias por tu compra. Procesaremos tu pedido pronto.");
    carrito.length = 0;
    actualizarCarrito();
}
