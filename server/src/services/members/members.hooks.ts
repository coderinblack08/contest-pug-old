import * as authentication from '@feathersjs/authentication';
import { HookContext } from '@feathersjs/feathers';
import { setField } from 'feathers-authentication-hooks';
import { ObjectID } from 'mongodb';
import mongoose from 'mongoose';
import convertObjectId from '../../hooks/convert-object-id';

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
          await mongoose.model('members').findOne({
            user_id: context.data.user_id,
            contest_id: context.data.contest_id,
          })
        ) {
          throw new Error('❌ You have already joined this contest!');
        } else {
          return context;
        }
      },
    ],
    update: [limitToUser],
    patch: [limitToUser],
    remove: [convertObjectId()],
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
