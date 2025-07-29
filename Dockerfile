# Dockerfile pour le Frontend Angular - Version simplifiée

# Étape 1: Build de l'application Angular
FROM node:20-alpine AS build

WORKDIR /app

# Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Copier les fichiers package.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci --force --verbose

# Copier le code source
COPY . .

# Build avec la commande Angular CLI directe
RUN ng build --configuration=production

# Étape 2: Servir avec Nginx
FROM nginx:alpine

# Supprimer la configuration par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Important: Vérifiez le nom de votre projet dans angular.json
# Le chemin sera dist/[nom-du-projet]/ 
COPY --from=build /app/dist/front/browser/ /usr/share/nginx/html/

# Configuration nginx intégrée
RUN cat > /etc/nginx/conf.d/default.conf << 'EOF'
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html =404;
    }
    
    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

EXPOSE 80