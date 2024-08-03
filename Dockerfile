# Usar uma imagem base do Node.js
FROM node:16-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código da aplicação para o diretório de trabalho
COPY . .

# Compilar a aplicação para produção
RUN npm run build

# Instalar um servidor HTTP simples para servir os arquivos estáticos
RUN npm install -g serve

# Expor a porta que o container irá usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["serve", "-s", "dist", "-l", "3000"]
