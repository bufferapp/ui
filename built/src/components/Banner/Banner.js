import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Text from '../Text';
import CrossIcon from '../Icon/Icons/Cross';
import { BannerStyled, BannerCloseButton, Wrapper, ButtonWrapper, } from './style';
import { orangeDarker } from '../style/colors';
export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        };
        this.closeBanner = this.closeBanner.bind(this);
    }
    closeBanner() {
        this.setState({ isOpen: false });
        const { onCloseBanner } = this.props;
        if (onCloseBanner) {
            onCloseBanner();
        }
    }
    renderBannerContent(themeColor) {
        const { customHTML, text, actionButton } = this.props;
        if (customHTML) {
            return (React.createElement(Wrapper, null,
                React.createElement("div", { dangerouslySetInnerHTML: customHTML })));
        }
        return (React.createElement(Wrapper, null,
            React.createElement(Text, { type: "paragraph", color: "#FFF" }, text),
            React.createElement(ButtonWrapper, null,
                React.createElement(Button, { type: themeColor === 'orange' ? 'orange' : 'primary', onClick: actionButton.action, label: actionButton.label, size: "small" }))));
    }
    render() {
        const { isOpen } = this.state;
        const { themeColor } = this.props;
        if (isOpen) {
            return (React.createElement(BannerStyled, { themeColor: themeColor },
                this.renderBannerContent(themeColor),
                React.createElement(BannerCloseButton, null,
                    React.createElement(Button, { type: "text", icon: (React.createElement(CrossIcon, { color: themeColor === 'blue' ? '#fff' : orangeDarker })), hasIconOnly: true, onClick: this.closeBanner, label: "Close", size: "small" }))));
        }
        return null;
    }
}
Banner.propTypes = {
    text: PropTypes.string,
    actionButton: PropTypes.shape({
        label: PropTypes.string,
        action: PropTypes.func,
    }),
    customHTML: PropTypes.shape({ __html: PropTypes.string }),
    themeColor: PropTypes.oneOf(['blue', 'orange']),
    onCloseBanner: PropTypes.func,
};
Banner.defaultProps = {
    text: '',
    actionButton: {},
    customHTML: null,
    themeColor: 'blue',
    onCloseBanner: null,
};
//# sourceMappingURL=Banner.js.map