FROM node:14.15.3-buster-slim

# Dependencies and EntryPoint
COPY package*.json ./
COPY app.js ./

ARG PORT 
ARG VER

RUN echo PORT=$PORT >> .env && echo VER=$VER >> .env

# Make Module Directories
RUN mkdir routes

# Modules
COPY routes/ routes/ 

RUN npm install
CMD [ "node", "app.js" ]