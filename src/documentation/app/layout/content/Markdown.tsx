import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'mark... Remove this comment to see the full error message
import MarkdownToJsx from 'markdown-to-jsx'
import LinkCard from './components/LinkCard'
import Heading from './components/Heading'
import InfoCard from './components/InfoCard'
import LinkItem from './components/LinkItem'
import ColorCopy from './components/ColorCopy'

const LinkWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);
  grid-template-rows: auto;
  justify-content: center;
  padding: 0px;
  margin: 24px 0px;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  background: #ffffff;
`

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.625;
  font-weight: 400;
`

const ColorRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 20px;
`

const ColorColumn = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-right: 10px;
  flex-grow: 1;
`

const CodeBlock = styled.pre`
  counter-reset: line 0;
  font-family: 'Source Code Pro', Menlo, monospace;
  font-size: 85%;
  line-height: 1.7;
  tab-size: 4;
  background-color: rgb(245, 247, 249);
  overflow-x: auto;
  padding: 15px 20px;
  border-radius: 3px;
  margin: 15px 0;
`

/**
 * The images in the Markdown docs are retina (@2x) size
 * so we scale them to half so they appear correctly.
 */
const Img = styled.img`
  zoom: 0.5;
  max-width: 100%;
`

/** Component Used to show the Markdown file content and replace elements with our own custom shared component */
export default class Markdown extends React.Component {
  render() {
    // @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
    const DocHeading = ({ children, ...props }) => <Heading {...props} />
    // @ts-expect-error TS(2339) FIXME: Property 'page' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { page, component, links } = this.props

    return [
      <MarkdownToJsx
        options={{
          overrides: {
            h1: {
              component: DocHeading,
              props: {
                text: page.name,
              },
            },
            a: {
              component: LinkItem,
            },
            p: {
              component: Paragraph,
            },
            img: {
              component: Img,
            },
            ColorRow,
            ColorColumn,
            ColorCopy,
            InfoCard,
            code: {
              component: CodeBlock,
            },
          },
        }}
      >
        {component}
      </MarkdownToJsx>,
      <LinkWrapper>
        {links[0] &&
          // @ts-expect-error TS(7006) FIXME: Parameter 'link' implicitly has an 'any' type.
          links.map((link) => (
            <LinkCard name={link.name} id={link.id} key={link.id} />
          ))}
      </LinkWrapper>,
    ]
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Markdown.propTypes = {
  /** Markdown page to display */
  page: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}
