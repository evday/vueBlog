export default [
  {
    path: '',
    redirect: {
      name: 'BlogList'
    }
  },
  {
    path: 'BlogList',
    name: 'BlogList',
    component: resolve => require(['@/views/BlogList.vue'], resolve)
  },
  {
    path: 'BlogDetail/:number',
    name: 'BlogDetail',
    component: resolve => require(['@/views/BlogDetail.vue'], resolve)
  }
]
