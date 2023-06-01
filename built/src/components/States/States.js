import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text/Text';
const Wrapper = styled.div `
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const MediaWrapper = styled.div `
  width: ${(props) => (props.size === 'large' ? '420px' : '300px')};
  height: ${(props) => (props.size === 'large' ? '280px' : '200px')};
`;
const HeaderWrapper = styled.div `
  h2 {
    max-width: 700px;
    overflow: hidden;
    margin-top: 16px;
    margin-bottom: 8px;
    text-align: center;
  }

  h3 {
    max-width: 400px;
    overflow: hidden;
    margin-top: 16px;
    margin-bottom: 8px;
    text-align: center;
  }
`;
const DescriptionWrapper = styled.div `
  p {
    margin-top: 0px;
    margin-bottom: 16px;
    max-width: ${(props) => (props.size === 'large' ? '500px' : '400px')};
    overflow: hidden;
    text-align: center;
  }
`;
const ButtonWrapper = styled.div `
  width: 80%;
  display: flex;
  justify-content: center;

  div:nth-child(2) {
    margin-left: 8px;
  }
`;
const StatesContext = React.createContext();
const useStatesContext = () => {
    const context = React.useContext(StatesContext);
    if (!context) {
        throw new Error(`States compound components cannot be rendered outside the States component`);
    }
    return context;
};
const States = ({ children, size }) => (React.createElement(StatesContext.Provider, { value: size },
    React.createElement(Wrapper, null, children)));
States.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['small', 'large']),
};
States.defaultProps = {
    size: 'large',
};
const Image = ({ src, alt }) => {
    const size = useStatesContext();
    const height = size === 'large' ? 280 : 200;
    const width = size === 'large' ? 420 : 300;
    return (React.createElement("div", null,
        React.createElement("img", { src: src, alt: alt, width: width, height: height })));
};
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
Image.defaultProps = {};
const Media = ({ children }) => {
    const size = useStatesContext();
    return React.createElement(MediaWrapper, { size: size }, children);
};
Media.propTypes = {
    children: PropTypes.node.isRequired,
};
Media.defaultProps = {};
const Header = ({ children }) => {
    const size = useStatesContext();
    return (React.createElement(HeaderWrapper, null,
        size === 'large' && React.createElement(Text, { type: "h2" }, children),
        size === 'small' && React.createElement(Text, { type: "h3" }, children)));
};
Header.propTypes = {
    children: PropTypes.node.isRequired,
};
Header.defaultProps = {};
const Description = ({ children }) => {
    const size = useStatesContext();
    return (React.createElement(DescriptionWrapper, { size: size },
        React.createElement(Text, { type: "p" }, children)));
};
Description.propTypes = {
    children: PropTypes.node.isRequired,
};
Description.defaultProps = {};
const Buttons = ({ children }) => React.createElement(ButtonWrapper, null, children);
Buttons.propTypes = {
    children: PropTypes.node.isRequired,
};
Buttons.defaultProps = {};
States.Image = Image;
States.Media = Media;
States.Header = Header;
States.Description = Description;
States.Buttons = Buttons;
export default States;
//# sourceMappingURL=States.js.map