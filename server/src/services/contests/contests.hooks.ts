import * as authentication from '@feathersjs/authentication';
import { setField } from 'feathers-authentication-hooks';

const { authenticate } = authentication.hooks;
const setUserId = setField({
  from: 'params.user._id',
  as: 'data.user_id',
});

export default {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [setUserId],
    update: [],
    patch: [],
    remove: [],
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
