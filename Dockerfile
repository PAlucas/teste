# Imagem base
FROM node:14.17-alpine AS build

# Diretório de trabalho
WORKDIR /app

# Copia arquivos de dependências para diretório temporário
COPY package.json yarn.lock ./

# Instala dependências
RUN yarn install --frozen-lockfile

# Copia arquivos do projeto para o diretório de trabalho
COPY . .

# Build da aplicação
RUN yarn build

# Imagem base para o container nginx
FROM nginx:1.21.3-alpine

# Copia configurações do nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copia arquivos de build da aplicação
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 8000

# Comando inicial do container
CMD ["nginx", "-g", "daemon off;"]
