import feathersClient, {
  makeServicePlugin,
  BaseModel,
} from '../../feathers-client';

class Contest extends BaseModel {
  constructor(data: any, options: any) {
    super(data, options);
  }
  static modelName = 'Contest';
  static instanceDefaults() {
    return {
      name: '',
      website: '',
      email: '',
      thumbnail: '',
      description: '',
      tag: '',
      length: 0,
      start_date: '',
      end_date: '',
      private: false,
      leaderboard: true,
    };
  }
}
const servicePath = 'contests';
const servicePlugin = makeServicePlugin({
  Model: Contest,
  service: feathersClient.service(servicePath),
  servicePath,
});

export default servicePlugin;
