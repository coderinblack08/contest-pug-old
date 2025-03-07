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
    find: [
      async (context: HookContext): Promise<HookContext> => {
        const query: any = context.params.query;
        for (const field in query) {
          if (query[field].$search && field.indexOf('$') == -1) {
            query[field] = { $regex: new RegExp(query[field].$search, 'i') };
          } else if (query[field].hasOwnProperty('$search')) {
            delete query[field];
          }
        }
        context.params.query = query;
        return context;
      },
    ],
    get: [],
    create: [setUserId],
    update: [limitToUser],
    patch: [limitToUser],
    remove: [limitToUser],
  },

  after: {
    all: [],
    find: [
      async (context: HookContext): Promise<HookContext> => {
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
      async (context: HookContext): Promise<HookContext> => {
        context.result.user = await context.app.service('users').get({
          _id: context.result.user_id,
        });
        ['password', 'createdAt', 'updatedAt'].forEach(
          (e) => delete context.result.user[e]
        );
        return context;
      },
    ],
    create: [
      async (context: HookContext): Promise<HookContext> => {
        console.log(context);
        try {
          await context.app.service('members').create({
            user_id: context.params.user._id,
            contest_id: context.result._id,
          });
        } catch (error) {
          console.error(error);
        }
        return context;
      },
    ],
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
