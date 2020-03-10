import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/index';
import ArrowRight from '../Icon/Icons/ArrowRight';
import ArrowLeft from '../Icon/Icons/ArrowLeft';

const CarouselStyled = styled.div`
  align-items: center;
  display: flex;
`;

const Window = styled.div`
  overflow: hidden;
  width: ${props => props.width};
  padding: 8px;
  display: flex;
`;

const MainList = styled.ul`
  display: flex;
  padding: 0;
  position: relative;
  left: ${props => props.left + 'px'};
  transition: left 0.5s ease-in;
`;

class Carousel extends React.Component {
  state = {
    left: 0,
  };

  moveBackward = width => {
    if (this.state.left === 0) {
      return;
    }
    this.setState(prevState => ({
      left: prevState.left + parseInt(width, 10),
    }));
  };

  moveForward = width => {
    if (this.verifyLastItem(this.props.children.length, this.props.width)) {
      return;
    }
    this.setState(prevState => ({
      left: prevState.left - parseInt(width, 10),
    }));
  };

  verifyLastItem = (lengthOfChildren, widthOfEachItem) => {
    const finalLength = (lengthOfChildren - 1) * parseInt(widthOfEachItem, 10);

    return this.state.left === -finalLength;
  };

  render() {
    return (
      <CarouselStyled>
        <Button
          type="secondary"
          icon={<ArrowLeft />}
          hasIconOnly
          onClick={() => {
            this.moveBackward(this.props.width);
          }}
          label="Backwards"
        />
        <Window width={this.props.width}>
          <MainList left={this.state.left}>
            {this.props.children.map((child, index) => (
              <li key={index}>{child}</li>
            ))}
          </MainList>
        </Window>
        {/* <ul>
          {this.props.children.map((child, index) => (
            <li key={index}>
              <button type="button">{index + 1}</button>
            </li>
          ))}
        </ul> */}

        <Button
          type="secondary"
          icon={<ArrowRight />}
          hasIconOnly
          onClick={() => {
            this.moveForward(this.props.width);
          }}
          label="Forwards"
        />
      </CarouselStyled>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
};

export default Carousel;
