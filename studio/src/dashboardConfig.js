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
                  buildHookId: '5ef1c32316a30709c206946c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-e7agow8d',
                  apiId: '131d42c1-c934-4ebf-8946-790e5c771ff9'
                },
                {
                  buildHookId: '5ef1c3230a6effcfae7a9728',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zfsf39db',
                  apiId: '6204c192-b4a9-40bf-b703-5bc321f40636'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dmkonst/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zfsf39db.netlify.app', category: 'apps' }
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
