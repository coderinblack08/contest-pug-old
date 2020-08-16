import app from '../../src/app';

describe('\'stars\' service', () => {
  it('registered the service', () => {
    const service = app.service('stars');
    expect(service).toBeTruthy();
  });
});
