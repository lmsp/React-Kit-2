/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'

const title =
  'React with React-Kit-1 features plus PostCSS, react-css-modules and Material Design'

function createDivId (a: string, b: string, c: string) {
  return a + b + c
}

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById(createDivId('a', 'p', 'p'))
)

module.hot.accept()
