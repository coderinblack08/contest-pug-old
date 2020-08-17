module.exports = {
  apps: [
    {
      name: 'api',
      script: './src/index.ts',
      watch: true,
      autorestart: true,
      ignore_watch: ['node_modules', 'docker-data'],
    },
  ],
};
