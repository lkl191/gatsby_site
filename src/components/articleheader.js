/*import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SiteHeader = ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                allMdx {
                    edges {
                        node {
                            frontmatter {
                                category
                                date
                                title
                                update
                    }
                  }
                }
              }
            }
        `
    )
    return (
        <div>
            {data.allMdx.edges.map(({ node }) => (
                <div
                    //key={node.id}
                    style={{
                        color: "yellow",
                        backgroundColor: "red",
                    }}
                >
                    <h1>{node.frontmatter.title}</h1>
                    {children}
                </div>
            ))}
        </div>
    )
}

export default SiteHeader*/