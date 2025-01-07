// Animação de digitação
const text = document.querySelector('.typing-text');
text.style.width = '0';

setTimeout(() => {
    text.style.width = '100%';
    text.style.transition = 'width 3s ease-in-out';
}, 500);

// Animação de flutuação para o logo Docker
document.querySelector('.docker-animation').style.animation = 'float 3s ease-in-out infinite';

// Definição das animações em CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: var(--docker-blue) }
    }
`;
document.head.appendChild(style);