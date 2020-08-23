import feathersClient, {
  makeServicePlugin,
  BaseModel,
} from '../../feathers-client';

class Star extends BaseModel {
  constructor(data: any, options: any) {
    super(data, options);
  }
  static modelName = 'Star';
  static instanceDefaults() {
    return {
      contest_id: '',
    };
  }
}
const servicePath = 'stars';
const servicePlugin = makeServicePlugin({
  Model: Star,
  service: feathersClient.service(servicePath),
  servicePath,
});

export default servicePlugin;
