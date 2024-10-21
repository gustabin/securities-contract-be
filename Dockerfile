FROM $DCK_IMG_FROM/santandertec/santander-tecnologia-docker-base-images-node-js-base:v14

# Create app directory
WORKDIR /usr/src/app

# Install script dependencies
RUN npm install -g rimraf @nestjs/cli@9.5.0

# Copy required install/build files
COPY package*.json tsconfig*.json ./

# Install app dependencies
RUN npm ci --only=production

# Creates a "dist" folder with the production build
RUN npm run build

# Bundle app source
COPY . .

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# Expose ports
ENV PORT 8080
EXPOSE $PORT

# Start the server using start script
CMD [ "npm", "start" ]
