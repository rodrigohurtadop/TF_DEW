document.getElementById('Unirme').addEventListener('click', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('txtNombre').value;
    const apellido = document.getElementById('txtApPaterno').value;
    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPassword').value;

    if (!nombre || !apellido || !email || !password) {
        alert('Por favor, completa todos los campos antes de registrar.');
        return;
    }

    const user = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert('Usuario registrado exitosamente');

    window.location.href = 'login.html'; 
});