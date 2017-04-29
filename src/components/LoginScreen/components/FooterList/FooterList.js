import React from 'react'
import CSSModules from 'react-css-modules'
import inlineStyles from './FooterList.css'

import {Grid, Row, Cell} from 'react-inline-grid'
import ReactTooltip from 'react-tooltip'

import Chip from 'material-ui/Chip'

const muiStyles = {
  chip: {
    margin: 4,
    display: 'inline-block'
  },
  chipLabel: {
    fontWeight: 'bold'
  }
}

class FooterList extends React.Component {
  constructor (props) {
    super(props)

    this.onTouchTap = this.onTouchTap.bind(this)
    this.state = {
      chips: [
        {
          name: 'React-Kit-1',
          url: 'https://github.com/lmsp/React-Kit-1',
          tooltip: 'React con Webpack y HappyPack, Babel, Flow, Standard.js y BrowserSync'
        },
        {
          name: 'PostCSS',
          url: 'http://postcss.org/',
          tooltip: 'Una herramienta para transformar CSS con Javascript'
        },
        {
          name: 'autoprefixer',
          url: 'https://github.com/postcss/autoprefixer',
          tooltip: 'Extensión PostCSS para añadir reglas CSS específicas del navegador'
        },
        {
          name: 'PreCSS',
          url: 'https://github.com/jonathantneal/precss',
          tooltip: 'Extensión PostCSS para utilizar Sass en CSS'
        },
        {
          name: 'postcss-focus',
          url: 'https://github.com/postcss/postcss-focus',
          tooltip: 'Extensión PostCSS para añadir :focus a cada :hover para acceso con teclado'
        },
        {
          name: 'stylelint',
          url: 'https://github.com/stylelint/stylelint',
          tooltip: 'Validador moderno de CSS'
        },
        {
          name: 'react-css-modules',
          url: 'https://github.com/gajus/react-css-modules',
          tooltip: 'CSS modules para componentes React'
        },
        {
          name: 'material-ui',
          url: 'http://www.material-ui.com',
          tooltip: 'Componentes React que implementan Google Material Design'
        },
        {
          name: 'react-media',
          url: 'https://github.com/reacttraining/react-media',
          tooltip: 'Componente React para media queries'
        },
        {
          name: 'react-inline-grid',
          url: 'https://github.com/broucz/react-inline-grid',
          tooltip: 'Componente React para grid flexbox predecible'
        },
        {
          name: 'react-tooltip',
          url: 'https://github.com/wwayne/react-tooltip',
          tooltip: 'Componente React para mostrar información sobre otros componentes'
        }
      ]
    }
  }

  onTouchTap (value) {
    window.open(value, '_blank')
  }

  render () {
    return (
      <div>
        <div styleName='footerTitle'>Tecnologías probadas</div>
        <ReactTooltip effect='solid' />
        <Grid>
          <Row is='center'>
            <Cell is='middle 4'>
              {this.state.chips.map(chip => {
                return (
                  <Chip
                    key={chip.name}
                    data-tip={chip.tooltip}
                    style={muiStyles.chip}
                    labelStyle={muiStyles.chipLabel}
                    onTouchTap={() => {
                      this.onTouchTap(chip.url)
                    }}
                  >
                    {chip.name}
                  </Chip>
                )
              })}
            </Cell>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default CSSModules(FooterList, inlineStyles, {allowMultiple: true})
