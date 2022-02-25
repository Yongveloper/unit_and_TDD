const UserClient = require('../user_client');
const UserService = require('../user_service');
jest.mock('../user_client');

describe('UserService', () => {
  const login = jest.fn(async () => 'success');

  UserClient.mockImplementation(() => {
    return { login };
  });

  let userService = null;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tires to login', async () => {
    await userService.login('abc123', '12345');

    expect(login).toBeCalledTimes(1);
  });

  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('abc123', '12345');
    await userService.login('abc123', '12345');

    expect(login).toBeCalledTimes(1);
  });
});
