/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ChevronDown from '@bufferapp/ui/Icons/ChevronDown'
import ChevronUp from '@bufferapp/ui/Icons/ChevronUp'
import helper from 'immutability-helper';

const SidebarWrapper = styled.div`
  z-index: 15;
  background: #f5f7f9;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 250px;
  overflow-x: hidden;
  height: calc(100vh - 65px);
  padding: 0 0 0 1rem;
  border-right: 1px solid #e6ecf1;
  overflow-y: auto;
`;

const SidebarList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  display: block;
  margin: 0px;
  padding: 0px;
  width: 100%;
  padding-bottom: 24px;
  font-size: 15px;
  margin-top: 32px;
  transform: translateX(1px);
`;

const SidebarListItem = styled.li`
  text-decoration: none;
  color: #636363;
  margin-left: 0px;
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
  padding-left: ${props => (props.level === 1 ? '20px' : '12px')};
  &:hover {
    background: #ffffff77;
    border-radius: 4px 0 0 4px;
  }
  background: ${props => (props.isSelected ? '#fff' : 'none')};
`;

const SidebarListItemLink = styled(Link)`
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: ${props =>
    props['data-is-child'] && !props['data-is-selected'] ? '500' : '600'};
  cursor: pointer;
  font-size: 16px;
  color: ${props =>
    props['data-is-selected']
      ? '#2c4bff'
      : props['data-is-child']
      ? '#9daab6'
      : 'inherit'};
  padding: ${props =>
    props['data-is-child'] ? '10px 24px 10px 15px' : '5px 24px 5px 15px'};
  width: 100%;
  padding: 8px 0;
  transition: all 0.1s ease-out;
`;

const IconDown = styled(ChevronDown)`
  margin-left: auto;
  cursor: pointer;
  padding-right: 16px;
  opacity: 0.35;
`;

const IconUp = styled(ChevronUp)`
  margin-left: auto;
  cursor: pointer;
  padding-right: 16px;
  opacity: 0.35;
`;

/** The left sidebar that displays the navigation links */
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationLinks: props.navigationLinks,
    };
  }

  toggleNavigationLink = link => {
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
          {navigationLinks.map(link => [
            <SidebarListItem
              isSelected={link.id === route}
              key={link.name}
              level={link.level}
              onClick={() => this.toggleNavigationLink(link)}
            >
              <SidebarListItemLink
                data-is-selected={link.id === route}
                to={`/${link.parentName}/${link.id}`}
              >
                {link.name}
              </SidebarListItemLink>
              {link.isExpanded ? (
                <IconDown color="gray" size="large" />
              ) : (
                <IconUp
                  color="gray"
                  size="large"
                  onClick={() => this.toggleNavigationLink(link)}
                />
              )}
            </SidebarListItem>,
            // we want to exclude children with the same name as the parent
            // no need to show those as those can be accesses by clicking on the parent
            link.children && link.isExpanded
              ? link.children.map(child =>
                  child.fileName !== child.parentName ? (
                    <SidebarListItem
                      isChild
                      isSelected={child.id === route}
                      key={child.name}
                      level={child.level}
                    >
                      <SidebarListItemLink
                        data-is-child
                        data-is-selected={child.id === route}
                        to={`/${child.parentName}/${child.id}`}
                      >
                        {child.name}
                      </SidebarListItemLink>
                    </SidebarListItem>
                  ) : null
                )
              : null,
          ])}
        </SidebarList>
      </SidebarWrapper>
    );
  }
}

Sidebar.propTypes = {
  /** Navigation links to display in the sidebar */
  navigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  route: PropTypes.string.isRequired,
};

export default Sidebar;
