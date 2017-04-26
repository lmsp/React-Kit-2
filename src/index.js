/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'
import inlineStyles from './index.css'
import styles from './index.global.css'

const title =
  'React with React-Kit-1 features plus PostCSS, react-css-modules, Material Design and stylelint'

function createDivId (a: string, b: string, c: string) {
  return a + b + c
}

class MyComponent extends React.Component {
  render () {
    return <div className={styles.index} styleName='index'>{title}</div>
  }
}

ReactDOM.render(
  React.createElement(CSSModules(MyComponent, inlineStyles)),
  document.getElementById(createDivId('a', 'p', 'p'))
)

module.hot.accept()
