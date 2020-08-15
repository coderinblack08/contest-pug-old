import { HookContext } from '@feathersjs/feathers';
import * as authentication from '@feathersjs/authentication';
import { setField } from 'feathers-authentication-hooks';

const { authenticate } = authentication.hooks;

const setUserId = setField({
  from: 'params.user._id',
  as: 'data.user_id',
});

const limitToUser = setField({
  from: 'params.user._id',
  as: 'params.query._id',
});

export default {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [setUserId],
    update: [limitToUser],
    patch: [limitToUser],
    remove: [limitToUser],
  },

  after: {
    all: [],
    find: [
      async (context: HookContext): Promise<any> => {
        const contests = context.result.data;
        context.result.data = contests.map((contest: any) => {
          if (!contest.private) {
            return contest;
          }
        });
        return context;
      },
    ],
    get: [
      async (context: HookContext): Promise<any> => {
        context.result.user = await context.app.service('users').get({
          _id: context.result.user_id,
        });
        console.log(context.result);
        return context;
      },
    ],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
