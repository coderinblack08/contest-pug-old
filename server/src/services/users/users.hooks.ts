import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
import { setField } from 'feathers-authentication-hooks';
// import { disallow } from 'feathers-hooks-common';

const { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

// const internalOnly = disallow('external');

const limitToUser = setField({
  from: 'params.user._id',
  as: 'params.query._id',
});

export default {
  before: {
    all: [],
    find: [authenticate('jwt'), limitToUser],
    get: [authenticate('jwt'), limitToUser],
    create: [hashPassword('password')],
    update: [hashPassword('password'), authenticate('jwt'), limitToUser],
    patch: [hashPassword('password'), authenticate('jwt'), limitToUser],
    remove: [authenticate('jwt'), limitToUser],
  },

  after: {
    all: [protect('password')],
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
