/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import markdownToJsx from 'markdown-to-jsx';
import Markdown from './components/pages/Document';
import Navigation from './components/Navigation';
import Component from './components/pages/Component';
import componentData from '../../config/componentData';
import documentationData from '../../config/documentsData';
import Header from './components/Header';
import UIComponent from './components/pages/markdown/UI.md';

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
  max-height: calc(100vh - 100px);
`;

const PageLayout = style.div`
  padding: 60px 88px;
  display: block;
  width: 100%;
  background: #ffffff;
  min-height: calc(100vh - 201px);
  max-width: 850px;
  overflow: auto;
`;


export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    const { params } = props.match;
    this.state = {
      route: params.route,
      location: params.location,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { match } = this.props;
    const { params } = nextProps.match;
    if (params !== match.params) {
      const { route, location } = params;
      this.setState({
        route,
        location,
      });
    }
  }

  getFooterLinks = ({ pageParents, route }) => {
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

  renderMarkdownComponent = () => <markdownToJsx>{UIComponent}</markdownToJsx>

  render() {
    const { route, location } = this.state;

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
    const PageComponent = page && require(`./components/pages/markdown/${location}/${page.fileName}.md`);


    return (
      <Container>
        <Header title="Buffer Components Documentation" />
        <Wrapper>
          <Navigation components={navigationLinks} />
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

Docs.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      route: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
