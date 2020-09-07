import app from '../../src/app';

describe('\'questions\' service', () => {
  it('registered the service', () => {
    const service = app.service('questions');
    expect(service).toBeTruthy();
  });
});
