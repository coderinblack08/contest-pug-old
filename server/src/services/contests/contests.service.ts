// Initializes the `contests` service on path `/contests`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Contests } from './contests.class';
import createModel from '../../models/contests.model';
import hooks from './contests.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'contests': Contests & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/contests', new Contests(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('contests');

  service.hooks(hooks);
}
