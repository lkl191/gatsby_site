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
            height: '100px',
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
    )
}

export default Header
