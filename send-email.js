import { serverId, mailosaur } from "./mailosaur-settings.js";

const sendCode = async (email, code) => {
  await mailosaur.messages.create(serverId, {
    to: email,
    subject: "Email from Mailosaur",
    html: `<p>Hello there, your code is <strong>${code}</strong>.</p>`,
    send: true,
  });
};

sendCode(`your-email@google.com`, `43210`);
