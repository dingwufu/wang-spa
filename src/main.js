import app from './app.js';

app.start({
  matchers: [
    '/',
    '/group/',
    '/group/:name',
    '/user/:id',
  ],
  rules: [ // 通过正则解析路由，含':'符号解析为参数，不含为模块路径
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
