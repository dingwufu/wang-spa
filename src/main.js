import app from './app.js';

app.start({
  matchers: [
    '/',
    '/group/',
    '/group/:name',
    '/user/:id',
  ],
  rules: [
    {
      matcher: /^\/$/i,
      target: '/',
    },
    {
      matcher: /^\/group$/i,
      target: '/group',
    },
    {
      matcher: /^\/group\/(\w)+/i,
      target: '/group/',
    },
    {
      matcher: /^\/user\/[\d]+/i,
      target: '/user/',
    },
  ],
  routes: {
    '/': () => import('./module/home.js'),
    '/user/': () => import('./module/user.js'),
    '/group': () => import('./module/group.js'),
    '/group/': () => import('./module/group_name.js'),
  },
});
