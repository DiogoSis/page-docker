class DockerIntegration {
    constructor() {
        this.containerStatus = {
            running: false,
            health: 'stopped',
            uptime: '0s'
        };
    }

    simulateContainerStatus() {
        setInterval(() => {
            this.containerStatus.running = true;
            this.containerStatus.health = 'healthy';
            this.updateStatusUI();
        }, 2000);
    }

    updateStatusUI() {
        const statusElement = document.createElement('div');
        statusElement.className = 'docker-status';
        statusElement.innerHTML = `
            <div class="status-indicator ${this.containerStatus.running ? 'active' : 'inactive'}"></div>
            <div class="status-info">
                <p>Container Status: ${this.containerStatus.health}</p>
                <p>Apache Server: ${this.containerStatus.running ? 'Running' : 'Stopped'}</p>
            </div>
        `;

        const existingStatus = document.querySelector('.docker-status');
        if (existingStatus) {
            existingStatus.replaceWith(statusElement);
        } else {
            document.querySelector('.hero').appendChild(statusElement);
        }
    }

    init() {
        this.simulateContainerStatus();
        this.addStyles();
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .docker-status {
                margin-top: 2rem;
                padding: 1rem;
                background: rgba(255,255,255,0.1);
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .status-indicator {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #ff4444;
            }

            .status-indicator.active {
                background: #00ff44;
                box-shadow: 0 0 10px #00ff44;
            }

            .status-info {
                font-size: 0.9rem;
            }
        `;
        document.head.appendChild(style);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dockerIntegration = new DockerIntegration();
    dockerIntegration.init();
});