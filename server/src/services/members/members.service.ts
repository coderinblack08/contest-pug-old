// Initializes the `members` service on path `/members`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Members } from './members.class';
import createModel from '../../models/members.model';
import hooks from './members.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'members': Members & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/members', new Members(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('members');

  service.hooks(hooks);
}
