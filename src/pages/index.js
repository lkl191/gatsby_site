import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/meta"
import "./style.css"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO
        title="トップページ"
        desc="Gatsby.jsの使い方を説明するためのサンプルページです。"
      />
      <div>
        <h1
          style={{
            display: 'inline-block',
            borderbottom: '1px solid',
          }}
        >
          一覧ページ
        </h1>
        <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.edges.map(({ node }) => (
          <div
            key={node.id}
            style={{
              border: '1px solid gray',
              marginBottom: '5px',
              padding: '5px',
            }}
            className='hover'
          >
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h2>
                {node.frontmatter.title}{" "}
              </h2>
              <p
                style={{
                  color: "#555",
                  textAlign: "right",
                }}
              >
                {node.frontmatter.category} — {node.frontmatter.date}
              </p>
              <p
                style={{
                  color: "#555",
                  textAlign: "right",
                }}
              >
                更新日 {node.frontmatter.update}
              </p>
            </Link>
          </div>
        ))}
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