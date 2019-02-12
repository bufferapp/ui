/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import MarkdownToJsx from 'markdown-to-jsx';
import styled from 'styled-components';
import Markdown from './layout/content/Markdown';
import Sidebar from './layout/sidebar/Sidebar';
import Component from './layout/content/Component';
import componentData from '../../../config/componentData';
import documentationData from '../../../config/documentsData';
import NavBar from './layout/navbar/NavBar';
import UIComponent from '../markdown/UI.md';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #242A31;
  background: #F5F7F9;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 100px);
`;

const PageLayout = styled.div`
  padding: 60px 88px;
  display: block;
  width: 100%;
  background: #ffffff;
  min-height: calc(100vh - 201px);
  max-width: 850px;
  overflow: auto;
  border-right: 1px solid #E6ECF1;
`;

/** The main Documentation app container that renders other components */
export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  /**
   * Handle toggling /fullscreen mode
   *
   * @param {Event} event
   */
  onKeyDown(event) { // eslint-disable-line
    const { history, location: { pathname } } = this.props;
    // Ignore non-component paths (i.e., markdown docs)
    if (pathname.indexOf('/ui/') < 0) {
      return;
    }
    if (event.keyCode === 27) { // escape
      if (pathname.endsWith('/fullscreen')) {
        const newPath = `${pathname.replace('/fullscreen', '')}`;
        history.push(newPath);
      }
    }
    if (event.keyCode === 220 && !!event.shiftKey) { // Shift + \ (backslash)
      let newPath = '/';
      if (pathname.endsWith('/fullscreen')) {
        newPath = `${pathname.replace('/fullscreen', '')}`;
      } else {
        newPath = `${pathname}/fullscreen`;
      }
      history.push(newPath);
    }
  }

  getFooterLinks = (pageParents, route) => {
    if (!pageParents) return;
    // get the index of the navigation link of the current page
    // in order to show the next and previous links at the bottom of each page
    const linkIndex = pageParents.children.findIndex(link => link.id === route);
    const previousLink = pageParents.children[linkIndex - 1];
    const nextLink = pageParents.children[linkIndex + 1];
    const links = [];
    if (previousLink) links.push(previousLink);
    if (nextLink) links.push(nextLink);
    return links;
  };

  renderMarkdownComponent = () => <MarkdownToJsx>{UIComponent}</MarkdownToJsx>


  render() {
    const { match: { params: { route, location, view } } } = this.props;

    const isUIRoot = location === 'ui' && route === 'ui';

    // by convention, the route in the url should match the components name
    // if there's no component specified, just show the first component in the list
    const component = location === 'ui' ? componentData
      .children.filter(x => x.id === route)[0] : null;

    // concatenate the documentation data and the components data
    // to construct the links in the sidebar
    const navigationLinks = [...documentationData, componentData];

    // from the documentation data, find the current page parent
    // in order to be able to identify the child we need to show on the page
    const pageParents = documentationData.filter(x => x.fileName === location)[0];

    // find the child page we need to show
    const page = pageParents && pageParents.children.filter(x => x.id === route)[0];

    // dynamically import the documentation component
    // based on the location and fileName we are currently requesting
    const PageComponent = page && require(`../markdown/${location}/${page.fileName}.md`);

    if (view === 'fullscreen') {
      return <Component component={component} fullscreen />;
    }

    return (
      <Container>
        <NavBar title="Buffer Components Documentation" />
        <Wrapper>
          <Sidebar navigationLinks={navigationLinks} route={route} />
          <PageLayout>
            {isUIRoot ? this.renderMarkdownComponent() : component ? <Component component={component} /> : (
              <Markdown component={PageComponent} page={page} links={() => this.getFooterLinks(pageParents, route)} />
            )}
          </PageLayout>
        </Wrapper>
      </Container>
    );
  }
}

AppContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      route: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
