// Obtener el elemento del mensaje de burbuja de WhatsApp
const whatsappMessage = document.createElement('div');
whatsappMessage.classList.add('whatsapp-message');
whatsappMessage.innerText = '¿Cómo podemos ayudarte?';

// Agregar el mensaje de burbuja al cuerpo del documento
document.body.appendChild(whatsappMessage);

// Mostrar el mensaje de burbuja automáticamente al cargar la página
window.addEventListener('load', () => {
  whatsappMessage.classList.add('show');
});

// Ocultar el mensaje de burbuja al hacer clic fuera de él
document.addEventListener('click', (event) => {
  if (!whatsappMessage.contains(event.target)) {
    whatsappMessage.classList.remove('show');
  }
});
