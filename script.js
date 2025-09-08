
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formRegistro');

  form.addEventListener('submit', (e) => {
    
    if (!form.checkValidity()) {
      form.reportValidity();
      e.preventDefault();
      return;
    }

   
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const clave  = document.getElementById('clave').value;

   
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombreRegex.test(nombre)) {
      alert('El nombre solo puede contener letras y espacios.');
      e.preventDefault();
      return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert('Por favor, ingresa un correo válido.');
      e.preventDefault();
      return;
    }

    
    if (clave.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      e.preventDefault();
      return;
    }

    
    alert('Formulario válido. ¡Registro enviado!');

    
    e.preventDefault();
  });
});
