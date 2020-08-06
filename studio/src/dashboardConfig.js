export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2c705e933f0f019fdb4434',
                  title: 'Sanity Studio',
                  name: 'personal-blog-studio-cyahj119',
                  apiId: 'bb04f091-667c-4929-a46f-1fad962cc7d4'
                },
                {
                  buildHookId: '5f2c705ee12c5d00fec88fec',
                  title: 'Blog Website',
                  name: 'personal-blog-web-q9x19gpp',
                  apiId: 'ee1862d3-0105-477b-8667-e76fb9f3d60f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tcamara/personal-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://personal-blog-web-q9x19gpp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
