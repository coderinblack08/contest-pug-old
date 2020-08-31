module.exports = {
  apps: [
    {
      name: 'api',
      script: './src/index.ts',
      watch: true,
      ignore_watch: ['node_modules', 'docker-data'],
      instance_var: 'INSTANCE_ID',
      watch_options: {
        usePolling: true,
      },
    },
  ],
};
