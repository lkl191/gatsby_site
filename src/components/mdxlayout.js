import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Chart from "./mdx/Chart"
import Message from "./mdx/Message"
import Pullquote from "./mdx/Pullquote"

const shortcodes = { Chart, Pullquote, Message }

export default function Layout({ children }) {
  return (
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  )
}