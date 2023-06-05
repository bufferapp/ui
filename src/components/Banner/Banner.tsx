import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Text from '../Text'
import CrossIcon from '../Icon/Icons/Cross'

import {
  BannerStyled,
  BannerCloseButton,
  Wrapper,
  ButtonWrapper,
} from './style'

import { orangeDarker } from '../style/colors'

export default class Banner extends React.Component {
  // @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
  constructor(props) {
    super(props)

    this.state = {
      isOpen: true,
    }

    this.closeBanner = this.closeBanner.bind(this)
  }

  closeBanner() {
    this.setState({ isOpen: false })
    // @ts-expect-error TS(2339) FIXME: Property 'onCloseBanner' does not exist on type 'R... Remove this comment to see the full error message
    const { onCloseBanner } = this.props
    if (onCloseBanner) {
      onCloseBanner()
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'themeColor' implicitly has an 'any' typ... Remove this comment to see the full error message
  renderBannerContent(themeColor) {
    // @ts-expect-error TS(2339) FIXME: Property 'customHTML' does not exist on type 'Read... Remove this comment to see the full error message
    const { customHTML, text, actionButton } = this.props
    if (customHTML) {
      return (
        <Wrapper>
          {/* eslint-disable-next-line */}
          <div dangerouslySetInnerHTML={customHTML} />
        </Wrapper>
      )
    }
    return (
      <Wrapper>
        <Text type="paragraph" color="#FFF">
          {text}
        </Text>
        <ButtonWrapper>
          {/* @ts-expect-error TS(2740) FIXME: Type '{ type: string; onClick: any; label: any; si... Remove this comment to see the full error message */}
          <Button
            type={themeColor === 'orange' ? 'orange' : 'primary'}
            onClick={actionButton.action}
            label={actionButton.label}
            size="small"
          />
        </ButtonWrapper>
      </Wrapper>
    )
  }

  render() {
    // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { isOpen } = this.state
    // @ts-expect-error TS(2339) FIXME: Property 'themeColor' does not exist on type 'Read... Remove this comment to see the full error message
    const { themeColor } = this.props

    if (isOpen) {
      return (
        // @ts-expect-error TS(2769) FIXME: No overload matches this call.
        <BannerStyled themeColor={themeColor}>
          {this.renderBannerContent(themeColor)}
          <BannerCloseButton>
            {/* @ts-expect-error TS(2740) FIXME: Type '{ type: string; icon: Element; hasIconOnly: ... Remove this comment to see the full error message */}
            <Button
              type="text"
              icon={
                <CrossIcon
                  color={themeColor === 'blue' ? '#fff' : orangeDarker}
                />
              }
              hasIconOnly
              onClick={this.closeBanner}
              label="Close"
              size="small"
            />
          </BannerCloseButton>
        </BannerStyled>
      )
    }
    return null
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Banner.propTypes = {
  /** The main text of the banner */
  text: PropTypes.string,

  /** The text of the Call To Action of the banner */
  actionButton: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
  }),

  /** Custom HTML */
  customHTML: PropTypes.shape({ __html: PropTypes.string }),

  /** Theme color. Can be `'blue'` or `'orange'` */
  themeColor: PropTypes.oneOf(['blue', 'orange']),

  /** Handler when the banner closes */
  onCloseBanner: PropTypes.func,
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Banner.defaultProps = {
  text: '',
  actionButton: {},
  customHTML: null,
  themeColor: 'blue',
  onCloseBanner: null,
}
