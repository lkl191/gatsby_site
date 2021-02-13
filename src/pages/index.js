import React from "react"
import { Link, graphql } from "gatsby"
//import Header from "../components/header"
import Layout from "../components/layout"


import SEO from "../components/meta"

export default function Home({ data }) {
  return (
    <Layout>
      
    <div
     className="
      m-auto
      max-w-screen-md
     "
    >
      
      <SEO
        title="トップページ"
        desc="Gatsby.jsの使い方を説明するためのサンプルページです。"
      />
      <div>
        <h1>
          一覧ページ
        </h1>
        <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.edges.map(({ node }) => (
          <div
            key={node.id}
          >
            <Link
              to={node.fields.slug}
            >
              <h2>
                {node.frontmatter.title}{" "}
              </h2>
              <p>
                {node.frontmatter.category} — {node.frontmatter.date}
              </p>
              <p>
                更新日 {node.frontmatter.update}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "Y年M月D日")
            category
            update
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`