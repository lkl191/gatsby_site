import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const Header = ({ children }) => {
  const data = useStaticQuery(
    graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
  )
  return (
    <div
      style={{
        backgroundColor: "#bee7ff",
      }}
    >
      <div
        style={{
          height: '100px',
          maxWidth: "950px",
          margin: "auto",
        }}
      >
        <Link to={'/'}>
          <h3
            style={{
              display: 'block',
            }}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={'/about/'}
          style={{
            float: 'right',
          }}
        >
          About
            </Link>
        {children}
      </div>
    </div>
  )
}

export default Header
