export const routers = [
  {
    path: '/article/:id/edit',
    component: () => import('views/backstage/PostEdit.vue'),
    props: {
      isNew: false
    }
  },
  {
    path: '/new/article',
    component: () => import('views/backstage/PostEdit.vue'),
    props: {
      isNew: true
    }
  }
]

export default routers
