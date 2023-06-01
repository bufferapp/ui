import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Markdown from './layout/content/Markdown';
import Sidebar from './layout/sidebar/Sidebar';
import Component from './layout/content/Component';
import componentData from '../../../config/componentData';
import documentationData from '../../../config/documentsData';
import NavBar from './layout/navbar/NavBar';
import Home from './Home';
import UIComponent from '../markdown/UI.md';
import pckage from '../../../package.json';
const Container = styled.div `
  width: 100%;
  min-height: 100vh;
  min-width: 1280px;
  overflow: hidden;
  color: #242a31;
  background: #f5f7f9;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div `
  flex: 1;
  display: flex;
`;
const PageLayout = styled.div `
  flex: 1;
  padding: 50px;
  display: block;
  box-sizing: border-box;
  height: calc(100vh - 65px);
  background: #ffffff url('./images/background.png');
  background-size: cover;
  overflow: auto;
  border-right: 1px solid #e6ecf1;
`;
const PageContainer = styled.div `
  background: #ffffff;
  padding: 80px;
  width: 100%;
  max-width: 1312px;
  margin: 0 auto;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;
export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.getFooterLinks = (pageParents, route) => {
            if (!pageParents)
                return;
            const linkIndex = pageParents.children.findIndex((link) => link.id === route);
            const previousLink = pageParents.children[linkIndex - 1];
            const nextLink = pageParents.children[linkIndex + 1];
            const links = [];
            if (previousLink)
                links.push(previousLink);
            if (nextLink)
                links.push(nextLink);
            console.info(links);
            return links;
        };
        this.renderMarkdownComponent = () => (React.createElement(Markdown, { page: { name: 'UI' }, component: UIComponent, links: [] }));
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown);
    }
    onKeyDown(event) {
        const { history, location: { pathname }, } = this.props;
        if (pathname.indexOf('/ui/') < 0) {
            return;
        }
        if (event.keyCode === 27) {
            if (pathname.endsWith('/fullscreen')) {
                const newPath = `${pathname.replace('/fullscreen', '')}`;
                history.push(newPath);
            }
        }
        if (event.keyCode === 220 && !!event.shiftKey) {
            let newPath = '/';
            if (pathname.endsWith('/fullscreen')) {
                newPath = `${pathname.replace('/fullscreen', '')}`;
            }
            else {
                newPath = `${pathname}/fullscreen`;
            }
            history.push(newPath);
        }
    }
    render() {
        const { match: { params: { route, location, view }, }, } = this.props;
        const isHome = location === 'GettingStarted' && route === 'getting-started';
        const isUIRoot = location === 'ui' && route === 'ui';
        const component = location === 'ui'
            ?
                componentData.children.filter((x) => x.id === route)[0]
            : null;
        const navigationLinks = [...documentationData, componentData];
        const pageParents = documentationData.filter((x) => x.fileName === location)[0];
        const page = pageParents && pageParents.children.filter((x) => x.id === route)[0];
        const PageComponent = page && require(`../markdown/${location}/${page.fileName}.md`);
        if (view === 'fullscreen') {
            return React.createElement(Component, { component: component, fullscreen: true });
        }
        return (React.createElement(Container, null,
            React.createElement(NavBar, { title: "Buffer UI", version: pckage.version }),
            React.createElement(Wrapper, null,
                React.createElement(Sidebar, { navigationLinks: navigationLinks, route: route }),
                React.createElement(PageLayout, null,
                    React.createElement(PageContainer, null, isHome ? (React.createElement(Home, null)) : isUIRoot ? (this.renderMarkdownComponent()) : component ? (React.createElement(Component, { component: component })) : (React.createElement(Markdown, { component: PageComponent, page: page, links: () => this.getFooterLinks(pageParents, route) })))))));
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
//# sourceMappingURL=AppContainer.js.map