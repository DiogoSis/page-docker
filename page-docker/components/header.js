function createHeader() {
    const header = `
        <nav class="main-nav">
            <div class="container">
                <div class="nav-wrapper">
                    <div class="logo">
                        <span class="logo-icon">🐳</span>
                        Docker + Apache
                    </div>
                    <ul class="nav-links">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                    <div class="menu-toggle" id="mobile-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    `;

    const styles = `
        .main-nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(11, 33, 74, 0.95);
            backdrop-filter: blur(8px);
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .nav-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
            padding: 0 1rem;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--docker-blue);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo-icon {
            font-size: 1.8rem;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .nav-links a {
            color: var(--white);
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: all 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--docker-blue);
            background: rgba(9, 156, 236, 0.1);
        }

        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 6px;
            cursor: pointer;
            padding: 10px;
        }

        .menu-toggle span {
            display: block;
            width: 25px;
            height: 2px;
            background: var(--white);
            transition: 0.3s;
        }

        @media (max-width: 768px) {
            .menu-toggle {
                display: flex;
            }

            .nav-links {
                display: none;
                position: absolute;
                top: 80px;
                left: 0;
                right: 0;
                background: rgba(11, 33, 74, 0.98);
                flex-direction: column;
                padding: 1rem;
                gap: 0;
            }

            .nav-links.active {
                display: flex;
            }

            .nav-links li {
                width: 100%;
            }

            .nav-links a {
                display: block;
                padding: 1rem;
                width: 100%;
                text-align: center;
            }
        }
    `;


    if (!document.getElementById('header-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'header-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    return header;
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }
    }, 100);
});