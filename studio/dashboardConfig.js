export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d0b95969b66d2c6f0aa34da',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pkrv6wxu',
                  apiId: 'a54aa2ba-07b3-41ff-a52c-85901d6ad1b6'
                },
                {
                  buildHookId: '5d0b959676669ce438bf97a1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-h2nje31h',
                  apiId: '4a08c9db-5a93-4c37-8fda-41c00a7fb215'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yelouardi/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-h2nje31h.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
