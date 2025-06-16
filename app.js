// Lógica de login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Usuário logado:', user);

            // Redireciona para o seu site hospedado no Vercel
            window.location.href = 'https://magnata-sable.vercel.app/';
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log('Código do erro:', errorCode); // Adicionando debug para ver o código do erro

            // Exibe a mensagem de erro personalizada dependendo do erro
            const errorElement = document.getElementById('error-message');
            let userFriendlyMessage = '';

            if (errorCode === 'auth/too-many-requests') {
                // Caso de erro de muitas tentativas de login
                userFriendlyMessage = 'Muitas tentativas de login. Tente novamente mais tarde.';
            } else {
                // Para outros erros de login, como e-mail ou senha incorretos
                userFriendlyMessage = 'Login incorreto. Tente novamente.';
            }

            // Exibe a mensagem de erro personalizada no HTML
            errorElement.textContent = userFriendlyMessage;
            errorElement.style.display = 'block'; // Torna a mensagem visível

            // Log dos erros para depuração (opcional)
            console.error('Erro no login:', error);
        });
});
