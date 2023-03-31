const SentryWebpackPlugin = require('@sentry/webpack-plugin')
module.exports = {
  // ...
  webpack: {
    devtool: 'source-map',
    plugins: {
      add: [
        new SentryWebpackPlugin({
          org: 'huan-qiu',
          project: 'javascript-react',

          // Specify the directory containing build artifacts
          include: './build',

          // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
          // and needs the `project:releases` and `org:read` scopes
          authToken: process.env.SENTRY_AUTH_TOKEN,

          // Optionally uncomment the line below to override automatic release name detection
          // release: process.env.RELEASE,
        }),
      ],
    },
  },
}
