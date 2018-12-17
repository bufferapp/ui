/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from '@bufferapp/ui/Icon';
import helper from 'immutability-helper';

const SidebarWrapper = style.div`
    z-index: 15;
    flex: 0 0 auto;
    background: #F5F7F9;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 250px;
    padding-left: calc((100% - 1448px) / 2);
    border-right: 1px solid #E6ECF1;
`;

const SidebarList = style.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    display: block;
    margin: 0px;
    padding: 0px;
    width: 100%;
    flex: 1 1 auto;
    overflow-y: auto;
    padding-bottom: 24px;
    font-size: 15px;
    margin-top: 32px;
`;

const SidebarListItem = style.li`
    text-decoration: none;
    color: #5C6975;
    margin-left: 0px;
    border-left-color: transparent;
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 0px;
    position: relative;
    border-left: 1px solid transparent;   
    background: ${props => (props.isSelected ? '#fff' : 'inherit')};
    padding: ${props => (props.isChild ? '10px 24px 10px 15px' : '5px 24px 5px 15px')};
    border: ${props => (props.isSelected ? '1px solid #E6ECF1' : 'none')};
    cursor: pointer;
    padding-left: ${props => (props.level === 1 ? '30px' : '15px')};
    &:hover {
      background: #e8eff7;
    }
`;

const SidebarListItemLink = style(Link)`
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    border-right: 0px;
    cursor: pointer;
    font-size: 14px;
    color: ${props => (props.isSelected ? '#2c4bff' : props.isChild ? '#9daab6' : 'inherit')};
    width: 100%
  
`;

const IconDown = style(ChevronDown)`
  margin-left: auto;
  padding: 7px 14px 0px 10px;
  cursor: pointer;
`;

const IconUp = style(ChevronUp)`
  margin-left: auto;
  padding: 13px 10px 0px 10px;
  cursor: pointer;
`;

/** The left sidebar that displays the navigation links */
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationLinks: props.navigationLinks,
    };
  }

  toggleNavigationLink = (link) => {
    const { navigationLinks } = this.state;

    this.setState({
      navigationLinks: helper(navigationLinks, {
        [navigationLinks.findIndex(x => x.id === link.id)]: {
          isExpanded: { $set: !link.isExpanded },
        },
      }),
    });
  };

  render() {
    const { navigationLinks } = this.state;
    const { route } = this.props;

    return (
      <SidebarWrapper>
        <SidebarList>
          {
            navigationLinks.map(link => [
              <SidebarListItem isSelected={link.id === route} key={link.name} level={link.level} onClick={() => this.toggleNavigationLink(link)}>
                <SidebarListItemLink isSelected={link.id === route} to={`/${link.parentName}/${link.id}`}>{link.name}</SidebarListItemLink>
                {link.isExpanded ? <IconDown color="gray" size="large" /> : <IconUp color="gray" size="large" onClick={() => this.toggleNavigationLink(link)} />}
              </SidebarListItem>,
              // we want to exclude children with the same name as the parent
              // no need to show those as those can be accesses by clicking on the parent
              link.children && link.isExpanded ? link.children.map(child => (
                child.fileName !== child.parentName ? (
                  <SidebarListItem isChild isSelected={child.id === route} key={child.name} level={child.level}>
                    <SidebarListItemLink isChild isSelected={child.id === route} to={`/${child.parentName}/${child.id}`}>{child.name}</SidebarListItemLink>
                  </SidebarListItem>
                ) : null
              )) : null,
            ])
          }
        </SidebarList>
      </SidebarWrapper>
    );
  }
}


Sidebar.propTypes = {
  /** Navigation links to display in the sidebar */
  navigationLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  route: PropTypes.string.isRequired,
};

export default Sidebar;
