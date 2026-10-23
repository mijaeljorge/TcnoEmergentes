
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('footer form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = form.nombre.value.trim();
        const correo = form.correo.value.trim();

        if (!nombre || !correo) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        alert(`¡Gracias ${nombre}! Recibirás información en ${correo}`);
        form.reset();
    });
});