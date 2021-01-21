import React from "react"

import { MDXProvider } from "@mdx-js/react"
import PropTypes from "prop-types"

import Test from "./test"
import Header from "./header"

const shortcodes = { Test }

const Layout = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: '700px',
        margin: 'auto',
      }}
    >
      <MDXProvider components={shortcodes}>
        <Header />
        <div>
          {children}
        </div>
      </MDXProvider>
    </div>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout