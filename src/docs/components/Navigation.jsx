import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';

const Sidebar = style.div`
    z-index: 15;
    flex: 0 0 auto;
    background: #F5F7F9;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: calc((100% - 1448px) / 2 );
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
`;

const SidebarListItemLink = style.a`
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


const Navigation = ({ components }) => (
  <Sidebar>
    <SidebarList>
      {
        components.map(name => (
          <SidebarListItem key={name}>
            <SidebarListItemLink href={`#${name}`}>{name}</SidebarListItemLink>
          </SidebarListItem>
        ))
      }
    </SidebarList>
  </Sidebar>
);

Navigation.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default Navigation;
