import app from '../../src/app';

describe('\'contests\' service', () => {
  it('registered the service', () => {
    const service = app.service('contests');
    expect(service).toBeTruthy();
  });
});
