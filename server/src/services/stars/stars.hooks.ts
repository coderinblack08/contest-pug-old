import { HookContext } from '@feathersjs/feathers';
import * as authentication from '@feathersjs/authentication';
import { setField } from 'feathers-authentication-hooks';
import { model } from 'mongoose';
import limitToUserRemove from '../../hooks/limit-to-user-remove';

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
    create: [
      setUserId,
      async (context: HookContext): Promise<HookContext> => {
        if (
          await model('stars').findOne({
            user_id: context.data.user_id,
            contest_id: context.data.contest_id,
          })
        ) {
          throw new Error('⭐️ You have already stared this contest!');
        } else {
          return context;
        }
      },
    ],
    update: [limitToUser],
    patch: [limitToUser],
    remove: [limitToUserRemove('stars')],
  },

  after: {
    all: [],
    find: [],
    get: [],
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
