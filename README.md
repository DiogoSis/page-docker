# Docker + Apache Landing Page

Uma landing page moderna que demonstra a integração entre Docker e Apache, com foco em um ambiente de desenvolvimento simplificado.

---

## 🚀 Funcionalidades

- Interface moderna e responsiva
- Animações suaves de carregamento e interação
- Status em tempo real do container Docker
- Design adaptativo para diferentes dispositivos
- Integração com Apache Server

---

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e Flexbox/Grid)
- JavaScript (Vanilla)
- Docker
- Apache Server

---

## 📁 Estrutura do Projeto

```
page-docker/
├── assets/
│   ├── scripts/
│   │   ├── animations.js
│   │   ├── docker-integration.js
│   │   └── main.js
│   └── styles/
│       ├── components.css
│       ├── main.css
│       └── responsive.css
├── components/
│   ├── docker-features.js
│   ├── footer.js
│   └── header.js
└── index.html
```

---

## 🐳 Docker Compose Configuration

```yaml
services:
  apache:
    image: httpd:latest
    container_name: my-apache-app
    ports: 
      - '80:80'
    volumes:
      - ./page-docker:/usr/local/apache2/htdocs



