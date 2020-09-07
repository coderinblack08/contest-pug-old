import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'questions';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      contest_id: { type: Schema.Types.ObjectId, ref: 'contests' },
      index: { type: Number, required: true },
      points: { type: Number, default: 0, max: 1e9 },
      question: { type: String, required: true },
      free_response: { type: Boolean, required: true },
      multipule_choice: { type: Boolean, required: true },
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
