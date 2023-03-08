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

# Use a imagem do nginx como base
FROM nginx:latest

# Copie a build de produção para o diretório de publicação do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copie o arquivo de configuração personalizado do Nginx para o contêiner
COPY nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80 para o tráfego da web
EXPOSE 8000

# Inicie o servidor web do Nginx quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]
