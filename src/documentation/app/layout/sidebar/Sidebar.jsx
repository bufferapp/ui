import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarWrapper = style.div`
    z-index: 15;
    flex: 0 0 auto;
    background: #F5F7F9;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 300px;
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
    display: block;
    margin: 0px;
    padding: 0px;
    position: relative;
    border-left: 1px solid transparent;
    padding-left: ${props => (props.level === 1 ? '30px' : '0px')}
`;

const SidebarListItemLink = style(Link)`
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 7px 24px 7px 16px;
    border: 1px solid transparent;
    border-right: 0px;
    cursor: pointer;
  
`;

/** The left sidebar that displays the navigation links */
const Sidebar = ({ navigationLinks }) => (
  <SidebarWrapper>
    <SidebarList>
      {
        navigationLinks.map(link => [
          <SidebarListItem key={link.name} level={link.level}>
            <SidebarListItemLink to={`/${link.parentName}/${link.id}`}>{link.name}</SidebarListItemLink>
          </SidebarListItem>,
          // we want to exclude children with the same name as the parent
          // no need to show those as those can be accesses by clicking on the parent
          link.children ? link.children.map(child => (
            child.fileName !== child.parentName ? (
              <SidebarListItem key={child.name} level={child.level}>
                <SidebarListItemLink to={`/${child.parentName}/${child.id}`}>{child.name}</SidebarListItemLink>
              </SidebarListItem>
            ) : null
          )) : null,
        ])
      }
    </SidebarList>
  </SidebarWrapper>
);

Sidebar.propTypes = {
  /** Navigation links to display in the sidebar */
  navigationLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default Sidebar;
