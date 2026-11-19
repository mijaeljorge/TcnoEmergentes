const btnCargar = document.getElementById("btnCargar");
const lista = document.getElementById("listaUsuarios");
btnCargar.addEventListener("click", async () => {
lista.innerHTML = "<li>Cargando datos...</li>";
try {
const respuesta = await fetch("https://typicode.com");
const usuarios = await respuesta.json();
lista.innerHTML = ""; // Limpia el mensaje de carga
// Recorre los primeros 5 usuarios y los dibuja en el HTML
usuarios.slice(0, 5).forEach(usuario => {
const li = document.createElement("li");
li.textContent = `${usuario.name} — Correo: ${usuario.email}`;
lista.appendChild(li);
});
} catch (error) {
lista.innerHTML = "<li>Error al conectar con el servidor.</li>";
}
});