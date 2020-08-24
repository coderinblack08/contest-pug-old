import app from '../../src/app';

describe('\'members\' service', () => {
  it('registered the service', () => {
    const service = app.service('members');
    expect(service).toBeTruthy();
  });
});
