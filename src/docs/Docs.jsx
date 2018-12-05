import React from 'react';
import style from 'styled-components';
import Markdown from './components/pages/Document';
import Navigation from './components/Navigation';
import Component from './components/pages/Component';
import componentData from '../../config/componentData';
import documentationData from '../../config/documentsData';
import Header from './components/Header';

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

const PageLayout = style.div`
  padding: 60px 88px;
  display: block;
  width: 100%;
  background: #ffffff;
  height: calc(100vh - 201px);
`;


export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // to keep things simple, we're using hash based urls in state
      // each time that the url changes, we're going to update the state
      route: window.location.hash.substr(1),
      location: window.location.pathname.replace('/', '').replace('/', ''),
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => this.setState({ route: window.location.hash.substr(1) }));
  }

  /** Update the url based on the folder and the file names
   * passed from the Navigation component */
  onLocationChange = (location, hash) => {
    this.setState({
      location,
    });
    window.location = `${window.location.origin}/${location}/#${hash}`;
  }

  render() {
    const { route, location } = this.state;
    // by convention, the route in the url should match the components name
    // if there's no component specified, just show the first component in the list
    const component = location === 'ui' ? componentData[0]
      .children.filter(x => x.id === route)[0] : null;

    // concatenate the documentation data and the components data
    // to construct the links in the sidebar
    const navigationLinks = [...documentationData, ...componentData];

    // from the documentation data, find the current page parent
    // in order to be able to identify the child we need to show on the page
    const pageParents = documentationData.filter(x => x.fileName === location)[0];

    // find the child page we need to show
    const page = pageParents && pageParents.children.filter(x => x.id === route)[0];

    // dynamically import the documentation component
    // based on the location and fileName we are currently requesting
    const PageComponent = page && require(`./components/pages/markdown/${location}/${page.fileName}.md`);

    return (
      <Container>
        <Header title="Buffer Components Documentation" />
        <Wrapper>
          <Navigation components={navigationLinks} onLocationChange={this.onLocationChange} />
          <PageLayout>
            {component ? <Component component={component} /> : (
              <Markdown component={PageComponent} page={page} />
            )}
          </PageLayout>
        </Wrapper>
      </Container>
    );
  }
}
