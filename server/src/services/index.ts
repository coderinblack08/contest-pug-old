import { Application } from '../declarations';
import users from './users/users.service';

import contests from './contests/contests.service';

export default function (app: Application): void {
  app.configure(users);
  app.configure(contests);
}
