document.getElementById('Ingresar_login').addEventListener('click', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Por favor, ingresa tu correo electrónico y contraseña.');
        return;
    }

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert('Inicio de sesión exitoso');
            window.location.href = 'inicio.html';
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        alert('No se encontró un usuario con ese correo');
    }
});