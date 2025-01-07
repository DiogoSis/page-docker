function createFooter() {
    return `
        <footer class="main-footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Docker + Apache</h4>
                    <p>Ambiente de desenvolvimento moderno e eficiente</p>
                </div>
                <div class="footer-section">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="https://www.docker.com" target="_blank">Docker Docs</a></li>
                        <li><a href="https://httpd.apache.org" target="_blank">Apache Docs</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Status</h4>
                    <div id="container-status"></div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Docker + Apache. Todos os direitos reservados.</p>
            </div>
        </footer>
    `;
}


const footerStyles = document.createElement('style');
footerStyles.textContent = `
    .main-footer {
        background: var(--docker-dark);
        padding: 3rem 2rem 1rem;
        margin-top: 4rem;
        border-top: 1px solid rgba(255,255,255,0.1);
    }

    .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .footer-section h4 {
        color: var(--docker-blue);
        margin-bottom: 1rem;
    }

    .footer-section ul {
        list-style: none;
    }

    .footer-section ul li {
        margin: 0.5rem 0;
    }

    .footer-section a {
        color: var(--white);
        text-decoration: none;
        transition: color 0.3s;
    }

    .footer-section a:hover {
        color: var(--docker-blue);
    }

    .footer-bottom {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(255,255,255,0.1);
    }
`;
document.head.appendChild(footerStyles);