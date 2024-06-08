document.addEventListener('DOMContentLoaded', () => {
    const newPasswordInput = document.getElementById('new-password');
    const repeatPasswordInput = document.getElementById('repeat-password');
    const toggleNewPassword = document.getElementById('toggle-new-password');
    const toggleRepeatPassword = document.getElementById('toggle-repeat-password');
    const passwordStrength = document.getElementById('password-strength');
    const form = document.getElementById('reset-form');

    function togglePasswordVisibility(input, toggle) {
        const icon = toggle.querySelector('img');
        if (input.type === 'password') {
            input.type = 'text';
            icon.src = '../eye-off.svg';
            icon.alt = 'Ocultar';
        } else {
            input.type = 'password';
            icon.src = '../eye.svg';
            icon.alt = 'Mostrar';
        }
    }

    toggleNewPassword.addEventListener('click', () => {
        togglePasswordVisibility(newPasswordInput, toggleNewPassword);
    });

    toggleRepeatPassword.addEventListener('click', () => {
        togglePasswordVisibility(repeatPasswordInput, toggleRepeatPassword);
    });

    function checkPasswordStrength(password) {
        let strength = 'Fraca';
        let color = 'red';

        if (password.length >= 8) {
            strength = 'Média';
            color = 'orange';
        }

        if (password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
            strength = 'Forte';
            color = 'green';
        }

        return { strength, color };
    }

    newPasswordInput.addEventListener('input', () => {
        const { strength, color } = checkPasswordStrength(newPasswordInput.value);
        passwordStrength.textContent = `Força da senha: ${strength}`;
        passwordStrength.style.color = color;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Adicione a lógica de verificação de senha aqui, se necessário
        window.location.href = '../html/login.html'; // Redireciona para a nova página
    });
});
