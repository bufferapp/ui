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
  constructor(props) {
    super(props)

    this.state = {
      isOpen: true,
    }

    this.closeBanner = this.closeBanner.bind(this)
  }

  closeBanner() {
    this.setState({ isOpen: false })
    const { onCloseBanner } = this.props
    if (onCloseBanner) {
      onCloseBanner()
    }
  }

  renderBannerContent(themeColor) {
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
    const { isOpen } = this.state
    const { themeColor } = this.props

    if (isOpen) {
      return (
        <BannerStyled themeColor={themeColor}>
          {this.renderBannerContent(themeColor)}
          <BannerCloseButton>
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

Banner.defaultProps = {
  text: '',
  actionButton: {},
  customHTML: null,
  themeColor: 'blue',
  onCloseBanner: null,
}
