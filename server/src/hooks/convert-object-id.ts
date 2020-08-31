import { Hook, HookContext } from '@feathersjs/feathers';
import { ObjectID } from 'mongodb';

export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    context.id = new ObjectID(context.id) as any;
    return context;
  };
};
