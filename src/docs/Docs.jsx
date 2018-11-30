import React from 'react';
import style from 'styled-components';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';
import Header from './Header';

const Container = style.div`
  width: 100%;
  min-height: 100vh;
  color: #242A31;
  background: #F5F7F9;
  display: flex;
  flex-direction: column;
`;

const Wrapper = style.div`
  display: flex;
`;


export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // to keep things simple, we're using hash based urls in state
      // each time that the url changes, we're going to update the state
      route: window.location.hash.substr(1),
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => this.setState({ route: window.location.hash.substr(1) }));
  }

  render() {
    const { route } = this.state;
    // by convention, the route in the url should match the components name
    // if there's no component specified, just show the first component in the list

    console.log(componentData);

    const component = route ? componentData
      .filter(x => x.name === route)[0] : componentData[0];

    return (
      <Container>
        <Header title="Buffer Components Documentation" />
        <Wrapper>
          <Navigation components={componentData.map(x => x.name)} />
          <ComponentPage component={component} />
        </Wrapper>
      </Container>
    );
  }
}
