document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastro-form');
    const senhaInput = document.getElementById('senha');
    const repitaSenhaInput = document.getElementById('repita-senha');
    const senhaResultado = document.getElementById('senha-resultado');
    
    senhaInput.addEventListener('input', () => {
        const senha = senhaInput.value;
        const nivel = avaliarForcaSenha(senha);
        mostrarNivelSenha(nivel);
    });

    repitaSenhaInput.addEventListener('input', () => {
        verificarSenhasIguais();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (verificarSenhasIguais()) {
            window.location.href = '../html/login.html';
        }
    });

    function avaliarForcaSenha(senha) {
        let forca = 0;
        if (senha.length >= 6) forca++;
        if (/[a-z]/.test(senha)) forca++;
        if (/[A-Z]/.test(senha)) forca++;
        if (/[0-9]/.test(senha)) forca++;
        if (/[^a-zA-Z0-9]/.test(senha)) forca++;
        return forca;
    }

    function mostrarNivelSenha(nivel) {
        const niveis = ['Muito Fraca', 'Fraca', 'Média', 'Forte', 'Muito Forte'];
        const cores = ['muito-fraca', 'fraca', 'media', 'forte', 'muito-forte'];
        senhaResultado.textContent = `Força da senha: ${niveis[nivel]}`;
        senhaResultado.className = cores[nivel];
    }

    function verificarSenhasIguais() {
        const senha = senhaInput.value;
        const repitaSenha = repitaSenhaInput.value;
        if (senha !== repitaSenha) {
            senhaResultado.textContent = 'As senhas não coincidem';
            senhaResultado.classList.remove('forte', 'muito-forte');
            return false;
        } else {
            senhaResultado.textContent = 'As senhas coincidem';
            senhaResultado.className = 'forte'; // Exibir em verde se coincidem
            return true;
        }
    }
});
