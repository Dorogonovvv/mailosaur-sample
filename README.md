## Idea
1. Initialized default Playwright example with `npm init playwright@latest`;
2. Register an account with Mailosaur on https://mailosaur.com/ and get apiKey and serverId;
3. Install Mailosaur `npm i mailosaur`;
4. To send email: add external email for testing https://mailosaur.com/app/account/email-addresses;
5. Write your e2e test where you enter a code in Frontend that will be sent to anything@<serverId>.mailosaur.net;

## Usage
1. To send email use `node send-email.js`;
2. To run the test use 