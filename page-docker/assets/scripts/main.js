document.addEventListener('DOMContentLoaded', () => {
    // Remove loader após carregamento
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1500);

    // Inicializa componentes
    initializeHeader();
    initializeFeatures();
    initializeFooter();
});

function initializeHeader() {
    const header = document.getElementById('main-header');
    header.innerHTML = createHeader();
}

function initializeFeatures() {
    const features = document.getElementById('features');
    features.innerHTML = createFeatures();
}

function initializeFooter() {
    const footer = document.getElementById('main-footer');
    footer.innerHTML = createFooter();
}