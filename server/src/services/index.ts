import { Application } from '../declarations';
import users from './users/users.service';

import contests from './contests/contests.service';

import stars from './stars/stars.service';

import members from './members/members.service';

import questions from './questions/questions.service';

export default function (app: Application): void {
  app.configure(users);
  app.configure(contests);
  app.configure(stars);
  app.configure(members);
  app.configure(questions);
}
