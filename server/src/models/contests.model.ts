import * as EmailValidator from 'email-validator';
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';
import UrlRegex from 'url-regex';

export default function (app: Application): Model<any> {
  const modelName = 'contests';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
      name: { type: String, max: 500, unique: true, required: true },
      description: { type: String, max: 1e6, required: true },
      email: {
        type: String,
        max: 500,
        validate: {
          validator: (value: string) => EmailValidator.validate(value),
          message: 'Please enter a valid email address',
        },
        required: true,
      },
      website: {
        type: String,
        max: 1000,
        validate: {
          validator: (value: string) => UrlRegex().test(value),
          message: 'Please enter a valid webslite url',
        },
      },
      tag: { type: String, max: 100, required: true },
      length: { type: Number, max: Number.MAX_VALUE, required: true },
      start_date: { type: Date, required: true },
      end_date: { type: Date, required: true },
      // competitors: { type: Number, default: 0 }, use a populate function instead
      status: { type: Boolean, default: false },
      private: { type: Boolean, default: false },
      leaderboard: { type: Boolean, default: true },
    },
    {
      timestamps: true,
    }
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
