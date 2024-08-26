import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'OU Social App API',
          version: '1.0.0',
          description: 'API Documentation for OU Social App',
        },
        servers: [
          {
            url: 'http://localhost:4000', // URL của server backend
          },
        ],
      },
      apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};