import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    const messageBox = document.getElementById('messageBox');
    
    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();  // Prevenir el envío del formulario para mostrar el mensaje
        
        // Crear el mensaje
        const message = document.createElement('div');
        message.className = 'alert alert-success';
        message.textContent = 'Mensaje enviado';

        // Insertar el mensaje en el messageBox
        messageBox.innerHTML = ''; // Limpiar cualquier mensaje previo
        messageBox.appendChild(message);
    });
});