export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.mailgun.org"),
        port: env.int("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
        secure: env.bool("SMTP_SECURE", false),
      },
      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM", "noreply@example.com"),
        defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO", "noreply@example.com"),
      },
    },
  },
});
