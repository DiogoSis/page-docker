function createFeatures() {
    const features = [
        {
            title: 'Containerização',
            description: 'Isole suas aplicações em containers',
            icon: '🐳'
        },
        {
            title: 'Apache Server',
            description: 'Servidor web robusto e confiável',
            icon: '🌐'
        },
        {
            title: 'Escalabilidade',
            description: 'Escale suas aplicações facilmente',
            icon: '📈'
        }
    ];

    return features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
}