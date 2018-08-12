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
    '/': () => import('./module/home'),
    '/user/': () => import('./module/user'),
    '/group': () => import('./module/group'),
    '/group/': () => import('./module/group_name'),
  },
});
