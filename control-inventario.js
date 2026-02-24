class Producto {
    constructor(codigo, nombre, categoria, cantidad, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

class Inventario {
    constructor() {
        this.productos = new Map();
    }

    agregar(producto) {
        if(this.productos.get(producto.codigo) !== undefined) {
            return false;
        }

        this.productos.set(producto.codigo, producto);
        return true;
    }
}

const inventario = new Inventario();

function agregarProducto() {
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);

    if (codigo == "" || nombre == "" || categoria == "") {
        mostrarMensaje("Todos los campos son obligatorios", "error");
        return;
    }

    if (cantidad <= 0) {
        mostrarMensaje("La cantidad debe ser mayor a 0", "error");
        return;
    }

    if (precio <= 0) {
        mostrarMensaje("El precio debe ser mayor a 0", "error");
        return;
    }

    const nuevoProducto = new Producto(codigo, nombre, categoria, cantidad, precio);

    if (inventario.agregar(nuevoProducto)) {
        mostrarMensaje("Producto agregado correctamente", "exito");
        document.getElementById("formInventario").reset();
    } else {
        mostrarMensaje("Error: Código de producto ya existente", "error");
    }
}

function mostrarMensaje(texto, tipo) {
    const mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = texto;
    mensaje.style.display = "block";

    mensaje.classList.remove("mnsj-exito");
    mensaje.classList.remove("mnsj-error");

    if (tipo == "exito") {
        mensaje.classList.add("mnsj-exito");
    } else {
        mensaje.classList.add("mnsj-error");
    }

    setTimeout(function () {
        mensaje.style.display = "none";
    }, 3000);
}