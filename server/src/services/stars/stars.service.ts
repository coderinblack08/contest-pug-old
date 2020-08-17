// Initializes the `stars` service on path `/stars`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Stars } from './stars.class';
import createModel from '../../models/stars.model';
import hooks from './stars.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    stars: Stars & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: ['remove'],
  };

  // Initialize our service with any options it requires
  app.use('/stars', new Stars(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stars');

  service.hooks(hooks);
}
