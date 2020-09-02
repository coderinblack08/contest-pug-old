import { Hook, HookContext } from '@feathersjs/feathers';

export default (service: string): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const star = await context.app
      .service(service)
      .find({ user_id: context.params.user._id, _id: context.id });
    if (!star.total) {
      throw new Error('Your are not owner of star');
    }
    return context;
  };
};
