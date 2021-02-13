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
      className="
        bg-indigo-900
        text-green-200
        h-20
        m-auto
      "
    >
      <div>
        <Link to={'/'}>
          <h3
            className="
              text-3xl
            "
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <div
          className="
            float-right
            m-auto
          "
        >
        <Link to={"about"}>
          About
            </Link>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Header
