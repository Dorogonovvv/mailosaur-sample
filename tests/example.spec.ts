import { test, expect } from '@playwright/test';

import {mailosaur, serverId} from '../mailosaur-settings.js';
import { MessageSummary } from 'mailosaur/lib/models';

const getLatestEmail = async () => {
  const result = await mailosaur.messages.search(serverId, {
    sentTo: "integrator@xdxhrsxw.mailosaur.net"
  });

  const message = (result.items as MessageSummary[])[0];
  console.log('message', message);
  return message;
};

test('Fetch latest email and check the code', async ({ page }) => {
  const message = await getLatestEmail();

  const regex = /your code is (\d+)/;
  
  const match = (message.summary as string).match(regex);
  const extractedValue = match ? match[1] : null;
  const code = extractedValue ? extractedValue.replace(/<[^>]+>/g, '') : null;
  console.log('Extracted code:', code);
  expect(code).toBe('44455');
});
