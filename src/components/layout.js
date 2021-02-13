import React from "react"

import { MDXProvider } from "@mdx-js/react"
import PropTypes from "prop-types"

import "../styles/layout.css"

import Header from "./header"
import Test from "./mdx/test"
import Code from "./mdx/code"
import H2title from "./mdx/h2title"
import P from "./mdx/sentence"
import Point from "./mdx/point"


const shortcodes = {
  Test,
  Code,
  H2title,
  P,
  Point,
}

const Layout = ({ children }) => {
  return (
    <div>
      <MDXProvider components={shortcodes}>
        <Header />

        <div
          className="
            m-auto
            max-w-screen-md
          "
        >
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