/**
 * saucedemo publishes its test accounts on the login page itself, so these are
 * not secrets. The env vars allow overriding them without editing the code.
 */
const USERS = {
  standard: {
    username: process.env.SAUCE_USERNAME || 'standard_user',
    password: process.env.SAUCE_PASSWORD || 'secret_sauce',
  },
};

const CHECKOUT_INFO = {
  firstName: process.env.SAUCE_FIRST_NAME || 'QA',
  lastName: process.env.SAUCE_LAST_NAME || 'Tester',
  postalCode: process.env.SAUCE_POSTAL_CODE || '12345',
};

module.exports = { USERS, CHECKOUT_INFO };
