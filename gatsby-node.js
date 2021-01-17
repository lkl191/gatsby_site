//const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    /*ファイルからページを作成する場合、ファイルシステム上のファイルのパスからURLを作成したいことがよくあります。たとえば、にマークダウンファイルがある場合、それをsrc/content/2018-01-23-an-exploration-of-the-nature-of-reality/index.mdサイトのページに変換することをお勧めしますexample.com/2018-01-23-an-exploration-of-the-nature-of-reality/。createFilePathこのタスクを簡単にするためのヘルパー関数です。
    */
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      basePath: "src/pages/articles",
      name: `slug`,
      value:  `/articles${slug}`,
    })
  }
}


/*  
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  
  


  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
*/