import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CodeExample from './CodeExample'

const Wrapper = styled.div`
  padding: 5px 25px;
  background: #f6f7f9;
  border: 1px solid #e6ecf1;
  border-radius: 2px;
  margin-bottom: 20px;
  min-width: 40%;
  flex: 1;
  margin-right: 20px;
  min-height: 135px;
  max-width: 800px;
  border-top: 1px solid #f3f3f3;
`

const CodeButton = styled.a`
  color: #2c4bff;
  padding-top: 10px;
  font-size: 12px;
  display: flex;
  justify-content: end;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 15px;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

/** Displays components example information */
export default class Example extends React.Component {
  // @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
  constructor(props) {
    super(props)
    this.state = {
      showCode: false,
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  toggleCode = (event) => {
    event.preventDefault()
    // @ts-expect-error TS(2339) FIXME: Property 'showCode' does not exist on type 'Readon... Remove this comment to see the full error message
    const { showCode } = this.state
    this.setState({ showCode: !showCode })
  }

  render() {
    // @ts-expect-error TS(2339) FIXME: Property 'showCode' does not exist on type 'Readon... Remove this comment to see the full error message
    const { showCode } = this.state
    // @ts-expect-error TS(2339) FIXME: Property 'example' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { example, componentName, fullscreen } = this.props
    const { code, description, title, name } = example
    const fileName = componentName.replace(/ /g, '') // makes sure to replace all whitespaces

    // Must use CommonJS require here to dynamically require components
    // if we have the example title, that means that the example is located in a subfolder
    // so we need to include that title/folder in our path
    const ExampleComponent = title
      ? require(`../../../../examples/${fileName}/${title}/${name}`).default
      : require(`../../../../examples/${fileName}/${name}`).default

    if (fullscreen) {
      return <ExampleComponent />
    }

    return (
      <Wrapper>
        <div>
          {description && <Title>{description}</Title>}
          <ExampleComponent />
        </div>
        <CodeButton onClick={this.toggleCode}>
          {showCode ? 'Hide ' : 'Show '}
          Code
        </CodeButton>
        {showCode && <CodeExample>{code}</CodeExample>}
      </Wrapper>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Example.propTypes = {
  fullscreen: PropTypes.bool,
  example: PropTypes.shape({
    code: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  componentName: PropTypes.string.isRequired,
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Example.defaultProps = {
  fullscreen: false,
}
