import mongoose from 'mongoose';
import { Application } from './declarations';
import logger from './logger';

export default function (app: Application): void {
  const mongodb = app.get('mongodb');
  const password = encodeURIComponent(mongodb.root_password);
  const connectionString = `mongodb://${mongodb.root_user}:${password}@${mongodb.host}:${mongodb.port}/${mongodb.db_name}?authSource=admin`;
  console.log(connectionString);

  mongoose
    .connect(connectionString, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      logger.error(err);
      process.exit(1);
    });

  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
}
