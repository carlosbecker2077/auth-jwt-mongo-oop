import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import { errorMiddleware } from './middlewares/error';
import routes from './routes';
import { MongoConnection } from './repositories/mongodb/mongoconnection';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

const app = express();
app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(errorMiddleware);

if (!process.env.PORT || !process.env.MONGO_URI) {
    console.log('Error getting environment variables');
    process.exit(1);
}

MongoConnection.createConnection(process.env.MONGO_URI);
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
});
