import feathersClient, {
  makeServicePlugin,
  BaseModel,
} from '../../feathers-client';

class Question extends BaseModel {
  constructor(data: any, options: any) {
    super(data, options);
  }
  static modelName = 'Question';
  static instanceDefaults() {
    return {
      contest_id: '',
      index: '',
      points: '',
      question: '',
      free_response: new Boolean(),
      multipule_choice: new Boolean(),
    };
  }
}
const servicePath = 'questions';
const servicePlugin = makeServicePlugin({
  Model: Question,
  service: feathersClient.service(servicePath),
  servicePath,
});

export default servicePlugin;
